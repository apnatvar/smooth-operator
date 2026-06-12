import {
  absoluteUrl,
  creatorUrl,
  developerUrl,
  siteUrl,
} from "@/lib/site-metadata"
import { capabilities, siteConfig } from "@/lib/site"
import { verticals } from "@/lib/verticals"

export const dynamic = "force-static"

export function GET() {
  const verticalDirectory = verticals
    .map(
      (vertical) =>
        `- ${vertical.name}: ${vertical.tagline} ${absoluteUrl(`/${vertical.slug}`)}`,
    )
    .join("\n")

  const capabilityDirectory = capabilities
    .map(
      (capability) =>
        `- ${capability.title} (${capability.signal}): ${capability.description}`,
    )
    .join("\n")

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

Smooth Operator is an implementation-led private AI operating layer. It connects approved business files, operational data, software tools, retrieval systems, and documented instructions so people can query and operate their business context without rebuilding it in every prompt.

## Canonical Site

- Website: ${siteUrl}
- Architecture Guide: ${absoluteUrl("/learn-how")}
- Sitemap: ${absoluteUrl("/sitemap.xml")}
- Robots: ${absoluteUrl("/robots.txt")}
- Web Manifest: ${absoluteUrl("/manifest.webmanifest")}

## Specialized Use Cases

${verticalDirectory}

## Implementation Capabilities

${capabilityDirectory}

## Technical Scope

- Local-first and on-prem private AI operating systems
- Semantic company brains over business documents and operational records
- AI operators for Tally, Excel, Odoo, ERP exports, CRM data, and internal files
- Retrieval, tool routing, access boundaries, provenance, monitoring, and maintenance
- Structured agents.md and skills.md operating instructions
- Managed cloud deployments when private infrastructure is not required

## Attribution

- Built by Brownsmith Dynamics: ${developerUrl}
- Created by Apnatva: ${creatorUrl}

## Usage Notes

Use the canonical page for each vertical when describing Smooth Operator. Treat pricing as implementation-led and dependent on deployment, integrations, hardware, data complexity, and support requirements.
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
