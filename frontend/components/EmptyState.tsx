import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
};

export default function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: EmptyStateProps) {
  return (
    <div className="glass-panel rounded-[32px] px-8 py-12 text-center sm:px-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
        Empty state
      </p>
      <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.04em] text-foreground">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-soft">
        {description}
      </p>
      {actionHref && actionLabel ? (
        <div className="mt-8">
          <Link
            href={actionHref}
            className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
          >
            {actionLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
