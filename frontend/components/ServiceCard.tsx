import Link from "next/link";
import { getProjectsBySlugs } from "@/lib/data";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const relatedProjects = getProjectsBySlugs(service.relatedProjectSlugs);

  return (
    <article className="glass-panel rounded-[30px] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          {service.label}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
          {relatedProjects.length} related projects
        </p>
      </div>

      <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.04em] text-foreground">
        {service.name}
      </h3>
      <p className="mt-4 text-sm leading-7 text-soft">{service.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {service.deliverables.map((deliverable) => (
          <span className="tag-pill" key={deliverable}>
            {deliverable}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-[24px] border border-white/9 bg-white/4 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
          Related archive
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {relatedProjects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="rounded-full border border-white/10 bg-black/10 px-4 py-2 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
            >
              {project.title}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
