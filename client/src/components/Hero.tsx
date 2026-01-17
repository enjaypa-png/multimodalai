import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, FileText, Image as ImageIcon, Video, Code, Megaphone, Box, FileType } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Effects - Simplified & Cleaner */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle top glow only */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        {/* Badge - Darker, more subtle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 text-sm font-medium mb-10 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>The Future of AI is Multimodal</span>
        </div>

        {/* Main Heading - Tighter tracking, sharper contrast */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-6 max-w-4xl leading-[1.1]">
          Discover AI That Can <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            See, Hear, & Speak
          </span>
        </h1>

        {/* Subheading - Cleaner text */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-14 leading-relaxed font-normal">
          The curated directory for multimodal artificial intelligence. Explore tools that blend text, image, video, and audio into seamless experiences.
        </p>

        {/* Search Bar - Higher contrast, less translucent */}
        <div className="w-full max-w-2xl relative mb-16">
          <div className="relative flex items-center bg-[#0A0A0B] border border-white/[0.08] rounded-full p-1.5 shadow-2xl shadow-black/50">
            <Search className="w-5 h-5 text-gray-500 ml-5 mr-3" />
            <Input 
              type="text" 
              placeholder="Search for 'text to video', 'voice cloning', or 'multimodal agents'..." 
              className="flex-1 bg-transparent border-none text-white placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 h-11 text-[15px]"
            />
            <Button className="rounded-full px-8 bg-blue-600 hover:bg-blue-500 text-white font-medium h-11 transition-all duration-200 shadow-lg shadow-blue-900/20">
              Search
            </Button>
          </div>
        </div>

        {/* Quick Filters - Flatter, distinct borders */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          <QuickFilter icon={FileText} label="Text + Image" color="text-pink-400" />
          <QuickFilter icon={Video} label="Image + Video" color="text-purple-400" />
          <QuickFilter icon={Megaphone} label="Audio + Vision" color="text-blue-400" />
          <QuickFilter icon={Box} label="Multimodal Agents" color="text-emerald-400" />
          <QuickFilter icon={FileType} label="Document AI" color="text-orange-400" />
        </div>
      </div>
    </div>
  );
}

function QuickFilter({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <button className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0A0A0B] border border-white/[0.08] text-gray-400 text-sm font-medium hover:border-white/[0.2] hover:text-white hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-blue-900/10">
      <Icon className={`w-4 h-4 ${color}`} />
      <span>{label}</span>
    </button>
  );
}
