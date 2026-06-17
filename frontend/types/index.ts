export type NavigationLink = {
  href: string;
  label: string;
  index: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroProofPoint = {
  label: string;
  title: string;
  copy: string;
};

export type HeroConfig = {
  eyebrow: string;
  titleLead: string;
  titleSupport: string;
  titleEmphasis: string;
  description: string;
  primaryCta: FooterLink;
  secondaryCta: FooterLink;
  stats: HeroStat[];
  proofPoints: HeroProofPoint[];
};

export type ConsultationPrompt = {
  label: string;
  value: string;
};

export type ConsultationConfig = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  prompts: ConsultationPrompt[];
};

export type SectionCopy = {
  eyebrow: string;
  index: string;
  title: string;
  description: string;
};

export type HomeArchiveCopy = {
  title: string;
  description: string;
};

export type ProjectDetailCopy = {
  narrative: SectionCopy;
  relations: SectionCopy;
  archiveTitle: string;
};

export type FounderDetailCopy = {
  projects: SectionCopy;
};

export type PageCopyConfig = {
  home: {
    featuredProjects: SectionCopy;
    capabilities: SectionCopy;
    founders: SectionCopy;
    archivePosture: HomeArchiveCopy;
  };
  projects: SectionCopy;
  services: SectionCopy;
  founders: SectionCopy;
  projectDetail: ProjectDetailCopy;
  founderDetail: FounderDetailCopy;
};

export type FounderPortrait = {
  label: string;
  monogram: string;
  accent: string;
  support: string;
};

export type ProjectModule = {
  name: string;
  summary: string;
};

export type ProjectOutcome = {
  label: string;
  value: string;
};

export type ProjectProof = {
  title: string;
  description: string;
};

export type ProjectCover = {
  label: string;
  accent: string;
  support: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  status: string;
  category: string;
  scope: string;
  summary: string;
  challenge: string;
  diagnosis: string;
  architecture: string;
  tags: string[];
  founderSlugs: string[];
  featured: boolean;
  cover: ProjectCover;
  modules: ProjectModule[];
  stack: string[];
  outcomes: ProjectOutcome[];
  proof: ProjectProof[];
};

export type Founder = {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  philosophy: string;
  specialties: string[];
  projectSlugs: string[];
  portrait: FounderPortrait;
  links: FooterLink[];
};

export type Service = {
  slug: string;
  label: string;
  name: string;
  summary: string;
  deliverables: string[];
  relatedProjectSlugs: string[];
};

export type SiteConfig = {
  navLinks: NavigationLink[];
  hero: HeroConfig;
  consultation: ConsultationConfig;
  pageCopy: PageCopyConfig;
  footerGroups: FooterGroup[];
  footerStatement: string;
};
