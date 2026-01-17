import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, FileText, Image as ImageIcon, Video, Code, Megaphone } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Future of AI is Multimodal</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl">
          Discover the AI that can <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            See, Hear, and Speak
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          The curated directory for multimodal artificial intelligence. Explore tools that blend text, image, video, and audio into seamless experiences.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl relative mb-12 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-2 backdrop-blur-xl shadow-2xl">
            <Search className="w-5 h-5 text-gray-400 ml-4 mr-2" />
            <Input 
              type="text" 
              placeholder="Search for 'text to video', 'voice cloning', or 'multimodal agents'..." 
              className="flex-1 bg-transparent border-none text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-base"
            />
            <Button className="rounded-full px-8 bg-blue-600 hover:bg-blue-500 text-white font-medium h-10 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Search
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          <QuickFilter icon={FileText} label="AI Writing & Content" />
          <QuickFilter icon={ImageIcon} label="AI Image & Design" />
          <QuickFilter icon={Video} label="AI Video & Audio" />
          <QuickFilter icon={Code} label="AI Coding & Developer Tools" />
          <QuickFilter icon={Megaphone} label="AI Marketing & SEO" />
        </div>
      </div>
    </div>
  );
}

function QuickFilter({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
      <Icon className="w-3.5 h-3.5 opacity-70" />
      <span>{label}</span>
    </button>
  );
}
