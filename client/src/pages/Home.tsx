import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Sparkles, Layers } from "lucide-react";
import { Link } from "wouter";
import SearchBar from "@/components/SearchBar";
import ToolGrid from "@/components/ToolGrid";
import { getMultimodalTools } from "../../../shared/multimodalTools";

export default function Home() {
  const toolCount = getMultimodalTools().length;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#020104]/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-inner" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">MultimodalAI</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white transition-colors">Search</Link>
            <Link href="/directory" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Categories</Link>
            <Link href="/leaderboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Trending</Link>
            <Link href="/insights" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Insights</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/submit">
              <Button variant="outline" className="rounded-full border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white h-8 px-4 text-sm font-medium transition-all">
                Submit Tool
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-14">
        {/* Hero Section - Search First */}
        <section className="container py-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            {/* Tool Count Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 text-xs font-medium mb-6">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>{toolCount.toLocaleString()}+ AI tools indexed</span>
            </div>

            {/* Main Search Bar */}
            <div className="w-full flex justify-center mb-8">
              <SearchBar size="large" />
            </div>

            {/* Value Proposition */}
            <p className="text-sm text-gray-500 mb-8 max-w-xl">
              The fastest way to discover AI tools. Search by task, industry, or capability.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Link href="/directory">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0B] border border-white/[0.08] text-gray-400 text-sm font-medium hover:border-white/[0.2] hover:text-white hover:bg-white/[0.05] transition-all">
                  <Layers className="w-4 h-4 text-blue-400" />
                  Browse by Category
                </button>
              </Link>
              <Link href="/leaderboard">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0B] border border-white/[0.08] text-gray-400 text-sm font-medium hover:border-white/[0.2] hover:text-white hover:bg-white/[0.05] transition-all">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  Trending Tools
                </button>
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0B] border border-white/[0.08] text-gray-400 text-sm font-medium hover:border-white/[0.2] hover:text-white hover:bg-white/[0.05] transition-all">
                <Sparkles className="w-4 h-4 text-green-400" />
                New Tools
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0B] border border-white/[0.08] text-gray-400 text-sm font-medium hover:border-white/[0.2] hover:text-white hover:bg-white/[0.05] transition-all">
                <Search className="w-4 h-4 text-purple-400" />
                Top Multimodal AI
              </button>
            </div>
          </div>
        </section>

        {/* Tool Discovery Grid */}
        <section className="container pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">All AI Tools</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{toolCount} tools</span>
            </div>
          </div>
          <ToolGrid filter="all" />
        </section>

        {/* Trending Section */}
        <section className="container pb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <h2 className="text-xl font-bold text-white">Trending Now</h2>
            </div>
          </div>
          <ToolGrid filter="trending" limit={8} />
        </section>

        {/* New Tools Section */}
        <section className="container pb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-green-400" />
              <h2 className="text-xl font-bold text-white">Recently Added</h2>
            </div>
          </div>
          <ToolGrid filter="new" limit={8} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8 bg-[#020104]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white/[0.05] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
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
