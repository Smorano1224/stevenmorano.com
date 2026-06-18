"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect mobile viewports, mobile devices, or prefers-reduced-motion.
 * Defaults to true (safe/static mode) during SSR and initial client hydration to 
 * guarantee content is visible immediately.
 */
export function useMobileSafe() {
  const [isMobileSafe, setIsMobileSafe] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth < 1024;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      setIsMobileSafe(isMobileDevice || isSmallScreen || prefersReduced);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobileSafe;
}
