"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Home, Brain, CheckCircle2, Users, Target, ChevronRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { useMobileSafe } from "@/hooks/useMobileSafe";

// Map project title to specific visual styles and icons
const getProjectConfig = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("home") || t.includes("homebase")) {
    return {
      icon: Home,
      color: "from-blue-500 to-indigo-500",
      borderClass: "border-blue-500/15 hover:border-blue-500/35",
      glowClass: "shadow-[0_0_15px_rgba(59,130,246,0.06)]",
    };
  } else if (t.includes("adhd") || t.includes("working from")) {
    return {
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      borderClass: "border-purple-500/15 hover:border-purple-500/35",
      glowClass: "shadow-[0_0_15px_rgba(168,85,247,0.06)]",
    };
  } else if (t.includes("follow through")) {
    return {
      icon: CheckCircle2,
      color: "from-amber-500 to-orange-500",
      borderClass: "border-amber-500/15 hover:border-amber-500/35",
      glowClass: "shadow-[0_0_15px_rgba(245,158,11,0.06)]",
    };
  } else if (t.includes("school parent")) {
    return {
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      borderClass: "border-cyan-500/15 hover:border-cyan-500/35",
      glowClass: "shadow-[0_0_15px_rgba(6,182,212,0.06)]",
    };
  } else {
    return {
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      borderClass: "border-emerald-500/15 hover:border-emerald-500/35",
      glowClass: "shadow-[0_0_15px_rgba(16,185,129,0.06)]",
    };
  }
};

// Map status to visual badge styling
const getStatusStyles = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Building":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Rebuilding":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "Concept":
    default:
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  }
};

export default function Projects() {
  const isMobileSafe = useMobileSafe();

  // Flatten builds from siteContent ventures
  const projectsList = siteContent.ventures.flatMap((v) =>
    v.builds.map((b) => ({
      title: b.title,
      status: b.status,
      description: b.description,
      ...getProjectConfig(b.title),
    }))
  );

  return (
    <section id="ventures" className="relative p-6 sm:p-10 lg:p-12 overflow-hidden">
      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Box className="w-4.5 h-4.5" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Selected Projects &amp; Experiments
            </h2>
          </div>
        </div>

        {/* Framing context (Proof of systems capability) */}
        <p className="text-neutral-500 text-xs md:text-sm mb-8 max-w-2xl leading-relaxed text-left">
          Side projects and open-source applications built to experiment with new technologies, integrate custom APIs, and explore AI workflow automation tools.
        </p>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center gap-2 mb-3.5 px-1 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>Swipe to see more projects &rarr;</span>
        </div>

        {/* Projects Layout (Responsive single mapping) */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 px-1 snap-x snap-mandatory scrollbar-none lg:scrollbar-default">
          {projectsList.map((project, idx) => {
            const Icon = project.icon;
            const statusStyle = getStatusStyles(project.status);
            return (
              <motion.div
                key={project.title}
                initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                whileInView={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={isMobileSafe ? undefined : { once: true, margin: "-50px" }}
                transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="snap-start shrink-0 lg:shrink w-[80vw] max-w-[280px] lg:w-auto lg:max-w-none p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent shadow-none lg:shadow-lg lg:hover:scale-[1.02] transition-all duration-300 flex"
              >
                <div className={`p-5 lg:p-6 w-full bg-[#050508]/95 lg:bg-[#050508]/85 rounded-[calc(1rem-1px)] lg:rounded-[calc(1.2rem-1px)] border ${project.borderClass} ${project.glowClass} flex flex-col justify-between min-h-[260px] lg:min-h-[300px] text-left transition-colors duration-300`}>
                  <div>
                    {/* Header: Status Badge + Circle Icon */}
                    <div className="flex justify-between items-start mb-4 lg:mb-5">
                      <span className={`px-2 py-0.5 rounded text-[8px] lg:text-[10.5px] lg:md:text-xs font-bold uppercase tracking-wider border ${statusStyle}`}>
                        {project.status}
                      </span>
                      <div className={`w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br ${project.color} shadow-lg shadow-white/5 flex items-center justify-center shrink-0`}>
                        <Icon className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-display text-xs lg:text-sm lg:md:text-base font-bold text-white tracking-tight leading-tight mb-2 group-hover:text-purple-400 transition-colors duration-350">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-[10px] lg:text-xs lg:md:text-sm leading-relaxed font-sans font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[9px] lg:text-xs lg:md:text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors mt-4"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
