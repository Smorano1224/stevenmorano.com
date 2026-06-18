"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#what-i-do" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const isManualScrolling = useRef(false);
  const manualScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const activeSectionRef = useRef("");

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (manualScrollTimeout.current) {
        clearTimeout(manualScrollTimeout.current);
      }
    };
  }, []);

  // Sticky navbar background toggle & top/bottom edge cases
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 30) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }

          // Edge cases: top and bottom
          if (!isManualScrolling.current) {
            if (window.scrollY < 150) {
              if (activeSectionRef.current !== "") {
                setActiveSection("");
              }
            } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
              if (activeSectionRef.current !== "#contact") {
                setActiveSection("#contact");
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll-spy
  useEffect(() => {
    const sectionVisibilityMap = new Map<string, boolean>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return;

      // Update visibility map
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (id) {
          sectionVisibilityMap.set(id, entry.isIntersecting);
        }
      });

      // Avoid overriding top/bottom edge cases handled by scroll listener
      if (window.scrollY < 150) {
        if (activeSectionRef.current !== "") {
          setActiveSection("");
        }
        return;
      }
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        if (activeSectionRef.current !== "#contact") {
          setActiveSection("#contact");
        }
        return;
      }

      // Find the active section based on visibility map
      let currentActive = "";
      for (const item of navItems) {
        const sectionId = item.href.replace("#", "");
        if (sectionVisibilityMap.get(sectionId)) {
          currentActive = item.href;
          break;
        }
      }

      if (currentActive && currentActive !== activeSectionRef.current) {
        setActiveSection(currentActive);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-150px 0px -50% 0px", // focus strip below header, above screen mid-point
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const el = document.getElementById(sectionId);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // 1. Lock active nav highlight
      isManualScrolling.current = true;
      if (manualScrollTimeout.current) {
        clearTimeout(manualScrollTimeout.current);
      }
      
      // 2. Set active section immediately
      setActiveSection(href);
      
      const navOffset = scrolled ? 90 : 110;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // 3. Clear manual scrolling flag after scroll settles
      const handleScrollEnd = () => {
        if (manualScrollTimeout.current) {
          clearTimeout(manualScrollTimeout.current);
        }
        manualScrollTimeout.current = setTimeout(() => {
          isManualScrolling.current = false;
          window.removeEventListener("scroll", handleScrollEnd);
        }, 100);
      };
      
      window.addEventListener("scroll", handleScrollEnd, { passive: true });
      
      // Safety fallback in case no scroll event fires (already at destination)
      manualScrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
        window.removeEventListener("scroll", handleScrollEnd);
      }, 1000);
    } else if (href === "#home" || href === "") {
      // Handle scrolling to top/logo click
      isManualScrolling.current = true;
      if (manualScrollTimeout.current) {
        clearTimeout(manualScrollTimeout.current);
      }
      
      setActiveSection("");
      
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      const handleScrollEnd = () => {
        if (manualScrollTimeout.current) {
          clearTimeout(manualScrollTimeout.current);
        }
        manualScrollTimeout.current = setTimeout(() => {
          isManualScrolling.current = false;
          window.removeEventListener("scroll", handleScrollEnd);
        }, 100);
      };
      
      window.addEventListener("scroll", handleScrollEnd, { passive: true });
      
      manualScrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
        window.removeEventListener("scroll", handleScrollEnd);
      }, 1000);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      {/* Detached Floating Island Nav */}
      <div
        className={`max-w-6xl mx-auto px-6 py-2.5 rounded-full transition-all duration-500 ease-apple flex items-center justify-between mx-4 md:mx-auto ${
          scrolled
            ? "bg-black/60 border border-white/[0.06] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand Signature Logo (SM Steven Morano) */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-white transition-all duration-300"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-black text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            SM
          </div>
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
            Steven Morano
          </span>
        </a>

        {/* Desktop Navigation Links with Framer Motion Sliding Pill */}
        <div className="hidden md:flex items-center p-[3px] rounded-full border border-white/[0.05] bg-white/[0.01] backdrop-blur-md">
          <div className="flex items-center gap-0.5 p-0.5 bg-black/45 rounded-full relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-wide uppercase transition-colors duration-500 ${
                    isActive ? "text-neutral-900" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {/* Sliding Pill Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_5px_15px_rgba(255,255,255,0.08)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop Nested CTA Button (Solid Blue Pill) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-[11px] md:text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <span>Work With Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-full border border-white/5 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-4 h-4" strokeWidth={1.2} /> : <Menu className="w-4 h-4" strokeWidth={1.2} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-x-0 top-[80px] bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] overflow-hidden transition-all duration-500 ease-apple ${
          isOpen ? "max-h-screen opacity-100 py-8 pointer-events-auto" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 gap-5">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={(e) => handleClick(e, item.href)}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className={`text-base font-bold tracking-tight uppercase transition-all duration-500 ${
                  isActive
                    ? "text-blue-400 translate-x-2"
                    : "text-neutral-500 hover:text-white translate-x-0"
                } ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {item.label}
              </a>
            );
          })}
          
          <a
            href="#contact"
            tabIndex={isOpen ? 0 : -1}
            onClick={(e) => handleClick(e, "#contact")}
            className="mt-6 flex items-center justify-between w-full pl-6 pr-2 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-all duration-300"
          >
            <span>Work With Me</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
