import Link from "next/link";
import { siteConfig } from "@/lib/data";
import type { Project } from "@/types";
import Reveal from "./Reveal";

type HeroProps = {
  featuredProjects: Project[];
};

export default function Hero({ featuredProjects }: HeroProps) {
  const [leadProject] = featuredProjects;

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <Reveal>
            <div className="max-w-4xl">
              <span className="section-kicker">
                {siteConfig.hero.eyebrow}
                <span className="text-faint">/ No. 01</span>
              </span>
              <h1 className="display-title">
                <span className="block">{siteConfig.hero.titleLead}</span>
                <span className="block">
                  {siteConfig.hero.titleSupport} <em>{siteConfig.hero.titleEmphasis}</em>
                </span>
                <span className="accent-dot">.</span>
              </h1>
              <p className="lead-copy mt-8">{siteConfig.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={siteConfig.hero.primaryCta.href}
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                >
                  {siteConfig.hero.primaryCta.label}
                </Link>
                <Link
                  href={siteConfig.hero.secondaryCta.href}
                  className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                >
                  {siteConfig.hero.secondaryCta.label}
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {siteConfig.hero.stats.map((stat) => (
                  <div
                    className="glass-panel rounded-[24px] px-5 py-5"
                    key={stat.label}
                  >
                    <p className="font-display text-3xl font-black tracking-[-0.04em] text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-faint">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-panel surface-outline relative overflow-hidden rounded-[34px] p-6 sm:p-8">
              <div className="absolute inset-0 opacity-80">
                <div className="absolute left-[10%] top-[8%] h-44 w-44 rounded-full bg-[oklch(64%_0.18_300_/_0.22)] blur-3xl animate-[glow-drift_10s_ease-in-out_infinite]" />
                <div className="absolute bottom-[5%] right-[8%] h-52 w-52 rounded-full bg-[oklch(72%_0.15_210_/_0.18)] blur-3xl animate-[glow-drift_12s_ease-in-out_infinite]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                  <span>Studio plate / Crowdix</span>
                  <span>Direction / Systems / Surface</span>
                </div>
                <div className="mt-8 rounded-[28px] border border-white/10 bg-black/15 p-6">
                  <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-black tracking-[-0.04em] text-foreground">
                    Selected work before service claims.
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {siteConfig.hero.proofPoints.map((item) => (
                      <div
                        className="rounded-[20px] border border-white/8 bg-white/3 p-4"
                        key={item.label}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-soft">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {leadProject ? (
                  <div className="mt-6 rounded-[28px] border border-white/10 bg-white/4 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                      Featured case study
                    </p>
                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-black tracking-[-0.04em] text-foreground">
                          {leadProject.title}
                        </h3>
                        <p className="mt-2 max-w-[44ch] text-sm leading-7 text-soft">
                          {leadProject.summary}
                        </p>
                      </div>
                      <Link
                        href={`/projects/${leadProject.slug}`}
                        className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                      >
                        Open case study
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
