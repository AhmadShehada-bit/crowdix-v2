import Link from "next/link";
import type { ConsultationConfig } from "@/types";
import Reveal from "./Reveal";

type ConsultationCTAProps = {
  cta: ConsultationConfig;
  relatedHref: string;
};

export default function ConsultationCTA({
  cta,
  relatedHref,
}: ConsultationCTAProps) {
  return (
    <section className="section-space border-t border-white/7" id="consultation">
      <div className="page-shell">
        <div className="section-rule">
          <span className="roman">VI.</span>
          <span>Consultation</span>
          <span>Project conversation</span>
        </div>
        <Reveal>
          <div className="glass-panel rounded-[34px] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
              <div>
                <span className="section-kicker">
                  Consultation
                  <span className="text-faint">/ No. 06</span>
                </span>
                <h2 className="section-title">
                  {cta.title}
                  <span className="accent-dot">.</span>
                </h2>
                <p className="lead-copy mt-6">{cta.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={cta.primaryHref}
                    className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  >
                    {cta.primaryLabel}
                  </Link>
                  <Link
                    href={cta.secondaryHref}
                    className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                  >
                    {cta.secondaryLabel}
                  </Link>
                </div>
              </div>

              <aside className="glass-panel rounded-[30px] border border-white/10 bg-black/10 p-6 sm:p-7">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                  <span>Project brief</span>
                  <span>What to share</span>
                </div>
                <div className="mt-5 grid gap-4">
                  {cta.prompts.map((prompt) => (
                    <div
                      className="rounded-[22px] border border-white/10 bg-white/4 p-4"
                      key={prompt.label}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                        {prompt.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-soft">
                        {prompt.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={relatedHref}
                    className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                  >
                    Reference related work
                  </Link>
                  <Link
                    href={cta.primaryHref}
                    className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  >
                    {cta.primaryLabel}
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
