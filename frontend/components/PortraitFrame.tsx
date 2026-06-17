import type { FounderPortrait } from "@/types";

type PortraitFrameProps = {
  portrait: FounderPortrait;
  compact?: boolean;
};

export default function PortraitFrame({
  portrait,
  compact = false,
}: PortraitFrameProps) {
  return (
    <div
      className={`portrait-frame surface-outline relative overflow-hidden rounded-[32px] border border-white/10 ${
        compact ? "min-h-[360px]" : "min-h-[480px]"
      }`}
      data-label={portrait.label}
      style={{
        backgroundImage: `radial-gradient(circle at 30% 18%, ${portrait.accent}, transparent 34%), radial-gradient(circle at 80% 20%, ${portrait.support}, transparent 28%), linear-gradient(180deg, oklch(22% 0.04 272 / 0.96), oklch(12% 0.028 274 / 1))`,
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.62))]" />
      <div className="absolute inset-x-[18%] top-[12%] h-[62%] rounded-[999px] border border-white/8 bg-white/6 blur-[2px]" />
      <div className="absolute inset-x-[22%] top-[17%] h-[48%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
      <div className="absolute inset-x-[16%] bottom-[7%] top-[46%] rounded-[44px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
      <div className="absolute bottom-10 left-8 right-8 z-10">
        <p className="font-display text-[clamp(2.8rem,7vw,5rem)] font-black tracking-[-0.06em] text-white/86">
          {portrait.monogram}
        </p>
      </div>
    </div>
  );
}
