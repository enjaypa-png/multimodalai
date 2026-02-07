# Multimodal AI Directory - API Documentation

## Overview
FastAPI backend providing REST API endpoints for AI tool listings with PostgreSQL database and in-memory caching.

## Architecture
- **Backend**: FastAPI (Python 3.11+)
- **Database**: PostgreSQL (Vercel Postgres recommended)
- **Caching**: In-memory TTL-based cache
- **Deployment**: Vercel Serverless Functions

## Setup Instructions

### 1. Database Setup (Vercel Postgres)

#### Option A: Using Vercel Dashboard
1. Go to your Vercel project dashboard
2. Navigate to Storage → Create Database
3. Select "Postgres" and create a new database
4. Copy the `DATABASE_URL` connection string
5. Add it to your project's environment variables

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Link your project
vercel link

# Create Postgres database
vercel postgres create multimodal-ai-db

# Connect database to project
vercel postgres connect
```

### 2. Environment Variables

Add the following environment variables to your Vercel project:

```bash
# Via Vercel Dashboard
# Go to Settings → Environment Variables

DATABASE_URL=postgresql://user:pass@host:port/dbname
CACHE_TTL=300
```

Or via CLI:
```bash
vercel env add DATABASE_URL
# Paste your database URL when prompted

vercel env add CACHE_TTL
# Enter: 300
```

### 3. Initialize Database Schema

After setting up the database, initialize the schema:

```bash
# Install Python dependencies
pip install -r api/requirements.txt

# Set DATABASE_URL in your local .env file
echo "DATABASE_URL=your_database_url_here" > .env

# Run initialization script
python api/init_db.py
```

### 4. Local Development

```bash
# Install dependencies
pip install -r api/requirements.txt

# Run FastAPI server
cd api
uvicorn main:app --reload --port 8000

# API will be available at http://localhost:8000
# API docs at http://localhost:8000/docs
```

### 5. Deploy to Vercel

```bash
# Commit all changes
git add .
git commit -m "Add FastAPI backend with PostgreSQL"

# Push to GitHub (auto-deploys to Vercel)
git push origin main
```

## API Endpoints

### Base URL
- Production: `https://www.multimodalartificialintelligence.com/api`
- Local: `http://localhost:8000/api`

### Endpoints

#### 1. Get All Tools
```
GET /api/tools
Query Parameters:
  - limit (optional, default: 50, max: 100)
  - offset (optional, default: 0)
  - sort_by (optional: popularity, rating, date_added)
  - order (optional: asc, desc)

Example: GET /api/tools?limit=20&sort_by=rating&order=desc
```

#### 2. Filter by Category
```
GET /api/tools/category/{category}
Query Parameters:
  - limit (optional, default: 50)
  - offset (optional, default: 0)

Example: GET /api/tools/category/AI%20Image%20%26%20Design
```

#### 3. Search Tools
```
GET /api/tools/search?q={keyword}
Query Parameters:
  - q (required) - search keyword
  - limit (optional, default: 50)
  - offset (optional, default: 0)

Example: GET /api/tools/search?q=image&limit=10
```

#### 4. Get Tool by Slug
```
GET /api/tools/{slug}

Example: GET /api/tools/google-gemini
```

#### 5. Get Categories
```
GET /api/categories

Returns all categories with tool counts
```

#### 6. Get Popular Tools
```
GET /api/tools/popular
Query Parameters:
  - limit (optional, default: 10, max: 50)

Example: GET /api/tools/popular?limit=20
```

#### 7. Health Check
```
GET /api/health

Returns API health status and database connection
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": [...],
  "total": 100,
  "limit": 50,
  "offset": 0
}
```

### Error Response
```json
{
  "detail": "Error message"
}
```

## Caching Strategy

- **All Tools**: 5 minutes TTL
- **Categories**: 10 minutes TTL
- **Search Results**: 3 minutes TTL
- **Individual Tool**: 10 minutes TTL

Cache is automatically invalidated after TTL expires.

## Performance

- **Response Time**: < 100ms (with cache), < 500ms (without cache)
- **Concurrent Requests**: 1000+
- **Cache Hit Rate**: > 80% expected

## Database Schema

See `database_schema.sql` for complete schema definition.

Key tables:
- `ai_tools` - Main tools table with full-text search indexes

## Adding New Tools

To add new tools to the database:

```python
# Using asyncpg
import asyncpg

async def add_tool():
    conn = await asyncpg.connect(DATABASE_URL)
    
    await conn.execute("""
        INSERT INTO ai_tools (
            tool_name, slug, category, short_description,
            tags, official_url, logo_url, popularity_score,
            user_rating, pricing_model
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    """, 
        "Tool Name",
        "tool-slug",
        "Category",
        "Description",
        ["tag1", "tag2"],
        "https://example.com",
        "https://example.com/logo.png",
        0,
        0.0,
        "Free"
    )
    
    await conn.close()
```

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is set correctly
- Check database is accessible from Vercel
- Ensure connection string uses `postgresql://` not `postgres://`

### Cache Not Working
- Check `CACHE_TTL` environment variable
- Verify cache is being populated (check `/api/health`)

### Slow Queries
- Ensure database indexes are created (run `init_db.py`)
- Check database connection pool size
- Monitor cache hit rate

## Security

- CORS enabled for all origins (public API)
- SQL injection prevention via parameterized queries
- Input validation on all query parameters
- Rate limiting recommended for production (not implemented yet)

## Future Enhancements

- [ ] Redis cache for distributed caching
- [ ] Rate limiting per IP
- [ ] Admin API for CRUD operations
- [ ] User authentication for favorites/ratings
- [ ] Analytics and usage tracking
- [ ] GraphQL API
