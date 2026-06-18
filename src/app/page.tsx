import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <Hero />

        {/* Outer Grid/Container wrapping all panels */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-12">
          {/* PANEL A: Core Profile */}
          <div className="bg-[#050508] md:bg-[#050508]/60 md:backdrop-blur-md border border-white/[0.05] rounded-[2.2rem] shadow-2xl overflow-hidden divide-y divide-white/[0.05]">
            {/* About Section & Flowchart widget */}
            <About />

            {/* Service Pillars Section */}
            <WhatIDo />
          </div>

          {/* PANEL B: Professional Background */}
          <div className="bg-[#050508] md:bg-[#050508]/60 md:backdrop-blur-md border border-white/[0.05] rounded-[2.2rem] shadow-2xl overflow-hidden divide-y divide-white/[0.05]">
            {/* Work History Section */}
            <Experience />

            {/* Tools & Platforms Section */}
            <Stack />
          </div>

          {/* PANEL C: Selected Projects & Experiments */}
          <div className="bg-[#050508] md:bg-[#050508]/60 md:backdrop-blur-md border border-white/[0.05] rounded-[2.2rem] shadow-2xl overflow-hidden">
            <Projects />
          </div>

          {/* Contact CTA Section */}
          <Contact />
        </div>
      </main>

      {/* Footer Signature */}
      <Footer />
    </div>
  );
}
