"use client";

type ErrorStateProps = {
  title: string;
  message: string;
  actionLabel?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  title,
  message,
  actionLabel,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="section-space">
      <div className="page-shell">
        <div className="glass-panel rounded-[32px] px-8 py-12 text-center sm:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
            Error state
          </p>
          <h1 className="mt-4 font-display text-3xl font-black tracking-[-0.04em] text-foreground">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-soft">
            {message}
          </p>
          {onRetry && actionLabel ? (
            <button
              className="mt-8 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              onClick={onRetry}
              type="button"
            >
              {actionLabel}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
