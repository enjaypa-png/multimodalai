import { Link } from "wouter";
import { getMultimodalTools, toKebabCase, getSupportedModalities } from "../../../shared/multimodalTools";

// Get top 4 multimodal tools for featured section
const allTools = getMultimodalTools();
const featuredTools = allTools.slice(0, 4); // GPT-4o, ChatGPT, Google Gemini, Claude

// For legacy compatibility, keeping old structure (not used anymore)
const oldFeaturedTools = [
  {
    name: "Midjourney",
    description: "Hyper-realistic image generation from text prompts.",
    fullDescription: "Midjourney is a community-funded research lab renowned for creating some of the most aesthetically pleasing AI models in the world. It specializes in hyper-realistic image generation from text prompts, transforming written descriptions into stunning visual artwork. As a premier text-to-image AI platform, Midjourney has become an indispensable tool for artists, designers, marketers, and creative professionals who require high-quality, AI-generated imagery.",
    rating: "4.8",
    tags: ["Text", "Image"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png",
    website: "https://www.midjourney.com/",
    keyFeatures: [
      {
        name: "Text-to-Image Generation",
        description: "Creates stunning, photorealistic images from detailed text prompts."
      },
      {
        name: "Advanced AI Models",
        description: "Utilizes cutting-edge generative AI for superior image quality."
      },
      {
        name: "Multiple Resolution Options",
        description: "Generates images in both Standard Definition (SD) and High Definition (HD)."
      },
      {
        name: "Relax Mode",
        description: "Offers unlimited image generations on Standard, Pro, and Mega plans."
      },
      {
        name: "Stealth Mode",
        description: "Allows users to keep their creations private (Pro and Mega plans only)."
      },
      {
        name: "Fast GPU Processing",
        description: "Ensures quick generation times with Fast GPU mode."
      },
      {
        name: "Commercial Use Rights",
        description: "Grants full commercial usage rights to all paid subscribers."
      }
    ],
    useCases: [
      "Digital Art Creation",
      "Marketing & Advertising",
      "Concept Design",
      "Product Visualization",
      "Book Covers & Illustrations",
      "Web Design"
    ],
    pricing: [
      {
        name: "Basic",
        monthlyPrice: "$10",
        annualPrice: "$96 ($8/mo)",
        features: ["3.3 hours/month Fast GPU", "General commercial terms"]
      },
      {
        name: "Standard",
        monthlyPrice: "$30",
        annualPrice: "$288 ($24/mo)",
        features: ["15 hours/month Fast GPU", "Unlimited Relax mode", "General commercial terms"]
      },
      {
        name: "Pro",
        monthlyPrice: "$60",
        annualPrice: "$576 ($48/mo)",
        features: ["30 hours/month Fast GPU", "Unlimited Relax mode", "Stealth Mode", "General commercial terms"]
      },
      {
        name: "Mega",
        monthlyPrice: "$120",
        annualPrice: "$1,152 ($96/mo)",
        features: ["60 hours/month Fast GPU", "Unlimited Relax mode", "Stealth Mode", "General commercial terms"]
      }
    ]
  },
  {
    name: "Runway Gen-2",
    description: "Multimodal video generation system.",
    fullDescription: "Runway is a pioneering AI research company focused on building foundational General World Models capable of simulating reality. Runway Gen-2, now evolved into the top-rated Gen-4.5 video model, is a breakthrough multimodal AI system that generates high-quality videos from text prompts, images, or existing video clips. The platform offers unprecedented visual fidelity, creative control, and cinematic realism, making it the preferred solution for filmmakers, content creators, and marketers.",
    rating: "4.6",
    tags: ["Text", "Image", "Video"],
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_k2yM-jCgJb0gD0gJ0gJ0gJ0gJ0gJ0gJ0gJ0g=s900-c-k-c0x00ffffff-no-rj",
    website: "https://runwayml.com/",
    keyFeatures: [
      {
        name: "Text-to-Video Generation",
        description: "Creates cinematic videos from written descriptions using Gen-4.5."
      },
      {
        name: "Image-to-Video Conversion",
        description: "Transforms static images into dynamic video sequences."
      },
      {
        name: "Video Editing AI (Aleph)",
        description: "Provides advanced AI-powered video editing capabilities."
      },
      {
        name: "Performance Capture (Act-Two)",
        description: "Captures and transfers performances to digital characters."
      },
      {
        name: "4K Resolution Upscaling",
        description: "Exports videos in ultra-high definition."
      },
      {
        name: "Custom Voice Creation",
        description: "Generates custom voices for lip sync and text-to-speech."
      }
    ],
    useCases: [
      "Film Production",
      "Marketing & Advertising",
      "Social Media Content",
      "Music Videos",
      "Game Development",
      "Architecture Visualization"
    ],
    pricing: [
      {
        name: "Free",
        monthlyPrice: "$0",
        features: ["125 credits (one-time)", "Basic features"]
      },
      {
        name: "Standard",
        monthlyPrice: "$12",
        annualPrice: "$144",
        features: ["625 credits/month", "Standard features"]
      },
      {
        name: "Pro",
        monthlyPrice: "$28",
        annualPrice: "$336",
        features: ["2,250 credits/month", "Pro features", "Priority processing"]
      },
      {
        name: "Unlimited",
        monthlyPrice: "$76",
        annualPrice: "$912",
        features: ["2,250 credits + Unlimited Relax", "All features", "Highest priority"]
      }
    ]
  },
  {
    name: "GPT-4o",
    description: "Omnimodel capable of reasoning across audio, vision, and text.",
    fullDescription: "GPT-4o (\"o\" for \"omni\") is OpenAI's flagship multimodal AI model, representing a significant leap toward natural human-computer interaction. Unlike previous models, GPT-4o is trained end-to-end across text, vision, and audio within a single neural network. This revolutionary architecture enables the model to reason across all modalities in real time, accepting any combination of inputs and generating text, audio, and image outputs. With response times matching human conversation, GPT-4o delivers GPT-4 Turbo-level performance while being 50% cheaper and significantly faster.",
    rating: "4.9",
    tags: ["Text", "Audio", "Image", "Video"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    website: "https://openai.com/",
    keyFeatures: [
      {
        name: "True Multimodal Processing",
        description: "A single neural network processes text, audio, vision, and video inputs simultaneously."
      },
      {
        name: "Real-Time Audio Interaction",
        description: "Responds to audio inputs in as little as 232 milliseconds."
      },
      {
        name: "Advanced Vision Understanding",
        description: "Superior image and video comprehension compared to previous models."
      },
      {
        name: "Multilingual Excellence",
        description: "Significant improvements in non-English language processing."
      },
      {
        name: "Emotional Intelligence",
        description: "Detects and expresses tone, emotion, laughter, and singing in audio."
      },
      {
        name: "Real-Time Translation",
        description: "Provides instant translation across languages with audio and text."
      }
    ],
    useCases: [
      "Customer Service",
      "Education & Tutoring",
      "Accessibility",
      "Content Creation",
      "Coding & Development",
      "Research & Analysis"
    ],
    pricing: [
      {
        name: "ChatGPT Free",
        monthlyPrice: "$0",
        features: ["Limited GPT-4o access", "Basic features"]
      },
      {
        name: "ChatGPT Plus",
        monthlyPrice: "$20",
        features: ["Unlimited GPT-4o access", "Subject to usage caps", "Priority access"]
      },
      {
        name: "ChatGPT Team",
        monthlyPrice: "$25/user",
        annualPrice: "Annual billing",
        features: ["Team collaboration", "Admin controls", "Enhanced limits"]
      },
      {
        name: "API Pricing",
        monthlyPrice: "Pay-as-you-go",
        features: ["Starting at $2.50 per 1M input tokens", "Flexible usage", "Volume discounts"]
      }
    ]
  },
  {
    name: "Stable Diffusion 3",
    description: "Next-generation text-to-image model.",
    fullDescription: "Stable Diffusion 3 is Stability AI's most advanced text-to-image generation model, built on the innovative Multimodal Diffusion Transformer (MMDiT) architecture. This model delivers exceptional image quality, photorealism, and unprecedented text rendering capabilities. The model suite, ranging from 800M to 8B parameters, is optimized for consumer hardware, making high-quality AI image generation accessible to a broad audience. Stable Diffusion 3 excels at understanding complex prompts, spatial reasoning, and multi-subject generation, setting a new standard for open and accessible AI image generation.",
    rating: "4.5",
    tags: ["Text", "Image"],
    icon: "https://stability.ai/images/favicon.png",
    website: "https://stability.ai/",
    keyFeatures: [
      {
        name: "Multimodal Diffusion Transformer",
        description: "Revolutionary MMDiT architecture with flow matching for superior quality."
      },
      {
        name: "Exceptional Photorealism",
        description: "Delivers images with outstanding detail, color accuracy, and realistic lighting."
      },
      {
        name: "Advanced Typography",
        description: "Unprecedented text quality with accurate spelling, kerning, and letter formation."
      },
      {
        name: "Complex Prompt Understanding",
        description: "Comprehends long, detailed prompts with spatial reasoning."
      },
      {
        name: "Resource-Efficient",
        description: "Optimized for consumer GPUs with low VRAM footprint."
      },
      {
        name: "Open Source",
        description: "Available under a Community License for broad accessibility."
      }
    ],
    useCases: [
      "Professional Art & Design",
      "Marketing & Advertising",
      "Product Visualization",
      "Graphic Design",
      "Game Development",
      "Architecture Visualization"
    ],
    pricing: [
      {
        name: "Free Trial",
        monthlyPrice: "$0",
        features: ["25 free credits", "Test all features"]
      },
      {
        name: "API Credits",
        monthlyPrice: "Pay-as-you-go",
        features: ["$0.01 per credit", "Starting from 0.9 credits per generation", "Flexible usage"]
      },
      {
        name: "Open Source",
        monthlyPrice: "Free",
        features: ["Download model weights", "Non-commercial use", "Community License"]
      }
    ]
  }
];

export default function FeaturedPlatforms() {
  return (
    <section className="container py-16 border-t border-white/[0.05]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Featured Platforms</h2>
        <p className="text-gray-400">Hand-picked multimodal tools defining the state of the art.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTools.map((tool, index) => (
          <Link key={index} href={`/tool/${toKebabCase(tool.name)}`}>
            <a className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-blue-900/10 cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center overflow-hidden">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1 leading-relaxed">
                {tool.name} is a multimodal AI platform that supports {getSupportedModalities(tool)}.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] font-medium text-gray-500">
                  {tool.primaryCategory}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
