import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/7 py-18">
      <div className="page-shell">
        <div className="section-rule">
          <span className="roman">VII.</span>
          <span>Footer</span>
          <span>Studio navigation</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-4 font-display text-xl font-extrabold tracking-[-0.03em] text-foreground"
            >
              <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-accent">
                C
              </span>
              Crowdix
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
              {siteConfig.footerStatement}
            </p>
          </div>

          {siteConfig.footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 grid gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/7 pt-8">
          <p className="font-display text-[clamp(3rem,10vw,8rem)] font-black tracking-[-0.07em] text-white/10">
            Crowd<em className="font-serif font-medium italic">ix</em>
            <span className="accent-dot">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
