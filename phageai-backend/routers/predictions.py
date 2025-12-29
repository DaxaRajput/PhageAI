from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from datetime import datetime
import uuid
import time
import logging

from app.schemas import PredictionRequest, PredictionResponse
from app.ml.model_loader import get_model
from app.database import get_db
from app.models import Prediction

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api",
    tags=["predictions"]
)

@router.post("/predict", response_model=PredictionResponse)
async def predict(
    request: PredictionRequest,
    db: Session = Depends(get_db)
) -> dict:
    """
    Predict kill probability for phage-bacteria interaction
    
    Uses ML model v2 from OPTIMIZATION folder
    """
    try:
        start_time = time.time()
        
        # Get ML model (singleton)
        model = get_model()
        
        # Make prediction
        logger.info(f"Making prediction for sequences...")
        kill_probability, confidence = model.predict(
            request.phage_sequence,
            request.bacteria_sequence
        )
        
        # Classify interaction type
        if kill_probability >= 0.7:
            interaction_type = "Lytic"  # Phage kills bacteria
        elif kill_probability <= 0.3:
            interaction_type = "Lysogenic"  # Phage integrates
        else:
            interaction_type = "Semi-Lytic"  # Mixed outcome
        
        # Calculate processing time
        processing_time_ms = (time.time() - start_time) * 1000
        
        # Create prediction ID
        prediction_id = f"pred_{uuid.uuid4().hex[:12]}"
        
        # Save to database
        db_prediction = Prediction(
            prediction_id=prediction_id,
            phage_sequence=request.phage_sequence[:100],
            bacteria_sequence=request.bacteria_sequence[:100],
            kill_probability=kill_probability,
            confidence=confidence,
            interaction_type=interaction_type,
            processing_time_ms=processing_time_ms,
            model_version="v2"
        )
        db.add(db_prediction)
        db.commit()
        db.refresh(db_prediction)
        
        logger.info(f"Prediction saved: {prediction_id}")
        
        return PredictionResponse(
            prediction_id=prediction_id,
            kill_probability=kill_probability,
            confidence=confidence,
            interaction_type=interaction_type,
            processing_time_ms=processing_time_ms,
            timestamp=datetime.utcnow()
        )
    
    except ValueError as e:
        logger.error(f"Validation error: {str(e)}")
        raise HTTPException(
            status_code=400,
            detail=f"Invalid input: {str(e)}"
        )
    
    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )

@router.get("/health")
async def health_check() -> dict:
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow(),
        "version": "1.0.0"
    }
