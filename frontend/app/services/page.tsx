import type { Metadata } from "next";
import ConsultationCTA from "@/components/ConsultationCTA";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Capabilities behind the work: automation systems, AI design, editorial websites, and operator content systems.",
};

export default function ServicesPage() {
  const pageCopy = siteConfig.pageCopy.services;

  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow={pageCopy.eyebrow}
            index={pageCopy.index}
            title={pageCopy.title}
            description={pageCopy.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        cta={{
          ...siteConfig.consultation,
          primaryHref: "/projects",
          primaryLabel: "Review the project archive",
        }}
        relatedHref="/projects"
      />
    </>
  );
}
