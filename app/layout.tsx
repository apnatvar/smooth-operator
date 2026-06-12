import type { Metadata } from "next"
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/lib/site"
import {
  coreKeywords,
  creatorUrl,
  developerUrl,
  logoPath,
  organizationJsonLd,
  previewImagePath,
  siteUrl,
  softwareJsonLd,
  websiteJsonLd,
} from "@/lib/site-metadata"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...coreKeywords],
  authors: [
    { name: "Brownsmith Dynamics", url: developerUrl },
    { name: "Apnatva", url: creatorUrl },
  ],
  creator: "Brownsmith Dynamics",
  publisher: siteConfig.name,
  category: "Business AI Infrastructure",
  classification:
    "Local-first company brain and private AI operating system implementation",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: logoPath, type: "image/webp", sizes: "512x512" },
      { url: logoPath, type: "image/webp", sizes: "any" },
    ],
    shortcut: [{ url: logoPath, type: "image/webp" }],
    apple: [{ url: logoPath, type: "image/webp", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: previewImagePath,
        width: 1920,
        height: 1280,
        alt: "Smooth Operator private AI operating system architecture",
      },
      {
        url: logoPath,
        width: 512,
        height: 512,
        alt: "Smooth Operator SO logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [previewImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "document:type": "Business AI infrastructure website",
    "document:language": "en-IN",
    "document:scope":
      "Private AI OS, company brain, and AI operator implementation",
    "product:deployment": "Local-first, on-prem, and managed cloud",
    "product:pricing-currency": "INR",
    developer: developerUrl,
    "developer:portfolio": creatorUrl,
    "llms:instructions": "/llms.txt",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        inter.variable,
        instrumentSerif.variable,
        geistMono.variable
      )}
    >
      <body className="min-h-svh overflow-x-hidden antialiased">
        {[organizationJsonLd, websiteJsonLd, softwareJsonLd].map(
          (jsonLd, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          )
        )}
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
