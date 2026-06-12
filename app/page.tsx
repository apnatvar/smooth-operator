import Link from "next/link"
import { ArrowDownRight, ArrowRight } from "lucide-react"

import { AnimatedSection } from "@/components/animated-section"
import { BackgroundImagePanel } from "@/components/background-image-panel"
import { CalEmbedPlaceholder } from "@/components/cal-embed-placeholder"
import { HomeVerticalCard } from "@/components/home-vertical-card"
import { Button } from "@/components/ui/button"
import { verticals } from "@/lib/verticals"

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-foreground/15">
        <AnimatedSection
          direction="clip"
          className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-400 border-x border-foreground/15 lg:grid-cols-[1.18fr_0.82fr]"
        >
          <div className="relative z-10 flex flex-col justify-between p-5 sm:p-8 lg:min-h-192 lg:p-12">
            <div data-animate className="flex items-center justify-between">
              <p className="label">Local-First AI Infrastructure</p>
              <p className="font-mono text-[0.64rem] text-muted-foreground">
                SYSTEM / 001
              </p>
            </div>
            <div className="py-20 lg:py-28">
              <h1
                data-animate
                className="max-w-6xl text-[clamp(4.25rem,9vw,9rem)] leading-[0.82] font-semibold tracking-[-0.075em]"
              >
                AI Is More Than{" "}
                <span className="font-serif font-normal italic">
                  a Chatbot.
                </span>
              </h1>
              <p
                data-animate
                className="mt-9 max-w-3xl font-serif text-3xl leading-[1.04] sm:text-4xl lg:-mr-40 lg:text-5xl"
              >
                Discover What Happens When It Understands Your Business.
              </p>
            </div>
            <div
              data-animate
              className="grid gap-8 border-t border-foreground/15 pt-7 md:grid-cols-[1fr_auto] md:items-end"
            >
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Smooth Operator connects your data, tools, files, and workflows
                into a private intelligence layer built around how your
                business actually works.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="h-11 rounded-none px-5">
                  <Link href="#verticals">
                    Explore Verticals
                    <ArrowDownRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-none border-foreground/25 px-5"
                >
                  <Link href="/learn-how">Learn How</Link>
                </Button>
              </div>
            </div>
          </div>
          <BackgroundImagePanel
            priority
            label="Context Router / Business-Specific Orchestration"
            className="min-h-128 border-x-0 border-b-0 lg:min-h-full lg:border-t-0 lg:border-r-0 lg:border-b-0 lg:border-l"
          />
        </AnimatedSection>
      </section>

      <section
        id="verticals"
        className="scroll-mt-16 border-b border-foreground/15"
      >
        <AnimatedSection
          direction="up"
          className="mx-auto max-w-400 border-x border-foreground/15"
        >
          <div className="grid border-b border-foreground/15 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-foreground/15 p-6 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
              <p data-animate className="label">
                Deployment Profiles
              </p>
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <h2
                data-animate
                className="max-w-4xl font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl"
              >
                Built for Different Operating Realities.
              </h2>
              <p
                data-animate
                className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
              >
                The same orchestration layer can be shaped around different
                business contexts. Each deployment starts with the work your
                team already does.
              </p>
            </div>
          </div>
          <div className="grid border-l border-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((vertical, index) => (
              <HomeVerticalCard
                key={vertical.slug}
                vertical={vertical}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section
        id="learn-how"
        className="scroll-mt-16 border-b border-foreground/15 bg-foreground text-stone"
      >
        <AnimatedSection
          direction="skew"
          className="mx-auto max-w-400 border-x border-white/15"
        >
          <div className="grid min-h-152 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-between border-b border-white/15 p-6 sm:p-10 lg:border-r lg:border-b-0 lg:border-white/15 lg:p-12">
              <div>
                <p data-animate className="label text-white/50">
                  System Architecture
                </p>
                <h2
                  data-animate
                  className="mt-14 max-w-5xl font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-8xl"
                >
                  How We Turn AI Into Business Infrastructure.
                </h2>
              </div>
              <div data-animate className="mt-16 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-none bg-stone px-6 text-ink hover:bg-signal hover:text-white"
                >
                  <Link href="/learn-how">
                    Explore the Architecture
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative flex flex-col justify-end overflow-hidden p-6 sm:p-10 lg:p-12">
              <BackgroundImagePanel
                tone="dark"
                label="Orchestrator / Retrieval / Tools / Governance"
                className="absolute inset-0 min-h-0 border-0"
              />
              <div
                data-animate
                className="relative z-10 border-t border-white/25 pt-7"
              >
                <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  The operating layer combines private deployment, source-aware
                  retrieval, business integrations, explicit instructions, and
                  ongoing maintenance. The detailed architecture now lives on
                  its own page.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="book" className="scroll-mt-16">
        <AnimatedSection
          direction="left"
          className="mx-auto grid max-w-400 border-x border-foreground/15 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="flex flex-col justify-between border-b border-foreground/15 p-6 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
            <div>
              <p data-animate className="label">
                Deployment Entry Point
              </p>
              <h2
                data-animate
                className="mt-14 max-w-2xl font-serif text-6xl leading-[0.9] sm:text-7xl"
              >
                Start With One Business Problem.
              </h2>
            </div>
            <div data-animate className="mt-20">
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                The first deployment does not need to automate the whole
                company. Start with one high-value workflow: reporting,
                forecasting, inventory, procurement, or founder support.
              </p>
              <Button asChild className="mt-8 h-12 rounded-none px-6">
                <Link href="#cal-placeholder">
                  Book an Implementation Call
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <div
            id="cal-placeholder"
            data-animate
            className="p-6 sm:p-10 lg:p-12"
          >
            <CalEmbedPlaceholder />
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
