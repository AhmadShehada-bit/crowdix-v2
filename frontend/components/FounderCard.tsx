import Link from "next/link";
import { getProjectsByFounder } from "@/lib/data";
import type { Founder } from "@/types";
import PortraitFrame from "./PortraitFrame";

type FounderCardProps = {
  founder: Founder;
};

export default function FounderCard({ founder }: FounderCardProps) {
  const projects = getProjectsByFounder(founder.slug);

  return (
    <article className="glass-panel rounded-[30px] p-5 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <PortraitFrame portrait={founder.portrait} compact />
        <div className="flex flex-col justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {founder.name}
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-black tracking-[-0.04em] text-foreground">
              {founder.role}
            </h3>
            <p className="mt-4 text-sm leading-7 text-soft">{founder.shortBio}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {founder.specialties.map((specialty) => (
              <span className="tag-pill" key={specialty}>
                {specialty}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-4">
            <p className="text-xs uppercase tracking-[0.18em] text-faint">
              {projects.length} related projects
            </p>
            <Link
              href={`/founders/${founder.slug}`}
              className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
            >
              Meet the founder
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
