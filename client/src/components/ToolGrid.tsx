import { useState, useMemo } from "react";
import { getMultimodalTools } from "../../../shared/multimodalTools";
import ToolCard from "./ToolCard";

interface ToolGridProps {
  filter?: "trending" | "new" | "all";
  limit?: number;
  excludeTrending?: boolean;
  excludeFromOtherSections?: boolean;
}

export default function ToolGrid({ filter = "all", limit, excludeTrending = false, excludeFromOtherSections = false }: ToolGridProps) {
  const allTools = getMultimodalTools();
  
  const filteredTools = useMemo(() => {
    let tools = [...allTools];
    
    // Apply filter
    if (filter === "trending") {
      tools = tools.filter(tool => tool.isTrending);
    } else if (filter === "new") {
      tools = tools.filter(tool => tool.isNew);
      // Exclude tools that are also trending to avoid duplicates
      if (excludeTrending) {
        tools = tools.filter(tool => !tool.isTrending);
      }
    }
    
    // Sort by votes (descending) if available
    tools.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    
    // Apply limit if specified
    if (limit) {
      tools = tools.slice(0, limit);
    }
    
    return tools;
  }, [allTools, filter, limit, excludeTrending, excludeFromOtherSections]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredTools.map((tool) => (
        <ToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  );
}
