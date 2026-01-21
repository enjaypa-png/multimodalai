import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Star, ExternalLink, ChevronRight, Users } from "lucide-react";
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
  monthlyPrice?: string;
  yearlyPrice?: string;
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
  performanceMetrics?: string[];
  trustedBy: string[];
  rating: string;
  additionalInfo?: string[];
  badge?: string;
}

// Tool Data
const tools: Tool[] = [
  {
    name: "Jasper AI",
    website: "https://www.jasper.ai/",
    categoryTags: ["Blog Writing", "Copywriting", "Email Marketing"],
    description: "Leading AI marketing platform that unifies brand experience, accelerates content velocity, and automates marketing processes at scale.",
    fullDescription: "Jasper AI is the leading AI marketing platform that unifies brand experience, accelerates content velocity, and automates marketing processes at scale. Designed specifically for modern marketing teams, Jasper transforms content operations into a growth engine by connecting data, strategy, and creative processes into automated Content Pipelines. The platform delivers on-brand assets from idea to publication without busywork, making it the go-to solution for performance marketers, content marketers, brand marketers, and PR professionals. Jasper's IQ layer ensures brand voice consistency across every asset, while its intuitive Studio and Grid tools empower any marketer to design and run automations that scale content creation without technical setup or prompt engineering.",
    keyFeatures: [
      "Content Pipelines: Automated system connecting data, strategy, and creative process from idea to publication",
      "Canvas Platform: Plan, create, and collaborate intuitively at scale",
      "AI Studio: Build custom, agentic workflows quickly without coding",
      "Jasper IQ: Rich context hub maintaining quality and authenticity with Brand IQ and Marketing IQ",
      "Brand Voice: Maintain consistent brand guidelines, tone, and messaging across all assets",
      "Marketing AI Editor: Advanced editing tools for refining AI-generated content",
      "Jasper Chat: Conversational AI interface for content generation",
      "AI Image Suite: Generate and edit images to complement written content",
      "SEO Optimization: Built-in SEO tools for search engine optimization",
      "Campaign Automation: Scale campaigns from SEO to personalization and localization",
      "Multi-Brand Support: Create content for multiple brands simultaneously",
      "Collaboration Tools: Team workspace for seamless collaboration on campaigns",
      "App Library: Pre-built templates for blog posts, ad campaigns, press releases, landing pages",
      "Knowledge Base: Centralized repository for brand information and guidelines",
      "API Access: Integrate Jasper into existing workflows and tools"
    ],
    useCases: [
      "Blog Content Creation",
      "Copywriting",
      "Email Marketing",
      "Social Media Content",
      "Product Descriptions",
      "Press Releases",
      "Landing Pages",
      "Ad Campaigns",
      "Content Localization",
      "SEO Content",
      "Campaign Briefs",
      "Product Marketing",
      "Brand Messaging"
    ],
    pricing: [
      {
        name: "Pro",
        monthlyPrice: "$69/month",
        yearlyPrice: "$59/month (billed annually)",
        features: [
          "1 seat included",
          "Canvas platform for content creation",
          "Essential Apps for core marketing workflows",
          "2 Brand Voices, 5 Knowledge assets, 3 Audiences",
          "Advanced AI features for multiple brands",
          "Collaboration on campaigns",
          "7-day free trial"
        ]
      },
      {
        name: "Business",
        monthlyPrice: "Custom pricing",
        features: [
          "Everything in Pro",
          "Advanced Apps for complex campaign orchestration",
          "No-code AI App Builder",
          "Purpose-built marketing Agents",
          "Unlimited IQ customization",
          "API access",
          "Enterprise-grade governance",
          "Dedicated account management",
          "SSO (Single Sign-On)",
          "Custom style guide"
        ]
      }
    ],
    performanceMetrics: [
      "10,000+ hours saved annually by customers",
      "60% of SEO automated with Jasper",
      "7,500 product descriptions written in 24 hours",
      "3x content production increase",
      "Faster time-to-market for campaigns"
    ],
    trustedBy: [
      "Wayfair",
      "Boeing",
      "Alliant Group",
      "Cushman & Wakefield",
      "Cox Automotive",
      "Adidas",
      "10,000+ marketing teams"
    ],
    rating: "4.8",
    additionalInfo: [
      "Customer Success team and Content Engineers provide expert support",
      "Jasper Community for networking and learning",
      "Jasper Foundations courses for skill development",
      "Prompt Library with pre-built templates",
      "State of AI in Marketing Report",
      "Enterprise-grade security, governance, and compliance",
      "Fair Use Policy for transparent usage guidelines",
      "Nonprofit discounts available"
    ],
    badge: "Popular"
  },
  {
    name: "Copy.ai",
    website: "https://www.copy.ai/",
    categoryTags: ["Blog Writing", "Copywriting", "Email Marketing"],
    description: "World's first AI-native GTM platform designed to future-proof businesses by infusing AI across the entire go-to-market engine.",
    fullDescription: "Copy.ai is the world's first AI-native GTM (Go-To-Market) platform designed to future-proof businesses by infusing AI across the entire go-to-market engine. Unlike disconnected AI copilots and narrow point solutions, Copy.ai provides a unified platform that codifies best practices, unifies data, connects teams, and eliminates GTM bloat. The platform powers all key GTM use cases including prospecting, content creation, inbound lead processing, account-based marketing, translation, and deal coaching. With AI-powered workflows, agents, and automations, Copy.ai helps marketing, sales, and operations teams drive real business value by accelerating content velocity and streamlining revenue operations. Trusted by 17 million users at leading companies like Siemens, ServiceNow, Lenovo, and Urban Outfitters, Copy.ai delivers measurable results including millions in cost savings and dramatic improvements in content coverage.",
    keyFeatures: [
      "Workflows: AI-powered codifications of processes, plays, and best practices that unify cross-functional teams",
      "Copy Agents: Automate targeted tasks by combining AI decision-making with proper guardrails",
      "Tables: Queryable data foundation consolidating disparate sources to power AI automation",
      "Chat Interface: Prompting interface for rapidly completing one-off tasks and to-dos",
      "Infobase: Centralized repository for company's essential information to inform content generation",
      "Brand Voice: Definition of brand's unique personality ensuring consistent, authentic content outputs",
      "Prospecting Cockpit: Deeply research accounts and contacts to draft high-quality sales outreach",
      "Content Creation: Power content engine with AI for SEO, thought leadership, use cases, and social media",
      "Inbound Lead Processing: Automatically enrich, research, and engage marketing-generated leads",
      "Account Based Marketing: Get rich insights on accounts, industries, and personas for ABM plays",
      "Translation & Localization: Produce native speaker-level translations for any language in real-time",
      "Deal Coaching & Forecasting: Get insights from sales transcripts to score deals and predict close dates",
      "2,000+ Integrations: Connect with existing tools and systems",
      "LLM Model Agnostic: Access to OpenAI, Anthropic, and Gemini models",
      "CRM Enrichment: Enhance customer relationship management data"
    ],
    useCases: [
      "Blog Post Writing",
      "Sales Copywriting",
      "Email Marketing Campaigns",
      "Social Media Content",
      "Product Descriptions",
      "Sales Outreach",
      "Lead Nurturing",
      "Content Localization",
      "Marketing Collateral",
      "Website Copy",
      "Ad Copy",
      "Press Releases",
      "Case Studies"
    ],
    pricing: [
      {
        name: "Chat",
        monthlyPrice: "$29/month",
        yearlyPrice: "20% savings annually",
        features: [
          "5 seats included",
          "Unlimited words in chat",
          "Unlimited chat projects",
          "Access to OpenAI, Anthropic, and Gemini models",
          "For small teams starting to drive real business value with AI"
        ]
      },
      {
        name: "Enterprise",
        monthlyPrice: "Custom pricing",
        features: [
          "Workflow credits for advanced automation",
          "Custom workflows and agents",
          "Advanced integrations",
          "Dedicated support",
          "Usage-based pricing tailored to your use cases"
        ]
      }
    ],
    performanceMetrics: [
      "$2.6M in cost savings (sales collateral creation)",
      "$650M partner sales channel enabled",
      "80% cut in operational costs (content creation)",
      "300% improved coverage"
    ],
    trustedBy: [
      "Siemens",
      "Rubrik",
      "GONG",
      "ServiceNow",
      "Thermo Fisher Scientific",
      "Lenovo",
      "Juniper Networks",
      "Urban Outfitters",
      "17 million users"
    ],
    rating: "4.7",
    additionalInfo: [
      "First AI-native GTM platform",
      "Secure, vertical AI-native platform for business-critical operations",
      "Anti-point solution architecture",
      "Workflow-based approach to AI automation",
      "Free tools available",
      "Trust Center for security and compliance",
      "Regular webinars and educational content",
      "Blog with GTM AI insights"
    ],
    badge: "Best Value"
  },
  {
    name: "Writesonic",
    website: "https://writesonic.com/",
    categoryTags: ["Blog Writing", "Copywriting", "Email Marketing", "SEO Content"],
    description: "Advanced AI search visibility tracking and optimization platform for creating high-quality, SEO-optimized content at scale.",
    fullDescription: "Writesonic is an advanced AI search visibility tracking and optimization platform that helps businesses create high-quality, SEO-optimized content at scale. The platform combines powerful AI writing tools with search visibility tracking across ChatGPT and 10+ AI platforms, enabling companies to monitor mentions, fix citation gaps, and optimize content for both traditional search engines and AI-powered search experiences. Writesonic's AI Article Writer conducts in-depth analysis of top competitors and hundreds of web sources to deliver factual, SEO-optimized articles in seconds. The platform is designed to help marketers, content creators, and businesses produce content that drives clicks, sign-ups, and sales while maintaining high quality and search engine visibility.",
    keyFeatures: [
      "AI Article Writer 6.0: Advanced article generation with competitor analysis and web research",
      "AI Search Visibility Tracking: Monitor mentions across ChatGPT and 10+ AI platforms",
      "SEO Optimization: Built-in SEO tools for search engine optimization",
      "Citation Gap Detection: Identify and fix missing citations",
      "Content Refresh: Update and optimize existing content",
      "Reddit & UGC Forum Targeting: Create content optimized for user-generated content platforms",
      "Competitor Analysis: In-depth analysis of top competitors",
      "Web Source Research: Analysis of hundreds of web sources for factual accuracy",
      "Multiple Content Types: Blog posts, articles, marketing copy, product descriptions",
      "AI Writing Tools: Comprehensive suite of text generation tools",
      "No Sign-up Required: Free tools available without registration",
      "Fast Generation: Content created in seconds"
    ],
    useCases: [
      "Blog Article Writing",
      "Marketing Copywriting",
      "Email Marketing",
      "Product Descriptions",
      "Social Media Content",
      "Website Copy",
      "SEO Content",
      "Content Marketing",
      "AI Visibility Optimization",
      "Content Refreshing",
      "Competitor Research"
    ],
    pricing: [
      {
        name: "Free",
        monthlyPrice: "$0",
        features: [
          "Free tools available",
          "No credit card required",
          "Basic AI writing features"
        ]
      },
      {
        name: "Paid Plans",
        monthlyPrice: "Contact for pricing",
        features: [
          "Usage-based pricing options",
          "Advanced AI features",
          "Search visibility tracking",
          "Premium support"
        ]
      }
    ],
    trustedBy: [
      "Content creators worldwide",
      "Marketing teams",
      "SEO professionals"
    ],
    rating: "4.6",
    additionalInfo: [
      "AI Article Writer 6.0 is the most advanced version",
      "Factual, SEO-optimized content generation",
      "No credit card required for free tools",
      "Fast content generation in seconds",
      "Comprehensive AI writing tool suite",
      "Search visibility tracking and optimization",
      "Regular platform updates and improvements"
    ]
  }
];

