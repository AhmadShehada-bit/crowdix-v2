import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import FounderCard from "@/components/FounderCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { founders, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Founder profiles for the operators behind Crowdix systems, design direction, and implementation.",
};

export default function FoundersPage() {
  const pageCopy = siteConfig.pageCopy.founders;

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow={pageCopy.eyebrow}
          index={pageCopy.index}
          title={pageCopy.title}
          description={pageCopy.description}
        />

        {founders.length === 0 ? (
          <EmptyState
            title="No founder profiles yet"
            description="Founder profiles will appear here once they are ready."
            actionHref="/projects"
            actionLabel="See project proof"
          />
        ) : (
          <div className="grid gap-5 xl:grid-cols-2">
            {founders.map((founder) => (
              <Reveal key={founder.slug}>
                <FounderCard founder={founder} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
