import pytest
import numpy as np
from app.ml.model_loader import PhageAIModel

class TestMLModel:
    """Unit tests for ML model"""
    
    @pytest.fixture
    def model(self):
        """Load model once for all tests"""
        return PhageAIModel(
            "phageai_models/phageai_model_v2_optimized.pkl",
            "phageai_models/scaler_v1.pkl"
        )
    
    def test_model_loads(self, model):
        """Test model loads successfully"""
        assert model.model is not None
        assert model.scaler is not None
    
    def test_kmer_extraction(self, model):
        """Test K-mer extraction"""
        sequence = "ATCGATCGATCGATCGATCGATCGATCGATCGATCGATCG"
        kmers = model.extract_kmers(sequence)
        
        # Should be 256-dimensional
        assert kmers.shape == (256,)
        # Should be normalized (sum ~= 1)
        assert abs(np.sum(kmers) - 1.0) < 0.01
        # All non-negative
        assert np.all(kmers >= 0)
    
    def test_prediction_output(self, model):
        """Test prediction output format"""
        phage_seq = "ATCGATCGATCGATCGATCGATCGATCGATCGATCG"
        bacteria_seq = "GCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCT"
        
        kill_prob, confidence = model.predict(phage_seq, bacteria_seq)
        
        # Kill probability should be [0, 1]
        assert 0.0 <= kill_prob <= 1.0
        # Confidence should be [0, 1]
        assert 0.0 <= confidence <= 1.0
        # Both should be floats
        assert isinstance(kill_prob, float)
        assert isinstance(confidence, float)
    
    def test_invalid_sequence(self, model):
        """Test error handling for invalid sequences"""
        invalid_sequence = "ATCXYZ"  # Contains invalid chars
        valid_sequence = "ATCGATCGATCGATCGATCGATCGATCGATCGATCG"
        
        with pytest.raises(ValueError):
            model.predict(invalid_sequence, valid_sequence)
