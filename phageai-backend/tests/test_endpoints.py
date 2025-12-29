import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

class TestPredictionEndpoint:
    """Integration tests for API endpoints"""
    
    def test_health_check(self):
        """Test health endpoint"""
        response = client.get("/health")
        assert response.status_code == 200
        assert response.json()["status"] == "healthy"
    
    def test_predict_endpoint(self):
        """Test /api/predict endpoint"""
        payload = {
            "phage_sequence": "ATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCG",
            "bacteria_sequence": "GCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCT"
        }
        
        response = client.post("/api/predict", json=payload)
        assert response.status_code == 200
        
        data = response.json()
        assert "prediction_id" in data
        assert "kill_probability" in data
        assert "confidence" in data
        assert "interaction_type" in data
        assert "timestamp" in data
        
        # Check value ranges
        assert 0.0 <= data["kill_probability"] <= 1.0
        assert 0.0 <= data["confidence"] <= 1.0
    
    def test_invalid_sequence(self):
        """Test endpoint with invalid sequence"""
        payload = {
            "phage_sequence": "ATCXYZ",  # Invalid
            "bacteria_sequence": "ATCGATCGATCGATCGATCGATCGATCGATCGATCG"
        }
        
        response = client.post("/api/predict", json=payload)
        assert response.status_code == 422  # Validation error

    def test_root_endpoint(self):
        """Test root endpoint"""
        response = client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert "name" in data
        assert "status" in data
