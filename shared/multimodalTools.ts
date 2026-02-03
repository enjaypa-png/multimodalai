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
    description: "Google's most capable multimodal AI model.",
    pricing: "Freemium",
    votes: 2156,
    isTrending: true
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/crIfnNqNmxtYFOBP.PNG"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/lmAoPOWSLYdRLWRk.PNG"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/LfNPZELvQFxTUcYp.PNG"
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
    logo: "https://pika.art/favicon.ico"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/HCrfhyOIYYJMGgkI.PNG"
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
    logo: "https://www.heygen.com/favicon.ico"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/LmOjyWikdDLoAluu.PNG"
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
    logo: "https://www.cursor.sh/favicon.ico"
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
    description: "Multimodal AI platform for automation and agents.",
    pricing: "Freemium",
    votes: 1834,
    isNew: true
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/gAMHoVgxZMoPyNfl.PNG"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/NAWOfgKiFvkiYRFc.PNG"
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
    logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
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
    logo: "https://www.canva.com/favicon.ico"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/iBJnKBoMmQyCpwFN.PNG"
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
    logo: "https://elevenlabs.io/favicon.ico"
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
    logo: "https://stability.ai/favicon.ico"
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
    logo: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png"
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
    logo: "https://klingai.com/favicon.ico"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/LcZkzDLyPxGckBYe.PNG"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/ioOAnMNdWkcwalHR.PNG"
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
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/113166136/vgFYeNUsNqqUNgAU.PNG"
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
    logo: "https://www.geniussports.com/favicon.ico"
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
    logo: "https://profitx.ai/favicon.ico"
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
    logo: "https://leans.ai/favicon.ico"
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
    description: "Open-source vision-language assistant for image understanding and VQA.",
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
    description: "Meta's model fusing six modalities (text, video, audio, depth, thermal, IMU) into one embedding space.",
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
    description: "Vision-language model for VQA and detailed image-based descriptions.",
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
    description: "OpenAI's advanced text-to-video generation up to around a minute per clip.",
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
    description: "Suite including Stable Diffusion variants and other multimodal generative tools.",
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
    description: "Managed platform exposing multimodal models (vision+text, video APIs).",
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
    description: "Framework for building custom multimodal models (text, audio, vision) and agents.",
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
    description: "Intel's deployment/optimization toolkit for multimodal models across CPU/GPU/edge.",
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
    description: "Library with many multimodal architectures (vision-language, audio-text, etc.).",
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
    description: "Host for thousands of multimodal models (CLIP, BLIP, LLaVA, etc.).",
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
    description: "PyTorch extension specifically for cross-modal learning tasks.",
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
    description: "Low-code UI for serving multimodal models with image, audio, text inputs.",
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
    description: "Hosting layer for deploying interactive multimodal demos.",
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
    description: "Framework for building agentic apps that wire together multimodal models and tools.",
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
    description: "Orchestration framework for complex multimodal/agent workflows.",
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
    description: "Vector database used for multimodal (image, text, audio) retrieval and search.",
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
    description: "Embedding-native DB commonly used for multimodal RAG search.",
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
    description: "Managed access to multiple foundation models including multimodal ones.",
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
    description: "Platform with tools for multimodal document AI and model deployment.",
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
    description: "Includes document intelligence and multimodal model integration.",
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
    description: "Managed Milvus service for multimodal vector search.",
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
    description: "Platform for building and serving multimodal deep learning apps.",
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
    description: "Platform for multimodal data labeling and model evaluation (image, video, etc.).",
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
    description: "Annotation tooling for complex multimodal datasets.",
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
    description: "Open-source video generation model used in some multimodal pipelines.",
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
    description: "Audio generation model plugged into multimodal systems for sound design.",
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
    description: "OpenAI's vision-language model for image-text similarity and retrieval.",
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
    description: "Salesforce's image captioning and VQA model family.",
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
    description: "Image analysis API used inside broader multimodal stacks.",
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
    description: "Video scene, object, and text understanding API.",
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
    description: "Audio-to-text building block for multimodal assistants.",
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
    description: "Text analysis that often pairs with image/audio inputs.",
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
    description: "Text translation often embedded in multilingual multimodal flows.",
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
