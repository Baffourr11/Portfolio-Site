"use client";

import { site } from "@/data/site";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <button
        type="button"
        className="back-to-top mono"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
      <p className="mono">{site.copyright}</p>
    </footer>
  );
}
