from pydantic_settings import BaseSettings
from functools import lru_cache
import os

class Settings(BaseSettings):
    """Application settings from environment variables"""
    
    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "postgresql://postgres:password@localhost:5432/phageai_db"
    )
    
    # ML Model paths
    MODEL_PATH: str = os.getenv(
        "MODEL_PATH",
        "phageai_models/phageai_model_v2_optimized.pkl"
    )
    SCALER_PATH: str = os.getenv(
        "SCALER_PATH",
        "phageai_models/scaler_v1.pkl"
    )
    
    # API
    API_TITLE: str = "PhageAI Backend API"
    API_VERSION: str = "1.0.0"
    API_DESCRIPTION: str = "ML-powered phage-bacteria interaction prediction"
    
    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"
    
    # CORS
    ALLOWED_ORIGINS: list = ["*"]
    
    # Logging
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")
    
    # Server
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", 8000))
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance"""
    return Settings()

settings = get_settings()
