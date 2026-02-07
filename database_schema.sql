-- PostgreSQL Database Schema for AI Tools Directory
-- Database: multimodal_ai_directory

-- Enable UUID extension for generating unique IDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create ai_tools table
CREATE TABLE IF NOT EXISTS ai_tools (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tool_name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    short_description TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    official_url TEXT NOT NULL,
    logo_url TEXT,
    date_added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    popularity_score INTEGER DEFAULT 0,
    user_rating DECIMAL(3,2) DEFAULT 0.00 CHECK (user_rating >= 0 AND user_rating <= 5.00),
    pricing_model VARCHAR(50) DEFAULT 'Free',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX idx_ai_tools_category ON ai_tools(category);
CREATE INDEX idx_ai_tools_popularity ON ai_tools(popularity_score DESC);
CREATE INDEX idx_ai_tools_rating ON ai_tools(user_rating DESC);
CREATE INDEX idx_ai_tools_date_added ON ai_tools(date_added DESC);
CREATE INDEX idx_ai_tools_slug ON ai_tools(slug);
CREATE INDEX idx_ai_tools_tags ON ai_tools USING GIN(tags);

-- Full-text search index for tool_name and short_description
CREATE INDEX idx_ai_tools_search ON ai_tools USING GIN(
    to_tsvector('english', tool_name || ' ' || short_description)
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_ai_tools_updated_at
    BEFORE UPDATE ON ai_tools
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Sample data insertion (based on current website tools)
INSERT INTO ai_tools (tool_name, slug, category, short_description, tags, official_url, logo_url, popularity_score, user_rating, pricing_model) VALUES
('Google Gemini', 'google-gemini', 'Multimodal AI Model', 'Google''s flagship model blending text, code, images, audio, and video understanding. Build search tools, code assistants, or creative workflows—e.g., generate code from sketches or summarize videos with visuals.', ARRAY['multimodal', 'google', 'ai-model', 'text', 'code', 'image', 'audio', 'video'], 'https://gemini.google.com', 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', 2156, 4.5, 'Freemium'),
('Manus AI', 'manus-ai', 'AI Automation & Agents', 'Autonomous agent platform leveraging multimodal inputs for task automation. Automate workflows like analyzing docs+images for reports or voice-to-action agents.', ARRAY['automation', 'agents', 'multimodal', 'workflow'], 'https://manus.app', 'https://manus.app/logo.png', 1834, 4.7, 'Freemium'),
('Grok Imagine v.10', 'grok-imagine-v-10', 'AI Image & Design', 'xAI''s advanced image generator with built-in reasoning for precise prompts. Turn complex descriptions into photorealistic art, diagrams, or edits.', ARRAY['image-generation', 'design', 'xai', 'photorealistic'], 'https://grok.x.ai', 'https://grok.x.ai/logo.png', 1247, 4.3, 'Freemium'),
('Claude', 'claude', 'Multimodal AI Model', 'Safe, helpful model handling text, code, images, and long-context reasoning. Craft emails from screenshots, debug code with diagrams, or brainstorm via voice notes.', ARRAY['multimodal', 'anthropic', 'ai-model', 'text', 'code', 'image'], 'https://claude.ai', 'https://claude.ai/logo.png', 3421, 4.8, 'Paid'),
('Runway', 'runway', 'Text/Image-to-Video AI', 'Text/image-to-video generator with editing tools for motion graphics. Create short films from prompts, extend clips, or inpaint scenes.', ARRAY['video-generation', 'text-to-video', 'image-to-video', 'editing'], 'https://runwayml.com', 'https://runwayml.com/logo.png', 2890, 4.6, 'Paid'),
('Midjourney', 'midjourney', 'AI Image & Design', 'Discord-based image generator turning prompts into stunning art. Style-transfer photos, upscale details, or remix community creations.', ARRAY['image-generation', 'design', 'discord', 'art'], 'https://midjourney.com', 'https://midjourney.com/logo.png', 5234, 4.9, 'Paid'),
('Cursor', 'cursor', 'AI Code Editor', 'AI-first code editor understanding screenshots, docs, and natural language edits. Refactor via image diffs, generate tests from specs, or chat-debug entire projects.', ARRAY['code-editor', 'development', 'ai-coding', 'vscode'], 'https://cursor.sh', 'https://cursor.sh/logo.png', 1987, 4.7, 'Freemium'),
('Perplexity AI', 'perplexity-ai', 'AI Research & Search', 'Search engine with vision for image uploads and real-time answers. Ask about charts, diagnose issues from photos, or research multimodally.', ARRAY['search', 'research', 'multimodal', 'vision'], 'https://perplexity.ai', 'https://perplexity.ai/logo.png', 2345, 4.5, 'Freemium')
ON CONFLICT (slug) DO NOTHING;

-- Create view for popular tools
CREATE OR REPLACE VIEW popular_tools AS
SELECT * FROM ai_tools
ORDER BY popularity_score DESC
LIMIT 50;

-- Create view for top-rated tools
CREATE OR REPLACE VIEW top_rated_tools AS
SELECT * FROM ai_tools
WHERE user_rating >= 4.0
ORDER BY user_rating DESC, popularity_score DESC
LIMIT 50;
