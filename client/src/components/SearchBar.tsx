import { Search, TrendingUp, Sparkles, Image, Code, Video, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getMultimodalTools } from "../../../shared/multimodalTools";

interface SearchBarProps {
  size?: "large" | "small";
  onSearch?: (query: string) => void;
}

export default function SearchBar({ size = "large", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredTools, setFilteredTools] = useState(getMultimodalTools());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const allTools = getMultimodalTools();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter tools based on query
  useEffect(() => {
    if (query.trim() === "") {
      // Show trending/new tools when no query
      const suggested = allTools
        .filter(tool => tool.isTrending || tool.isNew)
        .slice(0, 10);
      setFilteredTools(suggested);
    } else {
      // Filter by name, category, or description
      const filtered = allTools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.primaryCategory.toLowerCase().includes(query.toLowerCase()) ||
        tool.description?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);
      setFilteredTools(filtered);
    }
  }, [query, allTools]);

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query.trim());
      setShowDropdown(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleToolClick = (toolName: string) => {
    setQuery(toolName);
    setShowDropdown(false);
    if (onSearch) {
      onSearch(toolName);
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("Image") || category.includes("Design")) return <Image className="w-4 h-4" />;
    if (category.includes("Code")) return <Code className="w-4 h-4" />;
    if (category.includes("Video")) return <Video className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  if (size === "small") {
    return (
      <div className="relative flex items-center group">
        <Search className="absolute left-3 w-4 h-4 text-gray-600 group-focus-within:text-gray-400 transition-colors" />
        <input 
          type="text" 
          placeholder="Search AI tools..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          ref={inputRef}
          className="w-64 h-9 pl-9 pr-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl relative" ref={dropdownRef}>
      <div className="relative flex items-center bg-[#0A0A0B] border border-white/[0.08] rounded-full p-1.5 shadow-2xl shadow-black/50 hover:border-white/[0.15] focus-within:border-white/[0.2] transition-all">
        <Search className="w-5 h-5 text-gray-500 ml-5 mr-3 flex-shrink-0" />
        <input 
          type="text" 
          placeholder="Search 10,000+ AI tools by task, industry, or capability..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          ref={inputRef}
          className="flex-1 bg-transparent border-none text-white placeholder:text-gray-600 focus:outline-none h-12 text-[15px] min-w-0"
        />
        <button 
          onClick={handleSearch}
          className="rounded-full px-8 bg-blue-600 hover:bg-blue-500 text-white font-medium h-12 transition-all duration-200 shadow-lg shadow-blue-900/20 flex-shrink-0"
        >
          Search
        </button>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0A0A0B] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50">
          {/* Quick Actions */}
          {query.trim() === "" && (
            <div className="border-b border-white/[0.08] p-3">
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors">
                  <Image className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-gray-300">Generate image</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Code</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors">
                  <Video className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Generate video</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Trending</span>
                </button>
              </div>
            </div>
          )}

          {/* Suggested Tools */}
          <div className="max-h-96 overflow-y-auto">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => handleToolClick(tool.name)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/[0.05] transition-colors text-left"
                >
                  {tool.logo ? (
                    <img src={tool.logo} alt={tool.name} className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                      {getCategoryIcon(tool.primaryCategory)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white truncate">{tool.name}</span>
                      {tool.isTrending && (
                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                      {tool.isNew && (
                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Sparkles className="w-3 h-3" />
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">{tool.primaryCategory}</p>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                <p className="text-sm">No tools found matching "{query}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
