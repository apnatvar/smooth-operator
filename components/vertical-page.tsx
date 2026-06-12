import { VerticalCTA } from "@/components/vertical-cta"
import { VerticalHero } from "@/components/vertical-hero"
import { VerticalSection } from "@/components/vertical-section"
import type { Vertical } from "@/lib/verticals"

type VerticalPageProps = {
  vertical: Vertical
}

export function VerticalPage({ vertical }: VerticalPageProps) {
  return (
    <main>
      <VerticalCTA variant="top" cta={vertical.cta} />
      <VerticalHero vertical={vertical} />
      <VerticalSection section={vertical.sections[0]} index={0} />
      <VerticalSection section={vertical.sections[1]} index={1} />
      <VerticalCTA variant="bottom" />
    </main>
  )
}
