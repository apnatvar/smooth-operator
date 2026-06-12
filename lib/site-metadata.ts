import type { Metadata } from "next"

import { siteConfig } from "@/lib/site"
import type { Vertical } from "@/lib/verticals"

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const siteUrl = configuredSiteUrl.replace(/\/$/, "")
export const logoPath = "/so.webp"
export const previewImagePath = "/change-this.webp"
export const developerUrl = "https://brownsmithdynamics.com"
export const creatorUrl = "https://apnatva.dev"

export const coreKeywords = [
  "local-first company brain for growing businesses",
  "private AI operating system for Indian SMEs",
  "on-prem AI OS for business operations",
  "business-specific AI operator implementation",
  "private company brain with local business data",
  "AI operator for Tally Excel and Odoo workflows",
  "semantic company brain for operational documents",
  "AI orchestration layer for business tools",
  "on-prem business intelligence operator",
  "private AI agent infrastructure for SMEs",
  "implementation-led AI operating system",
  "local AI operator with business integrations",
] as const

const verticalMetadata = {
  personal: {
    title: "Personal AI OS and Private Knowledge Operator",
    description:
      "Build a local-first personal AI OS that retrieves files, notes, spreadsheets, and repeatable instructions without uploading your working memory every time.",
    keywords: [
      "personal AI OS for local files and notes",
      "private personal knowledge operator",
      "local-first AI assistant for document retrieval",
      "personal company brain for independent consultants",
      "private skills.md workflow assistant",
      "AI operator for personal spreadsheets and research",
    ],
  },
  founder: {
    title: "Founder AI Chief of Staff and Company Brain",
    description:
      "A private founder AI operator that connects reports, files, spreadsheets, and business context for faster operational and financial decisions.",
    keywords: [
      "founder AI chief of staff with private business data",
      "founder company brain for SME operations",
      "AI operator for founder reporting and forecasting",
      "private AI OS for founder-led businesses",
      "founder decision support from Excel and business files",
      "AI business memory for managing directors",
    ],
  },
  manufacturers: {
    title: "Manufacturer AI OS for Procurement and Production",
    description:
      "A local-first manufacturer company brain for procurement prediction, production planning, inventory signals, ERP exports, Excel data, and owner reporting.",
    keywords: [
      "manufacturer AI OS for procurement forecasting",
      "on-prem company brain for SME manufacturers",
      "AI operator for production planning and inventory",
      "manufacturing AI assistant for ERP and Excel exports",
      "factory morning summary AI operator",
      "semantic company brain for manufacturing documents",
      "procurement prediction AI for Indian manufacturers",
      "local-first manufacturing intelligence system",
    ],
  },
  wholesalers: {
    title: "Wholesale AI Operator for Inventory and Orders",
    description:
      "A private wholesale AI OS for inventory movement, order visibility, procurement signals, sales follow-ups, and operational summaries.",
    keywords: [
      "wholesale AI operator for inventory and orders",
      "company brain for wholesale distribution businesses",
      "AI OS for procurement sales and stock visibility",
      "private inventory intelligence for wholesalers",
      "AI operator for wholesale Excel order tracking",
      "wholesale business memory for calls messages and files",
      "local-first AI system for distributors",
    ],
  },
  startups: {
    title: "Startup AI OS for Product Sales and Investor Context",
    description:
      "A searchable startup operating layer for product notes, customer feedback, CRM exports, investor updates, finance, hiring, and repeatable workflows.",
    keywords: [
      "startup AI OS for product and customer context",
      "startup company brain for investor updates",
      "AI operator for CRM feedback and product documents",
      "private startup operations knowledge layer",
      "AI business memory for early-stage teams",
      "agent documentation for startup workflows",
      "local-first AI operator for startup operations",
    ],
  },
  enterprise: {
    title: "Enterprise AI OS for Internal Query Resolution",
    description:
      "A controlled enterprise company brain for recurring internal questions, approved data sources, cross-functional workflows, access control, and on-prem deployment.",
    keywords: [
      "enterprise AI OS for internal query resolution",
      "controlled company brain for enterprise teams",
      "on-prem enterprise AI operator with access control",
      "cross-functional internal knowledge AI system",
      "private enterprise AI orchestration layer",
      "enterprise agent documentation and governance",
      "AI operator for reducing internal tickets and meetings",
    ],
  },
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString()
}

export function getVerticalMetadata(vertical: Vertical): Metadata {
  const routeMetadata =
    verticalMetadata[vertical.slug as keyof typeof verticalMetadata]

  return {
    title: routeMetadata.title,
    description: routeMetadata.description,
    keywords: [...coreKeywords, ...routeMetadata.keywords],
    alternates: {
      canonical: `/${vertical.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/${vertical.slug}`,
      siteName: siteConfig.name,
      title: `${routeMetadata.title} | ${siteConfig.name}`,
      description: routeMetadata.description,
      images: [
        {
          url: previewImagePath,
          width: 1920,
          height: 1280,
          alt: `${vertical.name} AI operating system by ${siteConfig.name}`,
        },
        {
          url: logoPath,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} SO logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${routeMetadata.title} | ${siteConfig.name}`,
      description: routeMetadata.description,
      images: [previewImagePath],
    },
    other: {
      "business:vertical": vertical.name,
      "product:category": "Private AI Operating System",
      "product:deployment": "Local-first, on-prem, or managed cloud",
      "document:scope": `${vertical.name} AI operator implementation`,
    },
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  logo: absoluteUrl(logoPath),
  description: siteConfig.description,
  creator: {
    "@type": "Organization",
    name: "Brownsmith Dynamics",
    url: developerUrl,
  },
  contributor: {
    "@type": "Person",
    name: "Apnatva",
    url: creatorUrl,
  },
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: ["Smooth Operator AI OS", "Smooth Operator Company Brain"],
  url: siteUrl,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: absoluteUrl(logoPath),
  },
  about: [
    "Private AI operating systems",
    "Local-first company brains",
    "On-prem AI operators",
    "Business-specific AI orchestration",
  ],
}

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  alternateName: "Smooth Operator AI OS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Local-first, on-premises, and managed cloud deployments",
  description: siteConfig.description,
  url: siteUrl,
  image: absoluteUrl(logoPath),
  creator: {
    "@type": "Organization",
    name: "Brownsmith Dynamics",
    url: developerUrl,
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "24999",
    offerCount: "6",
    description:
      "Implementation-led pricing based on integrations, deployment, hardware, data complexity, and support.",
  },
  audience: [
    { "@type": "Audience", audienceType: "Founders" },
    { "@type": "Audience", audienceType: "SME Manufacturers" },
    { "@type": "Audience", audienceType: "Wholesalers and Distributors" },
    { "@type": "Audience", audienceType: "Startups" },
    { "@type": "Audience", audienceType: "Enterprise Teams" },
  ],
}
