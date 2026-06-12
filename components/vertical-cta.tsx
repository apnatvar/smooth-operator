import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type VerticalCTAProps = {
  cta?: string
  variant: "top" | "bottom"
}

export function VerticalCTA({ cta, variant }: VerticalCTAProps) {
  const isTop = variant === "top"

  return (
    <aside
      className={
        isTop
          ? "border-b border-foreground/15"
          : "border-t border-foreground/15"
      }
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-5 px-5 py-6 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="max-w-2xl text-sm font-medium">
          {isTop
            ? "Private AI Systems for Real Business Work."
            : "Start With One Workflow. Expand When the System Proves Value."}
        </p>
        <Button asChild className="h-11 rounded-none px-5">
          <Link href="/#book">
            {isTop ? cta : "Book an Implementation Call"}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </aside>
  )
}
