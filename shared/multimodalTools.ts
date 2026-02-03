/**
 * Canonical Multimodal AI Tool Data
 *
 * Schema: Tool Name | Primary Category | Text | Image | Video | Audio | Code | Reasoning | Website
 *
 * Eligibility Rule: A tool must natively support TWO OR MORE modalities to be included.
 *
 * Modality Support Values:
 * - "Yes": Full native support
 * - "Limited": Partial or experimental support
 * - "No": Not supported
 */

export type ModalitySupport = "Yes" | "Limited" | "No";

export interface MultimodalTool {
  name: string;
  primaryCategory: string;
  text: ModalitySupport;
  image: ModalitySupport;
  video: ModalitySupport;
  audio: ModalitySupport;
  code: ModalitySupport;
  reasoning: ModalitySupport;
  website: string;
  logo?: string;
  description?: string;
  pricing?: "Free" | "Freemium" | "Paid" | "Free Trial";
  votes?: number;
  isNew?: boolean;
  isTrending?: boolean;
  addedDate?: string;
  // Enhanced features
  useCases?: string[];
  pricingDetails?: {
    free?: string;
    paid?: string;
    enterprise?: string;
  };
  keyFeatures?: string[];
  pros?: string[];
  cons?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

/**
 * Multimodal-qualified tools (≥2 modalities)
 */
export const MULTIMODAL_TOOLS: MultimodalTool[] = [

  {
    name: "Google Gemini",
    primaryCategory: "Multimodal AI Model",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Limited",
    code: "Yes",
    reasoning: "Yes",
    website: "https://deepmind.google/technologies/gemini/",
    logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    description: "Google's flagship model blending text, code, images, audio, and video understanding. Build search tools, code assistants, or creative workflows—e.g., generate code from sketches or summarize videos with visuals. Native integration with Google Workspace boosts productivity. Freemium tiers available.",
    pricing: "Freemium",
    votes: 2156,
    isTrending: true,
    useCases: [
      "Generate code from UI sketches or wireframes",
      "Analyze and summarize videos with visual context",
      "Build multimodal search engines that understand images and text",
      "Create content briefs by analyzing competitor websites and images",
      "Automate document processing with charts, tables, and images"
    ],
    pricingDetails: {
      free: "Free tier with rate limits via Google AI Studio",
      paid: "Pay-per-use API starting at $0.00025/1K characters",
      enterprise: "Custom pricing for Vertex AI with SLA and support"
    },
    keyFeatures: [
      "Native multimodal understanding across text, images, audio, video, and code",
      "1M+ token context window for long documents",
      "Integrated with Google Workspace (Docs, Sheets, Gmail)",
      "Function calling and structured output support",
      "Available via API, Google AI Studio, and Vertex AI"
    ],
    pros: [
      "Excellent multimodal capabilities",
      "Large context window for complex tasks",
      "Free tier available for testing",
      "Strong integration with Google ecosystem"
    ],
    cons: [
      "Rate limits on free tier can be restrictive",
      "Video understanding still in limited preview",
      "API pricing can add up for high-volume use"
    ],
    faqs: [
      {
        question: "Is Google Gemini free to use?",
        answer: "Yes, Google Gemini offers a free tier through Google AI Studio with rate limits. For production use, you can access it via pay-per-use API pricing or enterprise plans through Vertex AI."
      },
      {
        question: "What's the difference between Gemini and ChatGPT?",
        answer: "Gemini is Google's multimodal AI model with native support for images, video, and audio, while ChatGPT focuses primarily on text and image understanding. Gemini also offers deeper integration with Google Workspace and a larger context window (1M+ tokens)."
      },
      {
        question: "Can I use Gemini for commercial projects?",
        answer: "Yes, Gemini can be used for commercial projects. You can access it via the paid API or enterprise plans through Vertex AI, which include commercial licensing and support."
      }
    ]
  },
  {
    name: "Claude",
    primaryCategory: "Multimodal AI Model",
    text: "Yes",
    image: "Limited",
    video: "No",
    audio: "No",
    code: "Yes",
    reasoning: "Limited",
    website: "https://www.anthropic.com/claude",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/crIfnNqNmxtYFOBP.PNG",
    description: "Safe, helpful model handling text, code, images, and long-context reasoning. Craft emails from screenshots, debug code with diagrams, or brainstorm via voice notes. Enterprise-grade safety for business use. Paid plans via Anthropic API.",
    pricing: "Paid",
    useCases: [
      "Draft emails from screenshots of meeting notes",
      "Debug code with visual diffs and diagrams",
      "Analyze financial reports with charts and tables",
      "Create detailed content from voice note transcriptions",
      "Process long documents (200K+ tokens) with context retention"
    ],
    pricingDetails: {
      free: "Limited free tier via claude.ai",
      paid: "Pro plan at $20/month or API at $3-15 per million tokens",
      enterprise: "Custom enterprise pricing with dedicated support"
    },
    keyFeatures: [
      "200K token context window for long documents",
      "Constitutional AI for safe, helpful responses",
      "Vision capabilities for image analysis",
      "Strong reasoning and coding abilities",
      "Enterprise-grade security and compliance"
    ],
    pros: [
      "Excellent at following complex instructions",
      "Strong safety and ethical guardrails",
      "Large context window",
      "High-quality code generation"
    ],
    cons: [
      "More expensive than some competitors",
      "Limited free tier",
      "No native video or audio understanding"
    ],
    faqs: [
      {
        question: "Is Claude better than ChatGPT?",
        answer: "Claude excels at following detailed instructions, handling long documents (200K tokens), and providing nuanced, thoughtful responses. ChatGPT may be better for general conversation and has more integrations. The best choice depends on your specific use case."
      },
      {
        question: "Can Claude analyze images?",
        answer: "Yes, Claude 3 and later versions support image analysis. You can upload images for tasks like OCR, chart interpretation, diagram analysis, and visual question answering."
      },
      {
        question: "What's Claude's context window size?",
        answer: "Claude 3 models support up to 200,000 tokens (roughly 150,000 words or 500 pages), making it ideal for analyzing long documents, codebases, or research papers."
      }
    ]
  },
  {
    name: "Runway",
    primaryCategory: "Text/Image-to-Video AI",
    text: "Limited",
    image: "Yes",
    video: "Yes",
    audio: "Limited",
    code: "No",
    reasoning: "No",
    website: "https://runwayml.com",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/lmAoPOWSLYdRLWRk.PNG",
    description: "Text/image-to-video generator with editing tools for motion graphics. Create short films from prompts, extend clips, or inpaint scenes—pro-level for filmmakers on a budget. Gen-3 Alpha ups realism. Paid subscriptions with free trials.",
    pricing: "Paid"
  },
  {
    name: "Luma Dream Machine",
    primaryCategory: "Image-to-Video AI",
    text: "Limited",
    image: "Yes",
    video: "Yes",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://lumalabs.ai",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/LfNPZELvQFxTUcYp.PNG",
    description: "Image-to-video AI for dreamlike animations and extensions. Animate static art into fluid motion or dream up scenes from references; fast for social media creators. Free tier limited; pro for longer clips.",
    pricing: "Freemium"
  },
  {
    name: "Pika",
    primaryCategory: "Text-to-Video AI",
    text: "Limited",
    image: "No",
    video: "Yes",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://pika.art",
    logo: "https://pika.art/favicon.ico",
    description: "Text-to-video platform specializing in stylized, short-form clips. Lip-sync characters, add effects, or remix footage—viral TikTok/YouTube Shorts maker. Community templates speed creation. Freemium with watermark-free upgrades.",
    pricing: "Freemium"
  },
  {
    name: "Synthesia",
    primaryCategory: "AI Avatar Video",
    text: "Limited",
    image: "Limited",
    video: "Yes",
    audio: "Yes",
    code: "No",
    reasoning: "No",
    website: "https://www.synthesia.io",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/HCrfhyOIYYJMGgkI.PNG",
    description: "AI avatars for video from text scripts, with voice cloning. Produce personalized training videos, demos, or marketing in 120+ languages. Custom avatars from your likeness. Paid; free trial available.",
    pricing: "Paid"
  },
  {
    name: "HeyGen",
    primaryCategory: "AI Avatar Video",
    text: "Limited",
    image: "Limited",
    video: "Yes",
    audio: "Yes",
    code: "No",
    reasoning: "No",
    website: "https://www.heygen.com",
    logo: "https://www.heygen.com/favicon.ico",
    description: "Interactive AI video agents with lip-sync and gesture control. Build talking head explainers or virtual reps from photos/scripts. Integrates with PPT for sales decks. Freemium starter; scales for teams.",
    pricing: "Freemium"
  },
  {
    name: "Replit",
    primaryCategory: "AI App Builder",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "No",
    code: "Yes",
    reasoning: "Limited",
    website: "https://replit.com",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/LmOjyWikdDLoAluu.PNG",
    description: "Online IDE with AI agent for building/deploying apps from multimodal prompts. Code from sketches, voice ideas, or docs; auto-deploys full-stack apps. Great for rapid prototyping without local setup. Freemium; pro for teams.",
    pricing: "Freemium"
  },
  {
    name: "Cursor",
    primaryCategory: "AI Code Editor",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "No",
    code: "Yes",
    reasoning: "Limited",
    website: "https://www.cursor.sh",
    logo: "https://www.cursor.sh/favicon.ico",
    description: "AI-first code editor understanding screenshots, docs, and natural language edits. Refactor via image diffs, generate tests from specs, or chat-debug entire projects. VS Code-like for devs speeding up 10x. Freemium core.",
    pricing: "Freemium"
  },
  {
    name: "Manus AI",
    primaryCategory: "AI Automation & Agents",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "Yes",
    reasoning: "Yes",
    website: "https://manus.im",
    logo: "https://manus.im/favicon.ico",
    description: "Autonomous agent platform leveraging multimodal inputs for task automation. Automate workflows like analyzing docs+images for reports or voice-to-action agents. Great for no-code builders creating custom AI helpers. Freemium model supports rapid testing.",
    pricing: "Freemium",
    votes: 1834,
    isNew: true
  },
  {
    name: "Grok Imagine v.10",
    primaryCategory: "AI Image & Design",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://x.ai",
    logo: "https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png",
    description: "xAI's advanced image generator with built-in reasoning for precise prompts. Turn complex descriptions into photorealistic art, diagrams, or edits; excels at iterative refinements via chat. Ideal for designers needing logic-driven visuals. Freemium access via Grok platform.",
    pricing: "Freemium",
    votes: 1247,
    isNew: true,
    isTrending: true
  },
  {
    name: "CodeRabbit v1.7",
    primaryCategory: "AI Code Review",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "No",
    code: "Yes",
    reasoning: "Yes",
    website: "https://coderabbit.ai",
    logo: "https://coderabbit.ai/favicon.ico",
    description: "AI code review agent that scans repos multimodally (code, docs, diagrams). Catches bugs, suggests refactors, and explains issues with visual diffs—speeds PRs by 80%. Best for dev teams integrating AI into GitHub workflows. Freemium for small projects.",
    pricing: "Freemium",
    votes: 892,
    isNew: true,
    isTrending: true
  },
  {
    name: "Perplexity AI",
    primaryCategory: "AI Research & Search",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "Limited",
    reasoning: "Yes",
    website: "https://www.perplexity.ai",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/gAMHoVgxZMoPyNfl.PNG",
    description: "Search engine with vision for image uploads and real-time answers. Ask about charts, diagnose issues from photos, or research multimodally. Pro version cites sources deeply. Freemium core; Pro unlocks advanced models.",
    pricing: "Freemium",
    useCases: [
      "Research topics with real-time web search and citations",
      "Analyze charts, graphs, and infographics from images",
      "Diagnose technical issues by uploading error screenshots",
      "Compare products with visual and text-based research",
      "Get up-to-date information with source attribution"
    ],
    pricingDetails: {
      free: "Free tier with limited searches per day",
      paid: "Pro plan at $20/month with unlimited searches and advanced models"
    },
    keyFeatures: [
      "Real-time web search with citations",
      "Vision capabilities for image analysis",
      "Multiple AI models (GPT-4, Claude, etc.) on Pro",
      "Follow-up questions for deeper research",
      "Mobile apps for iOS and Android"
    ],
    pros: [
      "Excellent for research with source citations",
      "Real-time information access",
      "Clean, ad-free interface",
      "Multiple AI models on Pro plan"
    ],
    cons: [
      "Free tier has daily limits",
      "Can be slower than pure LLMs",
      "Sometimes provides outdated cached results"
    ],
    faqs: [
      {
        question: "Is Perplexity AI free?",
        answer: "Yes, Perplexity offers a free tier with limited searches per day. The Pro plan ($20/month) provides unlimited searches, access to advanced AI models, and additional features."
      },
      {
        question: "What makes Perplexity different from ChatGPT?",
        answer: "Perplexity is designed specifically for research and search, providing real-time web results with citations. ChatGPT is a general-purpose conversational AI. Perplexity is better for fact-finding, while ChatGPT excels at creative tasks and general assistance."
      },
      {
        question: "Does Perplexity cite its sources?",
        answer: "Yes, Perplexity provides citations and links to sources for its answers, making it easy to verify information and dive deeper into topics."
      }
    ]
  },
  {
    name: "Midjourney",
    primaryCategory: "AI Image & Design",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://www.midjourney.com",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/NAWOfgKiFvkiYRFc.PNG",
    description: "Discord-based image generator turning prompts into stunning art. Style-transfer photos, upscale details, or remix community creations—artist's dream for concepts. V6+ handles complex scenes. Paid via bot subscriptions.",
    pricing: "Paid",
    useCases: [
      "Create concept art and illustrations for creative projects",
      "Generate marketing visuals and social media content",
      "Design book covers, posters, and album artwork",
      "Produce architectural visualizations and interior design concepts",
      "Style-transfer photos into artistic renditions"
    ],
    pricingDetails: {
      paid: "Basic plan at $10/month for ~200 images",
      enterprise: "Pro plan at $60/month for unlimited relaxed generations"
    },
    keyFeatures: [
      "Industry-leading image quality and artistic style",
      "V6+ handles complex multi-subject scenes",
      "Upscaling and variation tools",
      "Community gallery for inspiration",
      "Discord-based workflow with bot commands"
    ],
    pros: [
      "Stunning artistic output",
      "Strong community and resources",
      "Regular model updates",
      "Good at stylized and fantasy art"
    ],
    cons: [
      "No free tier",
      "Discord-only interface can be confusing",
      "Less precise control than some competitors",
      "All generations are public by default on basic plans"
    ],
    faqs: [
      {
        question: "Is Midjourney free?",
        answer: "No, Midjourney requires a paid subscription starting at $10/month. There is no free tier, but you can try it with a trial if available."
      },
      {
        question: "How do I use Midjourney?",
        answer: "Midjourney operates through Discord. After subscribing, you join their Discord server and use bot commands like '/imagine' followed by your prompt to generate images."
      },
      {
        question: "Can I use Midjourney images commercially?",
        answer: "Yes, if you're on a paid plan, you own the rights to your generated images and can use them commercially. However, images created on the free trial (when available) have restrictions."
      }
    ]
  },
  {
    name: "NotebookLM",
    primaryCategory: "AI Research & Writing",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "Yes",
    code: "No",
    reasoning: "Yes",
    website: "https://notebooklm.google",
    logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    description: "Google's research assistant turning notes/docs into podcasts or study guides. Upload PDFs/images for audio summaries, timelines, or Q&A—perfect for students/marketers. Free via Google; experimental features rolling out.",
    pricing: "Free"
  },
  {
    name: "Canva AI",
    primaryCategory: "AI Image & Design",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://www.canva.com",
    logo: "https://www.canva.com/favicon.ico",
    description: "Design suite with text-to-image/video generation and auto-edits. Resize visuals, remove objects, or create decks from prompts—non-designers' shortcut to pro graphics. Freemium; premium assets unlocked.",
    pricing: "Freemium"
  },
  {
    name: "Descript",
    primaryCategory: "AI Video & Audio Editing",
    text: "Yes",
    image: "No",
    video: "Yes",
    audio: "Yes",
    code: "No",
    reasoning: "No",
    website: "https://www.descript.com",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/iBJnKBoMmQyCpwFN.PNG",
    description: "Audio/video editor that transcribes, overdubs, and clones voices multimodally. Edit podcasts by text, remove filler words, or generate clips from highlights. Ideal for creators skipping manual cuts. Paid with free tier.",
    pricing: "Freemium"
  },
  {
    name: "ElevenLabs",
    primaryCategory: "AI Voice & Audio",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "Yes",
    code: "No",
    reasoning: "No",
    website: "https://elevenlabs.io",
    logo: "https://elevenlabs.io/favicon.ico",
    description: "Hyper-realistic voice AI from text, with voice cloning and emotion control. Dub videos, narrate books, or build voice agents—120+ languages. Studio-quality for games/marketing. Freemium credits.",
    pricing: "Freemium"
  },
  {
    name: "Stable Diffusion",
    primaryCategory: "AI Image & Design",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://stability.ai",
    logo: "https://stability.ai/favicon.ico",
    description: "Open-source image generator customizable via fine-tuning or LoRAs. Text-to-image, inpainting, or upscaling—run locally for privacy/unlimited use. WebUI tools simplify for artists. Free (self-hosted).",
    pricing: "Free"
  },
  {
    name: "DALL-E 3",
    primaryCategory: "AI Image & Design",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://openai.com/dall-e-3",
    logo: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
    description: "OpenAI's creative image generator integrated into ChatGPT. Precise prompts yield detailed art/styles; excels at complex compositions. Best for ideation in writing/design workflows. Paid via API/ChatGPT.",
    pricing: "Paid"
  },
  {
    name: "Kling AI",
    primaryCategory: "AI Video Generation",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://klingai.com",
    logo: "https://klingai.com/favicon.ico",
    description: "Chinese text/image-to-video model rivaling Sora in realism/dynamics. 60s clips with physics/motion; lip-sync option. Free trials; paid for commercial exports.",
    pricing: "Freemium"
  },
  {
    name: "D-ID",
    primaryCategory: "AI Avatar Video",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "No",
    reasoning: "No",
    website: "https://www.d-id.com",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/LcZkzDLyPxGckBYe.PNG",
    description: "Animate photos into talking avatars with script-driven expressions. Personalized videos from selfies/text—ecommerce demos or customer service bots. API for scale. Freemium starter.",
    pricing: "Freemium"
  },
  {
    name: "Jasper AI",
    primaryCategory: "AI Writing & Content",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Limited",
    website: "https://www.jasper.ai",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/ioOAnMNdWkcwalHR.PNG",
    description: "Marketing copywriter with image mood boards and brand voice training. Generate campaigns, emails, or social from visuals/briefs. Teams collaborate seamlessly. Paid subscriptions.",
    pricing: "Paid"
  },
  {
    name: "SportsAI",
    primaryCategory: "AI Sports Betting & Analytics",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://www.sports-ai.dev",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/vgFYeNUsNqqUNgAU.PNG",
    description: "Specialized sports analytics using multimodal data (stats, video, odds). Predict games, scout players, or bet smarter—e.g., analyze highlights+data. Niche for bettors/coaches. Paid/freemium varies.",
    pricing: "Freemium"
  },
  {
    name: "GeniusIQ",
    primaryCategory: "AI Sports Data & Analytics",
    text: "Yes",
    image: "No",
    video: "Yes",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://www.geniussports.com/geniusiq",
    logo: "https://www.geniussports.com/favicon.ico",
    description: "Specialized sports analytics using multimodal data (stats, video, odds). Predict games, scout players, or bet smarter—e.g., analyze highlights+data. Niche for bettors/coaches. Paid/freemium varies.",
    pricing: "Paid"
  },
  {
    name: "ProFitX",
    primaryCategory: "AI Sports Analytics",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://profitx.ai",
    logo: "https://profitx.ai/favicon.ico",
    description: "Specialized sports analytics using multimodal data (stats, video, odds). Predict games, scout players, or bet smarter—e.g., analyze highlights+data. Niche for bettors/coaches. Paid/freemium varies.",
    pricing: "Paid"
  },
  {
    name: "Leans AI",
    primaryCategory: "AI Sports Picks",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://leans.ai",
    logo: "https://leans.ai/favicon.ico",
    description: "Specialized sports analytics using multimodal data (stats, video, odds). Predict games, scout players, or bet smarter—e.g., analyze highlights+data. Niche for bettors/coaches. Paid/freemium varies.",
    pricing: "Freemium"
  },
  {
    name: "LLaVA",
    primaryCategory: "Vision-Language AI",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://llava-vl.github.io",
    logo: "https://llava-vl.github.io/favicon.ico",
    description: "Open-source vision-language model for chatting about images. VQA, captioning, or reasoning over visuals—lightweight for local runs. Free; fine-tune for custom apps.",
    pricing: "Free",
    isNew: true
  },
  {
    name: "ImageBind",
    primaryCategory: "Multimodal Embedding",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "No",
    reasoning: "Limited",
    website: "https://imagebind.metademolab.com",
    logo: "https://about.meta.com/favicon.ico",
    description: "Unified embedding for 6 modalities (text/audio/video/depth/thermal/IMU). Search/retrieve across senses—e.g., find videos by humming. Free research model.",
    pricing: "Free"
  },
  {
    name: "CogVLM",
    primaryCategory: "Vision-Language AI",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Yes",
    website: "https://github.com/THUDM/CogVLM",
    logo: "https://github.com/favicon.ico",
    description: "Vision-language powerhouse for detailed image grounding/descriptions. OCR, charts, or scene analysis beats GPT-4V in benchmarks. Free/open weights.",
    pricing: "Free"
  },
  {
    name: "Sora",
    primaryCategory: "Text-to-Video AI",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Limited",
    code: "No",
    reasoning: "Limited",
    website: "https://openai.com/sora",
    logo: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
    description: "OpenAI's text-to-video for minute-long coherent scenes. Physics-aware worlds from prompts—cinematic for filmmakers. Paid API access.",
    pricing: "Paid",
    isTrending: true
  },
  {
    name: "Stability AI",
    primaryCategory: "AI Platform",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Limited",
    code: "No",
    reasoning: "No",
    website: "https://stability.ai",
    logo: "https://stability.ai/favicon.ico",
    description: "Generative ecosystem (Diffusion models, Stable Video, Audio). Mix modalities for art/music/video—open ecosystem for devs. Freemium platforms.",
    pricing: "Freemium"
  },
  {
    name: "Google Vertex AI",
    primaryCategory: "AI Platform",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://cloud.google.com/vertex-ai",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v2e90df8e87f10c504c3a4b2b64c6c8c39e7c61f2d7c4a8e3a8e3a8e3a8e3a8e3/cloud/images/favicons/onecloud/super_cloud.png",
    description: "Cloud platform for deploying multimodal models at scale. Vision APIs + custom training; autoML simplifies. Paid enterprise.",
    pricing: "Paid"
  },
  {
    name: "NVIDIA NeMo",
    primaryCategory: "AI Framework",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://www.nvidia.com/en-us/ai-data-science/products/nemo/",
    logo: "https://www.nvidia.com/favicon.ico",
    description: "Framework for multimodal LLMs/agents with GPU optimization. Build voice/vision pipelines—enterprise-grade. Free/open-source core.",
    pricing: "Free"
  },
  {
    name: "OpenVINO Toolkit",
    primaryCategory: "AI Deployment",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Limited",
    website: "https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html",
    logo: "https://www.intel.com/favicon.ico",
    description: "Intel's edge optimizer for running multimodal models on devices. Compress/deploy vision/speech on laptops/CPUs. Free toolkit.",
    pricing: "Free"
  },
  {
    name: "Hugging Face Transformers",
    primaryCategory: "AI Library",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://huggingface.co/transformers",
    logo: "https://huggingface.co/favicon.ico",
    description: "Ecosystem for 100k+ multimodal models (CLIP/BLIP/LLaVA). Host, fine-tune, demo—demo in Spaces for free sharing. Freemium.",
    pricing: "Free"
  },
  {
    name: "Hugging Face Hub",
    primaryCategory: "AI Model Repository",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://huggingface.co",
    logo: "https://huggingface.co/favicon.ico",
    description: "Ecosystem for 100k+ multimodal models (CLIP/BLIP/LLaVA). Host, fine-tune, demo—demo in Spaces for free sharing. Freemium.",
    pricing: "Freemium"
  },
  {
    name: "TorchMultimodal",
    primaryCategory: "AI Library",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Limited",
    website: "https://github.com/facebookresearch/multimodal",
    logo: "https://pytorch.org/favicon.ico",
    description: "PyTorch multimodal libs + UIs/frameworks for agent apps. Chain models/tools for RAG/workflows—devs' toolkit. Free/freemium.",
    pricing: "Free"
  },
  {
    name: "Gradio",
    primaryCategory: "AI Development Tool",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "No",
    website: "https://gradio.app",
    logo: "https://gradio.app/favicon.ico",
    description: "PyTorch multimodal libs + UIs/frameworks for agent apps. Chain models/tools for RAG/workflows—devs' toolkit. Free/freemium.",
    pricing: "Free"
  },
  {
    name: "Hugging Face Spaces",
    primaryCategory: "AI Hosting Platform",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://huggingface.co/spaces",
    logo: "https://huggingface.co/favicon.ico",
    description: "Ecosystem for 100k+ multimodal models (CLIP/BLIP/LLaVA). Host, fine-tune, demo—demo in Spaces for free sharing. Freemium.",
    pricing: "Freemium"
  },
  {
    name: "LangChain",
    primaryCategory: "AI Framework",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://www.langchain.com",
    logo: "https://www.langchain.com/favicon.ico",
    description: "PyTorch multimodal libs + UIs/frameworks for agent apps. Chain models/tools for RAG/workflows—devs' toolkit. Free/freemium.",
    pricing: "Freemium"
  },
  {
    name: "LangGraph",
    primaryCategory: "AI Orchestration",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://www.langchain.com/langgraph",
    logo: "https://www.langchain.com/favicon.ico",
    description: "PyTorch multimodal libs + UIs/frameworks for agent apps. Chain models/tools for RAG/workflows—devs' toolkit. Free/freemium.",
    pricing: "Freemium"
  },
  {
    name: "Milvus",
    primaryCategory: "Vector Database",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Limited",
    reasoning: "No",
    website: "https://milvus.io",
    logo: "https://milvus.io/favicon.ico",
    description: "Vector DBs for multimodal search (image/text/audio similarity). Power RAG apps; managed options scale. Free/open core.",
    pricing: "Free"
  },
  {
    name: "Chroma",
    primaryCategory: "Vector Database",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Yes",
    code: "Limited",
    reasoning: "No",
    website: "https://www.trychroma.com",
    logo: "https://www.trychroma.com/favicon.ico",
    description: "Vector DBs for multimodal search (image/text/audio similarity). Power RAG apps; managed options scale. Free/open core.",
    pricing: "Free"
  },
  {
    name: "AWS Bedrock",
    primaryCategory: "AI Platform",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Limited",
    code: "Yes",
    reasoning: "Yes",
    website: "https://aws.amazon.com/bedrock",
    logo: "https://aws.amazon.com/favicon.ico",
    description: "Cloud platforms with multimodal foundations (Claude/Titan). Enterprise deployment/customization. Paid managed services.",
    pricing: "Paid"
  },
  {
    name: "IBM watsonx.ai",
    primaryCategory: "AI Platform",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Limited",
    code: "Yes",
    reasoning: "Yes",
    website: "https://www.ibm.com/watsonx",
    logo: "https://www.ibm.com/favicon.ico",
    description: "Cloud platforms with multimodal foundations (Claude/Titan). Enterprise deployment/customization. Paid managed services.",
    pricing: "Paid"
  },
  {
    name: "Azure AI Studio",
    primaryCategory: "AI Platform",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://azure.microsoft.com/en-us/products/ai-studio",
    logo: "https://azure.microsoft.com/favicon.ico",
    description: "Cloud platforms with multimodal foundations (Claude/Titan). Enterprise deployment/customization. Paid managed services.",
    pricing: "Paid"
  },
  {
    name: "Zilliz Cloud",
    primaryCategory: "Vector Database",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Limited",
    reasoning: "No",
    website: "https://zilliz.com",
    logo: "https://zilliz.com/favicon.ico",
    description: "Vector DBs for multimodal search (image/text/audio similarity). Power RAG apps; managed options scale. Free/open core.",
    pricing: "Freemium"
  },
  {
    name: "Lightning AI",
    primaryCategory: "AI Platform",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Yes",
    code: "Yes",
    reasoning: "Limited",
    website: "https://lightning.ai",
    logo: "https://lightning.ai/favicon.ico",
    description: "ML platforms for training/eval on video/image data. Label, iterate models—data teams' workflow. Freemium.",
    pricing: "Freemium"
  },
  {
    name: "Encord Active",
    primaryCategory: "AI Data Platform",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Limited",
    code: "No",
    reasoning: "Limited",
    website: "https://encord.com/active",
    logo: "https://encord.com/favicon.ico",
    description: "ML platforms for training/eval on video/image data. Label, iterate models—data teams' workflow. Freemium.",
    pricing: "Freemium"
  },
  {
    name: "Encord Annotate",
    primaryCategory: "AI Data Annotation",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Limited",
    code: "No",
    reasoning: "No",
    website: "https://encord.com/annotate",
    logo: "https://encord.com/favicon.ico",
    description: "ML platforms for training/eval on video/image data. Label, iterate models—data teams' workflow. Freemium.",
    pricing: "Freemium"
  },
  {
    name: "Zeroscope",
    primaryCategory: "Video Generation",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "No",
    code: "No",
    reasoning: "No",
    website: "https://huggingface.co/cerspense/zeroscope_v2_576w",
    logo: "https://huggingface.co/favicon.ico",
    description: "Specialized open models (video/audio/vision-language). Building blocks for custom multimodal stacks. Free.",
    pricing: "Free"
  },
  {
    name: "AudioLDM",
    primaryCategory: "Audio Generation",
    text: "Yes",
    image: "Limited",
    video: "No",
    audio: "Yes",
    code: "No",
    reasoning: "No",
    website: "https://audioldm.github.io",
    logo: "https://github.com/favicon.ico",
    description: "Specialized open models (video/audio/vision-language). Building blocks for custom multimodal stacks. Free.",
    pricing: "Free"
  },
  {
    name: "CLIP",
    primaryCategory: "Vision-Language AI",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Limited",
    website: "https://openai.com/research/clip",
    logo: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
    description: "Specialized open models (video/audio/vision-language). Building blocks for custom multimodal stacks. Free.",
    pricing: "Free"
  },
  {
    name: "BLIP",
    primaryCategory: "Vision-Language AI",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "No",
    reasoning: "Limited",
    website: "https://github.com/salesforce/BLIP",
    logo: "https://github.com/favicon.ico",
    description: "Specialized open models (video/audio/vision-language). Building blocks for custom multimodal stacks. Free.",
    pricing: "Free"
  },
  {
    name: "Google Cloud Vision API",
    primaryCategory: "AI API",
    text: "Yes",
    image: "Yes",
    video: "No",
    audio: "No",
    code: "Limited",
    reasoning: "Limited",
    website: "https://cloud.google.com/vision",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v2e90df8e87f10c504c3a4b2b64c6c8c39e7c61f2d7c4a8e3a8e3a8e3a8e3a8e3/cloud/images/favicons/onecloud/super_cloud.png",
    description: "Modular APIs for perception/understanding stacks. Integrate into apps—pay-per-use scalable. Paid.",
    pricing: "Paid"
  },
  {
    name: "Google Cloud Video Intelligence API",
    primaryCategory: "AI API",
    text: "Yes",
    image: "Yes",
    video: "Yes",
    audio: "Limited",
    code: "No",
    reasoning: "Limited",
    website: "https://cloud.google.com/video-intelligence",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v2e90df8e87f10c504c3a4b2b64c6c8c39e7c61f2d7c4a8e3a8e3a8e3a8e3a8e3/cloud/images/favicons/onecloud/super_cloud.png",
    description: "Modular APIs for perception/understanding stacks. Integrate into apps—pay-per-use scalable. Paid.",
    pricing: "Paid"
  },
  {
    name: "Google Cloud Speech-to-Text",
    primaryCategory: "AI API",
    text: "Yes",
    image: "No",
    video: "No",
    audio: "Yes",
    code: "Limited",
    reasoning: "No",
    website: "https://cloud.google.com/speech-to-text",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v2e90df8e87f10c504c3a4b2b64c6c8c39e7c61f2d7c4a8e3a8e3a8e3a8e3a8e3/cloud/images/favicons/onecloud/super_cloud.png",
    description: "Modular APIs for perception/understanding stacks. Integrate into apps—pay-per-use scalable. Paid.",
    pricing: "Paid"
  },
  {
    name: "Google Cloud Natural Language API",
    primaryCategory: "AI API",
    text: "Yes",
    image: "Limited",
    video: "No",
    audio: "Limited",
    code: "Limited",
    reasoning: "Yes",
    website: "https://cloud.google.com/natural-language",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v2e90df8e87f10c504c3a4b2b64c6c8c39e7c61f2d7c4a8e3a8e3a8e3a8e3a8e3/cloud/images/favicons/onecloud/super_cloud.png",
    description: "Modular APIs for perception/understanding stacks. Integrate into apps—pay-per-use scalable. Paid.",
    pricing: "Paid"
  },
  {
    name: "Google Translation API",
    primaryCategory: "AI API",
    text: "Yes",
    image: "Limited",
    video: "No",
    audio: "Limited",
    code: "No",
    reasoning: "No",
    website: "https://cloud.google.com/translate",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v2e90df8e87f10c504c3a4b2b64c6c8c39e7c61f2d7c4a8e3a8e3a8e3a8e3a8e3/cloud/images/favicons/onecloud/super_cloud.png",
    description: "Modular APIs for perception/understanding stacks. Integrate into apps—pay-per-use scalable. Paid.",
    pricing: "Paid"
  }
];

/**
 * Checks if a tool qualifies as multimodal (≥2 modalities with Yes or Limited support)
 */
export function isMultimodal(tool: MultimodalTool): boolean {
  const modalities = [
    tool.text,
    tool.image,
    tool.video,
    tool.audio,
    tool.code,
    tool.reasoning
  ];

  const supportedModalities = modalities.filter(m => m === "Yes" || m === "Limited");
  return supportedModalities.length >= 2;
}

/**
 * Gets all tools that qualify as multimodal
 */
export function getMultimodalTools(): MultimodalTool[] {
  return MULTIMODAL_TOOLS.filter(isMultimodal);
}

/**
 * Gets tools by category, filtered for multimodal support
 */
export function getToolsByCategory(category: string): MultimodalTool[] {
  return getMultimodalTools().filter(tool =>
    tool.primaryCategory.toLowerCase().includes(category.toLowerCase())
  );
}

/**
 * Converts tool name to kebab-case for URL routing
 */
export function toKebabCase(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Gets supported modalities as a human-readable list
 */
export function getSupportedModalities(tool: MultimodalTool): string {
  const modalities: string[] = [];

  if (tool.text === "Yes" || tool.text === "Limited") modalities.push("text");
  if (tool.image === "Yes" || tool.image === "Limited") modalities.push("image");
  if (tool.video === "Yes" || tool.video === "Limited") modalities.push("video");
  if (tool.audio === "Yes" || tool.audio === "Limited") modalities.push("audio");
  if (tool.code === "Yes" || tool.code === "Limited") modalities.push("code");
  if (tool.reasoning === "Yes" || tool.reasoning === "Limited") modalities.push("reasoning");

  if (modalities.length === 0) return "";
  if (modalities.length === 1) return modalities[0];
  if (modalities.length === 2) return `${modalities[0]} and ${modalities[1]}`;

  const last = modalities.pop();
  return `${modalities.join(", ")}, and ${last}`;
}

/**
 * Finds tools with overlapping modalities (for internal linking)
 */
export function findRelatedTools(tool: MultimodalTool, minOverlap: number = 2): MultimodalTool[] {
  return getMultimodalTools()
    .filter(other => other.name !== tool.name)
    .filter(other => {
      const modalities = ['text', 'image', 'video', 'audio', 'code', 'reasoning'] as const;
      const overlappingModalities = modalities.filter(modality => {
        const toolSupport = tool[modality];
        const otherSupport = other[modality];
        return (toolSupport === "Yes" || toolSupport === "Limited") &&
               (otherSupport === "Yes" || otherSupport === "Limited");
      });
      return overlappingModalities.length >= minOverlap;
    });
}

/**
 * Maps primary category to landing page category route
 */
export function getCategoryRoute(primaryCategory: string): string | null {
  const category = primaryCategory.toLowerCase();

  if (category.includes("image") || category.includes("design")) {
    return "/category/image-design";
  }
  if (category.includes("video") || category.includes("audio") || category.includes("avatar")) {
    return "/category/video-audio";
  }
  if (category.includes("code") || category.includes("developer") || category.includes("app builder") || category.includes("editor")) {
    return "/category/coding-tools";
  }
  if (category.includes("writing") || category.includes("content")) {
    return "/category/writing-content";
  }
  if (category.includes("automation") || category.includes("agent")) {
    return "/category/automation-agents";
  }
  if (category.includes("data") || category.includes("analytics") || category.includes("research") || category.includes("sports") || category.includes("betting") || category.includes("picks")) {
    return "/category/data-analytics";
  }

  return null;
}

/**
 * Category-specific eligibility filters
 */

/**
 * AI Image & Design → must also support text OR video
 */
export function isImageDesignEligible(tool: MultimodalTool): boolean {
  if (!isMultimodal(tool)) return false;

  const hasImage = tool.image === "Yes" || tool.image === "Limited";
  const hasText = tool.text === "Yes" || tool.text === "Limited";
  const hasVideo = tool.video === "Yes" || tool.video === "Limited";

  return hasImage && (hasText || hasVideo);
}

/**
 * AI Video & Audio → must involve ≥2 modalities
 */
export function isVideoAudioEligible(tool: MultimodalTool): boolean {
  if (!isMultimodal(tool)) return false;

  const hasVideo = tool.video === "Yes" || tool.video === "Limited";
  const hasAudio = tool.audio === "Yes" || tool.audio === "Limited";

  return hasVideo || hasAudio;
}

/**
 * AI Coding & Developer Tools → must accept natural language + produce executable output
 */
export function isCodingToolsEligible(tool: MultimodalTool): boolean {
  if (!isMultimodal(tool)) return false;

  const hasText = tool.text === "Yes" || tool.text === "Limited";
  const hasCode = tool.code === "Yes" || tool.code === "Limited";

  return hasText && hasCode;
}

/**
 * AI Writing & Content → must support text + at least one other modality
 */
export function isWritingContentEligible(tool: MultimodalTool): boolean {
  if (!isMultimodal(tool)) return false;

  const hasText = tool.text === "Yes" || tool.text === "Limited";
  return hasText && isMultimodal(tool);
}

/**
 * AI Automation & Agents → must support reasoning + at least one other modality
 */
export function isAutomationAgentsEligible(tool: MultimodalTool): boolean {
  if (!isMultimodal(tool)) return false;

  const hasReasoning = tool.reasoning === "Yes" || tool.reasoning === "Limited";
  const hasText = tool.text === "Yes" || tool.text === "Limited";
  const hasCode = tool.code === "Yes" || tool.code === "Limited";

  return hasReasoning && (hasText || hasCode);
}

/**
 * AI Data, Analytics & Research → must support reasoning + text
 */
export function isDataAnalyticsEligible(tool: MultimodalTool): boolean {
  if (!isMultimodal(tool)) return false;

  const hasReasoning = tool.reasoning === "Yes" || tool.reasoning === "Limited";
  const hasText = tool.text === "Yes" || tool.text === "Limited";

  return hasReasoning && hasText;
}

/**
 * Gets tools for a specific category page with category-specific filtering
 */
export function getToolsForCategory(categorySlug: string): MultimodalTool[] {
  const allTools = getMultimodalTools();

  switch (categorySlug) {
    case "image-design":
      return allTools.filter(isImageDesignEligible);
    case "video-audio":
      return allTools.filter(isVideoAudioEligible);
    case "coding-tools":
      return allTools.filter(isCodingToolsEligible);
    case "writing-content":
      return allTools.filter(isWritingContentEligible);
    case "automation-agents":
      return allTools.filter(isAutomationAgentsEligible);
    case "data-analytics":
      return allTools.filter(isDataAnalyticsEligible);
    default:
      return allTools;
  }
}
