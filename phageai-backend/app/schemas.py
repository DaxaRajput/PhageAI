from pydantic import BaseModel, Field, field_validator
from datetime import datetime
from typing import Optional

class PredictionRequest(BaseModel):
    """Request schema for /api/predict endpoint"""
    phage_sequence: str = Field(
        ...,
        min_length=50,
        max_length=5000,
        description="DNA sequence of phage (ATCGN only)"
    )
    bacteria_sequence: str = Field(
        ...,
        min_length=50,
        max_length=5000,
        description="DNA sequence of bacteria (ATCGN only)"
    )
    
    @field_validator('phage_sequence', 'bacteria_sequence')
    @classmethod
    def validate_dna_sequence(cls, v):
        """Validate DNA sequence contains only ATCGN"""
        valid_chars = set('ATCGN')
        v = v.upper()
        if not all(c in valid_chars for c in v):
            raise ValueError('DNA sequence must contain only A, T, C, G, N')
        return v

class PredictionResponse(BaseModel):
    """Response schema for /api/predict endpoint"""
    prediction_id: str
    kill_probability: float = Field(..., ge=0.0, le=1.0)
    confidence: float = Field(..., ge=0.0, le=1.0)
    interaction_type: str
    processing_time_ms: float
    timestamp: datetime
    
    class Config:
        json_schema_extra = {
            "example": {
                "prediction_id": "pred_a1b2c3d4e5f6",
                "kill_probability": 0.847,
                "confidence": 0.92,
                "interaction_type": "Lytic",
                "processing_time_ms": 3.5,
                "timestamp": "2025-12-25T20:30:00Z"
            }
        }

class FeedbackRequest(BaseModel):
    """Request schema for /api/feedback endpoint"""
    prediction_id: str
    is_correct: bool
    actual_kill_probability: Optional[float] = Field(None, ge=0.0, le=1.0)
    comments: Optional[str] = None
