"""
Vercel Serverless Function Entry Point
This file is required for Vercel to properly route /api requests
"""

from main import app

# Vercel expects a handler function or the app itself
# FastAPI app can be used directly with Vercel's Python runtime
handler = app
