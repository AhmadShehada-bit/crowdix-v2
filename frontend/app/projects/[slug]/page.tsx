import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConsultationCTA from "@/components/ConsultationCTA";
import FounderCard from "@/components/FounderCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  getFounderBySlug,
  getProjectBySlug,
  getServicesForProject,
  projects,
  siteConfig,
} from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedFounders = project.founderSlugs
    .map((founderSlug) => getFounderBySlug(founderSlug))
    .filter((founder): founder is NonNullable<typeof founder> => Boolean(founder));
  const relatedServices = getServicesForProject(project.slug);
  const pageCopy = siteConfig.pageCopy.projectDetail;

  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="section-rule">
            <span className="roman">I.</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="glass-panel rounded-[34px] p-8 sm:p-10 lg:p-12">
                <span className="section-kicker">
                  {project.client}
                  <span className="text-faint">/ {project.status}</span>
                </span>
                <h1 className="display-title max-w-[12ch]">
                  {project.title}
                  <span className="accent-dot">.</span>
                </h1>
                <p className="lead-copy mt-8">{project.summary}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span className="tag-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div
                className="glass-panel surface-outline relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-8"
                style={{
                  backgroundImage: `radial-gradient(circle at 18% 12%, ${project.cover.accent}, transparent 34%), radial-gradient(circle at 84% 10%, ${project.cover.support}, transparent 30%), linear-gradient(180deg, oklch(18% 0.032 270 / 0.96), oklch(12% 0.028 272 / 0.98))`,
                }}
              >
                <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                    <span>{project.cover.label}</span>
                    <span>{project.scope}</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-accent">
                      System plates
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.modules.slice(0, 4).map((module) => (
                        <div
                          className="rounded-[24px] border border-white/10 bg-black/20 p-4"
                          key={module.name}
                        >
                          <h2 className="font-display text-lg font-bold tracking-[-0.03em] text-white">
                            {module.name}
                          </h2>
                          <p className="mt-2 text-sm leading-6 text-soft">
                            {module.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/7 py-16 sm:py-20">
        <div className="page-shell grid gap-5 lg:grid-cols-3">
          {project.outcomes.map((outcome) => (
            <Reveal key={outcome.label}>
              <div className="glass-panel rounded-[28px] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                  {outcome.label}
                </p>
                <p className="mt-4 font-display text-2xl font-black tracking-[-0.03em] text-foreground">
                  {outcome.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space border-t border-white/7">
        <div className="page-shell">
          <SectionHeading
            eyebrow={pageCopy.narrative.eyebrow}
            index={pageCopy.narrative.index}
            title={pageCopy.narrative.title}
            description={pageCopy.narrative.description}
          />
          <div className="grid gap-5 xl:grid-cols-3">
            <Reveal className="xl:col-span-1">
              <div className="glass-panel rounded-[28px] p-7">
                <h2 className="font-display text-2xl font-black tracking-[-0.03em] text-foreground">
                  Challenge
                </h2>
                <p className="mt-4 text-sm leading-7 text-soft">
                  {project.challenge}
                </p>
              </div>
            </Reveal>
            <Reveal className="xl:col-span-1">
              <div className="glass-panel rounded-[28px] p-7">
                <h2 className="font-display text-2xl font-black tracking-[-0.03em] text-foreground">
                  Diagnosis
                </h2>
                <p className="mt-4 text-sm leading-7 text-soft">
                  {project.diagnosis}
                </p>
              </div>
            </Reveal>
            <Reveal className="xl:col-span-1">
              <div className="glass-panel rounded-[28px] p-7">
                <h2 className="font-display text-2xl font-black tracking-[-0.03em] text-foreground">
                  Architecture
                </h2>
                <p className="mt-4 text-sm leading-7 text-soft">
                  {project.architecture}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="glass-panel rounded-[30px] p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  Shipped modules
                </p>
                <div className="mt-6 grid gap-4">
                  {project.modules.map((module) => (
                    <div
                      className="rounded-[22px] border border-white/9 bg-white/3 p-5"
                      key={module.name}
                    >
                      <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-foreground">
                        {module.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-soft">
                        {module.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal>
                <div className="glass-panel rounded-[30px] p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Stack and tools
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span className="tag-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="glass-panel rounded-[30px] p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Proof notes
                  </p>
                  <div className="mt-5 grid gap-4">
                    {project.proof.map((item) => (
                      <div
                        className="rounded-[22px] border border-white/9 bg-white/3 p-5"
                        key={item.title}
                      >
                        <h3 className="font-display text-lg font-bold tracking-[-0.03em] text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-soft">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/7">
        <div className="page-shell">
          <SectionHeading
            eyebrow={pageCopy.relations.eyebrow}
            index={pageCopy.relations.index}
            title={pageCopy.relations.title}
            description={pageCopy.relations.description}
          />
          <div className="grid gap-5 xl:grid-cols-2">
            {relatedFounders.map((founder) => (
              <Reveal key={founder.slug}>
                <FounderCard founder={founder} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {relatedServices.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/7 py-16 sm:py-20">
        <div className="page-shell">
          <Reveal>
            <div className="glass-panel rounded-[30px] p-8 sm:p-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Related archive
                  </p>
                  <h2 className="mt-3 section-title">
                    {pageCopy.archiveTitle}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {relatedFounders.map((founder) => (
                    <Link
                      key={founder.slug}
                      href={`/founders/${founder.slug}`}
                      className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                    >
                      {founder.name}
                    </Link>
                  ))}
                  <Link
                    href="/projects"
                    className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  >
                    Browse all projects
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        cta={{
          ...siteConfig.consultation,
          primaryHref: "/founders",
          primaryLabel: "Meet the founders",
          secondaryHref: "/projects",
          secondaryLabel: "Back to archive",
        }}
        relatedHref={
          relatedFounders[0] ? `/founders/${relatedFounders[0].slug}` : "/founders"
        }
      />
    </>
  );
}
