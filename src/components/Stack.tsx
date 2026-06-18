"use client";

import React, { useState } from "react";
import { Layers, Target, Settings, BarChart2, Cpu, ChevronDown, ChevronUp } from "lucide-react";
import { siteContent } from "@/data/siteContent";

// Map category name to icon
const getCategoryIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("marketing") || n.includes("media")) {
    return Target;
  } else if (n.includes("crm") || n.includes("automation")) {
    return Settings;
  } else if (n.includes("analytics") || n.includes("tracking")) {
    return BarChart2;
  } else {
    return Cpu;
  }
};

export default function Stack() {
  const [showAllTools, setShowAllTools] = useState(false);

  return (
    <section id="stack" className="relative p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-950/5 blur-[120px] pointer-events-none hidden md:block" />

      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Layers className="w-4.5 h-4.5" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Tools &amp; Platforms
            </h2>
          </div>
        </div>

        {/* Clean Grid of 4 Categories (2x2 on tablet/desktop, 1col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteContent.digitalStack.map((category) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <div
                key={category.name}
                className="p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent shadow-none sm:shadow-md flex"
              >
                <div className="p-6 w-full bg-[#0a0a12]/90 rounded-[calc(1.2rem-1px)] border border-white/[0.03] flex flex-col justify-between min-h-[190px]">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-white/[0.04]">
                      <Icon className="w-4.5 h-4.5 text-purple-400" strokeWidth={1.5} />
                      <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-300">
                        {category.name}
                      </h3>
                    </div>

                    {/* Category Tools List */}
                    <div className="flex flex-wrap gap-1.5">
                      {category.items
                        .slice(0, showAllTools ? undefined : 5)
                        .map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] md:text-xs font-sans font-semibold text-neutral-400 hover:text-white transition-colors duration-300"
                          >
                            {item}
                          </span>
                        ))}
                      
                      {!showAllTools && category.items.length > 5 && (
                        <span className="text-[10.5px] md:text-xs font-bold text-neutral-600 self-center pl-1 select-none">
                          +{category.items.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Expand/Collapse button */}
        <button
          onClick={() => setShowAllTools(!showAllTools)}
          className="mt-8 flex items-center justify-center gap-1.5 mx-auto px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer w-full max-w-[200px]"
        >
          <span>{showAllTools ? "Collapse Stack" : "View Full Stack"}</span>
          {showAllTools ? (
            <ChevronUp className="w-3.5 h-3.5" strokeWidth={1.5} />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
          )}
        </button>

      </div>
    </section>
  );
}
