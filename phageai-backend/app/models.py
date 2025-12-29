from sqlalchemy import Column, Integer, String, Float, DateTime, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

class User(Base):
    """User account table"""
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    email = Column(String(100), unique=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    predictions = relationship("Prediction", back_populates="user")
    feedbacks = relationship("Feedback", back_populates="user")

class Prediction(Base):
    """Prediction results table"""
    __tablename__ = "predictions"
    
    id = Column(Integer, primary_key=True, index=True)
    prediction_id = Column(String(50), unique=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    
    # Input sequences
    phage_sequence = Column(String(5000))
    bacteria_sequence = Column(String(5000))
    
    # Results
    kill_probability = Column(Float)  # [0, 1]
    confidence = Column(Float)
    interaction_type = Column(String(50))  # Lytic, Lysogenic, Semi-Lytic
    
    # Metadata
    processing_time_ms = Column(Float)
    model_version = Column(String(20), default="v2")
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    
    # Relationships
    user = relationship("User", back_populates="predictions")
    feedback = relationship("Feedback", back_populates="prediction", uselist=False)

class Feedback(Base):
    """User feedback for model improvement"""
    __tablename__ = "feedbacks"
    
    id = Column(Integer, primary_key=True, index=True)
    prediction_id = Column(Integer, ForeignKey("predictions.id"), unique=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    
    # Feedback content
    is_correct = Column(Integer)  # 1: correct, 0: incorrect
    actual_kill_probability = Column(Float, nullable=True)
    comments = Column(Text, nullable=True)
    
    # Metadata
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    prediction = relationship("Prediction", back_populates="feedback")
    user = relationship("User", back_populates="feedbacks")

class PhageSequence(Base):
    """Phage sequence library"""
    __tablename__ = "phage_sequences"
    
    id = Column(Integer, primary_key=True, index=True)
    accession = Column(String(50), unique=True, index=True)
    name = Column(String(200))
    sequence = Column(Text)
    description = Column(Text, nullable=True)
    length = Column(Integer)
    uploaded_at = Column(DateTime, default=datetime.utcnow)

class BacteriaSequence(Base):
    """Bacteria sequence library"""
    __tablename__ = "bacteria_sequences"
    
    id = Column(Integer, primary_key=True, index=True)
    accession = Column(String(50), unique=True, index=True)
    name = Column(String(200))
    sequence = Column(Text)
    genus = Column(String(100), nullable=True)
    species = Column(String(100), nullable=True)
    description = Column(Text, nullable=True)
    length = Column(Integer)
    uploaded_at = Column(DateTime, default=datetime.utcnow)
