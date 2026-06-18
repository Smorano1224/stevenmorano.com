"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { useMobileSafe } from "@/hooks/useMobileSafe";

export default function Hero() {
  const { name, subheadline } = siteContent.personalInfo;
  const isMobileSafe = useMobileSafe();

  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden"
    >
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none hidden md:block" />

      {/* 3D Perspective Grid Floor (Receding into the background) */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px] overflow-hidden pointer-events-none z-0 hidden md:block">
        <div 
          className="w-full h-[500px] origin-top opacity-[0.2]"
          style={{
            perspective: "260px",
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div 
            className="w-[200%] h-[800px] -left-1/2 absolute"
            style={{
              transform: "rotateX(75deg)",
              transformOrigin: "50% 0%",
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />
          {/* Grid fade-out gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#030303]/90 to-[#030303] pointer-events-none" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center text-center z-10 w-full">
        {/* Eyebrow badge */}
        <motion.div
          initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-950/20 text-blue-300 text-[12px] sm:text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-none sm:backdrop-blur-md"
        >
          <MapPin className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.5} />
          <span>Based in {siteContent.personalInfo.location} — Consulting Worldwide</span>
        </motion.div>

        {/* Small name identifier */}
        <motion.div
          initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 text-sm sm:text-base font-semibold uppercase tracking-widest mb-2 font-display"
        >
          {name}
        </motion.div>

        {/* Main Positioning Headline */}
        <motion.h1
          initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
        >
          <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            Marketing Operations &
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            AI Systems Consultant
          </span>
        </motion.h1>

        {/* Tagline Subtitle */}
        <motion.p
          initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-300 text-[16px] sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-sans font-medium"
        >
          {subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={isMobileSafe ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobileSafe ? { duration: 0 } : { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md px-2 mb-8"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[13px] sm:text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] shadow-[0_0_30px_rgba(37,99,235,0.3)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
            <span>Book a Strategy Call</span>
          </button>

          <button
            onClick={() => handleScrollTo("experience")}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 w-full sm:w-auto rounded-full bg-[#0a0a0f] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-bold text-[13px] sm:text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <span>View Experience</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* Tertiary link to Projects */}
        <motion.button
          initial={isMobileSafe ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={isMobileSafe ? { duration: 0 } : { delay: 0.5 }}
          onClick={() => handleScrollTo("ventures")}
          className="group inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 text-[13px] sm:text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer"
        >
          <span>See Projects &amp; Experiments</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </motion.button>
      </div>
    </section>
  );
}
