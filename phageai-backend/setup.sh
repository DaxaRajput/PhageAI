#!/bin/bash

echo "🚀 PhageAI Backend Setup Started..."

# Create virtual environment
echo "📦 Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo "📥 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "📂 Creating directories..."
mkdir -p phageai_models
mkdir -p logs

echo "✅ Setup complete!"
echo "📖 Next steps:"
echo "   1. Copy model files: cp ../OPTIMIZATION/*.pkl ./phageai_models/"
echo "   2. Edit .env with your database credentials"
echo "   3. Run: python main.py"
