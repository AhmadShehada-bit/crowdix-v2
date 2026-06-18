import type { Founder } from "@/types";

export const founders: Founder[] = [
  {
    slug: "ahmed-shehada",
    name: "Ahmed Shehada",
    role: "AI Automation & Web Systems Lead",
    shortBio:
      "Ahmed turns operational friction into clear systems. He leads AI-assisted workflow design, business automation, and web implementation that helps teams move faster without losing context.",
    philosophy:
      "Useful automation should not feel louder than the work itself. The right system reduces drag, clarifies ownership, and makes the next decision easier for the team using it.",
    specialties: [
      "AI workflow design",
      "Business automation",
      "Web systems",
      "Prompt systems",
      "Process mapping",
      "Content operations",
      "Client-facing AI tools",
    ],
    projectSlugs: [
      "ops-orchestrator",
      "operator-content-engine",
      "northstar-editorial-site",
    ],
    portrait: {
      label: "Automation lead",
      monogram: "AS",
      accent: "oklch(72% 0.15 210 / 0.28)",
      support: "oklch(64% 0.18 300 / 0.2)",
    },
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Email", href: "mailto:hello@crowdix.studio" },
    ],
  },
  {
    slug: "karam-al-hams",
    name: "Karam Al-Hams",
    role: "AI Design & Brand Systems Lead",
    shortBio:
      "Karam translates positioning into visual systems that feel sharp, credible, and repeatable. He leads brand direction, landing pages, and AI-assisted design workflows that keep presentation aligned with the work.",
    philosophy:
      "Brand direction matters when it makes decisions easier. Good design systems give teams a repeatable visual language, not just a polished launch week.",
    specialties: [
      "Brand systems",
      "AI-assisted design",
      "Landing pages",
      "Visual direction",
      "Creative automation",
      "Portfolio storytelling",
      "UI presentation",
    ],
    projectSlugs: [
      "atelier-brand-atlas",
      "northstar-editorial-site",
      "ops-orchestrator",
    ],
    portrait: {
      label: "Design lead",
      monogram: "KA",
      accent: "oklch(64% 0.18 300 / 0.28)",
      support: "oklch(72% 0.15 210 / 0.22)",
    },
    links: [
      { label: "Behance", href: "https://www.behance.net/" },
      { label: "Email", href: "mailto:karam@crowdix.studio" },
    ],
  },
];
