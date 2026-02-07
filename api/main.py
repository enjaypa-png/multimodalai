"""
FastAPI Backend for Multimodal AI Directory
Provides REST API endpoints for AI tool listings with caching
"""

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
import asyncpg
import os
from datetime import datetime, timedelta
import json
from functools import lru_cache

app = FastAPI(
    title="Multimodal AI Directory API",
    description="API for browsing and searching AI tools",
    version="1.0.0"
)

# CORS middleware - allow all origins for public API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection pool
db_pool: Optional[asyncpg.Pool] = None

# In-memory cache with TTL
cache: Dict[str, Dict[str, Any]] = {}
CACHE_TTL = int(os.getenv("CACHE_TTL", "300"))  # 5 minutes default


class CacheManager:
    """Simple in-memory cache manager with TTL"""
    
    @staticmethod
    def get(key: str) -> Optional[Any]:
        """Get value from cache if not expired"""
        if key in cache:
            entry = cache[key]
            if datetime.now() < entry["expires_at"]:
                return entry["data"]
            else:
                del cache[key]
        return None
    
    @staticmethod
    def set(key: str, data: Any, ttl: int = CACHE_TTL):
        """Set value in cache with TTL"""
        cache[key] = {
            "data": data,
            "expires_at": datetime.now() + timedelta(seconds=ttl)
        }
    
    @staticmethod
    def clear():
        """Clear all cache"""
        cache.clear()


@app.on_event("startup")
async def startup():
    """Initialize database connection pool on startup"""
    global db_pool
    database_url = os.getenv("DATABASE_URL")
    
    if not database_url:
        print("WARNING: DATABASE_URL not set. API will not function properly.")
        return
    
    # Convert postgres:// to postgresql:// if needed
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    
    try:
        db_pool = await asyncpg.create_pool(
            database_url,
            min_size=1,
            max_size=10,
            command_timeout=60
        )
        print("Database connection pool created successfully")
    except Exception as e:
        print(f"Failed to create database pool: {e}")


@app.on_event("shutdown")
async def shutdown():
    """Close database connection pool on shutdown"""
    global db_pool
    if db_pool:
        await db_pool.close()
        print("Database connection pool closed")


def serialize_tool(record: asyncpg.Record) -> Dict[str, Any]:
    """Convert database record to JSON-serializable dict"""
    return {
        "id": str(record["id"]),
        "tool_name": record["tool_name"],
        "slug": record["slug"],
        "category": record["category"],
        "short_description": record["short_description"],
        "tags": record["tags"],
        "official_url": record["official_url"],
        "logo_url": record["logo_url"],
        "date_added": record["date_added"].isoformat() if record["date_added"] else None,
        "popularity_score": record["popularity_score"],
        "user_rating": float(record["user_rating"]) if record["user_rating"] else 0.0,
        "pricing_model": record["pricing_model"]
    }


@app.get("/")
async def root():
    """API root endpoint"""
    return {
        "message": "Multimodal AI Directory API",
        "version": "1.0.0",
        "endpoints": {
            "tools": "/api/tools",
            "categories": "/api/categories",
            "search": "/api/tools/search",
            "popular": "/api/tools/popular"
        }
    }


@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    db_status = "connected" if db_pool else "disconnected"
    return {
        "status": "healthy",
        "database": db_status,
        "cache_size": len(cache)
    }


