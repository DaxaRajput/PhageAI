from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
import logging

from app.schemas import PredictionRequest
from app.database import get_db

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api",
    tags=["compare"]
)

@router.post("/compare")
async def compare_phages(
    bacteria_sequence: str,
    phage_sequences: List[str],
    db: Session = Depends(get_db)
):
    """Compare multiple phages against one bacteria"""
    try:
        logger.info(f"Comparing {len(phage_sequences)} phages...")
        
        # Placeholder: implement comparison logic
        return {
            "status": "comparing",
            "message": "Comparison not yet implemented"
        }
    
    except Exception as e:
        logger.error(f"Comparison error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Comparison failed: {str(e)}"
        )
