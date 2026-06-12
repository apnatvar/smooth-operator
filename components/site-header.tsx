import Link from "next/link"

import { MobileSiteNavigation } from "@/components/mobile-site-navigation"
import { navigation, siteConfig } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/20 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-400 items-stretch">
        <Link
          href="/"
          className="flex min-h-16 shrink-0 items-center px-5 font-semibold tracking-[-0.04em] md:border-r md:border-foreground/20 md:px-8"
        >
          <span className="mr-2 inline-grid size-5 place-items-center bg-foreground text-[0.55rem] text-background">
            OS
          </span>
          {siteConfig.name}
        </Link>
        <MobileSiteNavigation />
        <nav
          aria-label="Primary navigation"
          className="nav-scroll hidden min-w-0 flex-1 overflow-x-auto md:block"
        >
          <ul className="flex min-h-16 w-max min-w-full items-stretch justify-start lg:justify-end">
            {navigation.map((item) => (
              <li key={item.href} className="flex">
                <Link
                  href={item.href}
                  className="flex items-center border-r border-foreground/20 px-4 text-[0.66rem] font-medium tracking-[0.12em] whitespace-nowrap uppercase transition-colors hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background focus-visible:outline-none xl:px-5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
