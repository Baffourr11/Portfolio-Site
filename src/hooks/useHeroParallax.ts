"use client";

import { useEffect, useRef } from "react";

export function useHeroParallax() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    function onScroll() {
      if (!hero) return;
      const rate = window.scrollY * 0.15;
      hero.style.setProperty("--hero-y", `${Math.min(rate, 60)}px`);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return heroRef;
}
