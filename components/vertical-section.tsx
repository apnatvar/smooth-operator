import { AnimatedSection } from "@/components/animated-section"
import { BackgroundImagePanel } from "@/components/background-image-panel"
import type { VerticalSectionData } from "@/lib/verticals"

type VerticalSectionProps = {
  section: VerticalSectionData
  index: number
}

export function VerticalSection({ section, index }: VerticalSectionProps) {
  const imageFirst = index === 0

  return (
    <section className="border-b border-foreground/15">
      <AnimatedSection
        direction={imageFirst ? "right" : "left"}
        className="mx-auto grid max-w-[1600px] border-x border-foreground/15 lg:grid-cols-2"
      >
        <BackgroundImagePanel
          label={section.imageLabel}
          className={
            imageFirst
              ? "min-h-[26rem] border-x-0 border-t-0 border-b-0 lg:min-h-[42rem] lg:border-r"
              : "min-h-[26rem] border-x-0 border-t-0 border-b-0 lg:order-2 lg:min-h-[42rem] lg:border-l"
          }
        />
        <div
          data-animate
          className={
            imageFirst
              ? "relative z-10 flex min-h-[30rem] flex-col justify-between p-6 sm:p-10 lg:relative lg:-left-10 lg:my-14 lg:min-h-[34rem] lg:border lg:border-foreground/15 lg:bg-background lg:p-12"
              : "relative z-10 flex min-h-[30rem] flex-col justify-between p-6 sm:p-10 lg:relative lg:left-10 lg:my-14 lg:min-h-[34rem] lg:border lg:border-foreground/15 lg:bg-background lg:p-12"
          }
        >
          <div className="flex items-center justify-between border-b border-foreground/15 pb-5">
            <p className="label">{section.signal}</p>
            <span className="font-mono text-xs text-muted-foreground">
              0{index + 2}
            </span>
          </div>
          <div className="py-12">
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.96] sm:text-6xl">
              {section.title}
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-7 font-medium">
              {section.subtitle}
            </p>
          </div>
          <p className="max-w-xl border-t border-foreground/15 pt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            {section.body}
          </p>
        </div>
      </AnimatedSection>
    </section>
  )
}
