import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { VerticalPage } from "@/components/vertical-page"
import { getVerticalMetadata } from "@/lib/site-metadata"
import { getVerticalBySlug } from "@/lib/verticals"

const slug = "founder"

export function generateMetadata(): Metadata {
  const vertical = getVerticalBySlug(slug)
  return vertical ? getVerticalMetadata(vertical) : { title: "Vertical" }
}

export default function FounderPage() {
  const vertical = getVerticalBySlug(slug)
  if (!vertical) notFound()

  return <VerticalPage vertical={vertical} />
}
