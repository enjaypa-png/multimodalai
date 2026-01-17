import { Star } from "lucide-react";

const featuredTools = [
  {
    name: "Midjourney",
    description: "Hyper-realistic image generation from text prompts.",
    rating: "4.8",
    tags: ["Text", "Image"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png" // Placeholder, ideally use local asset
  },
  {
    name: "Runway Gen-2",
    description: "Multimodal video generation system.",
    rating: "4.6",
    tags: ["Text", "Image", "Video"],
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_k2yM-jCgJb0gD0gJ0gJ0gJ0gJ0gJ0gJ0gJ0g=s900-c-k-c0x00ffffff-no-rj" // Placeholder
  },
  {
    name: "GPT-4o",
    description: "Omnimodel capable of reasoning across audio, vision, and text.",
    rating: "4.9",
    tags: ["Text", "Audio", "Image"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" // Placeholder
  },
  {
    name: "Stable Diffusion 3",
    description: "Next-generation text-to-image model.",
    rating: "4.5",
    tags: ["Text", "Image"],
    icon: "https://stability.ai/images/favicon.png" // Placeholder
  }
];

export default function FeaturedPlatforms() {
  return (
    <section className="container py-16 border-t border-white/[0.05]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Featured Platforms</h2>
        <p className="text-gray-400">Hand-picked multimodal tools defining the state of the art.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTools.map((tool, index) => (
          <div 
            key={index}
            className="group relative flex flex-col p-6 rounded-2xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-blue-900/10"
          >
            <div className="flex justify-between items-start mb-6">
              {/* Icon Placeholder */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center overflow-hidden">
                 {/* In a real app, use actual images. For now, a placeholder div */}
                 <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full" />
              </div>
              
              {/* Rating Badge */}
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.05]">
                <span className="text-xs font-medium text-white">{tool.rating}</span>
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1 leading-relaxed">
              {tool.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tool.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] font-medium text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
