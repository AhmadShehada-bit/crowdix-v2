import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  navLinks: [
    { href: "/", label: "Home", index: "00" },
    { href: "/projects", label: "Projects", index: "01" },
    { href: "/services", label: "Services", index: "02" },
    { href: "/founders", label: "Founders", index: "03" },
  ],
  hero: {
    eyebrow: "Crowdix portfolio direction",
    titleLead: "Curated AI systems,",
    titleSupport: "websites, and",
    titleEmphasis: "brand proof",
    description:
      "Crowdix is a premium AI agency portfolio built like an editorial archive. Case studies lead. Founder/operator profiles add authorship. Services explain the method behind the visible work.",
    primaryCta: {
      href: "/projects",
      label: "Browse selected work",
    },
    secondaryCta: {
      href: "/#consultation",
      label: "Quiet consult",
    },
    stats: [
      { value: "04", label: "case studies in archive" },
      { value: "02", label: "founders with visible roles" },
      { value: "100%", label: "frontend-only scaffold" },
    ],
    proofPoints: [
      {
        label: "01 / Selected work",
        title: "Project plates and evidence-led browsing",
        copy:
          "Featured projects set the tone for the whole site and keep the first impression rooted in real proof.",
      },
      {
        label: "02 / Case studies",
        title: "Long-form project detail pages",
        copy:
          "Each case study holds challenge, diagnosis, system architecture, shipped modules, and honest outcomes.",
      },
      {
        label: "03 / Founder roles",
        title: "Portrait-safe creator profiles",
        copy:
          "Founder pages show philosophy, specialties, links, and associated proof without resorting to generic executive layouts.",
      },
    ],
  },
  consultation: {
    title: "A quiet follow-up after the archive",
    description:
      "The consultation surface should sit after the work, not interrupt it: what caught attention, which system feels urgent, and what kind of reply path makes sense next.",
    primaryHref: "/projects",
    primaryLabel: "Ask about a project",
    secondaryHref: "/services",
    secondaryLabel: "See capability context",
    prompts: [
      {
        label: "Reference case",
        value: "Project, founder work, or system that felt relevant.",
      },
      {
        label: "System to explore",
        value: "Automation, website, brand system, or AI-supported content flow.",
      },
      {
        label: "Current bottleneck",
        value: "A short note about what is slowing the work down right now.",
      },
      {
        label: "Reply path",
        value: "Email, WhatsApp, or a preferred follow-up channel later.",
      },
    ],
  },
  pageCopy: {
    home: {
      featuredProjects: {
        eyebrow: "Selected work",
        index: "I. 001 / 006",
        title: "Featured projects are the homepage",
        description:
          "The first pass should feel like an exhibition wall: systems, brand proof, editorial web work, and founder fingerprints before any capability catalogue tries to sell.",
      },
      capabilities: {
        eyebrow: "Capabilities",
        index: "II. 002 / 006",
        title: "Capabilities stay attached to proof",
        description:
          "Crowdix does not lead with generic agency packages. Each service exists to explain the method behind visible systems, design decisions, and shipped operator tools.",
      },
      founders: {
        eyebrow: "Founders",
        index: "III. 003 / 006",
        title: "The founders are visible through the work",
        description:
          "Profiles should read like maker pages: point of view, role, specialties, and project associations. No executive headshot banners, no inflated bios, no fake platform chrome.",
      },
      archivePosture: {
        title: "Case studies come before service claims",
        description:
          "The Crowdix reference direction is an editorial archive, not a dashboard or SaaS shell. Projects lead. Services support. Founder profiles humanize the proof. The CTA follows only after visitors understand what kind of work they are seeing.",
      },
    },
    projects: {
      eyebrow: "Projects archive",
      index: "I. 001 / 001",
      title: "Long-form case studies with real operating detail",
      description:
        "Each project is structured as evidence: problem frame, diagnosis, architecture, shipped modules, and the founder roles behind the work.",
    },
    services: {
      eyebrow: "Capabilities",
      index: "I. 001 / 002",
      title: "Methods behind the visible work",
      description:
        "Services exist here as explanatory context for the proof. They stay close to related projects and never pretend to be interchangeable package tiers.",
    },
    founders: {
      eyebrow: "Founders",
      index: "I. 001 / 001",
      title: "Work-led founder profiles with portrait-safe framing",
      description:
        "These pages are built to hold real people, real specialties, and project associations later. The layout protects portrait composition instead of forcing faces into wide marketing banners.",
    },
    projectDetail: {
      narrative: {
        eyebrow: "Case study",
        index: "II. 002 / 004",
        title: "Evidence narrative and shipped modules",
        description:
          "The page keeps the same editorial posture as the homepage: context first, then how the system was diagnosed, structured, and delivered.",
      },
      relations: {
        eyebrow: "People and method",
        index: "III. 003 / 004",
        title: "Founder roles and capability context",
        description:
          "Each case study points back to the founders involved and the capabilities the work demonstrates, without turning the page into a service brochure.",
      },
      archiveTitle:
        "Follow the founder trail or return to the full archive.",
    },
    founderDetail: {
      projects: {
        eyebrow: "Selected work",
        index: "II. 002 / 002",
        title: "Projects associated with this founder",
        description:
          "Profiles stay tied to proof. Every specialty should connect back to shipped systems, visual decisions, and published outcomes.",
      },
    },
  },
  footerGroups: [
    {
      title: "Portfolio",
      links: [
        { label: "Homepage", href: "/" },
        { label: "Selected work", href: "/projects" },
        { label: "Case studies", href: "/projects" },
      ],
    },
    {
      title: "Studio",
      links: [
        { label: "Services", href: "/services" },
        { label: "Founders", href: "/founders" },
        { label: "Quiet consult", href: "/#consultation" },
      ],
    },
    {
      title: "Direction",
      links: [
        { label: "Portfolio-first hierarchy", href: "/projects" },
        { label: "Founder-led profiles", href: "/founders" },
        { label: "Frontend-only scaffold", href: "/services" },
      ],
    },
  ],
  footerStatement:
    "A premium AI portfolio studio for selected automation systems, brand direction, editorial websites, operator tools, and content operations. Public-facing, proof-led, and prepared for structured data later.",
};