@app.get("/api/tools")
async def get_all_tools(
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0),
    sort_by: str = Query("popularity", regex="^(popularity|rating|date_added)$"),
    order: str = Query("desc", regex="^(asc|desc)$")
):
    """Get all AI tools with pagination and sorting"""
    
    if not db_pool:
        raise HTTPException(status_code=503, detail="Database not available")
    
    # Check cache
    cache_key = f"tools:all:{limit}:{offset}:{sort_by}:{order}"
    cached_data = CacheManager.get(cache_key)
    if cached_data:
        return cached_data
    
    # Map sort_by to database column
    sort_column_map = {
        "popularity": "popularity_score",
        "rating": "user_rating",
        "date_added": "date_added"
    }
    sort_column = sort_column_map[sort_by]
    
    try:
        async with db_pool.acquire() as conn:
            # Get total count
            total = await conn.fetchval("SELECT COUNT(*) FROM ai_tools")
            
            # Get tools with pagination
            query = f"""
                SELECT * FROM ai_tools
                ORDER BY {sort_column} {order.upper()}
                LIMIT $1 OFFSET $2
            """
            records = await conn.fetch(query, limit, offset)
            
            tools = [serialize_tool(record) for record in records]
            
            response = {
                "success": True,
                "data": tools,
                "total": total,
                "limit": limit,
                "offset": offset
            }
            
            # Cache the response
            CacheManager.set(cache_key, response)
            
            return response
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.get("/api/tools/category/{category}")
async def get_tools_by_category(
    category: str,
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0)
):
    """Get AI tools filtered by category"""
    
    if not db_pool:
        raise HTTPException(status_code=503, detail="Database not available")
    
    # Check cache
    cache_key = f"tools:category:{category}:{limit}:{offset}"
    cached_data = CacheManager.get(cache_key)
    if cached_data:
        return cached_data
    
    try:
        async with db_pool.acquire() as conn:
            # Get total count for category
            total = await conn.fetchval(
                "SELECT COUNT(*) FROM ai_tools WHERE category = $1",
                category
            )
            
            # Get tools with pagination
            query = """
                SELECT * FROM ai_tools
                WHERE category = $1
                ORDER BY popularity_score DESC
                LIMIT $2 OFFSET $3
            """
            records = await conn.fetch(query, category, limit, offset)
            
            tools = [serialize_tool(record) for record in records]
            
            response = {
                "success": True,
                "data": tools,
                "total": total,
                "limit": limit,
                "offset": offset,
                "category": category
            }
            
            # Cache the response
            CacheManager.set(cache_key, response)
            
            return response
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.get("/api/tools/search")
async def search_tools(
    q: str = Query(..., min_length=1),
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0)
):
    """Search AI tools by keyword in name, description, and tags"""
    
    if not db_pool:
        raise HTTPException(status_code=503, detail="Database not available")
    
    # Check cache
    cache_key = f"tools:search:{q}:{limit}:{offset}"
    cached_data = CacheManager.get(cache_key)
    if cached_data:
        return cached_data
    
    try:
        async with db_pool.acquire() as conn:
            # Full-text search query
            search_query = """
                SELECT * FROM ai_tools
                WHERE 
                    to_tsvector('english', tool_name || ' ' || short_description) @@ plainto_tsquery('english', $1)
                    OR tool_name ILIKE $2
                    OR short_description ILIKE $2
                    OR $3 = ANY(tags)
                ORDER BY 
                    ts_rank(to_tsvector('english', tool_name || ' ' || short_description), plainto_tsquery('english', $1)) DESC,
                    popularity_score DESC
                LIMIT $4 OFFSET $5
            """
            
            search_pattern = f"%{q}%"
            records = await conn.fetch(search_query, q, search_pattern, q.lower(), limit, offset)
            
            # Get total count
            count_query = """
                SELECT COUNT(*) FROM ai_tools
                WHERE 
                    to_tsvector('english', tool_name || ' ' || short_description) @@ plainto_tsquery('english', $1)
                    OR tool_name ILIKE $2
                    OR short_description ILIKE $2
                    OR $3 = ANY(tags)
            """
            total = await conn.fetchval(count_query, q, search_pattern, q.lower())
            
            tools = [serialize_tool(record) for record in records]
            
            response = {
                "success": True,
                "data": tools,
                "total": total,
                "limit": limit,
                "offset": offset,
                "query": q
            }
            
            # Cache the response (shorter TTL for search)
            CacheManager.set(cache_key, response, ttl=180)  # 3 minutes
            
            return response
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.get("/api/tools/{slug}")
async def get_tool_by_slug(slug: str):
    """Get a specific AI tool by slug"""
    
    if not db_pool:
        raise HTTPException(status_code=503, detail="Database not available")
    
    # Check cache
    cache_key = f"tools:slug:{slug}"
    cached_data = CacheManager.get(cache_key)
    if cached_data:
        return cached_data
    
    try:
        async with db_pool.acquire() as conn:
            query = "SELECT * FROM ai_tools WHERE slug = $1"
            record = await conn.fetchrow(query, slug)
            
            if not record:
                raise HTTPException(status_code=404, detail="Tool not found")
            
            tool = serialize_tool(record)
            
            response = {
                "success": True,
                "data": tool
            }
            
            # Cache the response
            CacheManager.set(cache_key, response, ttl=600)  # 10 minutes
            
            return response
            
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.get("/api/categories")
async def get_categories():
    """Get all categories with tool counts"""
    
    if not db_pool:
        raise HTTPException(status_code=503, detail="Database not available")
    
    # Check cache
    cache_key = "categories:all"
    cached_data = CacheManager.get(cache_key)
    if cached_data:
        return cached_data
    
    try:
        async with db_pool.acquire() as conn:
            query = """
                SELECT category, COUNT(*) as count
                FROM ai_tools
                GROUP BY category
                ORDER BY count DESC
            """
            records = await conn.fetch(query)
            
            categories = [
                {"category": record["category"], "count": record["count"]}
                for record in records
            ]
            
            response = {
                "success": True,
                "data": categories
            }
            
            # Cache the response (longer TTL for categories)
            CacheManager.set(cache_key, response, ttl=600)  # 10 minutes
            
            return response
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.get("/api/tools/popular")
async def get_popular_tools(limit: int = Query(10, ge=1, le=50)):
    """Get most popular AI tools"""
    
    if not db_pool:
        raise HTTPException(status_code=503, detail="Database not available")
    
    # Check cache
    cache_key = f"tools:popular:{limit}"
    cached_data = CacheManager.get(cache_key)
    if cached_data:
        return cached_data
    
    try:
        async with db_pool.acquire() as conn:
            query = """
                SELECT * FROM ai_tools
                ORDER BY popularity_score DESC
                LIMIT $1
            """
            records = await conn.fetch(query, limit)
            
            tools = [serialize_tool(record) for record in records]
            
            response = {
                "success": True,
                "data": tools,
                "limit": limit
            }
            
            # Cache the response
            CacheManager.set(cache_key, response)
            
            return response
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.post("/api/cache/clear")
async def clear_cache():
    """Clear all cache (admin endpoint - should be protected in production)"""
    CacheManager.clear()
    return {
        "success": True,
        "message": "Cache cleared successfully"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
