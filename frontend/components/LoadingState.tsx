export default function LoadingState() {
  return (
    <div className="section-space">
      <div className="page-shell">
        <div className="glass-panel rounded-[32px] p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Loading state
          </p>
          <div className="mt-6 h-6 w-40 rounded-full bg-white/8" />
          <div className="mt-5 space-y-3">
            <div className="h-4 w-full rounded-full bg-white/8" />
            <div className="h-4 w-5/6 rounded-full bg-white/8" />
            <div className="h-4 w-4/6 rounded-full bg-white/8" />
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className="rounded-[26px] border border-white/8 bg-white/4 p-5"
                key={index}
              >
                <div className="h-32 rounded-[20px] bg-white/8" />
                <div className="mt-4 h-5 w-2/3 rounded-full bg-white/8" />
                <div className="mt-3 h-4 w-full rounded-full bg-white/8" />
                <div className="mt-2 h-4 w-4/5 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
