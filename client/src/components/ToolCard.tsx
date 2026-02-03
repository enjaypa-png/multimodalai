import { Link } from "wouter";
import { MultimodalTool, toKebabCase } from "../../../shared/multimodalTools";
import { ExternalLink, TrendingUp, Sparkles } from "lucide-react";

interface ToolCardProps {
  tool: MultimodalTool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const slug = toKebabCase(tool.name);
  
  // Get pricing badge color
  const getPricingColor = (pricing?: string) => {
    switch (pricing) {
      case "Free":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Freemium":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Paid":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Free Trial":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <Link href={`/tool/${slug}`}>
      <div className="group relative bg-[#0A0A0B] border border-white/[0.08] rounded-lg p-4 hover:border-white/[0.2] hover:bg-white/[0.02] transition-all duration-200 cursor-pointer h-full flex flex-col">
        
        {/* HEADER: Logo + Title + Badges (CSS Grid Layout) */}
        <div className="grid gap-3 mb-3" style={{ gridTemplateColumns: '44px 1fr auto', alignItems: 'center' }}>
          
          {/* LEFT: Logo (40x40 fixed) */}
          <div className="w-11 h-11 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0 overflow-hidden">
            {tool.logo ? (
              <img 
                src={tool.logo} 
                alt={`${tool.name} logo`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  // Fallback: show placeholder on error
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gradient-to-br', 'from-blue-600', 'to-purple-600');
                    const fallback = document.createElement('div');
                    fallback.className = 'w-4 h-4 bg-white rounded-full';
                    parent.appendChild(fallback);
                  }
                }}
              />
            ) : (
              // Fallback placeholder
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center rounded-lg">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
            )}
          </div>
          
          {/* CENTER: Title (truncates with ellipsis) */}
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors overflow-hidden text-ellipsis whitespace-nowrap">
              {tool.name}
            </h3>
          </div>
          
          {/* RIGHT: Badges (wrap safely, never clip) */}
          <div className="flex flex-wrap gap-1.5 justify-end">
            {tool.isTrending && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500 border border-orange-600 shadow-sm whitespace-nowrap flex-shrink-0">
                <TrendingUp className="w-3 h-3 text-white" />
                <span className="text-[10px] font-medium text-white">Trending</span>
              </div>
            )}
            {tool.isNew && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500 border border-green-600 shadow-sm whitespace-nowrap flex-shrink-0">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-[10px] font-medium text-white">New</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Badge */}
        {tool.pricing && (
          <div className="mb-3">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${getPricingColor(tool.pricing)}`}>
              {tool.pricing}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-400 mb-3 line-clamp-2 flex-1">
          {tool.description || `${tool.name} is a multimodal AI platform that supports ${[
            tool.text === "Yes" && "text",
            tool.image === "Yes" && "image",
            tool.video === "Yes" && "video",
            tool.audio === "Yes" && "audio",
            tool.code === "Yes" && "code",
            tool.reasoning === "Yes" && "reasoning"
          ].filter(Boolean).join(", ")}.`}
        </p>

        {/* Category Tag */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 font-medium">
            {tool.primaryCategory}
          </span>
          
          {/* Votes */}
          {tool.votes !== undefined && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="font-medium">{tool.votes.toLocaleString()}</span>
              <span>saves</span>
            </div>
          )}
        </div>

        {/* External Link Icon */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </Link>
  );
}
