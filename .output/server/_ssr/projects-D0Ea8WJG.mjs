//#region node_modules/.nitro/vite/services/ssr/assets/projects-D0Ea8WJG.js
var projectGroups = [
	{
		slug: "dlh-dki-jakarta",
		client: "Dinas Lingkungan Hidup DKI Jakarta",
		period: "2025 – Present",
		summary: "Enterprise environmental information systems for the Jakarta Provincial Government, spanning Laravel and .NET stacks with integrated APIs and reporting.",
		techStack: [
			"Laravel",
			"PostgreSQL",
			".NET",
			"REST API"
		],
		items: [
			"SIDIA Jakarta",
			"KEHATI (.NET)",
			"Gasrumahkaca",
			"SLHD",
			"Lingkungan Hidup Jakarta (.NET)"
		],
		responsibilities: [
			"Designed backend architecture",
			"Developed REST APIs",
			"Optimized reporting modules",
			"Deployed production infrastructure"
		]
	},
	{
		slug: "bpom",
		client: "BPOM Digital Services",
		summary: "Digital services for Indonesia's Food and Drug Authority (BPOM), including regulatory information systems, performance tools, and a mobile application.",
		techStack: [
			"Laravel",
			"PostgreSQL",
			"REST API"
		],
		items: [
			"SMARTPOM",
			"SIPT",
			"TTAC",
			"BPOM Mobile",
			"Kerjasama Humas (WordPress)",
			"Eperformance",
			"SIPT - Pihak 3"
		],
		responsibilities: [
			"Backend Development",
			"API Development",
			"Database Design",
			"Deployment"
		]
	},
	{
		slug: "bnpb-lpdp",
		client: "BNPB, LPDP & Kemendikbud",
		summary: "Mission-critical government platforms for disaster management (BNPB), scholarship risk (LPDP), and vocational education (Kemendikbud).",
		techStack: [
			"Laravel",
			"Yii2",
			"PostgreSQL",
			"REST API"
		],
		items: [
			"BNPB Risk Expert Portal",
			"eRISPRO LPDP (Yii2)",
			"BNPB Monev Hibah",
			"Ditjen Vokasi Kemendikbud"
		],
		responsibilities: [
			"Backend Development",
			"API Development",
			"Database Design",
			"Deployment"
		]
	},
	{
		slug: "others",
		client: "Other Selected Projects",
		summary: "Independent and side projects across web and mobile — from React/Next.js dashboards to hybrid Laravel + React Native systems.",
		techStack: [
			"React",
			"Next.js",
			"React Native",
			"Laravel"
		],
		items: [
			"osMerge — ReactJS & Next.js",
			"PPID Tirtajabar — React Native app + Laravel API",
			"IPBCC — Bacteria management & sales system for IPB (Laravel, 2019)"
		],
		responsibilities: [
			"Frontend & Mobile Development",
			"Backend API Development",
			"Database Design",
			"Deployment & Maintenance"
		]
	}
];
var getProjectBySlug = (slug) => projectGroups.find((p) => p.slug === slug);
//#endregion
export { projectGroups as n, getProjectBySlug as t };
