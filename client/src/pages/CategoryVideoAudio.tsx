import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Star, ExternalLink, ChevronRight, Video, Mic, Type, User, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// TypeScript interfaces
interface Tool {
  name: string;
  website: string;
  primaryCategory: string;
  secondaryCategories: string[];
  description: string;
  keyFeatures: string[];
  primaryUseCase: string;
  targetUser: string;
  pricingModel: "Free" | "Freemium" | "Paid" | "Enterprise";
  badge?: string;
}

// Tool Data - All 16 tools
const tools: Tool[] = [
  // Video Generation (4)
  {
    name: "Runway",
    website: "https://runwayml.com/",
    primaryCategory: "Video Generation",
    secondaryCategories: ["Video Editing"],
    description: "Advanced AI video platform for generating and editing high-quality video from text, images, or other videos.",
    keyFeatures: [
      "Generate video from text prompts (Text to Video)",
      "Animate static images (Image to Video)",
      "Transfer the style of any image or prompt to your video",
      "AI-powered editing tools like inpainting and motion tracking"
    ],
    primaryUseCase: "Marketing videos, short films, social media content",
    targetUser: "Creators, Marketers, Filmmakers",
    pricingModel: "Freemium",
    badge: "Popular"
  },
  {
    name: "Luma Dream Machine",
    website: "https://lumalabs.ai/",
    primaryCategory: "Video Generation",
    secondaryCategories: [],
    description: "Production-ready AI model for creating high-quality, realistic videos from text and images.",
    keyFeatures: [
      "Generates high-fidelity, cinematic video from text prompts",
      "Supports image-to-video generation for animating static images",
      "Offers precise keyframe and character reference controls",
      "API access for developers to build custom applications"
    ],
    primaryUseCase: "Creative storytelling, marketing campaigns, concept visualization",
    targetUser: "Creators, Developers, Enterprise",
    pricingModel: "Freemium"
  },
  {
    name: "Pika",
    website: "https://pika.art/",
    primaryCategory: "Video Generation",
    secondaryCategories: ["Video Editing"],
    description: "Idea-to-video platform that brings creative concepts to life with powerful generative AI.",
    keyFeatures: [
      "Transforms text, images, or videos into new creations",
      "Features like Lip Sync, Sound Effects, and video expansion",
      "In-app editing tools to modify and refine generated videos",
      "API access for custom integrations"
    ],
    primaryUseCase: "Social media content, music videos, character animation",
    targetUser: "Creators, Marketers",
    pricingModel: "Freemium"
  },
  {
    name: "Kling AI",
    website: "https://kling.kuaishou.com/",
    primaryCategory: "Video Generation",
    secondaryCategories: [],
    description: "Powerful text-to-video model excelling at realistic motion simulation and complex character/scene compositions.",
    keyFeatures: [
      "Generates 1080p video up to 2 minutes long",
      "Simulates real-world physics and complex movements",
      "Supports multi-shot generation and consistent character creation",
      "Advanced prompt understanding for detailed scenes"
    ],
    primaryUseCase: "Short films, advertising, dynamic scene creation",
    targetUser: "Creators, Developers",
    pricingModel: "Freemium"
  },
  // Video Editing (4)
  {
    name: "Descript",
    website: "https://www.descript.com/",
    primaryCategory: "Video Editing",
    secondaryCategories: ["Subtitles", "Voiceover"],
    description: "All-in-one AI video and podcast editor that makes editing as simple as editing a document.",
    keyFeatures: [
      "Edit video by editing the transcribed text",
      "AI-powered tools like Studio Sound, Green Screen, and Eye Contact correction",
      "Automatically removes filler words (\"ums\", \"uhs\")",
      "Overdub your voice or use stock AI voices"
    ],
    primaryUseCase: "E-learning, marketing videos, podcasts, internal communications",
    targetUser: "Marketers, Creators, Businesses",
    pricingModel: "Freemium",
    badge: "Popular"
  },
  {
    name: "Veed.io",
    website: "https://www.veed.io/",
    primaryCategory: "Video Editing",
    secondaryCategories: ["Subtitles", "Video Generation"],
    description: "Fast and easy-to-use online AI video editor with a full suite of powerful editing tools.",
    keyFeatures: [
      "AI-powered one-click editing features (background noise removal, etc.)",
      "Automatic subtitle and caption generation",
      "Text-to-video generation and stock media library",
      "Screen recorder and teleprompter built-in"
    ],
    primaryUseCase: "Social media marketing, training videos, online courses",
    targetUser: "Marketers, Creators, Educators",
    pricingModel: "Freemium"
  },
  {
    name: "Opus Clip",
    website: "https://www.opus.pro/",
    primaryCategory: "Video Editing",
    secondaryCategories: ["Subtitles"],
    description: "AI-powered tool that repurposes long videos into viral short clips for social media in one click.",
    keyFeatures: [
      "AI Curation identifies the most compelling hooks in a video",
      "Active Speaker Detection and auto-reframing for optimal viewing",
      "Automatically adds animated captions in various styles",
      "Virality Score to predict the performance potential of clips"
    ],
    primaryUseCase: "Social media growth, content repurposing",
    targetUser: "Creators, Marketers, Agencies",
    pricingModel: "Freemium"
  },
  {
    name: "CapCut",
    website: "https://www.capcut.com/",
    primaryCategory: "Video Editing",
    secondaryCategories: ["Subtitles"],
    description: "Versatile and user-friendly video editor with a rich set of AI features for creative content.",
    keyFeatures: [
      "AI-powered tools like auto captions, text-to-speech, and video stabilization",
      "Extensive library of effects, filters, and audio",
      "Template-based editing for quick creation of trending videos",
      "Multi-platform support (desktop, mobile, and web)"
    ],
    primaryUseCase: "Social media content, personal videos, short-form ads",
    targetUser: "Creators, Social Media Managers",
    pricingModel: "Freemium"
  },
  // Avatars (3)
  {
    name: "Synthesia",
    website: "https://www.synthesia.io/",
    primaryCategory: "Avatars",
    secondaryCategories: ["Video Generation", "Voiceover"],
    description: "The #1 rated AI video platform for creating professional videos with AI avatars and voiceovers at scale.",
    keyFeatures: [
      "160+ diverse, high-quality stock AI avatars",
      "Create a custom, photorealistic avatar of yourself",
      "Generate voiceovers in over 140 languages",
      "Enterprise-ready with SCORM compatibility and robust security"
    ],
    primaryUseCase: "Corporate training, internal communications, product marketing",
    targetUser: "Enterprise, Businesses",
    pricingModel: "Paid",
    badge: "Enterprise"
  },
  {
    name: "HeyGen",
    website: "https://www.heygen.com/",
    primaryCategory: "Avatars",
    secondaryCategories: ["Video Generation", "Voiceover"],
    description: "Leading AI video generator with lifelike avatars for creating engaging marketing and sales videos.",
    keyFeatures: [
      "Large library of realistic stock avatars and custom avatar creation",
      "Automated video translation and localization features",
      "Text-to-video and image-to-video capabilities",
      "API for scalable video creation"
    ],
    primaryUseCase: "Marketing videos, sales outreach, e-learning",
    targetUser: "Marketers, Sales Teams, Creators",
    pricingModel: "Freemium"
  },
  {
    name: "D-ID",
    website: "https://www.d-id.com/",
    primaryCategory: "Avatars",
    secondaryCategories: ["Video Generation"],
    description: "Creative AI platform that generates videos from photos, featuring talking avatars and digital people.",
    keyFeatures: [
      "Animate still photos to create talking avatars",
      "Generates video from text or audio inputs",
      "API for developers to build real-time streaming avatar experiences",
      "Supports a wide range of languages and voices"
    ],
    primaryUseCase: "Digital marketing, e-learning, creative projects",
    targetUser: "Developers, Marketers, Creators",
    pricingModel: "Freemium"
  },
  // Subtitles (2)
  {
    name: "Submagic",
    website: "https://www.submagic.co/",
    primaryCategory: "Subtitles",
    secondaryCategories: ["Video Editing"],
    description: "Top AI tool for creating shorts with trendy, animated captions, B-rolls, and zooms in seconds.",
    keyFeatures: [
      "Generates accurate, animated captions in popular styles (e.g., Alex Hormozi)",
      "Automatically adds relevant B-roll footage and zoom effects",
      "Includes auto-generated sound effects and background music",
      "Designed to increase engagement for short-form content"
    ],
    primaryUseCase: "Social media shorts (Reels, TikToks, Shorts)",
    targetUser: "Creators, Social Media Managers",
    pricingModel: "Freemium"
  },
  {
    name: "Happy Scribe",
    website: "https://www.happyscribe.com/",
    primaryCategory: "Subtitles",
    secondaryCategories: [],
    description: "Leading platform for transcription and subtitle services, combining AI with human proofreaders for accuracy.",
    keyFeatures: [
      "AI-powered transcription with high accuracy",
      "Human-made services for 99% accuracy",
      "Interactive editors for reviewing and editing transcripts and subtitles",
      "Supports over 120 languages and various export formats"
    ],
    primaryUseCase: "Video accessibility, content localization, academic research",
    targetUser: "Businesses, Media Companies, Educators",
    pricingModel: "Paid"
  },
  // Voiceover/Audio (3)
  {
    name: "ElevenLabs",
    website: "https://elevenlabs.io/",
    primaryCategory: "Voiceover",
    secondaryCategories: [],
    description: "Most realistic AI voice platform, offering expressive text-to-speech and voice cloning for any project.",
    keyFeatures: [
      "Generates emotionally rich and lifelike speech in dozens of languages",
      "Create a perfect digital copy of your own voice (Voice Cloning)",
      "Design entirely new synthetic voices from scratch",
      "Low-latency API for building real-time voice agents"
    ],
    primaryUseCase: "Audiobooks, video game characters, content creation, accessibility",
    targetUser: "Creators, Developers, Enterprises",
    pricingModel: "Freemium",
    badge: "Most Realistic"
  },
  {
    name: "Murf AI",
    website: "https://murf.ai/",
    primaryCategory: "Voiceover",
    secondaryCategories: [],
    description: "Versatile AI voice generator with a library of 200+ ultra-realistic voices for professional voiceovers.",
    keyFeatures: [
      "Extensive library of voices across 20+ languages and accents",
      "Advanced customization of pitch, speed, and emphasis",
      "AI Voice Changer to convert any recording into a professional voiceover",
      "Team collaboration features and enterprise-level security"
    ],
    primaryUseCase: "E-learning, corporate videos, advertisements, podcasts",
    targetUser: "Businesses, Marketers, Educators",
    pricingModel: "Freemium"
  },
  {
    name: "Speechify",
    website: "https://speechify.com/",
    primaryCategory: "Voiceover",
    secondaryCategories: [],
    description: "AI text-to-speech platform that can read anything on your screen in a natural, human-like voice.",
    keyFeatures: [
      "Reads documents, articles, emails, and PDFs aloud",
      "Offers a wide range of high-quality AI voices and languages",
      "Voice cloning to create a digital version of your own voice",
      "Available as a browser extension and mobile app"
    ],
    primaryUseCase: "Accessibility, productivity, e-learning",
    targetUser: "Individuals, Students, Professionals",
    pricingModel: "Freemium"
  }
];

