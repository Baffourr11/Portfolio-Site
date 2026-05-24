"use client";

import { useState } from "react";
import { sectionIntros, site } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section id="contact" className="section contact">
      <SectionHeader label="/ contact" intro={sectionIntros.contact} />
      <div className="contact-card" data-aos data-aos-delay={100}>
        <p className="contact-lead">Let&apos;s build something together.</p>
        <p className="contact-sub">
          Tell me about your idea — I typically reply within 24 hours.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Send an email
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={copyEmail}
            aria-live="polite"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        <a href={`mailto:${site.email}`} className="contact-email">
          {site.email}
        </a>
        <a href={site.phoneHref} className="contact-phone mono">
          {site.phone}
        </a>

        <div className="contact-links">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            <span className="mono">GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            <span className="mono">LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
