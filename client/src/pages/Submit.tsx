import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Upload, ArrowLeft, Sparkles, Tag, LinkIcon } from "lucide-react";

export default function Submit() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden font-sans">
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

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative group">
              <Search className="absolute left-3 w-4 h-4 text-gray-600 group-focus-within:text-gray-400 transition-colors" />
              <input
                type="text"
                placeholder="Search AI tools..."
                className="w-64 h-9 pl-9 pr-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
              />
            </div>
            <Link href="/submit">
              <Button variant="outline" className="rounded-full border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white h-9 px-4 text-sm font-medium transition-all">
                Submit Tool
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="container py-16">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Share Your Discovery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">
              Submit an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI Tool</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              Help the community discover amazing multimodal AI tools. Share the platforms you love.
            </p>
          </div>

          {/* Submission Form */}
          <div className="max-w-3xl">
            <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-8 mb-8">
              <form className="space-y-6">
                {/* Tool Name */}
                <div>
                  <label htmlFor="toolName" className="block text-sm font-medium text-gray-300 mb-2">
                    Tool Name *
                  </label>
                  <input
                    id="toolName"
                    type="text"
                    placeholder="e.g., GPT-4, Midjourney, Claude"
                    className="w-full h-11 px-4 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
                  />
                </div>

                {/* Tool URL */}
                <div>
                  <label htmlFor="toolUrl" className="block text-sm font-medium text-gray-300 mb-2">
                    <LinkIcon className="w-4 h-4 inline mr-1" />
                    Tool Website URL *
                  </label>
                  <input
                    id="toolUrl"
                    type="url"
                    placeholder="https://example.com"
                    className="w-full h-11 px-4 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Brief description of the tool and its capabilities..."
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all resize-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    <Tag className="w-4 h-4 inline mr-1" />
                    Primary Category *
                  </label>
                  <select
                    id="category"
                    className="w-full h-11 px-4 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
                  >
                    <option value="">Select a category...</option>
                    <option value="text">Text Generation</option>
                    <option value="image">Image Generation</option>
                    <option value="video">Video Generation</option>
                    <option value="code">Code Generation</option>
                    <option value="marketing">Marketing Tools</option>
                    <option value="business">Business Intelligence</option>
                    <option value="data">Data Analysis</option>
                    <option value="agents">AI Agents</option>
                  </select>
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
                    Tags
                  </label>
                  <input
                    id="tags"
                    type="text"
                    placeholder="e.g., NLP, Computer Vision, Free, API"
                    className="w-full h-11 px-4 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-2">Separate tags with commas</p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="button"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium h-11"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Submit for Review
                  </Button>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Submissions are reviewed within 24-48 hours
                  </p>
                </div>
              </form>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-white/[0.08] bg-white/[0.03] rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">24-48h</div>
                <div className="text-sm text-gray-400">Review Time</div>
              </div>
              <div className="border border-white/[0.08] bg-white/[0.03] rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">Free</div>
                <div className="text-sm text-gray-400">No Cost to Submit</div>
              </div>
              <div className="border border-white/[0.08] bg-white/[0.03] rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-gray-400">Tools Listed</div>
              </div>
            </div>
          </div>
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
