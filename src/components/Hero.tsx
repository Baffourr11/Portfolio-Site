"use client";

import { useEffect, useRef, useState } from "react";
import { site, stats, techStack } from "@/data/site";
import { useHeroParallax } from "@/hooks/useHeroParallax";
import { RoleRotator } from "./RoleRotator";

export function Hero() {
  const heroRef = useHeroParallax();
  const [displayName, setDisplayName] = useState("");
  const [typewriterDone, setTypewriterDone] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayName(site.name);
      setTypewriterDone(true);
      return;
    }

    const charDelay = 90;
    const startDelay = 700;
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function type() {
      if (i < site.name.length) {
        setDisplayName(site.name.slice(0, i + 1));
        i++;
        timeoutId = setTimeout(type, charDelay);
      } else {
        setTypewriterDone(true);
      }
    }

    timeoutId = setTimeout(type, startDelay);
    return () => clearTimeout(timeoutId);
  }, []);

  function handleBtnMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
    btn.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
  }

  function handleBtnMouseLeave() {
    const btn = btnRef.current;
    if (btn) btn.style.transform = "";
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-glow hero-glow--1" aria-hidden="true" />
      <div className="hero-glow hero-glow--2" aria-hidden="true" />

      <div className="hero-inner">
        <p className="hero-tag mono">
          <span className="hero-status" aria-hidden="true" />
          Available for work
        </p>
        <h1
          className={`hero-title${typewriterDone ? " typewriter-done" : ""}`}
        >
          <span className="line">{displayName}</span>
          <span className="typewriter-cursor" aria-hidden="true" />
        </h1>
        <RoleRotator />
        <p className="hero-desc">
          I craft fast, accessible interfaces — from Figma prototypes to React &
          Next.js apps and Flutter mobile experiences.
        </p>

        <ul className="hero-stats" aria-label="Highlights">
          {stats.map(({ value, label }) => (
            <li key={label}>
              <span className="hero-stat-value">{value}</span>
              <span className="hero-stat-label mono">{label}</span>
            </li>
          ))}
        </ul>

        <div className="hero-cta">
          <a
            ref={btnRef}
            href="#work"
            className="btn btn-primary"
            onMouseMove={handleBtnMouseMove}
            onMouseLeave={handleBtnMouseLeave}
          >
            View work
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-stack">
          <span className="mono hero-stack-label">Stack</span>
          <ul className="hero-stack-list">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="mono">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
