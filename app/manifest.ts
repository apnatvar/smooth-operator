import type { MetadataRoute } from "next"

import { logoPath } from "@/lib/site-metadata"
import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f1f1f1",
    theme_color: "#242424",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: logoPath,
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: logoPath,
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable",
      },
    ],
  }
}
