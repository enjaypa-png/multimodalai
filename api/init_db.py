"""
Database initialization script
Run this to set up the PostgreSQL database schema
"""

import asyncpg
import asyncio
import os
from dotenv import load_dotenv

load_dotenv()

async def init_database():
    """Initialize database with schema and sample data"""
    
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        print("ERROR: DATABASE_URL environment variable not set")
        return
    
    # Convert postgres:// to postgresql:// if needed
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    
    print(f"Connecting to database...")
    
    try:
        conn = await asyncpg.connect(database_url)
        print("Connected successfully!")
        
        # Read schema file
        schema_path = os.path.join(os.path.dirname(__file__), "..", "database_schema.sql")
        with open(schema_path, "r") as f:
            schema_sql = f.read()
        
        print("Creating database schema...")
        
        # Split and execute SQL statements
        statements = schema_sql.split(";")
        for statement in statements:
            statement = statement.strip()
            if statement:
                try:
                    await conn.execute(statement)
                except Exception as e:
                    # Some statements might fail if already exists, that's ok
                    if "already exists" not in str(e).lower():
                        print(f"Warning: {e}")
        
        print("Database schema created successfully!")
        
        # Check if data already exists
        count = await conn.fetchval("SELECT COUNT(*) FROM ai_tools")
        print(f"Current tool count: {count}")
        
        await conn.close()
        print("Database initialization complete!")
        
    except Exception as e:
        print(f"Error initializing database: {e}")
        raise

if __name__ == "__main__":
    asyncio.run(init_database())
