import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crowdix",
    template: "%s | Crowdix",
  },
  description:
    "Crowdix is a founder-led studio for automation systems, editorial websites, and brand direction shaped through visible case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-y-0 left-0 z-10 hidden w-9 border-r border-white/6 lg:grid lg:place-items-center"
        >
          <span className="rotate-180 [writing-mode:vertical-rl] text-[10px] font-semibold uppercase tracking-[0.38em] text-faint">
            Crowdix Studio
          </span>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-y-0 right-0 z-10 hidden w-9 border-l border-white/6 lg:grid lg:place-items-center"
        >
          <span className="[writing-mode:vertical-rl] text-[10px] font-semibold uppercase tracking-[0.38em] text-faint">
            Case Study First
          </span>
        </div>
        <div className="border-b border-white/8 bg-[oklch(11%_0.026_270_/_0.72)] backdrop-blur-xl">
          <div className="page-shell flex min-h-9 flex-wrap items-center justify-between gap-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-faint">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_22px_oklch(72%_0.15_210_/_0.75)] animate-[pulse_2.4s_ease-in-out_infinite]" />
              Founder-led studio for systems and brand direction
            </span>
            <span className="hidden sm:inline">Proof first. Positioning follows the work.</span>
          </div>
        </div>
        <Navbar />
        <main className="flex min-h-[calc(100vh-132px)] flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
