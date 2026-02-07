# API Architecture Design

## Technology Stack
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL (Vercel Postgres or Supabase)
- **Caching**: Redis or in-memory caching with TTL
- **ORM**: asyncpg (async PostgreSQL driver)
- **Deployment**: Vercel Serverless Functions

## API Endpoints

### 1. Get All Tools
```
GET /api/tools
Query Parameters:
  - limit (optional, default: 50)
  - offset (optional, default: 0)
  - sort_by (optional: popularity, rating, date_added, default: popularity)
  - order (optional: asc, desc, default: desc)

Response:
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "tool_name": "string",
      "slug": "string",
      "category": "string",
      "short_description": "string",
      "tags": ["string"],
      "official_url": "string",
      "logo_url": "string",
      "date_added": "timestamp",
      "popularity_score": number,
      "user_rating": number,
      "pricing_model": "string"
    }
  ],
  "total": number,
  "limit": number,
  "offset": number
}
```

### 2. Filter by Category
```
GET /api/tools/category/{category}
Path Parameters:
  - category: string (e.g., "AI Image & Design")
Query Parameters:
  - limit (optional, default: 50)
  - offset (optional, default: 0)

Response: Same as Get All Tools
```

### 3. Search Tools
```
GET /api/tools/search
Query Parameters:
  - q: string (required) - search keyword
  - limit (optional, default: 50)
  - offset (optional, default: 0)

Response: Same as Get All Tools
```

### 4. Get Tool by Slug
```
GET /api/tools/{slug}
Path Parameters:
  - slug: string (e.g., "google-gemini")

Response:
{
  "success": true,
  "data": {
    "id": "uuid",
    "tool_name": "string",
    "slug": "string",
    "category": "string",
    "short_description": "string",
    "tags": ["string"],
    "official_url": "string",
    "logo_url": "string",
    "date_added": "timestamp",
    "popularity_score": number,
    "user_rating": number,
    "pricing_model": "string"
  }
}
```

### 5. Get Categories
```
GET /api/categories
Response:
{
  "success": true,
  "data": [
    {
      "category": "string",
      "count": number
    }
  ]
}
```

### 6. Get Popular Tools
```
GET /api/tools/popular
Query Parameters:
  - limit (optional, default: 10)

Response: Same as Get All Tools
```

## Caching Strategy

### Cache Layers
1. **In-Memory Cache** (Primary)
   - TTL: 5 minutes for all tools
   - TTL: 10 minutes for categories
   - TTL: 3 minutes for search results

2. **Redis Cache** (Optional, for scale)
   - Same TTL as in-memory
   - Shared across serverless instances

### Cache Keys
- `tools:all:{limit}:{offset}:{sort_by}:{order}`
- `tools:category:{category}:{limit}:{offset}`
- `tools:search:{query}:{limit}:{offset}`
- `tools:slug:{slug}`
- `categories:all`
- `tools:popular:{limit}`

### Cache Invalidation
- Manual invalidation endpoint (admin only)
- Automatic TTL expiration
- On database updates (if admin panel is added)

## Database Connection
- Use connection pooling (max 10 connections)
- Async queries for non-blocking I/O
- Prepared statements for security

## Error Handling
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message"
  }
}
```

## Performance Targets
- Response time: < 100ms (with cache)
- Response time: < 500ms (without cache)
- Concurrent requests: 1000+
- Cache hit rate: > 80%

## Security
- Rate limiting: 100 requests/minute per IP
- CORS: Allow all origins (public API)
- Input validation: Sanitize all query parameters
- SQL injection prevention: Use parameterized queries

## Deployment Architecture
```
Vercel Edge Network
    ↓
FastAPI Serverless Function (Python)
    ↓
In-Memory Cache (TTL-based)
    ↓
PostgreSQL (Vercel Postgres)
```

## Environment Variables
```
DATABASE_URL=postgresql://user:pass@host:port/dbname
REDIS_URL=redis://host:port (optional)
CACHE_TTL=300
MAX_DB_CONNECTIONS=10
```
