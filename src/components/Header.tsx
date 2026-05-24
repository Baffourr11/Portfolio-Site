"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

const navLinks = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export function Header() {
  const scrolled = useHeaderScroll();
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <a href="#" className="logo">
        /portfolio
      </a>
      <nav className={`nav${menuOpen ? " open" : ""}`}>
        {navLinks.map(({ href, id, label }) => (
          <a
            key={href}
            href={href}
            className={active === id ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href={`mailto:${site.email}`}
          className="nav-cta btn btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Email me
        </a>
      </nav>
      <button
        type="button"
        className={`menu-btn${menuOpen ? " open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
