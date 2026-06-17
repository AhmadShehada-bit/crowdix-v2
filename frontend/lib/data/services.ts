import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-automation-systems",
    label: "01 / Automation",
    name: "AI automation systems",
    summary:
      "Workflow maps, routing logic, follow-up design, and operational AI assistance built around real ownership rather than automation theater.",
    deliverables: ["Workflow design", "Routing logic", "Prompt support", "Operator visibility"],
    relatedProjectSlugs: ["ops-orchestrator", "operator-content-engine"],
  },
  {
    slug: "ai-brand-direction",
    label: "02 / AI design",
    name: "AI brand direction",
    summary:
      "Visual systems, image studies, editorial palette logic, and brand rules that make AI-assisted design feel deliberate instead of random.",
    deliverables: ["Brand system", "Image studies", "Typography", "Direction rules"],
    relatedProjectSlugs: ["atelier-brand-atlas", "northstar-editorial-site"],
  },
  {
    slug: "editorial-web-experiences",
    label: "03 / Web",
    name: "Editorial web experiences",
    summary:
      "Portfolio-first websites, case study structures, founder profiles, and responsive implementation-ready layouts with a premium editorial posture.",
    deliverables: ["Route architecture", "Responsive layouts", "Case study patterns", "Founder pages"],
    relatedProjectSlugs: ["northstar-editorial-site", "ops-orchestrator"],
  },
  {
    slug: "operator-content-systems",
    label: "04 / Content",
    name: "Operator content systems",
    summary:
      "Prompt libraries, editorial queues, human review flows, and content operations that support publishing without pretending AI can replace judgment.",
    deliverables: ["Prompt library", "Approval flow", "Queue design", "Content governance"],
    relatedProjectSlugs: ["operator-content-engine", "atelier-brand-atlas"],
  },
];
