import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  navLinks: [
    { href: "/", label: "Home", index: "00" },
    { href: "/projects", label: "Projects", index: "01" },
    { href: "/services", label: "Services", index: "02" },
    { href: "/founders", label: "Founders", index: "03" },
  ],
  hero: {
    eyebrow: "Selected work and studio systems",
    titleLead: "Automation systems,",
    titleSupport: "editorial websites, and",
    titleEmphasis: "brand direction",
    description:
      "Crowdix is a founder-led studio shaping automation systems, editorial web experiences, and premium brand presentation for teams that want visible proof before promises.",
    primaryCta: {
      href: "/projects",
      label: "View selected work",
    },
    secondaryCta: {
      href: "/#consultation",
      label: "Start a conversation",
    },
    stats: [
      { value: "04", label: "featured case studies" },
      { value: "02", label: "studio leads" },
      { value: "03", label: "core capability areas" },
    ],
    proofPoints: [
      {
        label: "01 / Selected work",
        title: "Case studies that lead with proof",
        copy:
          "Featured projects set the tone for the whole site and keep the first impression rooted in visible results.",
      },
      {
        label: "02 / Case studies",
        title: "Long-form delivery narratives",
        copy:
          "Each case study holds challenge, diagnosis, system architecture, shipped modules, and outcome notes.",
      },
      {
        label: "03 / Founder roles",
        title: "Founder profiles with authorship",
        copy:
          "Founder pages keep philosophy, specialties, and associated proof visible without drifting into generic executive layouts.",
      },
    ],
  },
  consultation: {
    title: "Continue the conversation after the work",
    description:
      "Share the project, bottleneck, or system you want to sharpen and Crowdix can respond with the most relevant next step.",
    primaryHref: "/projects",
    primaryLabel: "Discuss a project",
    secondaryHref: "/services",
    secondaryLabel: "Explore services",
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
        title: "Featured projects lead the homepage",
        description:
          "The first pass should feel like a considered wall of proof: systems, brand direction, editorial web work, and founder fingerprints before capability language steps in.",
      },
      capabilities: {
        eyebrow: "Capabilities",
        index: "II. 002 / 006",
        title: "Capabilities stay attached to proof",
        description:
          "Crowdix does not lead with interchangeable packages. Each service exists to explain the method behind visible systems, design decisions, and shipped operator tools.",
      },
      founders: {
        eyebrow: "Founders",
        index: "III. 003 / 006",
        title: "The founders stay visible through the work",
        description:
          "Profiles should read like maker pages: point of view, role, specialties, and project associations. No headshot banners, inflated bios, or generic platform chrome.",
      },
      archivePosture: {
        title: "Case studies come before service claims",
        description:
          "Crowdix is built like an editorial studio site, not a dashboard or software shell. Projects lead. Services support. Founder profiles humanize the proof. The CTA follows once visitors understand the kind of work they are seeing.",
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
        "These pages hold real people, real specialties, and the work attached to them. The layout protects portrait composition instead of forcing faces into wide marketing banners.",
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
        { label: "Discuss a project", href: "/#consultation" },
      ],
    },
    {
      title: "Direction",
      links: [
        { label: "Case-study hierarchy", href: "/projects" },
        { label: "Founder-led profiles", href: "/founders" },
        { label: "Automation and brand systems", href: "/services" },
      ],
    },
  ],
  footerStatement:
    "A founder-led studio for automation systems, editorial websites, operator tools, and brand direction. Built to make the work legible before the promises start.",
};
