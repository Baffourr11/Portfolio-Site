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
  email: "baffour.aninfeng@gmail.com",
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

export const projects = [
  {
    id: "01",
    meta: "BloodBank Management system",
    title: "BloodVault",
    description:
      "A blood bank management system for real-time inventory tracking and automated alerts.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/projects/bloodvault.png",
    gradient:
      "linear-gradient(135deg, #dc2626 0%, #7f1d1d 40%, #0a0a0c 100%)",
    reverse: false,
    aosDelay: 0,
    href: "https://blood-vault-app.vercel.app/",
  },
  {
    id: "02",
    meta: "Brand & Web",
    title: "Project Beta",
    description:
      "Full brand identity and responsive website for a creative studio.",
    tags: ["Figma", "Design", "Frontend"],
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 40%, #0a0a0c 100%)",
    reverse: true,
    aosDelay: 100,
    href: "#",
  },
  {
    id: "03",
    meta: "Open Source",
    title: "Project Gamma",
    description:
      "Developer tooling and CLI that streamlines local development workflows.",
    tags: ["Flutter", "Dart", "Supabase"],
    gradient: "linear-gradient(135deg, #059669 0%, #064e3b 40%, #0a0a0c 100%)",
    reverse: false,
    aosDelay: 200,
    href: "#",
  },
] as const;

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
