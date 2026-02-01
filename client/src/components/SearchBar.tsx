import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  size?: "large" | "small";
  onSearch?: (query: string) => void;
}

export default function SearchBar({ size = "large", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
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
          className="w-64 h-9 pl-9 pr-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.15] transition-all"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl relative">
      <div className="relative flex items-center bg-[#0A0A0B] border border-white/[0.08] rounded-full p-1.5 shadow-2xl shadow-black/50 hover:border-white/[0.15] focus-within:border-white/[0.2] transition-all">
        <Search className="w-5 h-5 text-gray-500 ml-5 mr-3 flex-shrink-0" />
        <input 
          type="text" 
          placeholder="Search 10,000+ AI tools by task, industry, or capability..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent border-none text-white placeholder:text-gray-600 focus:outline-none h-12 text-[15px] min-w-0"
        />
        <button 
          onClick={handleSearch}
          className="rounded-full px-8 bg-blue-600 hover:bg-blue-500 text-white font-medium h-12 transition-all duration-200 shadow-lg shadow-blue-900/20 flex-shrink-0"
        >
          Search
        </button>
      </div>
    </div>
  );
}
