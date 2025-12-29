from fastapi import APIRouter, HTTPException, Depends, UploadFile, File
from sqlalchemy.orm import Session
import logging

from app.database import get_db

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api",
    tags=["batch"]
)

@router.post("/upload")
async def upload_batch(
    phage_file: UploadFile = File(...),
    bacteria_file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    """Batch prediction from uploaded files"""
    try:
        logger.info(f"Processing batch upload...")
        
        # Placeholder: implement batch processing logic
        return {
            "status": "processing",
            "message": "Batch processing not yet implemented"
        }
    
    except Exception as e:
        logger.error(f"Batch upload error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Batch upload failed: {str(e)}"
        )
