import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">MultimodalAI</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Directory</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Leaderboard</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Insights</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search AI tools..." 
                className="w-64 h-9 pl-9 pr-4 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all"
              />
            </div>
            <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-white h-9 px-4 text-sm font-medium">
              Submit Tool
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <CategoryGrid />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black/20">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white/50 rounded-full" />
            </div>
            <span className="text-sm font-medium text-gray-400">MultimodalAI Directory</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2026 Multimodal AI Directory. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
