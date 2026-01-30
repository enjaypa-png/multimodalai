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
}

/**
 * Multimodal-qualified tools (≥2 modalities)
 */
export const MULTIMODAL_TOOLS: MultimodalTool[] = [
  {
    name: "GPT-4o",
    primaryCategory: "Multimodal AI Model",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://openai.com/index/gpt-4o",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
  },
  {
    name: "ChatGPT",
    primaryCategory: "Multimodal AI App",
    text: "Yes",
    image: "Yes",
    video: "Limited",
    audio: "Yes",
    code: "Yes",
    reasoning: "Yes",
    website: "https://chat.openai.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
  },
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
    logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
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
    logo: "https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-app-icon.png&w=96&q=75"
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
    logo: "https://cdn.runwayml.com/assets/favicon.png"
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
    logo: "https://lumalabs.ai/favicon.ico"
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
    logo: "https://www.synthesia.io/favicon.ico"
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
    logo: "https://replit.com/public/images/logo-small.png"
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
    logo: "https://manus.im/favicon.ico"
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
    logo: "https://www.perplexity.ai/favicon.ico"
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
    logo: "https://www.midjourney.com/favicon.ico"
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
    logo: "https://www.descript.com/favicon.ico"
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
    logo: "https://www.d-id.com/favicon.ico"
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
    logo: "https://www.jasper.ai/favicon.ico"
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
    logo: "https://www.sports-ai.dev/favicon.ico"
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
