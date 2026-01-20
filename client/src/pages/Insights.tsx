import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, LineChart, TrendingUp, ArrowLeft, BarChart3, PieChart } from "lucide-react";

export default function Insights() {
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
            <Link href="/insights" className="text-sm font-medium text-white transition-colors">Insights</Link>
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
              Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              Deep analysis and trends in the multimodal AI landscape
            </p>
          </div>

          {/* Insights Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Trend Analysis Card */}
            <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-6 hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trend Analysis</h3>
              <p className="text-sm text-gray-400">
                Track emerging patterns in multimodal AI adoption and usage across industries
              </p>
            </div>

            {/* Market Reports Card */}
            <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-6 hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Market Reports</h3>
              <p className="text-sm text-gray-400">
                Comprehensive analysis of the AI tools market with growth metrics and forecasts
              </p>
            </div>

            {/* Category Insights Card */}
            <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-6 hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-400/20 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Category Insights</h3>
              <p className="text-sm text-gray-400">
                Detailed breakdown of performance and innovation by AI category
              </p>
            </div>
          </div>

          {/* Featured Insight Preview */}
          <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <LineChart className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-blue-400 mb-2">LATEST REPORT</div>
                <h2 className="text-2xl font-bold text-white mb-3">The State of Multimodal AI in 2026</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  An in-depth analysis of how multimodal AI platforms are transforming industries.
                  Explore adoption rates, key use cases, and predictions for the next wave of innovation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-400/10 border border-blue-400/20 text-blue-400">
                    Market Analysis
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-400/10 border border-purple-400/20 text-purple-400">
                    Trends 2026
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-400/10 border border-pink-400/20 text-pink-400">
                    Research
                  </span>
                </div>
                <Button size="sm" variant="outline" className="rounded-full border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white">
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-12 text-center">
            <div className="flex flex-col items-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Insights Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                We're preparing comprehensive market analysis and insights. Stay tuned for data-driven reports on the multimodal AI ecosystem.
              </p>
              <Link href="/">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
                  Explore Tools
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
