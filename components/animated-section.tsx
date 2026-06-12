"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { cn } from "@/lib/utils"

type AnimationDirection = "left" | "right" | "up" | "down" | "clip" | "skew"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  direction?: AnimationDirection
}

const directionSettings: Record<AnimationDirection, gsap.TweenVars> = {
  left: { x: -44, opacity: 0 },
  right: { x: 44, opacity: 0 },
  up: { y: 36, opacity: 0 },
  down: { y: -30, opacity: 0 },
  clip: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
  skew: { y: 28, skewY: 3, opacity: 0, transformOrigin: "left bottom" },
}

export function AnimatedSection({
  children,
  className,
  direction = "up",
}: AnimatedSectionProps) {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = root.current
    if (!element) {
      return
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const context = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-animate]", element)

      if (reduceMotion) {
        gsap.set(targets, { clearProps: "all" })
        return
      }

      if (targets.length > 0) {
        gsap.fromTo(targets, directionSettings[direction], {
          x: 0,
          y: 0,
          skewY: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        })
      }

      gsap.utils
        .toArray<HTMLElement>("[data-parallax]", element)
        .forEach((image) => {
          gsap.fromTo(
            image,
            { scale: 1.08, yPercent: -2 },
            {
              scale: 1,
              yPercent: 2,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          )
        })
    }, element)

    return () => context.revert()
  }, [direction])

  return (
    <div ref={root} className={cn(className)}>
      {children}
    </div>
  )
}
