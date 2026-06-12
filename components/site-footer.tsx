import Link from "next/link"

import { navigation, siteConfig } from "@/lib/site"

const verticalLinks = navigation.slice(1, 7)

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/15 bg-foreground text-stone">
      <div className="mx-auto grid max-w-400 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex min-h-64 flex-col justify-between border-b border-white/15 p-6 sm:p-10 lg:border-r lg:border-b-0">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/50 uppercase">
              Private AI Systems
            </p>
            <p className="mt-5 max-w-lg font-serif text-4xl leading-[0.98] sm:text-5xl">
              Operational Context, Kept Close.
            </p>
          </div>
          <p className="mt-12 text-xs text-white/45">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
        <div className="border-b border-white/15 p-6 sm:p-10 lg:border-r lg:border-b-0">
          <p className="text-xs tracking-[0.2em] text-white/45 uppercase">
            Verticals
          </p>
          <ul className="mt-6 space-y-3">
            {verticalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-xs tracking-[0.2em] text-white/45 uppercase">
            Company
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <Link href="/#book" className="text-white/75 hover:text-white">
                Book a Call
              </Link>
            </li>
            <li>
              <Link
                href="/learn-how"
                className="text-white/75 hover:text-white"
              >
                Learn How
              </Link>
            </li>
            <li>
              <a
                href="https://brownsmithdynamics.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/75 hover:text-white"
              >
                Developer Agency
              </a>
            </li>
          </ul>
          <a
            href="https://brownsmithdynamics.com"
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-block border-t border-white/20 pt-4 text-xs text-white/45 transition-colors hover:text-white"
          >
            Built by Brownsmith Dynamics
          </a>
        </div>
      </div>
    </footer>
  )
}
