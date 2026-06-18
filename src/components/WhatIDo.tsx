"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Target, Zap, Layers, Rocket } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { useMobileSafe } from "@/hooks/useMobileSafe";

// Map icon name to Lucide component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Megaphone":
      return Megaphone;
    case "Target":
      return Target;
    case "Zap":
      return Zap;
    case "Layers":
      return Layers;
    default:
      return Rocket;
  }
};

// Styling details mapped to index
const getStyles = (idx: number) => {
  const styles = [
    {
      borderClass: "border-purple-500/15 hover:border-purple-500/35",
      glowClass: "shadow-[0_0_15px_rgba(168,85,247,0.08)]",
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      borderClass: "border-emerald-500/15 hover:border-emerald-500/35",
      glowClass: "shadow-[0_0_15px_rgba(16,185,129,0.08)]",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      borderClass: "border-violet-500/15 hover:border-violet-500/35",
      glowClass: "shadow-[0_0_15px_rgba(139,92,246,0.08)]",
      iconColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      borderClass: "border-blue-500/15 hover:border-blue-500/35",
      glowClass: "shadow-[0_0_15px_rgba(59,130,246,0.08)]",
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
  ];
  return styles[idx] || styles[0];
};

export default function WhatIDo() {
  const isMobileSafe = useMobileSafe();

  return (
    <section id="what-i-do" className="relative p-6 sm:p-10 lg:p-12 overflow-hidden">
      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Rocket className="w-4.5 h-4.5" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Services &amp; Expertise
            </h2>
          </div>
          <button 
            onClick={() => {
              const target = document.getElementById("stack");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[11px] md:text-xs font-bold text-neutral-500 hover:text-neutral-300 uppercase tracking-widest transition-colors duration-300 cursor-pointer"
          >
            View Stack
          </button>
        </div>

        {/* Services Layout Grid (Responsive single mapping) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-5">
          {siteContent.whatIDo.map((service, idx) => {
            const Icon = getIcon(service.icon);
            const style = getStyles(idx);
            return (
              <motion.div
                key={service.title}
                initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                whileInView={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={isMobileSafe ? undefined : { once: true, margin: "-50px" }}
                transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group lg:p-[1px] rounded-xl lg:rounded-2xl lg:bg-gradient-to-b lg:from-white/[0.06] to-transparent border border-white/[0.04] lg:border-none shadow-none lg:shadow-lg lg:hover:scale-[1.02] transition-all duration-300 flex"
              >
                <div className={`p-5 lg:p-6 w-full bg-[#07070a] lg:bg-[#050508]/85 rounded-[calc(0.75rem-1px)] lg:rounded-[calc(1.2rem-1px)] lg:border ${style.borderClass} lg:${style.glowClass} flex flex-col justify-between transition-colors duration-300 gap-3 lg:gap-0`}>
                  <div>
                    {/* Header: Icon and Title on a single line */}
                    <div className="flex items-center gap-3 lg:gap-3.5 mb-2 lg:mb-4">
                      <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0 border ${style.iconColor}`}>
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.2} />
                      </div>
                      <h3 className="font-display text-xs lg:text-sm lg:md:text-base font-bold text-white tracking-tight leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-neutral-400 text-[11px] lg:text-xs lg:md:text-sm leading-relaxed font-sans font-medium lg:mb-4 mb-0">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points as high-density dashboard badges (shows first 3 on mobile, all on desktop) */}
                  {service.bulletPoints && (
                    <div className="flex flex-wrap gap-1.5 lg:gap-1 mt-auto pt-2.5 lg:pt-3 border-t border-white/[0.04]">
                      {service.bulletPoints.map((bp, bpIdx) => (
                        <span
                          key={bp}
                          className={`px-2 py-0.5 rounded bg-white/[0.01] lg:bg-white/[0.02] border border-white/[0.03] lg:border-white/[0.04] text-[9.5px] lg:text-[10px] lg:md:text-xs font-sans font-semibold text-neutral-400 lg:text-neutral-500 lg:hover:text-neutral-300 transition-colors duration-300 ${
                            bpIdx >= 3 ? "hidden lg:inline-block" : "inline-block"
                          }`}
                        >
                          {bp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
