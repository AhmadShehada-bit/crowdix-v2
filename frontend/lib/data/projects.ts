import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ops-orchestrator",
    title: "Operations Orchestrator",
    client: "Private growth operator",
    year: "2026",
    status: "Active system",
    category: "AI automation",
    scope: "Intake / routing / follow-up / knowledge support",
    summary:
      "A case-study-led operator system that turns fragmented client intake, routing, and follow-up into one calm workflow with visible ownership and reusable logic.",
    challenge:
      "The operator team was handling lead intake, internal briefing, and follow-up across scattered tools. Requests stalled between channels, context disappeared, and every handoff depended on someone remembering to push it forward.",
    diagnosis:
      "The core issue was not message volume. It was the lack of one system of record that could hold project context, classify urgency, and move work forward without manual re-translation at every step.",
    architecture:
      "Crowdix designed a staged workflow with form intake, triage rules, tagged owner lanes, contextual prompt scaffolds, and escalation paths. The UX stayed quiet while the operational logic carried most of the complexity.",
    tags: ["Automation", "Workflow design", "Operator UX", "AI support"],
    founderSlugs: ["ahmed-shehada", "karam-al-hams"],
    featured: true,
    cover: {
      label: "System plate",
      accent: "oklch(72% 0.15 210 / 0.28)",
      support: "oklch(64% 0.18 300 / 0.18)",
    },
    modules: [
      {
        name: "Structured intake layer",
        summary:
          "Captures project intent, urgency, scope markers, and reply path in one place before routing starts.",
      },
      {
        name: "Routing logic",
        summary:
          "Maps requests into owner lanes with context-aware tags so work does not lose narrative during handoff.",
      },
      {
        name: "Prompt support",
        summary:
          "Provides reusable AI assistance for summaries, replies, and internal notes without replacing human review.",
      },
      {
        name: "Status surface",
        summary:
          "Shows what is blocked, who owns it, and where the next action belongs without building a noisy dashboard.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Structured content model"],
    outcomes: [
      { label: "Primary shift", value: "One calm intake path instead of scattered threads" },
      { label: "UX posture", value: "Operational depth without dashboard cosplay" },
      { label: "Future-ready", value: "Prepared for structured records and operational visibility" },
    ],
    proof: [
      {
        title: "Portfolio proof",
        description:
          "The project shows how Crowdix handles systems: clear flows, fewer invisible steps, and a public-facing case study that still reads as premium editorial work.",
      },
      {
        title: "Implementation note",
        description:
          "The case study model stays clean enough to grow into structured records later without changing the route hierarchy.",
      },
    ],
  },
  {
    slug: "atelier-brand-atlas",
    title: "Atelier Brand Atlas",
    client: "Founder-led studio",
    year: "2026",
    status: "Design direction",
    category: "AI design",
    scope: "Identity direction / image studies / palette system",
    summary:
      "A premium AI design direction case focused on translating a founder's taste into a reusable brand system with image studies, typography rules, and consistent editorial mood.",
    challenge:
      "The studio had strong intuition but no repeatable language. Every visual decision felt isolated, making the website, pitch materials, and social assets drift apart.",
    diagnosis:
      "The problem was less about assets and more about principles. There was no shared grammar for contrast, rhythm, accent restraint, or how AI-assisted visuals should support the brand.",
    architecture:
      "Crowdix created an editorial design framework with named visual rules, a mood spectrum, reusable type treatment, and a proof-first presentation style that could travel between surfaces.",
    tags: ["Brand systems", "AI image studies", "Editorial art direction"],
    founderSlugs: ["karam-al-hams"],
    featured: true,
    cover: {
      label: "Direction board",
      accent: "oklch(64% 0.18 300 / 0.26)",
      support: "oklch(72% 0.15 210 / 0.16)",
    },
    modules: [
      {
        name: "Palette and contrast rules",
        summary:
          "Defined the dark canvas, restrained cyan action points, and violet atmosphere without losing readability.",
      },
      {
        name: "Editorial type system",
        summary:
          "Balanced oversized display rhythm with italic serif emphasis and clean body copy for long-form pages.",
      },
      {
        name: "AI image direction",
        summary:
          "Used image studies as proof of taste rather than filler, with curation rules for when a visual belongs.",
      },
      {
        name: "Portable brand logic",
        summary:
          "Ensured the same design language could hold across a homepage, case study, and founder profile.",
      },
    ],
    stack: ["Typography systems", "Visual tokens", "AI image direction", "Editorial layout"],
    outcomes: [
      { label: "Brand effect", value: "One visual grammar across every premium touchpoint" },
      { label: "Design signal", value: "Taste made repeatable instead of mood-board only" },
      { label: "Content support", value: "Image studies framed as proof, not decoration" },
    ],
    proof: [
      {
        title: "Visual proof",
        description:
          "The direction work anchored the portfolio in a distinct look: dark, editorial, premium, and calm under motion.",
      },
      {
        title: "System proof",
        description:
          "Because the design rules were explicit, new pages and layouts could be added later without losing the brand voice.",
      },
    ],
  },
  {
    slug: "northstar-editorial-site",
    title: "Northstar Editorial Site",
    client: "Specialized advisory practice",
    year: "2026",
    status: "Responsive website",
    category: "Web experience",
    scope: "Portfolio architecture / long-form pages / founder credibility",
    summary:
      "An editorial website system built to carry case studies, founder pages, and capability context without drifting into a generic agency marketing template.",
    challenge:
      "The previous web presence flattened nuanced work into short marketing blocks. There was nowhere for serious proof, process explanation, or founder point of view to live together.",
    diagnosis:
      "The website needed a structural change, not a style refresh. Navigation, page hierarchy, and content pacing all had to reinforce credibility through evidence.",
    architecture:
      "Crowdix proposed an archive-first site model: homepage as proof wall, project pages as evidence narratives, founder pages as maker profiles, and services as supporting context.",
    tags: ["Next.js", "Editorial UX", "Responsive system", "Portfolio-first"],
    founderSlugs: ["ahmed-shehada", "karam-al-hams"],
    featured: false,
    cover: {
      label: "Site matrix",
      accent: "oklch(72% 0.15 210 / 0.24)",
      support: "oklch(55% 0.12 250 / 0.18)",
    },
    modules: [
      {
        name: "Route hierarchy",
        summary:
          "Separated homepage, archive, detail, services, and founder pages so each surface had a clear job.",
      },
      {
        name: "Responsive plate system",
        summary:
          "Used flexible grid compositions and fluid type rather than static desktop-first layouts.",
      },
      {
        name: "Content structure",
        summary:
          "Prepared clean data structures for case studies, people, and capabilities so content can scale without page rewrites.",
      },
      {
        name: "Consultation follow-up",
        summary:
          "Placed the CTA after browsing rather than interrupting the proof with premature selling.",
      },
    ],
    stack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Reusable content model"],
    outcomes: [
      { label: "Hierarchy", value: "Portfolio-first navigation with no fake dashboard" },
      { label: "Readability", value: "Long-form case studies that stay premium on mobile" },
      { label: "Scalability", value: "Reusable component system prepared for future data" },
    ],
    proof: [
      {
        title: "Editorial proof",
        description:
          "The site reads more like a curated archive than a sales deck, which makes service claims feel earned.",
      },
      {
        title: "Implementation proof",
        description:
          "The route map and component library make it practical to extend the site without compromising the original visual direction.",
      },
    ],
  },
  {
    slug: "operator-content-engine",
    title: "Operator Content Engine",
    client: "Niche B2B publisher",
    year: "2025",
    status: "Content operations",
    category: "AI content system",
    scope: "Editorial queue / reusable prompts / approval path",
    summary:
      "A lightweight AI-supported content engine for operators who need repeatable publishing flow, honest review checkpoints, and better coordination between draft, edit, and publish.",
    challenge:
      "Publishing depended on ad hoc briefs and memory. Drafts existed, but the approval flow, reuse of good prompts, and coordination between stakeholders stayed inconsistent.",
    diagnosis:
      "The underlying issue was operational design. Prompts were treated as isolated hacks instead of reusable building blocks inside a real editorial system.",
    architecture:
      "Crowdix shaped a repeatable content queue with structured briefs, prompt templates, approval checkpoints, and artifact tracking that respected editorial judgment.",
    tags: ["Content systems", "Prompt library", "Approval flow", "Operator tooling"],
    founderSlugs: ["ahmed-shehada"],
    featured: false,
    cover: {
      label: "Queue frame",
      accent: "oklch(76% 0.12 150 / 0.2)",
      support: "oklch(72% 0.15 210 / 0.18)",
    },
    modules: [
      {
        name: "Brief structure",
        summary:
          "Standardized what each request needs before writing starts: audience, objective, angle, and proof references.",
      },
      {
        name: "Prompt library",
        summary:
          "Stored reusable prompt patterns by job type so the team could improve the system over time instead of improvising every cycle.",
      },
      {
        name: "Approval checkpoints",
        summary:
          "Added clear review states for human edits, factual checks, and publish readiness.",
      },
      {
        name: "Editorial visibility",
        summary:
          "Kept the system lightweight so operators could see momentum without a noisy dashboard layer.",
      },
    ],
    stack: ["Content workflows", "Prompt systems", "Editorial review", "Future data mapping"],
    outcomes: [
      { label: "Flow change", value: "Prompting became a repeatable system, not isolated tricks" },
      { label: "Governance", value: "Human review stayed visible inside every publish path" },
      { label: "Reuse", value: "Stronger prompts accumulated instead of disappearing into chats" },
    ],
    proof: [
      {
        title: "Operational proof",
        description:
          "This case demonstrates how Crowdix approaches AI content: structured, editorial, and honest about where human review belongs.",
      },
      {
        title: "Content model proof",
        description:
          "The case study structure leaves room for modules, outcomes, and relationships without cluttering the reading experience.",
      },
    ],
  },
];
