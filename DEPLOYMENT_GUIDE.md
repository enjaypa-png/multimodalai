# Deployment Guide for FastAPI Backend

## Current Status
The FastAPI backend code has been pushed to GitHub, but Vercel's Python runtime requires additional configuration or an alternative deployment approach.

## Issue
Vercel's `@vercel/python` builder has specific requirements and limitations:
1. May require additional configuration files
2. Python dependencies need to be properly specified
3. Vercel's Python runtime is optimized for serverless functions, not full FastAPI apps

## Recommended Solutions

### Option 1: Use Vercel Serverless Functions (Simpler Approach)
Instead of deploying the full FastAPI app, create individual serverless functions for each endpoint.

**Steps:**
1. Create separate Python files in `/api` directory for each endpoint
2. Each file exports a handler function
3. Vercel automatically routes `/api/filename` to `/api/filename.py`

**Example structure:**
```
/api
  /tools.py          → /api/tools
  /categories.py     → /api/categories
  /search.py         → /api/search
```

### Option 2: Deploy FastAPI to Railway (Recommended for Full App)
Railway provides better support for full Python applications with persistent connections.

**Steps:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

**Advantages:**
- Better support for FastAPI
- Persistent database connections
- Built-in PostgreSQL database
- Automatic HTTPS
- Easy environment variable management

### Option 3: Deploy to Render
Render offers free tier for Python web services.

**Steps:**
1. Go to https://render.com
2. Connect GitHub repository
3. Create new Web Service
4. Select Python environment
5. Build command: `pip install -r api/requirements.txt`
6. Start command: `uvicorn api.main:app --host 0.0.0.0 --port $PORT`

### Option 4: Use Vercel for Frontend + External API
Keep the current Vercel deployment for the frontend and deploy the API separately.

**Architecture:**
```
Frontend (Vercel) → API (Railway/Render) → Database (Vercel Postgres)
```

## Immediate Next Steps

### For Vercel Deployment (Current Approach)
1. Check Vercel deployment logs for errors
2. Ensure `api/requirements.txt` is being read correctly
3. Verify Python version compatibility (Vercel supports Python 3.9+)
4. Add `vercel.json` configuration for Python runtime

### For Railway Deployment (Recommended)
1. Create Railway account
2. Connect GitHub repository
3. Add PostgreSQL database in Railway
4. Deploy API
5. Update frontend to point to Railway API URL

### For Hybrid Approach (Frontend on Vercel, API Elsewhere)
1. Deploy API to Railway or Render
2. Update frontend environment variables to point to API URL
3. Configure CORS in FastAPI to allow Vercel domain

## Database Setup (Required for All Options)

### Using Vercel Postgres
```bash
# Via Vercel CLI
vercel postgres create

# Connect to project
vercel postgres connect

# Get connection string
vercel env pull
```

### Using Railway Postgres
```bash
# Railway automatically provides DATABASE_URL
# Just add the Postgres plugin in Railway dashboard
```

### Initialize Database Schema
```bash
# Set DATABASE_URL environment variable
export DATABASE_URL="your_database_url"

# Run initialization script
python api/init_db.py
```

## Testing the Deployment

Once deployed, test these endpoints:
```bash
# Health check
curl https://your-api-url/api/health

# Get all tools
curl https://your-api-url/api/tools

# Search tools
curl https://your-api-url/api/tools/search?q=image

# Get categories
curl https://your-api-url/api/categories
```

## Environment Variables Required

```env
DATABASE_URL=postgresql://user:pass@host:port/dbname
CACHE_TTL=300
MAX_DB_CONNECTIONS=10
```

## Troubleshooting

### Vercel Deployment Issues
- Check build logs in Vercel dashboard
- Ensure `api/requirements.txt` is in correct location
- Verify Python version in runtime

### Database Connection Issues
- Ensure DATABASE_URL is set correctly
- Check database is accessible from deployment platform
- Verify SSL/TLS requirements

### CORS Issues
- Update CORS settings in `api/main.py`
- Add your frontend domain to allowed origins

## Current Code Status
✅ FastAPI backend implemented with all endpoints
✅ PostgreSQL database schema created
✅ Caching layer implemented
✅ Code pushed to GitHub
⏳ Deployment configuration needs adjustment
⏳ Database needs to be set up and initialized

## Recommendation
For the fastest path to production, I recommend:
1. **Deploy API to Railway** (better Python support)
2. **Use Railway's PostgreSQL** (integrated, easy setup)
3. **Keep frontend on Vercel** (already working)
4. **Update frontend to call Railway API**

This approach provides:
- Faster deployment
- Better error logging
- Persistent connections
- Easier debugging
- Free tier available
