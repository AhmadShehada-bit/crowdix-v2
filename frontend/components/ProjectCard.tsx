import Link from "next/link";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`glass-panel group relative overflow-hidden rounded-[30px] ${
        featured ? "p-7 sm:p-8 lg:p-10" : "p-6 sm:p-7"
      }`}
    >
      <div
        className="absolute inset-0 opacity-80 transition duration-500 group-hover:scale-[1.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 12% 14%, ${project.cover.accent}, transparent 30%), radial-gradient(circle at 85% 18%, ${project.cover.support}, transparent 28%), linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.16))`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {project.client}
            </p>
            <h3
              className={`mt-3 font-display font-black tracking-[-0.04em] text-foreground ${
                featured ? "text-[clamp(2rem,4vw,3.4rem)]" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-4 max-w-[56ch] text-sm leading-7 text-soft">
              {project.summary}
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
              {project.cover.label}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
                <span className="tag-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-5">
          <p className="text-xs uppercase tracking-[0.18em] text-faint">
            {project.scope}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
          >
            Open case study
          </Link>
        </div>
      </div>
    </article>
  );
}
