export const site = {
  name: "Baffour Aninfeng",
  title: "Software Developer & Designer",
  roles: [
    "Software Developer",
    "Frontend Engineer",
    "UI/UX Designer",
    "Graphic Designer",
  ],
  description:
    "Software developer, graphic designer & frontend developer. React, Next.js, Flutter, Figma. Portfolio and contact.",
  email: "baffouraninfeng@gmail.com",
  phone: "+233 53 659 1965",
  phoneHref: "tel:+233536591965",
  github: "https://github.com/Baffourr11",
  linkedin:
    "https://www.linkedin.com/in/baffour-aninfeng-286343379/",
  copyright: "© 2026 Kwadwo Baffour Aninfeng — Built with Next.js",
  location: "Ghana · Open to remote",
} as const;

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Stacks mastered" },
] as const;

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Figma",
  "Supabase",
] as const;

export type Project = {
  id: string;
  meta: string;
  title: string;
  description: string;
  tags: readonly string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  gradient: string;
  reverse: boolean;
  aosDelay: number;
  href: string;
};

export const projects: Project[] = [
  {
    id: "01",
    meta: "BloodBank Management system",
    title: "BloodVault",
    description:
      "A blood bank management system for real-time inventory tracking and automated alerts.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/projects/bloodvault.png",
    imageWidth: 1024,
    imageHeight: 487,
    gradient:
      "linear-gradient(135deg, #dc2626 0%, #7f1d1d 40%, #0a0a0c 100%)",
    reverse: false,
    aosDelay: 0,
    href: "https://blood-vault-app.vercel.app/",
  },
  {
    id: "02",
    meta: "Campus Feedback Platform",
    title: "UPSA Feedback System",
    description:
      "Campus feedback and complaint platform for UPSA students—speak up anonymously or tracked, with issues followed through to resolution for teaching, facilities, hostel, and clinic.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    image: "/projects/upsa-feedback.png",
    imageWidth: 1351,
    imageHeight: 649,
    gradient:
      "linear-gradient(135deg, #2563eb 0%, #1e3a8a 40%, #0a0a0c 100%)",
    reverse: true,
    aosDelay: 100,
    href: "https://upsa-student-feedback-system.vercel.app/",
  },
  {
    id: "03",
    meta: "Predictive Financial System",
    title: "ChronoBank Financial System",
    description:
      "Predictive financial automation for SMEs—analyzes transaction patterns, forecasts cash flow, detects risks, and delivers intelligent insights for better decisions.",
    tags: ["Next.js", "TypeScript"],
    image: "/projects/chronobank.png",
    imageWidth: 1339,
    imageHeight: 632,
    gradient:
      "linear-gradient(135deg, #2563eb 0%, #1e3a8a 40%, #0a0a0c 100%)",
    reverse: false,
    aosDelay: 200,
    href: "#",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Mobile & tools",
    items: ["Flutter", "Dart", "Git", "Vercel"],
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Branding", "Prototyping"],
  },
  {
    title: "Backend",
    items: ["Supabase", "Firebase", "REST APIs"],
  },
] as const;

export const sectionIntros = {
  work: "Selected builds — from dashboards to brand systems and developer tools.",
  about: "Design-minded developer shipping polished products end to end.",
  contact: "Have a project in mind? I'd love to hear about it.",
} as const;

export const pendingWork = {
  label: "More in progress",
  title: "Pending projects",
  description:
    "A few more builds are underway and will land here soon. Check back for updates—or reach out if you'd like a sneak peek.",
} as const;
