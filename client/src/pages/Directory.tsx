import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Grid, List, Filter, ArrowLeft } from "lucide-react";

export default function Directory() {
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
            <Link href="/directory" className="text-sm font-medium text-white transition-colors">Directory</Link>
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
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">
              AI Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Directory</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              Browse and discover the most powerful multimodal AI tools for your projects
            </p>
          </div>

          {/* Filters & View Toggle */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-full border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white h-9 px-4 text-sm font-medium transition-all">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="rounded-md border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white">
                  All
                </Button>
                <Button size="sm" variant="outline" className="rounded-md border-white/[0.1] bg-white/[0.03] text-gray-500 hover:bg-white/[0.05] hover:text-gray-300">
                  Text
                </Button>
                <Button size="sm" variant="outline" className="rounded-md border-white/[0.1] bg-white/[0.03] text-gray-500 hover:bg-white/[0.05] hover:text-gray-300">
                  Image
                </Button>
                <Button size="sm" variant="outline" className="rounded-md border-white/[0.1] bg-white/[0.03] text-gray-500 hover:bg-white/[0.05] hover:text-gray-300">
                  Video
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="rounded-md border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1]">
                <Grid className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-md border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.05]">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Directory Content - Under Construction */}
          <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-12 text-center">
            <div className="flex flex-col items-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center mb-6">
                <Grid className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Directory Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                We're building an extensive directory of multimodal AI tools. Check back soon to explore hundreds of platforms.
              </p>
              <Link href="/">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
                  Explore Featured Tools
                </Button>
              </Link>
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
