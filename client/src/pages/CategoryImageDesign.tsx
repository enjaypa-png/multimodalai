import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Star, ChevronRight } from "lucide-react";
import { getToolsForCategory, toKebabCase, getSupportedModalities, type MultimodalTool } from "../../../shared/multimodalTools";

// Get multimodal-qualified tools for this category
const tools = getToolsForCategory("image-design");

export default function CategoryImageDesign() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // For now, show all tools (no subcategory filtering since we don't have subcategory data in the new schema)
  const filteredTools = tools;

  // Count tools per category
  const getCategoryCount = (category: string) => {
    return tools.length;
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

        {/* Tool count info */}
        <section className="container py-8 border-b border-white/[0.05]">
          <p className="text-sm text-gray-500">
            Showing {filteredTools.length} multimodal {filteredTools.length === 1 ? "tool" : "tools"}
          </p>
        </section>

        {/* Tool Cards */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <Link key={index} href={`/tool/${toKebabCase(tool.name)}`}>
                <a className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-purple-900/10 cursor-pointer">
                  {/* Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-purple-400">{tool.name[0]}</span>
                    </div>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {tool.name} is a multimodal AI platform that supports {getSupportedModalities(tool)}.
                  </p>

                  {/* Category Tag */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-medium text-purple-300">
                      {tool.primaryCategory}
                    </span>
                  </div>

                  {/* Learn More Button */}
                  <div className="w-full py-2 px-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium transition-colors border border-white/[0.08] hover:border-white/[0.15] text-center">
                    Learn More
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No multimodal tools found for this category.</p>
            </div>
          )}
        </section>
      </main>


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
