#!/bin/bash

# Deploy script for Futuramed website
# This script should be run on the VPS server

set -e

echo "🚀 Starting Futuramed deployment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "✏️  Please edit .env file with your actual credentials before continuing."
    echo "   Press ENTER when ready to continue or CTRL+C to cancel."
    read
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Build new image
echo "🏗️  Building Docker image..."
docker-compose build

# Start containers
echo "▶️  Starting containers..."
docker-compose up -d

# Show logs
echo "📋 Showing logs (CTRL+C to exit)..."
echo "   Container will continue running in background"
sleep 2
docker-compose logs -f --tail=50

echo "✅ Deployment complete!"
echo "   Access your site at: http://$(hostname -I | awk '{print $1}')"