// All available subcategories
const allSubcategories = [
  "All Tools",
  "Video Generation",
  "Video Editing",
  "Avatars",
  "Subtitles",
  "Voiceover"
];

// Get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Video Generation":
    case "Video Editing":
      return Video;
    case "Voiceover":
      return Mic;
    case "Subtitles":
      return Type;
    case "Avatars":
      return User;
    default:
      return Play;
  }
};

// Get pricing badge color
const getPricingColor = (pricing: string) => {
  switch (pricing) {
    case "Free":
      return "bg-green-500/10 border-green-500/20 text-green-400";
    case "Freemium":
      return "bg-blue-500/10 border-blue-500/20 text-blue-400";
    case "Paid":
      return "bg-orange-500/10 border-orange-500/20 text-orange-400";
    case "Enterprise":
      return "bg-purple-500/10 border-purple-500/20 text-purple-400";
    default:
      return "bg-gray-500/10 border-gray-500/20 text-gray-400";
  }
};

export default function CategoryVideoAudio() {
  const [selectedFilter, setSelectedFilter] = useState("All Tools");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  // Filter tools based on selected category
  const filteredTools = selectedFilter === "All Tools"
    ? tools
    : tools.filter(tool =>
        tool.primaryCategory === selectedFilter ||
        tool.secondaryCategories.includes(selectedFilter)
      );

  // Count tools per category
  const getCategoryCount = (category: string) => {
    if (category === "All Tools") return tools.length;
    return tools.filter(tool =>
      tool.primaryCategory === category ||
      tool.secondaryCategories.includes(category)
    ).length;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#020104]/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
                <div className="w-3 h-3 bg-white rounded-full shadow-inner" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">MultimodalAI</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/directory" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Directory</Link>
            <Link href="/leaderboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Leaderboard</Link>
            <Link href="/insights" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Insights</Link>
          </nav>

          {/* Submit Button */}
          <Link href="/submit">
            <button className="rounded-full border border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white h-9 px-4 text-sm font-medium transition-all">
              Submit Tool
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-white/[0.05] bg-[#020104]">
          <div className="container py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-gray-400">Browse by Category</span>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-white font-medium">AI Video & Audio</span>
            </div>
          </div>
        </div>

        {/* Category Header */}
        <section className="container py-12 border-b border-white/[0.05]">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">AI Video & Audio</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Video generation, editing, avatars, subtitles, and voiceover tools.
              These AI-powered platforms help creators, marketers, and businesses produce professional video and audio content at scale.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="container py-8 border-b border-white/[0.05]">
          <div className="flex flex-wrap gap-3">
            {allSubcategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedFilter === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "bg-white/[0.03] text-gray-400 hover:bg-white/[0.05] hover:text-white border border-white/[0.08]"
                }`}
              >
                {category} {category !== "All Tools" && `(${getCategoryCount(category)})`}
              </button>
            ))}
          </div>
        </section>

        {/* Tool Cards */}
        <section className="container py-12">
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Showing {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => {
              const CategoryIcon = getCategoryIcon(tool.primaryCategory);
              return (
                <div
                  key={index}
                  onClick={() => setSelectedTool(tool)}
                  className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-blue-900/10 cursor-pointer"
                >
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {tool.badge && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
                        {tool.badge}
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getPricingColor(tool.pricingModel)}`}>
                      {tool.pricingModel}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-medium text-blue-300">
                      {tool.primaryCategory}
                    </span>
                    {tool.secondaryCategories.slice(0, 1).map((cat, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-medium text-purple-300">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full py-2 px-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium transition-colors border border-white/[0.08] hover:border-white/[0.15]">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No tools found for this category.</p>
            </div>
          )}
        </section>
      </main>

      {/* Tool Detail Modal */}
      <Dialog open={selectedTool !== null} onOpenChange={(open) => !open && setSelectedTool(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0A0A0B] border-white/[0.08] text-white">
          {selectedTool && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      {(() => {
                        const Icon = getCategoryIcon(selectedTool.primaryCategory);
                        return <Icon className="w-8 h-8 text-blue-400" />;
                      })()}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-white mb-1">
                        {selectedTool.name}
                      </DialogTitle>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-3 py-1 rounded-md text-xs font-medium border ${getPricingColor(selectedTool.pricingModel)}`}>
                          {selectedTool.pricingModel}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300">
                          {selectedTool.primaryCategory}
                        </span>
                        {selectedTool.secondaryCategories.map((cat, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <DialogDescription className="text-gray-300 text-base leading-relaxed">
                  {selectedTool.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                {/* Target User & Use Case */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Target User</h4>
                    <p className="text-gray-300 text-sm">{selectedTool.targetUser}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Primary Use Case</h4>
                    <p className="text-gray-300 text-sm">{selectedTool.primaryUseCase}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedTool.keyFeatures.map((feature, index) => (
                      <div key={index} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <p className="text-gray-300 text-sm leading-relaxed">• {feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit Website Button */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <a
                    href={selectedTool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  >
                    Visit Official Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-12 bg-[#020104]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white/[0.05] flex items-center justify-center">
              <div className="w-2 h-2 bg-white/50 rounded-full" />
            </div>
            <span className="text-sm font-medium text-gray-500">MultimodalAI Directory</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2026 Multimodal AI Directory. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
