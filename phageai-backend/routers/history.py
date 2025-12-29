from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
import logging

from app.database import get_db

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api",
    tags=["history"]
)

@router.get("/history")
async def get_history(
    user_id: int = None,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    """Get prediction history"""
    try:
        logger.info(f"Fetching history for user {user_id}")
        
        # Placeholder: implement history retrieval logic
        return {
            "user_id": user_id,
            "predictions": [],
            "message": "History not yet implemented"
        }
    
    except Exception as e:
        logger.error(f"History error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"History retrieval failed: {str(e)}"
        )