// All available subcategories
const allSubcategories = [
  "All Tools",
  "Blog Writing",
  "Copywriting",
  "Email Marketing",
  "SEO Content"
];

export default function CategoryWritingContent() {
  const [selectedFilter, setSelectedFilter] = useState("All Tools");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  // Filter tools based on selected category
  const filteredTools = selectedFilter === "All Tools"
    ? tools
    : tools.filter(tool => tool.categoryTags.includes(selectedFilter));

  // Count tools per category
  const getCategoryCount = (category: string) => {
    if (category === "All Tools") return tools.length;
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
              <span className="text-white font-medium">AI Writing & Content</span>
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
            <h1 className="text-4xl font-bold text-white mb-4">AI Writing & Content</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Tools for blog writing, copywriting, email marketing, and SEO content generation.
              These AI-powered platforms help marketers, writers, and businesses create high-quality written content at scale
              while maintaining brand voice and optimizing for search engines.
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
                    ? "bg-pink-600 text-white shadow-lg shadow-pink-900/30"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <div
                key={index}
                onClick={() => setSelectedTool(tool)}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-pink-900/10 cursor-pointer"
              >
                {/* Badge */}
                {tool.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-medium text-pink-400">
                      {tool.badge}
                    </span>
                  </div>
                )}

                {/* Icon and Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-pink-400">{tool.name[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.05]">
                    <span className="text-xs font-medium text-white">{tool.rating}</span>
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {tool.description}
                </p>

                {/* Trusted By */}
                {tool.trustedBy && tool.trustedBy.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>Trusted by {tool.trustedBy.slice(0, 3).join(", ")}</span>
                      {tool.trustedBy.length > 3 && <span>+{tool.trustedBy.length - 3} more</span>}
                    </div>
                  </div>
                )}

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {tool.categoryTags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-[11px] font-medium text-pink-300">
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
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0A0A0B] border-white/[0.08] text-white">
          {selectedTool && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-pink-400">{selectedTool.name[0]}</span>
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
                            <span key={i} className="px-2 py-0.5 rounded-md bg-pink-500/10 border border-pink-500/20 text-xs font-medium text-pink-300">
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
                {/* Trusted By */}
                {selectedTool.trustedBy && selectedTool.trustedBy.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Trusted By</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedTool.trustedBy.map((company, index) => (
                        <div key={index} className="px-4 py-2 rounded-lg bg-pink-500/5 border border-pink-500/10 text-sm text-gray-300">
                          {company}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance Metrics */}
                {selectedTool.performanceMetrics && selectedTool.performanceMetrics.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedTool.performanceMetrics.map((metric, index) => (
                        <div key={index} className="flex items-start gap-2 p-4 rounded-lg bg-pink-500/5 border border-pink-500/10">
                          <span className="text-pink-400 mt-1 text-lg">📊</span>
                          <span className="text-sm text-gray-300 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
                  <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedTool.pricing.map((plan, index) => (
                      <div key={index} className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-pink-500/20 transition-colors">
                        <h4 className="font-bold text-white mb-2">{plan.name}</h4>
                        <div className="mb-1">
                          <div className="text-2xl font-bold text-pink-400">{plan.monthlyPrice}</div>
                          {plan.yearlyPrice && (
                            <div className="text-xs text-gray-500 mt-1">{plan.yearlyPrice}</div>
                          )}
                        </div>
                        <ul className="space-y-2 mt-4">
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
                          <span className="text-pink-400 mt-1">✓</span>
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-medium transition-colors"
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
