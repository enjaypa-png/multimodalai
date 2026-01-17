import { ArrowRight, FileText, Image as ImageIcon, Video, Code, Megaphone, Briefcase, BarChart, Bot, MessageSquare, GraduationCap, Scale, Building2 } from "lucide-react";
import { Link } from "wouter";

const categories = [
  {
    icon: FileText,
    title: "AI Writing & Content",
    description: "Tools for blog writing, copywriting, email marketing, and SEO content generation.",
    tags: ["Blog Writing", "Copywriting", "Email Marketing"],
    count: "+3",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20"
  },
  {
    icon: ImageIcon,
    title: "AI Image & Design",
    description: "Generative AI for logos, image upscaling, background removal, and product photography.",
    tags: ["Logo Design", "Image Upscaling", "Background Removal"],
    count: "+2",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    icon: Video,
    title: "AI Video & Audio",
    description: "Video generation, editing, avatars, subtitles, and voiceover tools.",
    tags: ["Video Generation", "Video Editing", "Avatars"],
    count: "+2",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: Code,
    title: "AI Coding & Developer Tools",
    description: "Code generation, review, debugging, API tools, and no-code builders.",
    tags: ["Code Generation", "Code Review", "Debugging"],
    count: "+2",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  {
    icon: Megaphone,
    title: "AI Marketing & SEO",
    description: "SEO tools, social media AI, ad optimization, CRO, and keyword research.",
    tags: ["SEO Tools", "Social Media AI", "Ad Optimization"],
    count: "+3",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  {
    icon: Briefcase,
    title: "AI Business & Productivity",
    description: "CRM, project management, meetings, note-taking, and workflow automation.",
    tags: ["CRM", "Project Management", "Meetings"],
    count: "+2",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20"
  },
  {
    icon: BarChart,
    title: "AI Data, Analytics & Research",
    description: "Data analysis, visualization, research assistants, and predictive analytics.",
    tags: ["Data Analysis", "Visualization"],
    count: "",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  },
  {
    icon: Bot,
    title: "AI Automation & Agents",
    description: "AI agents, task automation, RPA, integrations, and autonomous workflows.",
    tags: ["AI Agents", "Task Automation", "RPA"],
    count: "+2",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20"
  }
];

export default function CategoryGrid() {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Browse by Category</h2>
        </div>
        <Link href="/categories" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
          View all categories
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon Box */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${category.bg} ${category.border} border`}>
              <category.icon className={`w-6 h-6 ${category.color}`} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {category.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1">
              {category.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-gray-400 group-hover:border-white/10 transition-colors">
                  {tag}
                </span>
              ))}
              {category.count && (
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-gray-500">
                  {category.count}
                </span>
              )}
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
