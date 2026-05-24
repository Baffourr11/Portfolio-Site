import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Baffour Aninfeng — Software Developer & Designer",
  description:
    "Portfolio of Baffour Aninfeng — software developer, graphic designer & frontend developer. React, Next.js, Flutter, Figma.",
  openGraph: {
    title: "Baffour Aninfeng — Software Developer & Designer",
    description:
      "Building fast, accessible interfaces with React, Next.js, Flutter, and Figma.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="bg-grid" aria-hidden="true" />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
