import { founders } from "./founders";
import { projects } from "./projects";
import { services } from "./services";
import { siteConfig } from "./site";

export { founders, projects, services, siteConfig };

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsBySlugs(slugs: string[]) {
  const slugSet = new Set(slugs);
  return projects.filter((project) => slugSet.has(project.slug));
}

export function getFounderBySlug(slug: string) {
  return founders.find((founder) => founder.slug === slug);
}

export function getProjectsByFounder(founderSlug: string) {
  return projects.filter((project) => project.founderSlugs.includes(founderSlug));
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesForProject(projectSlug: string) {
  return services.filter((service) =>
    service.relatedProjectSlugs.includes(projectSlug),
  );
}
