import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Star, ExternalLink, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// TypeScript interfaces
interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

interface Tool {
  name: string;
  website: string;
  categoryTags: string[];
  description: string;
  fullDescription: string;
  keyFeatures: string[];
  useCases: string[];
  pricing: PricingPlan[];
  rating: string;
  additionalInfo?: string[];
}

// Tool Data
const tools: Tool[] = [
  {
    name: "Canva",
    website: "https://www.canva.com/",
    categoryTags: ["Logo Design", "Image Upscaling", "Background Removal"],
    description: "Comprehensive visual design platform with AI logo generator powered by Dream Lab for professional branding.",
    fullDescription: "Canva is a comprehensive visual design platform featuring a powerful AI logo generator powered by Dream Lab, a high-fidelity image generation system. The platform enables users to build brand identity foundations by creating professional logos from simple text prompts, making it accessible for entrepreneurs, small businesses, and designers. Canva's AI logo generator transforms natural language descriptions into stunning, high-quality logo designs that can be used across various branding materials including business cards, flyers, and company merchandise. With AI-assisted user-friendly prompting and a wide variety of generation styles, Canva democratizes professional logo design while offering extensive customization options and seamless integration with the broader Canva design ecosystem.",
    keyFeatures: [
      "AI Logo Generator (Dream Lab): High-fidelity image generation from text prompts",
      "Natural Language Prompting: AI-assisted, user-friendly text-to-image conversion",
      "Multiple Generation Styles: 3D Render, Illustration, Sketch (Color), and more",
      "Reference Image Upload: Maintain consistent branding with reference images",
      "AI Upscaling: Sharpen results with built-in upscaling capabilities",
      "Style Customization: Explore and apply different visual styles to logos",
      "Brand Color Integration: Incorporate specific brand colors into designs",
      "Business Name Integration: Include business names directly in logo generation",
      "Instant Generation: Create professional logos in seconds",
      "Copy to Clipboard: Easy integration with other Canva designs",
      "Download Options: Export logos for various uses",
      "Magic Studio: Suite of AI-powered design tools",
      "Photo Editor: Comprehensive image editing capabilities",
      "Background Remover: AI-powered background removal",
      "Magic Switch (Pro): Transform designs across formats",
      "Translate (Pro): Multilingual design capabilities"
    ],
    useCases: [
      "Startup Branding",
      "Small Business Identity",
      "Rebranding Projects",
      "Business Cards",
      "Marketing Materials",
      "Company Merchandise",
      "Social Media Branding",
      "Website Headers",
      "App Icons",
      "Event Branding",
      "Product Packaging",
      "Presentation Graphics",
      "Email Signatures"
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        features: [
          "Use AI logo generator up to 20 times per month",
          "Basic Canva design tools",
          "Access to templates",
          "Limited AI features"
        ]
      },
      {
        name: "Canva Pro",
        price: "Contact for pricing",
        features: [
          "Unlimited AI logo generation",
          "Magic Switch for format transformation",
          "Translate for multilingual designs",
          "Advanced AI features",
          "Premium templates and assets",
          "Brand Kit for consistent branding",
          "Background remover",
          "Magic Studio full access",
          "Priority support"
        ]
      },
      {
        name: "Canva for Teams",
        price: "Contact for pricing",
        features: [
          "Everything in Pro",
          "Team collaboration tools",
          "Brand management",
          "Workflow approvals"
        ]
      },
      {
        name: "Canva Enterprise",
        price: "Custom pricing",
        features: [
          "Advanced security and controls",
          "SSO integration",
          "Dedicated account management",
          "Custom contracts"
        ]
      }
    ],
    rating: "4.8",
    additionalInfo: [
      "Trusted by millions of users worldwide",
      "Extensive template library",
      "Font pairing tools",
      "Color palette generator",
      "Apps Marketplace for integrations",
      "Windows and Mac applications",
      "Mobile apps available",
      "Copyright ownership of AI-generated logos"
    ]
  },
  {
    name: "Remove.bg",
    website: "https://www.remove.bg/",
    categoryTags: ["Background Removal", "Image Upscaling"],
    description: "Industry-leading AI background remover and generator for effortless picture isolation with incredible accuracy.",
    fullDescription: "Remove.bg is the industry-leading, all-in-one AI background remover and generator that makes it effortless to cut out pictures and isolate backgrounds with incredible accuracy. The platform combines automated background removal with an AI background generator, enabling users to instantly create custom backdrops without writing prompts. Remove.bg delivers 100% automatic and free background removal, processing images in seconds with stunning quality. The platform is designed for professionals across industries including e-commerce, photography, marketing, car dealerships, and media, offering bulk editing capabilities that process up to 500 images per minute. With seamless integrations into tools like Figma, Photoshop, and Zapier, plus a mobile app for on-the-go editing, Remove.bg embeds background removal directly into existing workflows.",
    keyFeatures: [
      "AI Background Removal: 100% automatic background removal with high accuracy",
      "AI Background Generator: Create custom backdrops instantly without prompts",
      "Transparent PNG Export: Generate transparent backgrounds for logos and graphics",
      "Bulk Editing: Process up to 500 images per minute",
      "Magic Brush: Advanced editing tool for fine-tuning",
      "API Integration: Embed background removal into custom workflows",
      "Photoshop Extension: Direct integration with Adobe Photoshop",
      "Figma Plugin: Seamless Figma integration",
      "Zapier Integration: Automate background removal workflows",
      "Mobile App: Remove backgrounds on Android devices",
      "Desktop Applications: Windows, Mac, and Linux support",
      "Multiple Subject Types: Optimized for people, products, animals, cars, and graphics",
      "E-commerce Optimization: Perfect white backgrounds for product listings",
      "Professional Headshots: Clean backgrounds for professional photos",
      "Car Listing Enhancement: Professional backgrounds for automotive photography",
      "Logo Creation: Transparent backgrounds for logo design",
      "Video Background Removal: Extend capabilities to video content"
    ],
    useCases: [
      "E-commerce Product Photography",
      "Professional Headshots",
      "Car Dealership Listings",
      "Logo Design",
      "Graphic Design",
      "Marketing Materials",
      "Social Media Content",
      "Website Design",
      "Presentation Graphics",
      "Print Materials",
      "Real Estate Photography",
      "Fashion Photography",
      "Product Catalogs",
      "Passport Photos"
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        features: [
          "Limited free background removals",
          "Standard resolution downloads",
          "Basic features"
        ]
      },
      {
        name: "Subscription",
        price: "Contact for pricing",
        features: [
          "Unlimited background removals",
          "High-resolution downloads",
          "Bulk editing capabilities",
          "API access",
          "Priority processing"
        ]
      }
    ],
    rating: "4.9",
    additionalInfo: [
      "Process up to 500 images per minute",
      "Integrations with Figma, Photoshop, Zapier",
      "Mobile app for iOS and Android",
      "Desktop applications for all platforms",
      "Trusted by photographers worldwide",
      "API documentation available",
      "24/7 platform status monitoring"
    ]
  },
  {
    name: "Topaz Gigapixel AI",
    website: "https://www.topazlabs.com/",
    categoryTags: ["Image Upscaling"],
    description: "Industry-leading image upscaler maximizing detail and accuracy, increasing resolution up to 8x with no quality loss.",
    fullDescription: "Topaz Gigapixel AI is the industry-leading image upscaler that maximizes both the level of detail and accuracy to original images. Using cutting-edge AI technology, Topaz Gigapixel specializes in super-sizing and upscaling image and photo resolution, increasing resolution by up to 8x with no loss in quality. The platform employs specialized AI models trained specifically for image enhancement, delivering results that surpass traditional upscaling methods. Topaz Gigapixel AI is trusted by professional photographers, designers, and content creators who demand the highest quality image enhancement for their work. The software includes generative models not available in other products, making it the gold standard for AI-powered image upscaling.",
    keyFeatures: [
      "AI Image Upscaling: Increase resolution up to 8x without quality loss",
      "Specialized AI Models: Purpose-built AI for maximum detail and accuracy",
      "Generative Enhancement: Advanced generative models for superior results",
      "Video Upscaling: Support for 720p, 1080p, and 4K resolutions up to 60fps",
      "Batch Processing: Upscale multiple images simultaneously",
      "Detail Preservation: Maintains fine details and textures",
      "Noise Reduction: Reduces artifacts while enhancing resolution",
      "Edge Enhancement: Sharpens edges without creating halos",
      "Face Refinement: Specialized processing for facial features",
      "Texture Recovery: Recovers lost texture information",
      "Multiple Output Sizes: Flexible scaling options",
      "RAW File Support: Works with professional camera formats",
      "Plugin Integration: Works with Photoshop and Lightroom",
      "Standalone Application: Desktop software for Windows and Mac",
      "Free Online Tool: Web-based upscaler for quick enhancements"
    ],
    useCases: [
      "AI Art Upscaling",
      "Photography Enhancement",
      "Print Production",
      "Restoration Projects",
      "E-commerce Images",
      "Marketing Materials",
      "Web-to-Print",
      "Stock Photography",
      "Real Estate Photography",
      "Portrait Enhancement",
      "Landscape Photography",
      "Product Photography",
      "Archival Restoration",
      "Video Frame Enhancement"
    ],
    pricing: [
      {
        name: "One-time Purchase",
        price: "Contact for pricing",
        features: [
          "Lifetime license",
          "Desktop application",
          "Regular updates",
          "30-day money-back guarantee"
        ]
      },
      {
        name: "Free Online Tool",
        price: "$0",
        features: [
          "Web-based upscaler",
          "Quick enhancements",
          "Limited features"
        ]
      }
    ],
    rating: "4.8",
    additionalInfo: [
      "No subscription required",
      "Trusted by professional photographers",
      "Includes generative models not available in other products",
      "Comprehensive tutorials and guides",
      "YouTube channel with how-to videos",
      "Community support forums",
      "Free trial available"
    ]
  },
  {
    name: "Pebblely",
    website: "https://pebblely.com/",
    categoryTags: ["Product Photography", "Background Removal"],
    description: "AI-powered product photography platform creating photoshoot-quality images that drive sales for e-commerce businesses.",
    fullDescription: "Pebblely is an AI-powered product photography platform that helps businesses create beautiful, photoshoot-quality product photos that drive sales. The platform eliminates the need for expensive photoshoots and Photoshop skills by using AI to turn boring product images into stunning, professional photos. Pebblely combines background removal with AI-generated custom backgrounds, enabling users to simply select a product, describe the desired background, and generate unlimited images. The platform is specifically designed for e-commerce businesses, Shopify stores, and online sellers who need high-quality product photography at scale. With seamless Shopify integration and the ability to generate unlimited variations, Pebblely empowers businesses to boost sales through better visual presentation.",
    keyFeatures: [
      "AI Product Photography: Transform product images into photoshoot-quality photos",
      "Background Removal: Automatically remove product backgrounds",
      "AI Background Generation: Create custom backgrounds from text descriptions",
      "Unlimited Image Generation: Generate as many product photos as needed",
      "Shopify Integration: Direct integration with Shopify stores",
      "No Photoshop Required: User-friendly interface for non-designers",
      "Product Selection: Easy product selection from inventory",
      "Text-to-Background: Describe backgrounds in natural language",
      "Multiple Variations: Create diverse product photo variations",
      "E-commerce Optimization: Photos optimized for online sales",
      "Fast Processing: Quick generation of professional photos",
      "Batch Processing: Process multiple products efficiently",
      "Consistent Styling: Maintain brand consistency across product lines",
      "High-Resolution Output: Professional-quality image exports"
    ],
    useCases: [
      "E-commerce Product Listings",
      "Shopify Stores",
      "Amazon Listings",
      "Social Media Marketing",
      "Email Marketing",
      "Advertising Campaigns",
      "Product Catalogs",
      "Website Product Pages",
      "Marketplace Listings",
      "Seasonal Campaigns",
      "A/B Testing",
      "Brand Consistency",
      "New Product Launches",
      "Inventory Photography"
    ],
    pricing: [
      {
        name: "Subscription",
        price: "Contact for details",
        features: [
          "Unlimited image generation",
          "Shopify app integration",
          "High-resolution exports",
          "Priority processing"
        ]
      },
      {
        name: "Free Trial",
        price: "$0",
        features: [
          "Test all features",
          "Limited generations",
          "No credit card required"
        ]
      }
    ],
    rating: "4.7",
    additionalInfo: [
      "Shopify App Store integration",
      "No expensive photoshoots required",
      "Boost sales with better product photos",
      "Trusted by online sellers",
      "Easy-to-use interface",
      "Fast turnaround times",
      "Professional results guaranteed"
    ]
  }
];

