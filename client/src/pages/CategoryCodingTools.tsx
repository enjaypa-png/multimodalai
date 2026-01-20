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
  bestFor?: string;
}

interface KeyFeature {
  title: string;
  description: string;
}

interface Tool {
  name: string;
  website: string;
  categoryTags: string[];
  description: string;
  fullDescription: string;
  keyFeatures: KeyFeature[];
  useCases: string[];
  pricing: PricingPlan[];
  performanceMetrics?: string[];
  rating: string;
  additionalInfo?: string[];
  badge?: string;
}

// Tool Data
const tools: Tool[] = [
  {
    name: "GitHub Copilot",
    website: "https://github.com/features/copilot",
    categoryTags: ["Code Generation", "Code Review", "Debugging", "API Tools"],
    description: "World's most widely adopted AI developer tool and pair programmer with contextualized assistance throughout the software development lifecycle.",
    fullDescription: "GitHub Copilot is the world's most widely adopted AI developer tool and pair programmer that transforms the developer experience. Backed by leaders in AI, GitHub Copilot provides contextualized assistance throughout the entire software development lifecycle, from code completions and chat assistance in the IDE to code explanations and answers to documentation. Unlike other AI coding assistants, GitHub Copilot is natively built into GitHub and integrates seamlessly with leading editors including Visual Studio Code, Visual Studio, JetBrains IDEs, Neovim, Xcode, Azure Data Studio, Eclipse, and Raycast. Developers using GitHub Copilot report up to 75% higher job satisfaction and are up to 55% more productive at writing code without sacrificing quality. With millions of individual users and tens of thousands of business customers, GitHub Copilot enables developers to focus more energy on problem-solving and collaboration while spending less effort on mundane and boilerplate tasks.",
    keyFeatures: [
      {
        title: "AI Code Completion",
        description: "Context-aware code suggestions across 14+ programming languages"
      },
      {
        title: "GitHub Copilot Chat",
        description: "Interactive chat for code explanations and debugging assistance"
      },
      {
        title: "Copilot in VS Code",
        description: "Deep integration with Visual Studio Code"
      },
      {
        title: "Agents on GitHub",
        description: "Autonomous AI agents for development workflows"
      },
      {
        title: "Copilot CLI",
        description: "Command-line interface for terminal-based assistance"
      },
      {
        title: "Pull Request Summaries",
        description: "Automatic PR description generation"
      },
      {
        title: "Code Explanations",
        description: "Natural language explanations of complex code"
      },
      {
        title: "Documentation Assistance",
        description: "Answers to documentation questions"
      },
      {
        title: "Cross-Agent Memory",
        description: "Agents learn and improve across development workflows"
      },
      {
        title: "Project Expert Mode",
        description: "Turn Copilot into a project-specific expert"
      },
      {
        title: "Enterprise-Grade Controls",
        description: "Manage agent usage with security controls"
      },
      {
        title: "MCP Integrations",
        description: "Secure Model Context Protocol integrations"
      },
      {
        title: "Multi-Language Support",
        description: "Support for major programming languages"
      },
      {
        title: "IDE Integration",
        description: "Native integration with popular development environments"
      },
      {
        title: "GitHub Spark",
        description: "AI-powered app creation"
      },
      {
        title: "Copilot Autofix",
        description: "Automated code fixing capabilities"
      }
    ],
    useCases: [
      "Code Writing",
      "Code Completion",
      "Debugging",
      "Code Review",
      "Documentation",
      "Learning",
      "Refactoring",
      "Test Generation",
      "API Integration",
      "Problem Solving",
      "Collaboration",
      "Pull Request Management",
      "Command Line Operations",
      "Code Translation",
      "Security Fixes"
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        features: [
          "Limited access to GitHub Copilot",
          "Basic code completions",
          "Available for eligible users (students, teachers, open source maintainers)"
        ],
        bestFor: "Students & educators"
      },
      {
        name: "Individual",
        price: "$10/month or $100/year",
        features: [
          "Unlimited code completions",
          "Chat assistance in IDE",
          "CLI assistance",
          "Mobile app access",
          "Multi-language support",
          "30-day free trial"
        ],
        bestFor: "Individual developers"
      },
      {
        name: "Pro",
        price: "$19/month or $190/year",
        features: [
          "Everything in Individual",
          "Faster response times",
          "Priority access to new features",
          "Advanced AI models",
          "Enhanced context understanding"
        ],
        bestFor: "Professional developers"
      },
      {
        name: "Business",
        price: "$39/user/month",
        features: [
          "Everything in Pro",
          "Organization license management",
          "Policy management",
          "Usage analytics",
          "Admin controls",
          "Enterprise support",
          "Security features"
        ],
        bestFor: "Development teams"
      },
      {
        name: "Enterprise",
        price: "$59/user/month",
        features: [
          "Everything in Business",
          "GitHub Copilot Autofix",
          "Advanced security features",
          "Custom models",
          "Dedicated support",
          "SLA guarantees",
          "Advanced analytics"
        ],
        bestFor: "Large organizations"
      }
    ],
    performanceMetrics: [
      "Millions of individual users worldwide",
      "Tens of thousands of business customers",
      "75% higher job satisfaction reported by users",
      "55% more productive at writing code",
      "World's most widely adopted AI developer tool"
    ],
    rating: "4.8",
    additionalInfo: [
      "Natively built into GitHub",
      "Integrates with 10+ leading IDEs",
      "Supports 14+ programming languages",
      "Regular feature updates and improvements",
      "Comprehensive documentation",
      "Community forum support",
      "Trust Center for security and privacy",
      "Responsible AI practices",
      "GitHub Advanced Security integration",
      "Professional services available",
      "Education programs for students and teachers"
    ],
    badge: "Popular"
  },
  {
    name: "Cursor",
    website: "https://cursor.com/",
    categoryTags: ["Code Generation", "Code Review", "Debugging"],
    description: "Advanced AI-powered code editor built on VS Code, enhanced with intelligent code completion, code generation, agent mode, and AI chat.",
    fullDescription: "Cursor is an advanced AI-powered code editor built on the familiar Visual Studio Code interface, enhanced with powerful AI features including intelligent code completion, code generation, agent mode, and AI chat. The platform uses artificial intelligence to provide advanced capabilities like intelligent autocomplete that predicts and suggests multi-line code edits based on context, codebase understanding, and streamlined workflows. Cursor 2.0 introduces a new AI model that maintains the VS Code experience developers love while adding transformative AI capabilities. The tool assists not only with code completion but also offers insights to help streamline workflows and reduce common coding errors, making it a comprehensive solution for modern software development.",
    keyFeatures: [
      {
        title: "AI Chat",
        description: "Interactive chat interface for coding assistance"
      },
      {
        title: "Code Generation",
        description: "Generate code from natural language descriptions"
      },
      {
        title: "Agent Mode",
        description: "Autonomous AI agent for complex coding tasks"
      },
      {
        title: "Intelligent Autocomplete",
        description: "Multi-line code predictions and suggestions"
      },
      {
        title: "Codebase Understanding",
        description: "AI comprehends entire project context"
      },
      {
        title: "VS Code Interface",
        description: "Familiar VS Code experience with AI enhancements"
      },
      {
        title: "Multi-Line Edits",
        description: "Predict and suggest complex code changes"
      },
      {
        title: "Debugging Assistance",
        description: "AI-powered debugging support"
      },
      {
        title: "Code Refactoring",
        description: "Intelligent code restructuring suggestions"
      },
      {
        title: "Error Reduction",
        description: "Proactive identification of common coding errors"
      },
      {
        title: "Workflow Optimization",
        description: "Streamline development workflows"
      },
      {
        title: "Context-Aware Suggestions",
        description: "Understand project-specific patterns"
      },
      {
        title: "Real-Time Collaboration",
        description: "Team coding with AI assistance"
      },
      {
        title: "Custom AI Models",
        description: "Support for various AI models"
      }
    ],
    useCases: [
      "Full-Stack Development",
      "Code Writing",
      "Debugging",
      "Code Review",
      "Refactoring",
      "Learning",
      "Prototyping",
      "API Integration",
      "Test Writing",
      "Documentation",
      "Code Migration",
      "Performance Optimization",
      "Security Analysis"
    ],
    pricing: [
      {
        name: "Free Trial",
        price: "$0",
        features: [
          "Test all features",
          "Limited time access",
          "No credit card required"
        ],
        bestFor: "Trying out Cursor"
      },
      {
        name: "Subscription",
        price: "Contact for pricing",
        features: [
          "Full AI features",
          "Unlimited usage",
          "Priority support",
          "Regular updates"
        ],
        bestFor: "Individual developers"
      },
      {
        name: "Team Plans",
        price: "Contact for pricing",
        features: [
          "Team collaboration",
          "Admin controls",
          "Usage analytics",
          "Enterprise support"
        ],
        bestFor: "Development teams"
      }
    ],
    rating: "4.7",
    additionalInfo: [
      "Built on VS Code foundation",
      "Cursor 2.0 with new AI model",
      "Powerful autocomplete capabilities",
      "Agent mode for complex tasks",
      "Streamlined coding and debugging",
      "Regular feature updates",
      "Community support",
      "Documentation and tutorials",
      "Compatible with VS Code extensions"
    ]
  },
  {
    name: "Replit",
    website: "https://replit.com/",
    categoryTags: ["Code Generation", "No-Code Development", "API Tools"],
    description: "AI-powered platform that builds apps and websites from natural language descriptions—like having an entire team of software engineers on demand.",
    fullDescription: "Replit is an AI-powered platform that combines a powerful online code editor with advanced AI to help users build apps and websites faster. Replit Agent is the standout feature that allows users to describe their app or website idea in natural language, and the AI builds it automatically—like having an entire team of software engineers on demand. The platform writes real production-ready code, evolves it as users iterate, and stays out of the way while building. Replit is particularly valuable for non-coders to build functional prototypes and MVPs that can be handed off to professional developers, making it an excellent bridge between ideas and implementation. The AI code editor eliminates the friction of traditional development tools, enabling users to build better applications faster.",
    keyFeatures: [
      {
        title: "Replit Agent",
        description: "AI agent that builds apps from natural language descriptions"
      },
      {
        title: "AI Code Editor",
        description: "Powerful online editor with integrated AI assistance"
      },
      {
        title: "Natural Language to Code",
        description: "Describe ideas and get working applications"
      },
      {
        title: "Production-Ready Code",
        description: "Generate deployment-ready code"
      },
      {
        title: "Iterative Development",
        description: "AI evolves code as you refine requirements"
      },
      {
        title: "Online IDE",
        description: "Cloud-based development environment"
      },
      {
        title: "Real-Time Collaboration",
        description: "Collaborate with team members"
      },
      {
        title: "Instant Deployment",
        description: "Deploy applications directly from the platform"
      },
      {
        title: "Multi-Language Support",
        description: "Support for various programming languages"
      },
      {
        title: "Template Library",
        description: "Pre-built templates for common projects"
      },
      {
        title: "Version Control",
        description: "Built-in Git integration"
      },
      {
        title: "Database Integration",
        description: "Connect to databases easily"
      },
      {
        title: "API Development",
        description: "Build and test APIs"
      },
      {
        title: "Mobile Development",
        description: "Create mobile applications"
      },
      {
        title: "Web Development",
        description: "Build responsive websites"
      }
    ],
    useCases: [
      "Rapid Prototyping",
      "MVP Development",
      "No-Code App Building",
      "Learning to Code",
      "Side Projects",
      "Hackathons",
      "Client Demos",
      "API Development",
      "Website Creation",
      "Mobile Apps",
      "Automation Tools",
      "Data Analysis Tools",
      "Internal Tools",
      "Portfolio Projects"
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        features: [
          "Basic features",
          "Limited resources",
          "Community support",
          "Public projects"
        ],
        bestFor: "Beginners & hobbyists"
      },
      {
        name: "Paid Plans",
        price: "Starting at $20/month",
        features: [
          "Advanced features",
          "More compute resources",
          "Private projects",
          "Priority support",
          "Team collaboration"
        ],
        bestFor: "Professional developers"
      },
      {
        name: "Enterprise",
        price: "Custom pricing",
        features: [
          "Unlimited resources",
          "Advanced security",
          "Dedicated support",
          "Custom integrations",
          "SLA guarantees"
        ],
        bestFor: "Large organizations"
      }
    ],
    rating: "4.6",
    additionalInfo: [
      "Cloud-based development environment",
      "No local setup required",
      "Instant collaboration features",
      "Deployment included",
      "Great for non-coders and beginners",
      "Professional developers can use for rapid development",
      "Template marketplace",
      "Community support",
      "Educational resources",
      "Regular platform updates"
    ]
  },
  {
    name: "Codeium",
    website: "https://codeium.com/",
    categoryTags: ["Code Generation", "Code Review", "Debugging"],
    description: "Free AI coding assistant with intelligent code completion, code generation, refactoring, and performance optimization for developers.",
    fullDescription: "Codeium is a free AI coding assistant that provides intelligent code completion features to help developers quickly generate code snippets and fill in contextual lines, supporting smoother development progress. Often compared to GitHub Copilot but offered for free, Codeium delivers AI-assisted coding capabilities including code generation, refactoring, and performance optimization. The platform helps developers generate code, optimize performance, refactor existing code to improve structure and quality, and accelerate development workflows. Codeium integrates with popular IDEs including Visual Studio Code, providing context-aware suggestions and intelligent autocomplete that understands project patterns and coding styles.",
    keyFeatures: [
      {
        title: "AI Code Completion",
        description: "Intelligent code suggestions and autocomplete"
      },
      {
        title: "Free Access",
        description: "No cost for individual developers"
      },
      {
        title: "Code Generation",
        description: "Generate code snippets and functions"
      },
      {
        title: "Refactoring Assistance",
        description: "Improve code structure and quality"
      },
      {
        title: "Performance Optimization",
        description: "Optimize code efficiency"
      },
      {
        title: "Context-Aware Suggestions",
        description: "Understand project context"
      },
      {
        title: "Multi-Language Support",
        description: "Support for major programming languages"
      },
      {
        title: "IDE Integration",
        description: "Works with VS Code and other popular IDEs"
      },
      {
        title: "Code Quality Improvement",
        description: "Suggestions for better code"
      },
      {
        title: "Fast Completions",
        description: "Quick response times"
      },
      {
        title: "Privacy-Focused",
        description: "Emphasis on data privacy"
      },
      {
        title: "Offline Capabilities",
        description: "Some features work offline"
      },
      {
        title: "Customizable",
        description: "Adjust settings to preferences"
      }
    ],
    useCases: [
      "Code Writing",
      "Code Completion",
      "Refactoring",
      "Performance Tuning",
      "Learning",
      "Debugging",
      "Code Review",
      "API Integration",
      "Test Writing",
      "Documentation"
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        features: [
          "Full AI code completion",
          "All major IDE integrations",
          "Multi-language support",
          "Unlimited usage for individuals",
          "Privacy-focused"
        ],
        bestFor: "Individual developers"
      },
      {
        name: "Team Plans",
        price: "Contact for pricing",
        features: [
          "Everything in Free",
          "Organization management",
          "Usage analytics",
          "Team collaboration",
          "Priority support"
        ],
        bestFor: "Development teams"
      }
    ],
    rating: "4.5",
    additionalInfo: [
      "Free alternative to GitHub Copilot",
      "No credit card required",
      "Privacy-focused approach",
      "Regular updates and improvements",
      "Community support",
      "Documentation and tutorials",
      "IDE extensions available",
      "Growing user base",
      "Emphasis on developer productivity"
    ],
    badge: "Free"
  }
];

