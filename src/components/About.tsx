"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function About() {
  const { paragraphs } = siteContent.about;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* Background radial soft light overlay */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-purple-950/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Story Text Content (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Header with User Icon on left and Read More on right for mobile */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <User className="w-4.5 h-4.5" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <span className="text-[10.5px] md:text-xs text-neutral-500 font-extrabold uppercase tracking-widest block mb-0.5">About Me</span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    I build cleaner marketing systems
                  </h2>
                </div>
              </div>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="lg:hidden px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-neutral-300 font-semibold text-xs uppercase tracking-wider transition-colors duration-300 cursor-pointer"
              >
                {isExpanded ? "Show Less" : "Read More →"}
              </button>
            </div>

            {/* Paragraph list, on mobile respect expanded toggle */}
            <div className="space-y-6 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
              {/* Always show the first paragraph */}
              <p className="text-neutral-300 font-medium">
                {paragraphs[0]}
              </p>

              {/* Hide the remaining paragraphs on mobile if not expanded */}
              <div className={`${isExpanded ? "block" : "hidden"} lg:block space-y-6`}>
                {paragraphs.slice(1).map((p, idx) => (
                  <p key={idx}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SVG Connecting Flowchart Diagram (Right Column, Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 justify-center relative w-full h-[360px]"
            aria-hidden="true"
          >
            {/* Custom SVG Connector Flowchart Widget */}
            <div className="relative w-full h-full border border-white/[0.04] bg-[#070709]/60 backdrop-blur-md rounded-[2rem] p-6 overflow-hidden">
              {/* Flow Path Glow Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" role="img">
                <style>{`
                  @keyframes flow-pulse {
                    from { stroke-dashoffset: 30; }
                    to { stroke-dashoffset: 0; }
                  }
                  .animate-flow {
                    animation: flow-pulse 6s linear infinite;
                  }
                `}</style>
                <defs>
                  <linearGradient id="purple-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                    <stop offset="100%" stopColor="rgba(147,51,234,0.6)" />
                  </linearGradient>
                  <linearGradient id="purple-glow-reverse" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(147,51,234,0.6)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
                  </linearGradient>
                </defs>

                {/* Left paths to center */}
                <path d="M 18 20 C 33 20, 35 50, 50 50" stroke="rgba(147, 51, 234, 0.08)" strokeWidth="0.6" fill="none" />
                <path d="M 18 50 L 50 50" stroke="rgba(147, 51, 234, 0.08)" strokeWidth="0.6" fill="none" />
                <path d="M 18 80 C 33 80, 35 50, 50 50" stroke="rgba(147, 51, 234, 0.08)" strokeWidth="0.6" fill="none" />

                {/* Animated overlay paths from left */}
                <path d="M 18 20 C 33 20, 35 50, 50 50" stroke="url(#purple-glow)" strokeWidth="1" fill="none" className="animate-flow" strokeDasharray="5 20" />
                <path d="M 18 50 L 50 50" stroke="url(#purple-glow)" strokeWidth="1" fill="none" className="animate-flow" strokeDasharray="5 20" style={{ animationDelay: "0.8s" }} />
                <path d="M 18 80 C 33 80, 35 50, 50 50" stroke="url(#purple-glow)" strokeWidth="1" fill="none" className="animate-flow" strokeDasharray="5 20" style={{ animationDelay: "1.6s" }} />

                {/* Right paths from center */}
                <path d="M 50 50 C 65 50, 67 20, 82 20" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="0.6" fill="none" />
                <path d="M 50 50 L 82 50" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="0.6" fill="none" />
                <path d="M 50 50 C 65 50, 67 80, 82 80" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="0.6" fill="none" />

                {/* Animated overlay paths to right */}
                <path d="M 50 50 C 65 50, 67 20, 82 20" stroke="url(#purple-glow-reverse)" strokeWidth="1" fill="none" className="animate-flow" strokeDasharray="5 20" style={{ animationDelay: "0.4s" }} />
                <path d="M 50 50 L 82 50" stroke="url(#purple-glow-reverse)" strokeWidth="1" fill="none" className="animate-flow" strokeDasharray="5 20" style={{ animationDelay: "1.2s" }} />
                <path d="M 50 50 C 65 50, 67 80, 82 80" stroke="url(#purple-glow-reverse)" strokeWidth="1" fill="none" className="animate-flow" strokeDasharray="5 20" style={{ animationDelay: "2s" }} />
              </svg>

              {/* Node Components absolute positioning */}
              
              {/* Left Column Nodes */}
              <div className="absolute left-[18%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black/80 text-[11px] font-bold text-neutral-400 shadow-md">Ideas</span>
              </div>
              <div className="absolute left-[18%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black/80 text-[11px] font-bold text-neutral-400 shadow-md">Data</span>
              </div>
              <div className="absolute left-[18%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black/80 text-[11px] font-bold text-neutral-400 shadow-md">Chaos</span>
              </div>

              {/* Center Circular Node */}
              <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                <div className="w-[100px] h-[100px] rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.15)]">
                  <div className="w-full h-full rounded-full bg-[#050508] border border-black flex flex-col items-center justify-center text-center px-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400">Systems</span>
                    <span className="text-[11px] font-black uppercase text-white leading-tight">Clarity</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-400">Execution</span>
                  </div>
                </div>
              </div>

              {/* Right Column Nodes */}
              <div className="absolute left-[82%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black/80 text-[11px] font-bold text-neutral-400 shadow-md">Systems</span>
              </div>
              <div className="absolute left-[82%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black/80 text-[11px] font-bold text-neutral-400 shadow-md">Focus</span>
              </div>
              <div className="absolute left-[82%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black/80 text-[11px] font-bold text-neutral-400 shadow-md">Freedom</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
