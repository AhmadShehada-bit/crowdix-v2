type SectionHeadingProps = {
  eyebrow: string;
  index: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 lg:mb-12">
      <div className="section-rule">
        <span className="roman">{index.split(" ")[0]}</span>
        <span>{eyebrow}</span>
        <span>{index.split(" ").slice(1).join(" ")}</span>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-end">
        <div>
          <span className="section-kicker">
            {eyebrow}
            <span className="text-faint">/ {index}</span>
          </span>
          <h2 className="section-title">
            {title}
            <span className="accent-dot">.</span>
          </h2>
        </div>
        <p className="lead-copy">{description}</p>
      </div>
    </div>
  );
}
