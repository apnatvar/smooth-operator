import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AnimatedSection } from "@/components/animated-section"
import { BackgroundImagePanel } from "@/components/background-image-panel"
import { Button } from "@/components/ui/button"
import { capabilities } from "@/lib/site"

export const metadata: Metadata = {
  title: "Learn How",
  description:
    "Explore the OperatorOS architecture: private deployment, orchestration, integrations, retrieval, agent documentation, and ongoing maintenance.",
}

const implementationPhases = [
  {
    signal: "Scope Lock",
    title: "Define One High-Value Operating Question.",
    body: "We begin with the decision, report, forecast, retrieval task, or workflow that creates measurable value. This constrains the first source systems, permissions, and output requirements.",
  },
  {
    signal: "Source Map",
    title: "Trace the Data and Tool Boundary.",
    body: "We identify where the relevant context lives, how fresh it must be, who can access it, and which actions the operator may safely perform.",
  },
  {
    signal: "Runtime Build",
    title: "Deploy the Smallest Dependable Operator.",
    body: "The first implementation connects only the models, retrieval paths, tools, and instructions required for the chosen workflow. Reliability matters more than breadth.",
  },
  {
    signal: "Feedback Loop",
    title: "Measure Use, Correct Drift, and Expand.",
    body: "Once the workflow proves useful, we refine its instructions and extend the same operating layer into adjacent business questions.",
  },
] as const

export default function LearnHowPage() {
  return (
    <main>
      <section className="border-b border-foreground/15">
        <AnimatedSection
          direction="clip"
          className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-400 border-x border-foreground/15 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            <div data-animate className="flex items-center justify-between">
              <p className="label">OperatorOS Architecture</p>
              <p className="font-mono text-[0.64rem] text-muted-foreground">
                STACK / 006
              </p>
            </div>
            <div className="py-20">
              <h1
                data-animate
                className="max-w-5xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] font-semibold tracking-[-0.075em]"
              >
                How the Operating Layer Works.
              </h1>
              <p
                data-animate
                className="mt-10 max-w-3xl font-serif text-3xl leading-[1.04] sm:text-4xl lg:text-5xl"
              >
                A model becomes useful infrastructure only when context,
                permissions, tools, and maintenance work as one system.
              </p>
            </div>
            <p
              data-animate
              className="max-w-2xl border-t border-foreground/15 pt-7 text-sm leading-7 text-muted-foreground sm:text-base"
            >
              OperatorOS is implementation-led. We design a private operating
              environment around a specific business workflow, then connect the
              minimum dependable set of data sources and tools needed to run it.
            </p>
          </div>
          <BackgroundImagePanel
            priority
            label="Inference / Retrieval / Tool Execution / Observability"
            className="min-h-120 border-x-0 border-b-0 lg:min-h-full lg:border-t-0 lg:border-r-0 lg:border-b-0 lg:border-l"
          />
        </AnimatedSection>
      </section>

      <section className="border-b border-foreground/15 bg-foreground text-stone">
        <AnimatedSection
          direction="up"
          className="mx-auto max-w-400 border-x border-white/15"
        >
          <div className="grid border-b border-white/15 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-white/15 p-6 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
              <p data-animate className="label text-white/45">
                Runtime Components
              </p>
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <h2
                data-animate
                className="max-w-5xl font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl"
              >
                Six Layers Make the Operator Dependable.
              </h2>
              <p
                data-animate
                className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base"
              >
                Each layer solves a different operational constraint. Together,
                they determine where the system runs, what it can know, what it
                can do, and how it remains useful over time.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                data-animate
                className="group min-h-112 border-r border-b border-white/15 p-6 transition-colors duration-300 hover:bg-signal sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <p className="label text-white/55 group-hover:text-white/75">
                    {capability.signal}
                  </p>
                  <span className="font-mono text-xs text-white/35 group-hover:text-white/65">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-16 max-w-xl font-serif text-4xl leading-[0.98] sm:text-5xl">
                  {capability.title}
                </h3>
                <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 group-hover:text-white/80">
                  {capability.description}
                </p>
                <p className="mt-8 max-w-xl border-t border-white/20 pt-6 text-sm leading-7 text-white/50 group-hover:text-white/70">
                  {capability.detail}
                </p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-b border-foreground/15">
        <AnimatedSection
          direction="left"
          className="mx-auto max-w-400 border-x border-foreground/15"
        >
          <div className="grid border-b border-foreground/15 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-foreground/15 p-6 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
              <p data-animate className="label">
                Implementation Sequence
              </p>
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <h2
                data-animate
                className="max-w-5xl font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl"
              >
                Start Narrow. Prove Reliability. Expand With Evidence.
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            {implementationPhases.map((phase, index) => (
              <article
                key={phase.signal}
                data-animate
                className="min-h-80 border-r border-b border-foreground/15 p-6 sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <p className="label">{phase.signal}</p>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-14 max-w-2xl font-serif text-4xl leading-[0.98] sm:text-5xl">
                  {phase.title}
                </h3>
                <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground">
                  {phase.body}
                </p>
              </article>
            ))}
          </div>
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-6 sm:p-10 lg:p-12">
              <p data-animate className="label">
                First Deployment
              </p>
              <h2
                data-animate
                className="mt-6 max-w-4xl font-serif text-4xl leading-[0.96] sm:text-6xl"
              >
                Choose One Workflow Worth Making Dependable.
              </h2>
            </div>
            <div data-animate className="p-6 pt-0 sm:p-10 sm:pt-0 lg:p-12">
              <Button asChild className="h-12 rounded-none px-6">
                <Link href="/#book">
                  Book an Implementation Call
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
