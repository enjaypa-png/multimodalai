"""
Test script for API endpoints
Tests all endpoints with mock database connection
"""

import asyncio
from fastapi.testclient import TestClient
from main import app, db_pool
import asyncpg
import os

# For testing without database, we'll use the TestClient
client = TestClient(app)

def test_root():
    """Test root endpoint"""
    response = client.get("/")
    print(f"✓ Root endpoint: {response.status_code}")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    print(f"  Response: {data['message']}")

def test_health():
    """Test health check endpoint"""
    response = client.get("/api/health")
    print(f"✓ Health endpoint: {response.status_code}")
    assert response.status_code == 200
    data = response.json()
    print(f"  Status: {data['status']}")
    print(f"  Database: {data['database']}")

def test_tools_without_db():
    """Test tools endpoint (will fail without DB)"""
    response = client.get("/api/tools")
    print(f"✓ Tools endpoint (no DB): {response.status_code}")
    # Should return 503 without database
    if response.status_code == 503:
        print("  Expected: Database not available")
    elif response.status_code == 200:
        data = response.json()
        print(f"  Success: {data['total']} tools found")

def test_categories_without_db():
    """Test categories endpoint (will fail without DB)"""
    response = client.get("/api/categories")
    print(f"✓ Categories endpoint (no DB): {response.status_code}")
    if response.status_code == 503:
        print("  Expected: Database not available")
    elif response.status_code == 200:
        data = response.json()
        print(f"  Success: {len(data['data'])} categories found")

def test_search_without_db():
    """Test search endpoint (will fail without DB)"""
    response = client.get("/api/tools/search?q=image")
    print(f"✓ Search endpoint (no DB): {response.status_code}")
    if response.status_code == 503:
        print("  Expected: Database not available")
    elif response.status_code == 200:
        data = response.json()
        print(f"  Success: {data['total']} results found")

def test_popular_without_db():
    """Test popular endpoint (will fail without DB)"""
    response = client.get("/api/tools/popular")
    print(f"✓ Popular endpoint (no DB): {response.status_code}")
    if response.status_code == 503:
        print("  Expected: Database not available")
    elif response.status_code == 200:
        data = response.json()
        print(f"  Success: {len(data['data'])} popular tools found")

async def test_with_database():
    """Test endpoints with actual database connection"""
    database_url = os.getenv("DATABASE_URL")
    
    if not database_url:
        print("\n⚠ DATABASE_URL not set - skipping database tests")
        return
    
    print("\n=== Testing with Database ===")
    
    # Convert postgres:// to postgresql://
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    
    try:
        # Test database connection
        conn = await asyncpg.connect(database_url)
        print("✓ Database connection successful")
        
        # Test query
        count = await conn.fetchval("SELECT COUNT(*) FROM ai_tools")
        print(f"✓ Database query successful: {count} tools in database")
        
        await conn.close()
        
        # Now test API endpoints with database
        print("\n=== Testing API Endpoints with Database ===")
        
        response = client.get("/api/tools?limit=5")
        if response.status_code == 200:
            data = response.json()
            print(f"✓ GET /api/tools: {data['total']} total tools")
            print(f"  Returned {len(data['data'])} tools")
        
        response = client.get("/api/categories")
        if response.status_code == 200:
            data = response.json()
            print(f"✓ GET /api/categories: {len(data['data'])} categories")
        
        response = client.get("/api/tools/search?q=image")
        if response.status_code == 200:
            data = response.json()
            print(f"✓ GET /api/tools/search?q=image: {data['total']} results")
        
        response = client.get("/api/tools/popular?limit=5")
        if response.status_code == 200:
            data = response.json()
            print(f"✓ GET /api/tools/popular: {len(data['data'])} popular tools")
        
        # Test specific tool
        if count > 0:
            response = client.get("/api/tools/google-gemini")
            if response.status_code == 200:
                data = response.json()
                print(f"✓ GET /api/tools/google-gemini: {data['data']['tool_name']}")
            elif response.status_code == 404:
                print("✓ GET /api/tools/google-gemini: Not found (expected if not in DB)")
        
    except Exception as e:
        print(f"✗ Database test failed: {e}")

if __name__ == "__main__":
    print("=== Testing API Endpoints ===\n")
    
    # Test basic endpoints
    test_root()
    test_health()
    print()
    
    # Test endpoints without database
    test_tools_without_db()
    test_categories_without_db()
    test_search_without_db()
    test_popular_without_db()
    
    # Test with database if available
    asyncio.run(test_with_database())
    
    print("\n=== All Tests Complete ===")