// All available subcategories
const allSubcategories = [
  "All Tools",
  "Code Generation",
  "Code Review",
  "Debugging",
  "API Tools",
  "No-Code Development"
];

export default function CategoryCodingTools() {
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
              <span className="text-white font-medium">AI Coding & Developer Tools</span>
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
            <h1 className="text-4xl font-bold text-white mb-4">AI Coding & Developer Tools</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Code generation, review, debugging, API tools, and no-code development.
              These AI-powered tools help developers write better code faster, automate repetitive tasks,
              debug efficiently, and build applications with AI assistance.
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
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/30"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.map((tool, index) => (
              <div
                key={index}
                onClick={() => setSelectedTool(tool)}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 cursor-pointer"
              >
                {/* Badge */}
                {tool.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                      {tool.badge}
                    </span>
                  </div>
                )}

                {/* Icon and Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <span className="text-xl font-mono font-bold text-emerald-400">{tool.name[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.05]">
                    <span className="text-xs font-medium text-white">{tool.rating}</span>
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {tool.description}
                </p>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {tool.categoryTags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-300">
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
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <span className="text-3xl font-mono font-bold text-emerald-400">{selectedTool.name[0]}</span>
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
                            <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300">
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
                {/* Performance Metrics */}
                {selectedTool.performanceMetrics && selectedTool.performanceMetrics.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedTool.performanceMetrics.map((metric, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <span className="text-sm text-gray-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedTool.keyFeatures.map((feature, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <h4 className="font-semibold text-white mb-1 text-sm">{feature.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedTool.pricing.map((plan, index) => (
                      <div key={index} className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/20 transition-colors">
                        <h4 className="font-bold text-white mb-2">{plan.name}</h4>
                        <div className="text-2xl font-bold text-emerald-400 mb-1">{plan.price}</div>
                        {plan.bestFor && (
                          <p className="text-xs text-gray-500 mb-4 italic">Best for: {plan.bestFor}</p>
                        )}
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
                          <span className="text-emerald-400 mt-1">✓</span>
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
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
