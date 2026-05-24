"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % site.roles.length);
        setVisible(true);
      }, 280);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`hero-role${visible ? " visible" : ""}`}>
      <span className="hero-role-text gradient-text">
        {site.roles[index]}
      </span>
    </p>
  );
}
