export type ProjectCategory =
  | "Government"
  | "Education"
  | "Public Health"
  | "Commerce"
  | "Prototype";

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: ProjectCategory;
  period?: string;
  latest?: boolean;
  featured?: boolean;
  summary: string;
  description: string;
  cover: string;
  accent: string;
  techStack: string[];
  features: string[];
  responsibilities: string[];
  url?: string;
  status?: string;
  /** live = public app screenshot, local = local build, store = app listing, diagram = architecture, mockup = illustrated. */
  preview?: "live" | "local" | "store" | "diagram" | "mockup";
};

/**
 * Projects are ordered newest first. Each entry is a single application so
 * clients can scan the actual work rather than a vague client grouping.
 */
export const projects: Project[] = [
  {
    slug: "sidia-jakarta",
    name: "SIDIA Jakarta",
    client: "Dinas Lingkungan Hidup — Pemprov DKI Jakarta",
    category: "Government",
    period: "2025 – Present",
    latest: true,
    featured: true,
    summary:
      "Adiwiyata school portal for Jakarta: school assessments, proposals, program monitoring, and verifiable certificates.",
    description:
      "SIDIA is the Jakarta environment agency's Adiwiyata portal — the program for green, sustainable schools. It covers school self-assessment, proposal review, program planning and monitoring, waste reporting, and digitally verifiable certificates. I worked across the Laravel backend, Vue interface, and production deployment.",
    cover: "/projects/sidia-jakarta-live.jpg",
    preview: "live",
    url: "https://adiwiyata.dinaslhdki.id/",
    status: "Live",
    accent: "#12B981",
    techStack: ["Laravel 10", "Vue 3", "Bootstrap 5", "MySQL", "Sanctum", "S3"],
    features: [
      "School dashboard and proposal verification",
      "Adiwiyata assessment questionnaires",
      "Program planning, monitoring, and statistics",
      "Managed and unmanaged waste reporting",
      "Certificate generation with QR verification",
      "Master data, users, roles, and access",
    ],
    responsibilities: [
      "Backend and API development in Laravel",
      "Vue 3 frontend modules",
      "Database design and reporting",
      "S3 storage, PDF, and QR certificates",
      "Production deployment and support",
    ],
  },
  {
    slug: "kehati",
    name: "KEHATI",
    client: "Dinas Lingkungan Hidup — Pemprov DKI Jakarta",
    category: "Government",
    period: "2025 – Present",
    latest: true,
    featured: true,
    summary:
      "Public biodiversity portal for Jakarta, cataloguing flora, fauna, habitats, and monitoring locations on an interactive map.",
    description:
      "KEHATI is the Jakarta biodiversity portal. It publishes flora and fauna records, habitats, and locations, with an interactive map for exploring species distribution. The admin side manages taxonomy, habitats, relations, users, and roles. The system runs on .NET 9 with PostgreSQL and Leaflet.",
    cover: "/projects/kehati-live.jpg",
    preview: "live",
    status: "Demo",
    accent: "#12B981",
    techStack: [".NET 9", "EF Core 9", "PostgreSQL", "Leaflet", "Tailwind CSS"],
    features: [
      "Flora and fauna catalogue",
      "Habitat and location records",
      "Interactive map with marker clustering",
      "Species-to-location relations",
      "Admin CRUD for taxonomy and users",
      "Role-based access control",
    ],
    responsibilities: [
      ".NET backend and EF Core data model",
      "Admin CRUD modules",
      "Map data integration with Leaflet",
      "PostgreSQL queries and indexing",
      "Nginx and systemd deployment",
    ],
  },
  {
    slug: "simpatik",
    name: "SIMPATIK",
    client: "SMA Angkasa 2",
    category: "Education",
    featured: true,
    summary:
      "School academic management system covering classes, attendance, grades, report cards, and PPDB graduation checks.",
    description:
      "SIMPATIK is the academic backbone for SMA Angkasa 2. It manages classes and students, schedules, attendance, grades, and report cards across separate admin, teacher, and student roles. It also connects to the school's PPDB data for graduation checks.",
    cover: "/projects/simpatik-live.jpg",
    preview: "live",
    url: "https://simpatik.smaangkasa2.sch.id/",
    status: "Live",
    accent: "#FF7A45",
    techStack: ["Laravel 8", "MySQL", "Bootstrap 4", "DataTables", "Excel / PDF"],
    features: [
      "Multi-role access for admin, teachers, and students",
      "Classes, students, subjects, and schedules",
      "Attendance by class with import",
      "Grades and semester report cards",
      "Excel, Word, and PDF exports",
      "PPDB graduation check and documents",
    ],
    responsibilities: [
      "Laravel backend and Blade views",
      "Database schema and reporting",
      "Excel, Word, and PDF imports and exports",
      "Role-based access control",
      "Deployment and maintenance",
    ],
  },
  {
    slug: "e-library",
    name: "E-Library",
    client: "SMA Angkasa 2",
    category: "Education",
    featured: true,
    summary:
      "Library management system with catalogue, loans, returns, visits, and Excel import, powered by React and Go.",
    description:
      "E-Library runs the school library: the digital catalogue, loans and returns, student and class records, and visit logs. The React front end talks to a Go/Gin API backed by PostgreSQL, with JWT authentication and Excel import for bulk data.",
    cover: "/projects/e-library-live.jpg",
    preview: "live",
    url: "https://library.smaangkasa2.sch.id/",
    status: "Live",
    accent: "#8B5CF6",
    techStack: ["React 19", "TypeScript", "Go / Gin", "PostgreSQL", "TanStack", "JWT"],
    features: [
      "Dashboard and collection statistics",
      "Book catalogue management",
      "Loans, returns, and due tracking",
      "Student and class master data",
      "Library visit records",
      "Excel import and export",
    ],
    responsibilities: [
      "React frontend with TanStack Query",
      "Go/Gin REST API",
      "PostgreSQL schema with GORM",
      "JWT authentication",
      "CI build and deployment",
    ],
  },
  {
    slug: "smartpom",
    name: "SMARTPOM",
    client: "BPOM RI",
    category: "Public Health",
    featured: true,
    summary:
      "Monitoring system for follow-up on drug and food supervision findings at BPOM RI.",
    description:
      "SMARTPOM v2 supports BPOM's post-market supervision: facility inspections, findings and follow-up, corrective actions, budgets, and national reporting. I built backend modules and the admin interface across the monitoring workflow.",
    cover: "/projects/smartpom-live.jpg",
    preview: "live",
    url: "https://smartpom.pom.go.id/login",
    status: "Live",
    accent: "#E5484D",
    techStack: ["Laravel 9", "MySQL / PostgreSQL", "Bootstrap 5", "CoreUI", "Sanctum", "JWT"],
    features: [
      "Facility inspection and follow-up tracking",
      "Findings, recommendations, and CAPA",
      "DAK budget planning and realisation",
      "National and regional supervision reports",
      "Master data and ticketing",
      "Role-based admin and mobile API",
    ],
    responsibilities: [
      "Backend modules and repositories",
      "Admin interface with CoreUI and Blade",
      "Database design across 47 migrations",
      "PDF and Excel reporting",
      "API endpoints for the mobile app",
    ],
  },
  {
    slug: "sipt",
    name: "SIPT",
    client: "BPOM RI",
    category: "Public Health",
    featured: true,
    summary:
      "Integrated reporting system for BPOM's sampling, testing, inspection, labeling, and supervision workflows.",
    description:
      "SIPT is BPOM's integrated reporting platform. It brings sampling, laboratory testing, inspection, labeling, and supervision data into one workflow, including CAPA follow-up, reports such as LHU and RHPK, reagent stock, ticketing, and a third-party portal for businesses. Built on Laravel with PostgreSQL.",
    cover: "/projects/sipt-live.jpg",
    preview: "live",
    url: "https://sipt.pom.go.id/",
    status: "Live",
    accent: "#0EA5E9",
    techStack: [
      "Laravel 5.8",
      "PHP 7.1+",
      "PostgreSQL",
      "Bootstrap 4",
      "Bootstrap Table",
      "mPDF / Excel",
    ],
    features: [
      "Sampling, testing, inspection, and labeling entries",
      "CAPA verification and sanction workflow",
      "Reports: LHU, RHPK, and monev",
      "Reagent stock and SPB/SBBK documents",
      "Ticketing and request tracking",
      "Third-party portal for businesses",
      "Master and reference data",
      "Role-based admin and API access",
    ],
    responsibilities: [
      "Laravel backend development",
      "Workflow and multi-role authentication",
      "PDF and Excel reporting",
      "Third-party portal and API",
      "Deployment and production support",
    ],
  },
  {
    slug: "eperformance",
    name: "E-Performance",
    client: "BPOM RI",
    category: "Government",
    featured: true,
    summary:
      "Performance accountability system for BPOM: IKU realisation, budget, RTL, verification, and performance reports.",
    description:
      "E-Performance supports BPOM's organisational performance cycle. Teams enter IKU and budget realisation, submit RTL, verify achievements, and produce performance reports. It also covers the logical framework, Renstra, and performance tree, with integrations to SIASN, SIMETRIS, and SatuData.",
    cover: "/projects/eperformance-live.jpg",
    preview: "live",
    url: "https://simetris.pom.go.id/eperformance_new/",
    status: "Live",
    accent: "#7C3AED",
    techStack: [
      "Laravel 11",
      "PHP 8.2",
      "PostgreSQL",
      "Bootstrap 5",
      "Vite 5",
      "ApexCharts",
    ],
    features: [
      "Dashboard and IKU realisation",
      "Budget realisation and RTL",
      "IKU verification workflow",
      "Logical framework, Renstra, and performance tree",
      "Reports: RTL, efficiency, and performance",
      "SAAS data and RAPK import",
      "SIASN, SIMETRIS, and SatuData integrations",
      "Users, roles, notifications, and activity log",
    ],
    responsibilities: [
      "Laravel backend modules",
      "Performance data model and workflow",
      "Excel import and reporting",
      "API integrations",
      "Deployment and production support",
    ],
  },
  {
    slug: "anxious",
    name: "Anxious Creation",
    client: "Anxious Creation — Bekasi",
    category: "Commerce",
    featured: true,
    summary:
      "Official online store for a Bekasi clothing brand, with catalogue, checkout, payments, and shipping.",
    description:
      "Anxious Creation is a full e-commerce store for a local clothing brand. It handles the storefront, cart and checkout, vouchers, customer accounts, Duitku payments, Biteship shipping, and an admin dashboard for products, orders, and reports. Deployed on Vercel with PostgreSQL and Prisma.",
    cover: "/projects/anxious-live.jpg",
    preview: "live",
    accent: "#E11D48",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Duitku",
      "Biteship",
    ],
    features: [
      "Storefront, categories, and product variants",
      "Cart, checkout, and vouchers",
      "Duitku payment with idempotent webhook",
      "Biteship rates, tracking, and labels",
      "Customer accounts and order lookup",
      "Admin for products, orders, members, reports",
      "Indonesian/English UI with dark mode",
    ],
    responsibilities: [
      "Full stack Next.js development",
      "PostgreSQL schema with Prisma",
      "Payment and shipping integrations",
      "Authentication, sessions, and rate limiting",
      "Vercel deployment and operations",
    ],
    url: "https://anxious-app.vercel.app/",
    status: "Live",
  },
  {
    slug: "ewas-golang",
    name: "EWAS-Golang",
    client: "BPOM RI — EWAS / WAS",
    category: "Public Health",
    summary:
      "Go data service that synchronises high-volume PBF data between Gatevac, EUA, and WAS databases.",
    description:
      "EWAS-Golang is a background data service for BPOM's supervision data. It pulls PBF records from Gatevac, transforms and distributes them into the WAS database, and keeps destination mapping tables in sync. It was built for large tables and safe, resumable backfills.",
    cover: "/projects/ewas-golang.svg",
    preview: "diagram",
    status: "Backend service",
    accent: "#0EA5E9",
    techStack: ["Go 1.24", "MySQL", "net/http", "Cron", "Linux"],
    features: [
      "Receive PBF pipeline",
      "Distribute PBF pipeline",
      "Destination mapping with shadow tables",
      "HTTP job endpoints and health check",
      "Trader report aggregation",
      "Resumable backfill and cron jobs",
    ],
    responsibilities: [
      "Go service architecture",
      "MySQL query and batch performance",
      "Data reconciliation and backfill",
      "Cron and logrotate deployment",
      "Production monitoring",
    ],
  },
  {
    slug: "echowheel",
    name: "Echowheel",
    client: "Independent product",
    category: "Prototype",
    summary:
      "E-bike rental experience with CO₂ tracking, ECO2 wallet, and live-tracking UI — a frontend prototype.",
    description:
      "Echowheel explores an e-bike rental product with carbon rewards. The current build is a front-end prototype: marketing site, auth screens, rider dashboard, bike listing and detail, rental flow, tracking map, carbon impact, ECO2 wallet, marketplace, and profile. The UI is ready for API integration.",
    cover: "/projects/echowheel-live.jpg",
    preview: "local",
    accent: "#A3E635",
    techStack: ["React 19", "TypeScript", "Vite 8", "TanStack Router", "Tailwind CSS 4"],
    features: [
      "Landing page and auth screens",
      "Rider dashboard and active rental",
      "E-bike listing, filters, and detail",
      "Live-tracking map interface",
      "Carbon impact and ECO2 wallet",
      "Marketplace and profile flows",
    ],
    responsibilities: [
      "Frontend architecture",
      "Route and component structure",
      "Responsive UI implementation",
      "Mock data and interaction flows",
      "Prototype prepared for API integration",
    ],
    status: "Frontend prototype · not deployed",
  },
  {
    slug: "sma-angkasa-2",
    name: "SMA Angkasa 2 Website",
    client: "SMA Angkasa 2",
    category: "Education",
    summary:
      "Public school website and admin CMS with online admissions, news, profiles, and document generation.",
    description:
      "The SMA Angkasa 2 website combines the public school profile with an admin CMS. It handles online admissions (SPMB/PPDB), NISN checks, news and achievements, teacher and facility pages, sliders, and document generation from DOCX templates.",
    cover: "/projects/sma-angkasa-2-live.jpg",
    preview: "live",
    url: "https://smaangkasa2.sch.id/",
    status: "Live",
    accent: "#F59E0B",
    techStack: ["Laravel 13", "PHP 8.3", "Blade", "Tailwind CSS 4", "Alpine.js", "MySQL"],
    features: [
      "SPMB/PPDB online registration",
      "NISN check and applicant admin",
      "News, events, and achievements",
      "School profile, teachers, and facilities",
      "DOCX-to-PDF document generation",
      "Slider, settings, and Exambro config",
      "Admin authentication and dashboard",
    ],
    responsibilities: [
      "Laravel backend and CMS modules",
      "Blade and Tailwind public pages",
      "Admissions and document workflow",
      "DataTables and exports",
      "Nginx and PHP-FPM deployment",
    ],
  },
  {
    slug: "ppid-mobile",
    name: "PPID Mobile",
    client: "Perumda Tirta Jabar",
    category: "Government",
    summary:
      "Public information service app for Perumda Tirta Jabar, with requests, objections, news, notifications, and live chat.",
    description:
      "PPID Mobile gives the public a mobile channel to request information, file objections, read company news, and chat with the PPID team. Built with React Native and Expo, it talks to the existing PPID REST API.",
    cover: "/projects/ppid-mobile-live.jpg",
    preview: "store",
    status: "Android app",
    accent: "#6366F1",
    techStack: ["React Native 0.76", "Expo 52", "React Navigation", "OneSignal", "Socket.IO"],
    features: [
      "Information requests and tracking",
      "Objection submissions",
      "News and announcement pages",
      "Push notifications",
      "Live chat with the PPID team",
      "Profile, password, and document uploads",
      "FAQ and privacy pages",
    ],
    responsibilities: [
      "React Native and Expo app development",
      "REST API integration",
      "Push notifications",
      "Live chat integration",
      "Android and iOS build and release",
    ],
  },
  {
    slug: "bpom-mobile",
    name: "BPOM Mobile",
    client: "BPOM RI",
    category: "Public Health",
    summary:
      "Public app to check drug, food, and cosmetic registrations by search or barcode, plus complaints and alerts.",
    description:
      "BPOM Mobile helps the public verify products before buying. Users can search by name or registration number, scan a barcode, view product details by category, read public warnings and legal documents, and submit complaints. It consumes BPOM's TTAC and Cek BPOM APIs.",
    cover: "/projects/bpom-mobile-live.jpg",
    preview: "store",
    url: "https://play.google.com/store/apps/details?id=com.bpomttac",
    status: "Published app",
    accent: "#E5484D",
    techStack: ["Flutter", "Dart", "GetX", "Dio", "Google Maps", "REST API"],
    features: [
      "Product search and registration check",
      "Barcode scanner and scan history",
      "Product details by category",
      "Public warnings and safety info",
      "Complaints with attachments",
      "News and JDIH legal documents",
      "Authentication, profile, PIN, and maps",
      "SSL pinning and local encryption",
    ],
    responsibilities: [
      "Flutter app development",
      "API integration with BPOM services",
      "Barcode, maps, and file handling",
      "Secure storage and certificate pinning",
      "Android and iOS release builds",
    ],
  },
  {
    slug: "sigd",
    name: "SIGD",
    client: "Dinas Lingkungan Hidup — Pemprov DKI Jakarta",
    category: "Government",
    summary:
      "Greenhouse-gas inventory system for calculating emissions, tracking mitigation and adaptation actions, and producing reports.",
    description:
      "SIGD is the Jakarta environment agency's greenhouse-gas inventory. It records activity data, calculates emissions by sector, manages emission factors, and produces standard reports for mitigation and adaptation planning.",
    cover: "/projects/sigd.svg",
    accent: "#22C55E",
    techStack: ["Laravel 11", "PHP 8.2", "MySQL", "Bootstrap 5", "Sanctum", "Excel / PDF"],
    features: [
      "Inventory, mitigation, and adaptation dashboard",
      "Emission calculations by sector",
      "Activity data and metadata forms",
      "Emission factors, GWP, and unit settings",
      "CRF, GCOM-CRF, and GPC reports",
      "Sign-off and verification flow",
      "Master data, users, and role access",
      "API with Sanctum authentication",
    ],
    responsibilities: [
      "Laravel backend and modules",
      "Emission data model and calculations",
      "Reporting and exports",
      "Role and menu access control",
      "Deployment and production support",
    ],
  },
  {
    slug: "dikplhd",
    name: "DIKPLHD",
    client: "Dinas Lingkungan Hidup — Pemprov DKI Jakarta",
    category: "Government",
    summary:
      "Open-data portal for Jakarta's environmental status, with dataset catalogues, publications, and analytics dashboards.",
    description:
      "SLHD is the public environmental status portal for Jakarta. It publishes datasets, publications, and indicators, with dashboards for exploring environmental data across DPSIR dimensions. The admin side manages datasets, resources, institutions, and verification.",
    cover: "/projects/dikplhd-live.jpg",
    preview: "live",
    url: "https://dikplhd.dinaslhdki.id/",
    status: "Live",
    accent: "#0EA5E9",
    techStack: ["Laravel 10", "PHP 8.1", "MySQL", "Tailwind CSS", "Bootstrap Table", "Excel"],
    features: [
      "Public dataset catalogue and search",
      "Dataset detail and resource tables",
      "Publications, news, and articles",
      "Environmental analytics dashboards",
      "Dataset management and verification",
      "Master data for topics, agencies, resources",
      "Dynamic per-dataset tables",
      "Users, roles, and menu access",
    ],
    responsibilities: [
      "Laravel backend and admin modules",
      "Dynamic dataset table design",
      "Dashboard analytics",
      "Excel templates and exports",
      "Deployment and production support",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: ProjectCategory[] = [
  "Government",
  "Education",
  "Public Health",
  "Commerce",
  "Prototype",
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const clients = [
  "BPOM RI",
  "DLH DKI Jakarta",
  "SMA Angkasa 2",
  "Perumda Tirta Jabar",
  "Anxious Creation",
];
