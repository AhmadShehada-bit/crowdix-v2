import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConsultationCTA from "@/components/ConsultationCTA";
import PortraitFrame from "@/components/PortraitFrame";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { founders, getFounderBySlug, getProjectsByFounder, siteConfig } from "@/lib/data";

type FounderPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return founders.map((founder) => ({ slug: founder.slug }));
}

export async function generateMetadata({
  params,
}: FounderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const founder = getFounderBySlug(slug);

  if (!founder) {
    return {
      title: "Founder Not Found",
    };
  }

  return {
    title: founder.name,
    description: founder.shortBio,
  };
}

export default async function FounderDetailPage({ params }: FounderPageProps) {
  const { slug } = await params;
  const founder = getFounderBySlug(slug);

  if (!founder) {
    notFound();
  }

  const relatedProjects = getProjectsByFounder(founder.slug);
  const pageCopy = siteConfig.pageCopy.founderDetail;

  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="section-rule">
            <span className="roman">I.</span>
            <span>{founder.role}</span>
            <span>Founder profile</span>
          </div>
          <div className="grid gap-6 xl:grid-cols-[0.68fr_1.32fr]">
            <Reveal>
              <PortraitFrame portrait={founder.portrait} />
            </Reveal>
            <Reveal>
              <div className="glass-panel rounded-[34px] p-8 sm:p-10 lg:p-12">
                <span className="section-kicker">
                  {founder.name}
                  <span className="text-faint">/ {founder.role}</span>
                </span>
                <h1 className="display-title max-w-[12ch]">
                  {founder.name}
                  <span className="accent-dot">.</span>
                </h1>
                <p className="mt-5 max-w-[18ch] text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {founder.role}
                </p>
                <p className="lead-copy mt-8">{founder.shortBio}</p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {founder.specialties.map((specialty) => (
                    <span className="tag-pill" key={specialty}>
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-white/4 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                      Point of view
                    </p>
                    <p className="mt-3 text-sm leading-7 text-soft">
                      {founder.philosophy}
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-white/4 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                      Links
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {founder.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noreferrer noopener"
                              : undefined
                          }
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/7">
        <div className="page-shell">
          <SectionHeading
            eyebrow={pageCopy.projects.eyebrow}
            index={pageCopy.projects.index}
            title={pageCopy.projects.title}
            description={pageCopy.projects.description}
          />
          <div className="grid gap-5 lg:grid-cols-12">
            {relatedProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <ProjectCard project={project} featured={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        cta={{
          ...siteConfig.consultation,
          primaryHref: "/projects",
          primaryLabel: "Back to projects",
          secondaryHref: "/services",
          secondaryLabel: "Explore services",
        }}
        relatedHref={relatedProjects[0] ? `/projects/${relatedProjects[0].slug}` : "/projects"}
      />
    </>
  );
}
