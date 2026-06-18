import ConsultationCTA from "@/components/ConsultationCTA";
import FounderCard from "@/components/FounderCard";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { founders, getFeaturedProjects, services, siteConfig } from "@/lib/data";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const founderPreview = founders.slice(0, 2);
  const servicePreview = services.slice(0, 4);
  const homeCopy = siteConfig.pageCopy.home;

  return (
    <>
      <Hero featuredProjects={featuredProjects} />

      <section className="section-space border-t border-white/7" id="projects">
        <div className="page-shell">
          <SectionHeading
            eyebrow={homeCopy.featuredProjects.eyebrow}
            index={homeCopy.featuredProjects.index}
            title={homeCopy.featuredProjects.title}
            description={homeCopy.featuredProjects.description}
          />
          <div className="grid gap-5 lg:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                className={index === 0 ? "lg:col-span-12" : "lg:col-span-4"}
              >
                <ProjectCard project={project} featured={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/7" id="services">
        <div className="page-shell">
          <SectionHeading
            eyebrow={homeCopy.capabilities.eyebrow}
            index={homeCopy.capabilities.index}
            title={homeCopy.capabilities.title}
            description={homeCopy.capabilities.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {servicePreview.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/7" id="founders">
        <div className="page-shell">
          <SectionHeading
            eyebrow={homeCopy.founders.eyebrow}
            index={homeCopy.founders.index}
            title={homeCopy.founders.title}
            description={homeCopy.founders.description}
          />
          <div className="grid gap-5 xl:grid-cols-2">
            {founderPreview.map((founder) => (
              <Reveal key={founder.slug}>
                <FounderCard founder={founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/7">
        <div className="page-shell">
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-panel rounded-[32px] p-8 sm:p-10">
                <span className="section-kicker">
                  Studio posture
                  <span className="text-faint">/ No. 04</span>
                </span>
                <h2 className="section-title">
                  {homeCopy.archivePosture.title
                    .replace("service claims", "")
                    .trim()}{" "}
                  <em>service claims</em>
                  <span className="accent-dot">.</span>
                </h2>
                <p className="lead-copy mt-6">
                  {homeCopy.archivePosture.description}
                </p>
              </div>
              <div className="grid gap-5">
                {siteConfig.hero.proofPoints.map((item) => (
                  <div
                    key={item.title}
                    className="glass-panel rounded-[28px] p-6 sm:p-7"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                      {item.label}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-soft">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        cta={siteConfig.consultation}
        relatedHref="/projects"
      />
    </>
  );
}
