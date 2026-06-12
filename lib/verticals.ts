export type VerticalSectionData = {
  title: string
  subtitle: string
  body: string
  signal: string
  imageLabel: string
}

export type Vertical = {
  slug: string
  name: string
  eyebrow: string
  tagline: string
  price: string
  intro: string
  needPoints: string[]
  needLabel: string
  imageLabel: string
  sections: [VerticalSectionData, VerticalSectionData]
  cta: string
}

export const verticals = [
  {
    slug: "personal",
    name: "Personal",
    eyebrow: "Personal AI Infrastructure",
    tagline:
      "A private assistant that remembers your work, files, routines, and recurring decisions.",
    price: "Starting from ₹24,999",
    intro:
      "For individuals who want more than a chatbot. Build a private assistant that can work with your documents, notes, spreadsheets, and repeatable workflows.",
    needPoints: [
      "Find personal files and notes faster.",
      "Summarise recurring information without manual uploads.",
      "Create a local-first assistant around your actual workflow.",
    ],
    needLabel: "Retrieval Priorities",
    imageLabel: "Local Index / Private Context",
    sections: [
      {
        title: "Your Personal Knowledge, Organized.",
        subtitle:
          "Stop searching across folders, notes, and scattered documents.",
        body: "Connect your local files, notes, spreadsheets, and reference material into a searchable private layer that helps you retrieve what you already know.",
        signal: "Semantic Index",
        imageLabel: "Vector Store / Local Corpus",
      },
      {
        title: "Repeatable Tasks Become Reusable Workflows.",
        subtitle:
          "The assistant can follow documented instructions, not just answer one-off prompts.",
        body: "We can create structured workflows and skills.md style instructions for recurring tasks such as summaries, research preparation, document review, and personal planning.",
        signal: "Skill Runtime",
        imageLabel: "Instruction Graph / Task Memory",
      },
    ],
    cta: "Build Your Private Assistant",
  },
  {
    slug: "founder",
    name: "Founder",
    eyebrow: "Founder Office",
    tagline: "An AI chief of staff that understands your business context.",
    price: "Starting from ₹74,999",
    intro:
      "For founder-led teams where too much operational knowledge lives inside the founder’s head, inbox, files, and chat history.",
    needPoints: [
      "Get quick answers without asking five people.",
      "Replace basic intern-style research and summarisation work.",
      "Review business performance without waiting for manual reports.",
    ],
    needLabel: "Decision Inputs",
    imageLabel: "Founder Context / Decision Memory",
    sections: [
      {
        title: "Founder Memory for Everyday Decisions.",
        subtitle:
          "The system keeps business context available when you need it.",
        body: "Connect reports, notes, documents, spreadsheets, and business files so the founder can ask questions, retrieve context, and prepare decisions quickly.",
        signal: "Context Ledger",
        imageLabel: "Business Memory / Source Graph",
      },
      {
        title: "Fast Financial and Operational Summaries.",
        subtitle: "Useful answers before perfect dashboards.",
        body: "Generate quick summaries, lightweight analysis, and prediction-oriented views from available business data without waiting for manual preparation.",
        signal: "Decision Feed",
        imageLabel: "Metric Stream / Summary Engine",
      },
    ],
    cta: "Set Up Your Founder Office",
  },
  {
    slug: "manufacturers",
    name: "Manufacturers",
    eyebrow: "Manufacturing Intelligence",
    tagline:
      "Ask your factory what needs attention before it becomes a problem.",
    price: "Starting from ₹1,49,999",
    intro:
      "For SME manufacturing businesses that need better visibility across procurement, production, inventory, and sales without adding more reporting burden.",
    needPoints: [
      "Reduce dependency on team leaders for basic operational answers.",
      "Predict procurement and production requirements earlier.",
      "Receive morning summaries across critical business areas.",
    ],
    needLabel: "Operational Signals",
    imageLabel: "Factory State / Production Telemetry",
    sections: [
      {
        title: "Procurement and Production Prediction.",
        subtitle: "Move from reactive follow-ups to early warning signals.",
        body: "Use historical data, inventory movement, sales demand, and production patterns to identify what may need procurement or manufacturing attention next.",
        signal: "Demand Forecast",
        imageLabel: "Material Flow / Forecast Window",
      },
      {
        title: "A Semantic Company Brain.",
        subtitle:
          "Operational knowledge should not disappear into people, folders, and spreadsheets.",
        body: "Create a searchable layer over reports, files, ERP exports, Excel sheets, and business documents so owners can receive useful summaries without interrupting experts.",
        signal: "Knowledge Mesh",
        imageLabel: "ERP Context / Semantic Layer",
      },
    ],
    cta: "Build Your Manufacturing Operator",
  },
  {
    slug: "wholesalers",
    name: "Wholesalers",
    eyebrow: "Wholesale Operations",
    tagline:
      "Stay on top of inventory, orders, procurement, and sales without living inside spreadsheets.",
    price: "Starting from ₹1,24,999",
    intro:
      "For wholesalers that are too operationally complex for memory alone, but not ready for heavy enterprise systems.",
    needPoints: [
      "Track parallel operations without losing context.",
      "Monitor inventory, orders, and sales signals.",
      "Reduce missed follow-ups across calls, messages, and files.",
    ],
    needLabel: "Control Signals",
    imageLabel: "Inventory State / Order Flow",
    sections: [
      {
        title: "Inventory and Order Visibility.",
        subtitle:
          "Know what is moving, what is stuck, and what needs attention.",
        body: "Connect inventory records, order data, spreadsheets, and relevant communication trails to surface useful answers about stock, sales, and procurement.",
        signal: "Stock Resolver",
        imageLabel: "Order Graph / Inventory Delta",
      },
      {
        title: "Founder-Level Control Without Founder-Level Memory Load.",
        subtitle:
          "The system helps the team stay aware of small operational details.",
        body: "Summarise important updates from sales activity, procurement signals, inventory movement, and customer requests so the business does not rely only on memory.",
        signal: "Exception Queue",
        imageLabel: "Sales Events / Follow-Up State",
      },
    ],
    cta: "Set Up Your Wholesale Operator",
  },
  {
    slug: "startups",
    name: "Startups",
    eyebrow: "Startup Operations",
    tagline:
      "Turn scattered startup activity into a searchable operating layer.",
    price: "Starting from ₹99,999",
    intro:
      "For small startup teams that move quickly but lose context across documents, calls, product notes, customer feedback, and investor updates.",
    needPoints: [
      "Summarise product, sales, and customer activity.",
      "Prepare updates faster.",
      "Keep operational context available as the team grows.",
    ],
    needLabel: "Growth Signals",
    imageLabel: "Startup Context / Activity Stream",
    sections: [
      {
        title: "Investor, Customer, and Product Context in One Place.",
        subtitle: "Your team should not rebuild context before every update.",
        body: "Connect notes, decks, reports, CRM exports, feedback, and product documents into a searchable layer for faster planning and communication.",
        signal: "Context Router",
        imageLabel: "CRM Events / Product Memory",
      },
      {
        title:
          "A Lightweight Operating System Before the Company Becomes Complex.",
        subtitle: "Build process memory before process debt becomes expensive.",
        body: "Document workflows, generate reusable agent instructions, and create repeatable summaries for sales, product, hiring, and finance operations.",
        signal: "Process Kernel",
        imageLabel: "Workflow Map / Agent Registry",
      },
    ],
    cta: "Build Your Startup Operator",
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    eyebrow: "Enterprise Intelligence",
    tagline:
      "Resolve smaller internal queries before they become meetings, tickets, and repeated work.",
    price: "Custom enterprise pricing",
    intro:
      "For larger teams that need controlled internal intelligence across systems, departments, documents, and workflows.",
    needPoints: [
      "Reduce wasted effort across cross-functional teams.",
      "Answer recurring internal questions faster.",
      "Support controlled deployment, integration, and maintenance.",
    ],
    needLabel: "Governance Signals",
    imageLabel: "Controlled Context / Access Plane",
    sections: [
      {
        title: "Cross-Functional Query Resolution.",
        subtitle: "Teams should not need a meeting for every small answer.",
        body: "Connect approved data sources and workflows so teams can resolve routine questions across departments without waiting for manual escalation.",
        signal: "Query Fabric",
        imageLabel: "Department Graph / Policy Context",
      },
      {
        title: "Controlled Deployment for Sensitive Environments.",
        subtitle:
          "Enterprise AI needs infrastructure, access control, and maintenance.",
        body: "Support cloud or on-prem deployment models with custom integrations, structured agent documentation, and ongoing maintenance based on enterprise requirements.",
        signal: "Policy Runtime",
        imageLabel: "Access Control / Deployment Plane",
      },
    ],
    cta: "Discuss Enterprise Deployment",
  },
] satisfies Vertical[]

export function getVerticalBySlug(slug: string) {
  return verticals.find((vertical) => vertical.slug === slug)
}
