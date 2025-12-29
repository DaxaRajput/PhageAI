import joblib
import numpy as np
import logging
from typing import Tuple
from app.config import get_settings

logger = logging.getLogger(__name__)

class PhageAIModel:
    """ML Model wrapper for phage-bacteria interaction prediction"""
    
    def __init__(self, model_path: str, scaler_path: str):
        """Initialize model and scaler"""
        logger.info(f"Loading model from {model_path}")
        logger.info(f"Loading scaler from {scaler_path}")
        
        self.model = joblib.load(model_path)
        self.scaler = joblib.load(scaler_path)
        self.model_version = "v2_optimized"
        
        logger.info("✅ Model and scaler loaded successfully")
    
    def extract_kmers(self, sequence: str, k: int = 4) -> np.ndarray:
        """
        Extract k-mer frequency vector from DNA sequence
        Returns 256-dimensional vector
        Logic matches data_1&2/01_data_pipeline.ipynb
        
        Args:
            sequence: DNA sequence (A, T, C, G, N only)
            k: k-mer length (default 4)
        
        Returns:
            np.ndarray: 256-dimensional frequency vector
        """
        # Validate sequence
        sequence = sequence.upper()
        valid_chars = set('ATCGN')
        if not all(c in valid_chars for c in sequence):
            raise ValueError(f"Invalid characters in sequence. Only {valid_chars} allowed.")
        
        # Count k-mers
        kmers = {}
        for i in range(len(sequence) - k + 1):
            kmer = sequence[i:i+k]
            kmers[kmer] = kmers.get(kmer, 0) + 1
        
        # Create 256-dimensional frequency vector
        vector = np.zeros(256)
        
        total = sum(kmers.values())
        if total == 0:
            return vector
        
        # Map k-mer to index (0-255)
        for kmer, count in kmers.items():
            # Convert 4-mer to index
            # Each base: A=0, T=1, C=2, G=3
            idx = 0
            for j, base in enumerate(kmer):
                if base in 'ATCGN':
                    base_val = {'A': 0, 'T': 1, 'C': 2, 'G': 3, 'N': 0}.get(base, 0)
                    idx += base_val * (4 ** j)
            
            if idx < 256:
                vector[idx] = count / total
        
        return vector
    
    def predict(self, phage_sequence: str, bacteria_sequence: str) -> Tuple[float, float]:
        """
        Predict kill probability for phage-bacteria pair
        
        Args:
            phage_sequence: Phage DNA sequence
            bacteria_sequence: Bacteria DNA sequence
        
        Returns:
            Tuple[float, float]: (kill_probability, confidence)
        """
        try:
            # Extract K-mer features
            phage_kmers = self.extract_kmers(phage_sequence)       # 256 dims
            bacteria_kmers = self.extract_kmers(bacteria_sequence)  # 256 dims
            
            # Combine features (512 dims total)
            features = np.concatenate([phage_kmers, bacteria_kmers])
            
            # Reshape for scaler
            features_reshaped = features.reshape(1, -1)
            
            # Normalize using scaler
            features_scaled = self.scaler.transform(features_reshaped)
            
            # Make prediction
            raw_prediction = self.model.predict(features_scaled)[0]
            
            # Ensure output is in [0, 1]
            kill_probability = float(np.clip(raw_prediction, 0.0, 1.0))
            
            # Calculate confidence
            confidence = float(min(abs(kill_probability - 0.5) * 2 + 0.5, 1.0))
            
            logger.debug(f"Prediction: {kill_probability:.4f}, Confidence: {confidence:.4f}")
            
            return kill_probability, confidence
            
        except Exception as e:
            logger.error(f"Prediction error: {str(e)}")
            raise

# Global model instance (singleton pattern)
_model_instance = None

def get_model() -> PhageAIModel:
    """Get or create model instance (singleton)"""
    global _model_instance
    
    if _model_instance is None:
        settings = get_settings()
        _model_instance = PhageAIModel(
            model_path=settings.MODEL_PATH,
            scaler_path=settings.SCALER_PATH
        )
    
    return _model_instance