// All available subcategories
const allSubcategories = [
  "All",
  "Logo Design",
  "Image Upscaling",
  "Background Removal",
  "Product Photography"
];

export default function CategoryImageDesign() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  // Filter tools based on selected category
  const filteredTools = selectedFilter === "All"
    ? tools
    : tools.filter(tool => tool.categoryTags.includes(selectedFilter));

  // Count tools per category
  const getCategoryCount = (category: string) => {
    if (category === "All") return tools.length;
    return tools.filter(tool => tool.categoryTags.includes(category)).length;
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
              <span className="text-white font-medium">AI Image & Design</span>
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
            <h1 className="text-4xl font-bold text-white mb-4">AI Image & Design</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Generative AI for logos, image upscaling, background removal, and product photography.
              These AI-powered platforms help designers, marketers, and e-commerce businesses create professional visual content,
              enhance image quality, and streamline product photography workflows.
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
                {category} {category !== "All" && `(${getCategoryCount(category)})`}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <div
                key={index}
                onClick={() => setSelectedTool(tool)}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-purple-900/10 cursor-pointer"
              >
                {/* Icon and Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-400">{tool.name[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.05]">
                    <span className="text-xs font-medium text-white">{tool.rating}</span>
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {tool.description}
                </p>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {tool.categoryTags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-medium text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className="w-full py-2 px-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium transition-colors border border-white/[0.08] hover:border-white/[0.15]">
                  Learn More
                </button>
              </div>
            ))}
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
                    <div className="w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-purple-400">{selectedTool.name[0]}</span>
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-white mb-1">
                        {selectedTool.name}
                      </DialogTitle>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-white">{selectedTool.rating}</span>
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedTool.categoryTags.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogDescription className="text-gray-300 text-base leading-relaxed">
                  {selectedTool.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
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

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {selectedTool.useCases.map((useCase, index) => (
                      <div key={index} className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-sm text-gray-300 text-center">
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedTool.pricing.map((plan, index) => (
                      <div key={index} className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-colors">
                        <h4 className="font-bold text-white mb-2">{plan.name}</h4>
                        <div className="text-2xl font-bold text-purple-400 mb-4">{plan.price}</div>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="text-xs text-gray-400 leading-relaxed">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                {selectedTool.additionalInfo && selectedTool.additionalInfo.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedTool.additionalInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>{info}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visit Website Button */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <a
                    href={selectedTool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                  >
                    Visit Website
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
