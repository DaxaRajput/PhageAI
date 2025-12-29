from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
import logging
from datetime import datetime

from app.config import get_settings
from app.database import engine, Base
from app.models import *  # Import all models for table creation
from routers import predictions

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Get settings
settings = get_settings()

# Create database tables
logger.info("Creating database tables...")
Base.metadata.create_all(bind=engine)
logger.info("✅ Database tables created")

# Initialize FastAPI application
app = FastAPI(
    title=settings.API_TITLE,
    description="ML-powered phage-bacteria interaction prediction API",
    version=settings.API_VERSION
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(predictions.router)

# Root endpoint
@app.get("/")
async def root():
    """Root API endpoint"""
    return {
        "name": "PhageAI Backend API",
        "version": settings.API_VERSION,
        "status": "running",
        "timestamp": datetime.utcnow(),
        "docs": "/docs"
    }

# Health check
@app.get("/health")
async def health():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow()
    }

# Custom OpenAPI schema
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    
    openapi_schema = get_openapi(
        title="PhageAI Backend API",
        version=settings.API_VERSION,
        description="ML-powered phage-bacteria interaction prediction",
        routes=app.routes,
    )
    
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

if __name__ == "__main__":
    import uvicorn
    
    logger.info(f"🚀 Starting PhageAI Backend...")
    logger.info(f"📖 API Documentation: http://localhost:8000/docs")
    
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG,
        log_level=settings.LOG_LEVEL.lower()
    )
