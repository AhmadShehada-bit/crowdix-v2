import type { Founder } from "@/types";

export const founders: Founder[] = [
  {
    slug: "ahmed-hafez",
    name: "Ahmed Hafez",
    role: "AI Automation Strategist",
    shortBio:
      "Ahmed maps repeated work into clear operating systems: intake logic, routing flows, knowledge scaffolds, and implementation-ready architecture.",
    philosophy:
      "Good automation should feel quieter after launch than it did during design. The real signal is reduced friction, cleaner ownership, and fewer invisible handoffs.",
    specialties: [
      "AI workflows",
      "Backend logic",
      "Operator systems",
      "Solution architecture",
    ],
    projectSlugs: [
      "ops-orchestrator",
      "operator-content-engine",
      "northstar-editorial-site",
    ],
    portrait: {
      label: "Automation lead",
      monogram: "AH",
      accent: "oklch(72% 0.15 210 / 0.28)",
      support: "oklch(64% 0.18 300 / 0.2)",
    },
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Email", href: "mailto:hello@crowdix.studio" },
    ],
  },
  {
    slug: "lina-faris",
    name: "Lina Faris",
    role: "AI Design and Brand Systems Lead",
    shortBio:
      "Lina shapes the visual proof: brand systems, editorial web direction, AI-assisted image studies, and the design language that keeps premium work coherent.",
    philosophy:
      "Taste is not surface polish. It is a system of choices that keeps a website, a case study, and an interface speaking in the same voice even when the medium changes.",
    specialties: [
      "Brand systems",
      "Editorial UX",
      "Visual direction",
      "AI image studies",
    ],
    projectSlugs: [
      "atelier-brand-atlas",
      "northstar-editorial-site",
      "ops-orchestrator",
    ],
    portrait: {
      label: "Design lead",
      monogram: "LF",
      accent: "oklch(64% 0.18 300 / 0.28)",
      support: "oklch(72% 0.15 210 / 0.22)",
    },
    links: [
      { label: "Behance", href: "https://www.behance.net/" },
      { label: "Email", href: "mailto:lina@crowdix.studio" },
    ],
  },
];
