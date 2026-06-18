"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Target, Zap, Layers, Rocket } from "lucide-react";
import { siteContent } from "@/data/siteContent";

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

        {/* Desktop Layout Grid (4 columns) */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {siteContent.whatIDo.map((service, idx) => {
            const Icon = getIcon(service.icon);
            const style = getStyles(idx);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent shadow-lg hover:scale-[1.02] transition-all duration-300 flex"
              >
                <div className={`p-6 w-full bg-[#050508]/85 rounded-[calc(1.2rem-1px)] border ${style.borderClass} ${style.glowClass} flex flex-col justify-between transition-colors duration-300`}>
                  <div>
                    {/* Header: Icon and Title on a single line */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${style.iconColor}`}>
                        <Icon className="w-5 h-5" strokeWidth={1.2} />
                      </div>
                      <h3 className="font-display text-sm md:text-base font-bold text-white tracking-tight leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-sans font-medium mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points as high-density dashboard badges */}
                  {service.bulletPoints && (
                    <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-white/[0.04]">
                      {service.bulletPoints.map((bp) => (
                        <span
                          key={bp}
                          className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] md:text-xs font-sans font-semibold text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
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

        {/* Mobile Layout List */}
        <div className="lg:hidden flex flex-col gap-3">
          {siteContent.whatIDo.map((service, idx) => {
            const Icon = getIcon(service.icon);
            const style = getStyles(idx);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="flex flex-col p-5 rounded-xl bg-[#07070a] border border-white/[0.04] gap-3"
              >
                <div className="flex flex-col text-left">
                  {/* Title and Icon row */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${style.iconColor}`}>
                      <Icon className="w-4 h-4" strokeWidth={1.2} />
                    </div>
                    <h3 className="text-xs font-bold text-white tracking-tight">{service.title}</h3>
                  </div>
                  {/* Short sentence description */}
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Mobile tags wrap (shows first 3 key chips only) */}
                {service.bulletPoints && (
                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/[0.04]">
                    {service.bulletPoints.slice(0, 3).map((bp) => (
                      <span
                        key={bp}
                        className="px-2 py-0.5 rounded bg-white/[0.01] border border-white/[0.03] text-[9.5px] font-sans text-neutral-400"
                      >
                        {bp}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
