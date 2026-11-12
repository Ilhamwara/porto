export type CarePackage = {
  name: string;
  price: string;
  monthly: string;
  bestFor: string;
  features: string[];
  recommended?: boolean;
};

export type BuildPackage = {
  name: string;
  price: string;
  scope: string;
  note?: string;
};

export const carePackages: CarePackage[] = [
  {
    name: "Starter",
    price: "Rp 7.200.000",
    monthly: "≈ Rp 600.000/month",
    bestFor: "New store, small traffic",
    features: [
      "Shared VPS, .com domain, SSL",
      "7-day backup",
      "Security updates and bug fixes",
      "1 hour support/month",
      "1 small content change/month",
    ],
  },
  {
    name: "Growth",
    price: "Rp 12.000.000",
    monthly: "≈ Rp 1.000.000/month",
    bestFor: "A store starting to grow",
    recommended: true,
    features: [
      "VPS 2 vCPU / 4 GB",
      "14-day backup + uptime monitoring",
      "Security updates and bug fixes",
      "3 hours support/month",
      "Priority WhatsApp + monthly report",
    ],
  },
  {
    name: "Partner",
    price: "Rp 24.000.000",
    monthly: "≈ Rp 2.000.000/month",
    bestFor: "Regular sales, priority support",
    features: [
      "Dedicated resources",
      "30-day backup",
      "6 hours support/month",
      "1×24-hour response SLA",
      "Small feature changes + quarterly review",
    ],
  },
  {
    name: "Business / White-label",
    price: "Rp 36.000.000+",
    monthly: "from ≈ Rp 3.000.000/month",
    bestFor: "Multi-store / reseller",
    features: [
      "SLA and development priority",
      "10 hours support/month",
      "Feature roadmap",
      "White-label branding",
      "Monthly consultation",
    ],
  },
];

export const buildPackages: BuildPackage[] = [
  {
    name: "Launch",
    price: "Rp 15.000.000",
    scope:
      "Storefront + basic admin, up to 20 products, 1 payment gateway, 1 courier, deployment.",
  },
  {
    name: "Growth",
    price: "Rp 25.000.000",
    scope:
      "Launch + vouchers, reports, shipping labels, multilingual, basic SEO, advanced integration.",
  },
  {
    name: "Custom",
    price: "From Rp 40.000.000",
    scope:
      "Special requirements: ERP/API integration, multi-role, multi-warehouse, or custom workflows.",
  },
];

export const addOns: Array<{ name: string; note: string }> = [
  {
    name: "Additional support",
    note: "Dihitung per jam pada jam kerja, sesuai kebutuhan.",
  },
  {
    name: "Urgent / after-hours support",
    note: "Untuk kebutuhan mendesak di luar jam kerja.",
  },
  {
    name: "Product + variant entry",
    note: "Input produk, varian, foto, dan deskripsi.",
  },
  {
    name: "Product photo editing",
    note: "Crop, retouch, dan optimasi ukuran.",
  },
  {
    name: "Admin training",
    note: "Sesi pelatihan untuk tim admin, durasi disepakati.",
  },
  {
    name: "New VPS setup / deployment",
    note: "Instalasi aplikasi, Nginx, SSL, dan backup.",
  },
  {
    name: "Migration from another platform",
    note: "Sesuai struktur data sumber dan volume konten.",
  },
  {
    name: "New payment / courier integration",
    note: "Sesuai API, dokumentasi, dan kebutuhan bisnis.",
  },
  {
    name: "SEO audit + technical fixes",
    note: "Audit on-page dan implementasi perbaikan dasar.",
  },
  {
    name: "Promo landing page",
    note: "Halaman kampanye terpisah dari situs utama.",
  },
  {
    name: "Priority SLA",
    note: "Respons lebih cepat dan jalur prioritas.",
  },
];

export const terms = [
  "Annual payment upfront; renewal is due 30 days before the active period ends.",
  "10% discount for prepaid 2-year plans.",
  "Renewal price increases 10%/year or follows inflation.",
  "Support hours do not roll over to the next month.",
  "Support is Monday–Friday, 09.00–17.00 WIB. Response within 1×24 business hours.",
  "Uptime target 99.5%, excluding third-party disruptions (Vultr, Duitku, Biteship, network).",
  "Backups are retained for 7/14/30 days depending on the package.",
  "Not included: Duitku fees, Biteship shipping, ads, domain renewal if the domain belongs to the client, major new features, and bulk content entry.",
  "Late payment after 14 days → suspension; after 30 days → termination.",
  "Client owns the data. The application code is licensed, not sold outright.",
  "Changes outside the package require written approval and separate billing.",
];

export const licenseNote = {
  price: "Rp 6.000.000/year",
  description:
    "License only: the client hosts the application. Includes security updates, bug fixes, and 1 hour support/month.",
};

export const customEngineering = [
  "Enterprise and government systems",
  "Mobile applications (React Native / Flutter)",
  "Complex API, ERP, and legacy integrations",
  "Data migration and high-volume reporting",
  "Security reviews and production audits",
];

export const engagementSteps = [
  {
    n: "01",
    title: "Send the context",
    body: "Tell me what you are building, the constraints, and what done looks like.",
  },
  {
    n: "02",
    title: "Discovery call",
    body: "A short call to align on scope, risks, timeline, and the right package.",
  },
  {
    n: "03",
    title: "Written proposal",
    body: "You receive a scope, milestone plan, and fixed quote — not a vague estimate.",
  },
  {
    n: "04",
    title: "Build and ship",
    body: "Work happens in milestones, with progress you can see and a production handover at the end.",
  },
];

export const rateFaqs = [
  {
    q: "Why not just use AI to build it?",
    a: "AI can generate code, but it cannot take responsibility when a system goes down, data leaks, or a report is rejected by an institution. You pay for a secure, integrated, accountable system — and someone who stays until it works in production.",
  },
  {
    q: "Are these prices final?",
    a: "No. The numbers on this page are estimates for the listed scope. A final quote is issued after we confirm requirements, integrations, content volume, and support level.",
  },
  {
    q: "Can you handle government procurement?",
    a: "Yes. I have delivered systems for BPOM, DKI Jakarta, BNPB, LPDP, and Kemendikbud. Enterprise and government projects are quoted separately because procurement, documentation, retention, and audit requirements change the scope.",
  },
  {
    q: "Who owns the code and the data?",
    a: "The client owns the data. The application code is licensed for use and is not sold outright. Custom enterprise deliverables follow the ownership terms in the contract.",
  },
  {
    q: "What happens if I need a feature outside the package?",
    a: "It is quoted separately and approved in writing before work starts. There are no silent additions and no unlimited support.",
  },
  {
    q: "Do support hours roll over?",
    a: "No. Support hours reset each month and do not accumulate. Additional hours are billed at the add-on rate.",
  },
];