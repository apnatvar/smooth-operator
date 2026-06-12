import { AnimatedSection } from "@/components/animated-section"
import { BackgroundImagePanel } from "@/components/background-image-panel"
import { PricingStrip } from "@/components/pricing-strip"
import type { Vertical } from "@/lib/verticals"

type VerticalHeroProps = {
  vertical: Vertical
}

export function VerticalHero({ vertical }: VerticalHeroProps) {
  return (
    <section
      aria-labelledby={`${vertical.slug}-title`}
      className="border-b border-foreground/15"
    >
      <AnimatedSection
        direction="clip"
        className="mx-auto max-w-400 border-x border-foreground/15"
      >
        <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative z-10 flex min-h-136 flex-col gap-4 p-4 sm:p-8 md:gap-8 lg:min-h-176 lg:p-12">
            <div data-animate>
              <p className="label">{vertical.eyebrow}</p>
              <h1
                id={`${vertical.slug}-title`}
                className="mt-8 max-w-5xl text-[clamp(3rem,12vw,10.5rem)] leading-[0.72] font-semibold tracking-[-0.085em]"
              >
                {vertical.name}
              </h1>
            </div>
            <div
              data-animate
              className="mt-10 grid gap-8 border-t border-foreground/15 pt-7 md:grid-cols-[1.15fr_0.85fr]"
            >
              <div>
                <p className="max-w-md font-serif text-2xl leading-[1.04] text-wrap sm:text-4xl lg:-mr-28 lg:text-5xl">
                  {vertical.tagline}
                </p>
                <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {vertical.intro}
                </p>
              </div>
              <div className="lg:pl-8">
                <p className="label">{vertical.needLabel}</p>
                <ul className="mt-5 space-y-4">
                  {vertical.needPoints.map((point, index) => (
                    <li
                      key={point}
                      data-animate
                      className="grid grid-cols-[1.7rem_1fr] gap-3 border-t border-foreground/15 pt-3 text-sm leading-6"
                    >
                      <span className="font-mono text-[0.65rem] text-muted-foreground">
                        0{index + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <BackgroundImagePanel
            priority
            label={vertical.imageLabel}
            className="min-h-112 border-x-0 border-b-0 lg:min-h-full lg:border-t-0 lg:border-r-0 lg:border-b-0 lg:border-l"
          />
        </div>
        <PricingStrip price={vertical.price} />
      </AnimatedSection>
    </section>
  )
}
