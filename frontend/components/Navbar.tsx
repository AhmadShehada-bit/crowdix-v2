"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      let nextHidden = hidden;

      if (currentY > 160 && currentY > lastY + 8) {
        nextHidden = true;
      } else if (currentY < lastY - 8 || currentY < 120) {
        nextHidden = false;
      }

      setHidden(nextHidden);
      lastY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hidden]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/8 bg-[oklch(10%_0.03_275_/_0.72)] backdrop-blur-2xl transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="page-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-5">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-display text-lg font-extrabold tracking-[-0.03em] text-foreground"
          >
            <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-accent">
              C
            </span>
            <span>Crowdix</span>
          </Link>
          <span className="hidden border-l border-white/10 pl-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-faint sm:inline">
            Premium AI portfolio
          </span>
        </div>

        <div className="flex flex-col gap-3 lg:flex-1 lg:items-end">
          <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
            {siteConfig.navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-flex w-full items-center justify-between gap-2 rounded-full px-3 py-2 text-sm font-semibold transition sm:w-auto sm:justify-start ${
                      active
                        ? "bg-white/8 text-foreground"
                        : "text-soft hover:bg-white/5 hover:text-accent"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[10px] text-faint">
                      {link.index}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#consultation"
              className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-soft transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
            >
              Quiet consult
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
