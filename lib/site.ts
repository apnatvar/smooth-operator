export const siteConfig = {
  name: "Smooth Operator",
  shortName: "SO",
  title: "Smooth Operator | Private AI OS and Company Brain",
  description:
    "A local-first company brain and private AI operating system for founders, manufacturers, wholesalers, startups, enterprise teams, and personal workflows.",
} as const

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Personal", href: "/personal" },
  { label: "Founder", href: "/founder" },
  { label: "Manufacturers", href: "/manufacturers" },
  { label: "Wholesalers", href: "/wholesalers" },
  { label: "Startups", href: "/startups" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Book a Call", href: "/#book" },
] as const

export const capabilities = [
  {
    title: "Hosting",
    signal: "Managed Runtime",
    description:
      "Cloud deployments for teams that want managed infrastructure, monitoring, backups, and updates.",
    detail:
      "We provision the runtime, model access, storage, observability, backup policy, and update path as one managed environment. The goal is dependable operation, not another collection of disconnected subscriptions.",
  },
  {
    title: "On-Prem Deployment",
    signal: "Private Compute",
    description:
      "Local-first deployments for businesses that want control over sensitive operational and financial data.",
    detail:
      "The system can run inside infrastructure controlled by your business. We define the hardware profile, network boundary, model strategy, data paths, and recovery plan around the sensitivity and latency of the workload.",
  },
  {
    title: "Software Orchestration",
    signal: "Tool Router",
    description:
      "A central orchestrator routes questions, retrieves relevant context, invokes tools, and prepares useful answers.",
    detail:
      "The orchestration layer determines which source to search, which tool to invoke, what permissions apply, and how results should be assembled. This is what turns a language model into a reliable operating interface.",
  },
  {
    title: "Business Integrations",
    signal: "Connector Plane",
    description:
      "Connect Excel, Tally, Odoo, files, dashboards, and other systems through practical, business-specific connectors.",
    detail:
      "Integrations are designed around actual operating questions. We map source systems, normalize the useful fields, preserve provenance, and expose the smallest dependable toolset the operator needs.",
  },
  {
    title: "Maintenance",
    signal: "Reliability Loop",
    description:
      "Ongoing updates keep connectors, prompts, tools, and workflows aligned with how the business changes.",
    detail:
      "Business systems drift. Schemas change, teams add steps, and decisions gain new constraints. Maintenance keeps retrieval, instructions, permissions, and integrations accurate after the initial implementation.",
  },
  {
    title: "Agent Documentation",
    signal: "Instruction Schema",
    description:
      "Generate structured agents.md or skills.md instructions so the system knows what tools exist and how to use them.",
    detail:
      "Every operator needs explicit operating instructions. We document available tools, invocation rules, source boundaries, failure behavior, escalation paths, and the expected shape of useful output.",
  },
] as const

export const pricingNote =
  "Final pricing depends on integrations, deployment type, hardware, data complexity, and support requirements."
