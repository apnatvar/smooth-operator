import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { VerticalPage } from "@/components/vertical-page"
import { getVerticalBySlug } from "@/lib/verticals"

const slug = "manufacturers"

export function generateMetadata(): Metadata {
  const vertical = getVerticalBySlug(slug)
  return vertical
    ? { title: vertical.name, description: vertical.intro }
    : { title: "Vertical" }
}

export default function ManufacturersPage() {
  const vertical = getVerticalBySlug(slug)
  if (!vertical) notFound()

  return <VerticalPage vertical={vertical} />
}
