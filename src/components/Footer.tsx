import React from "react";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] py-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Signature inline metadata */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[12px] md:text-xs text-neutral-500 font-bold uppercase tracking-wider text-center md:text-left leading-relaxed">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-[7px] font-black text-white shrink-0">
            SM
          </div>
          <span>{siteContent.personalInfo.name}</span>
          <span className="text-neutral-700 font-normal">&mdash;</span>
          <span>Marketing Operations</span>
          <span className="text-neutral-700 font-normal">&mdash;</span>
          <span>AI Systems Consultant</span>
          <span className="text-neutral-700 font-normal">&mdash;</span>
          <span>Rye Brook, NY</span>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-[12px] md:text-xs text-neutral-600 font-semibold tracking-wider uppercase shrink-0">
          &copy; {currentYear} {siteContent.personalInfo.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
