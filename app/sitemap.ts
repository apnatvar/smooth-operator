import type { MetadataRoute } from "next"

import {
  absoluteUrl,
  logoPath,
  previewImagePath,
} from "@/lib/site-metadata"
import { verticals } from "@/lib/verticals"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl(logoPath), absoluteUrl(previewImagePath)],
    },
    {
      url: absoluteUrl("/learn-how"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...verticals.map((vertical) => ({
      url: absoluteUrl(`/${vertical.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]
}
