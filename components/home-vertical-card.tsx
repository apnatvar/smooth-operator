import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Vertical } from "@/lib/verticals"

type HomeVerticalCardProps = {
  index: number
  vertical: Vertical
}

export function HomeVerticalCard({ index, vertical }: HomeVerticalCardProps) {
  return (
    <Link
      href={`/${vertical.slug}`}
      className="group block hover:bg-foreground focus-visible:outline-none"
      aria-label={`Explore ${vertical.name}`}
    >
      <article className="flex min-h-80 flex-col justify-between border-r border-b border-foreground/15 p-6 transition-colors duration-300 group-hover:bg-signal group-hover:text-white group-focus-visible:bg-signal group-focus-visible:text-white sm:p-8">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.65rem] text-muted-foreground transition-colors group-hover:text-white/65 group-focus-visible:text-white/65">
              0{index + 1}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-12 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            {vertical.name}
          </h3>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground transition-colors group-hover:text-white/75 group-focus-visible:text-white/75">
            {vertical.tagline}
          </p>
        </div>
        <div className="mt-10 border-t border-foreground/15 pt-5 transition-colors group-hover:border-white/25 group-focus-visible:border-white/25">
          <p className="text-xs font-semibold">{vertical.price}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase underline decoration-foreground/30 underline-offset-4 group-hover:decoration-white/40">
            Explore {vertical.name}
          </p>
        </div>
      </article>
    </Link>
  )
}
