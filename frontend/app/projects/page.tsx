import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected Crowdix case studies, systems, and portfolio proof.",
};

export default function ProjectsPage() {
  const pageCopy = siteConfig.pageCopy.projects;

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow={pageCopy.eyebrow}
          index={pageCopy.index}
          title={pageCopy.title}
          description={pageCopy.description}
        />

        {projects.length === 0 ? (
          <EmptyState
            title="No projects published yet"
            description="Project records will live here once the archive is ready. The page structure is already prepared for a future Supabase-backed collection."
            actionHref="/services"
            actionLabel="Browse capabilities"
          />
        ) : (
          <div className="grid gap-5 lg:grid-cols-12">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <ProjectCard project={project} featured={index === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
