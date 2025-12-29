from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
import logging

from app.database import get_db

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api",
    tags=["library"]
)

@router.get("/library")
async def search_library(
    query: str,
    db: Session = Depends(get_db)
):
    """Search sequence library"""
    try:
        logger.info(f"Searching library for: {query}")
        
        # Placeholder: implement library search logic
        return {
            "query": query,
            "results": [],
            "message": "Library search not yet implemented"
        }
    
    except Exception as e:
        logger.error(f"Library search error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Library search failed: {str(e)}"
        )
