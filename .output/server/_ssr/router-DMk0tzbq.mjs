import { n as __toESM } from "../_runtime.mjs";
import { t as profile } from "./profile-D6th2xcy.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as Github, n as Mail, r as Linkedin } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$6 } from "./projects._slug-DXD3VIDf.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DMk0tzbq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-4xWkgyRi.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/experience",
		label: "Experience"
	},
	{
		to: "/projects",
		label: "Projects"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "group flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-sm font-semibold text-primary-foreground font-display",
					children: "IW"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-sm font-medium tracking-tight text-foreground sm:inline",
					children: "Ilham Wara N"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Primary",
				className: "flex items-center gap-1",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
					activeProps: { className: "text-foreground bg-surface" },
					activeOptions: { exact: n.to === "/" },
					children: n.label
				}, n.to))
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name,
					". Crafted with care in Bekasi."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${profile.email}`,
						"aria-label": "Email",
						className: "rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: profile.linkedin,
						"aria-label": "LinkedIn",
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: profile.github,
						"aria-label": "GitHub",
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
					})
				]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: profile.name,
	jobTitle: profile.role,
	email: `mailto:${profile.email}`,
	telephone: profile.phone,
	address: {
		"@type": "PostalAddress",
		addressLocality: "Bekasi",
		addressCountry: "ID"
	},
	sameAs: [
		profile.linkedin,
		profile.github,
		profile.portfolio
	],
	knowsAbout: [
		"Laravel",
		".NET",
		"React",
		"Next.js",
		"PostgreSQL",
		"REST API",
		"Docker",
		"Linux"
	]
};
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Ilham Wara Nugroho — Senior Full Stack Software Engineer" },
			{
				name: "description",
				content: "Personal portfolio of Ilham Wara Nugroho — Senior Full Stack Software Engineer with 9+ years building enterprise & government systems with Laravel, .NET, React, and Next.js."
			},
			{
				name: "author",
				content: profile.name
			},
			{
				property: "og:site_name",
				content: "Ilham Wara Nugroho"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Ilham Wara Nugroho — Senior Full Stack Software Engineer"
			},
			{
				property: "og:description",
				content: "Portfolio & selected work of Ilham Wara Nugroho — 9+ years delivering enterprise and government software."
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Ilham Wara Nugroho — Senior Full Stack Software Engineer"
			},
			{
				name: "twitter:description",
				content: "Portfolio & selected work of Ilham Wara Nugroho."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(personJsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./experience-Cozf4Fw_.mjs");
var Route$4 = createFileRoute("/experience")({
	head: () => ({
		meta: [
			{ title: "Experience — Ilham Wara Nugroho" },
			{
				name: "description",
				content: "Professional experience of Ilham Wara Nugroho across DKI Jakarta Government, PT Mora Teknologi Indonesia, and PT Bening Guru Semesta."
			},
			{
				property: "og:title",
				content: "Experience — Ilham Wara Nugroho"
			},
			{
				property: "og:description",
				content: "9+ years of full stack engineering across government and enterprise."
			},
			{
				property: "og:url",
				content: "/experience"
			}
		],
		links: [{
			rel: "canonical",
			href: "/experience"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-QHDdJFcO.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Ilham Wara Nugroho" },
			{
				name: "description",
				content: "Get in touch with Ilham Wara Nugroho — Senior Full Stack Engineer based in Bekasi, Indonesia. Available via email, phone, and LinkedIn."
			},
			{
				property: "og:title",
				content: "Contact — Ilham Wara Nugroho"
			},
			{
				property: "og:description",
				content: "Let's build something together."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-4OhNCfe6.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Ilham Wara Nugroho" },
			{
				name: "description",
				content: "About Ilham Wara Nugroho — Senior Full Stack Engineer specialized in Laravel, .NET, React, Next.js, PostgreSQL, and scalable backend architecture."
			},
			{
				property: "og:title",
				content: "About — Ilham Wara Nugroho"
			},
			{
				property: "og:description",
				content: "9+ years delivering mission-critical systems across government and enterprise."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-Bd_Gw0fc.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Ilham Wara Nugroho — Senior Full Stack Software Engineer" },
			{
				name: "description",
				content: "Senior Full Stack Engineer with 9+ years building enterprise & government systems for BPOM, BNPB, LPDP, and DKI Jakarta. Laravel · .NET · React · Next.js."
			},
			{
				property: "og:title",
				content: "Ilham Wara Nugroho — Portfolio"
			},
			{
				property: "og:description",
				content: "Selected work & experience delivering enterprise-grade systems for Indonesian government and private organizations."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects.index-C_nV__FE.mjs");
var Route = createFileRoute("/projects/")({
	head: () => ({
		meta: [
			{ title: "Projects — Ilham Wara Nugroho" },
			{
				name: "description",
				content: "Selected projects delivered for BPOM, DLH DKI Jakarta, BNPB, LPDP, Kemendikbud, IPB, and more."
			},
			{
				property: "og:title",
				content: "Projects — Ilham Wara Nugroho"
			},
			{
				property: "og:description",
				content: "Portfolio of enterprise & government software delivered across 9+ years."
			},
			{
				property: "og:url",
				content: "/projects"
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ExperienceRoute = Route$4.update({
	id: "/experience",
	path: "/experience",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ProjectsIndexRoute = Route.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ExperienceRoute,
	ProjectsSlugRoute: Route$6.update({
		id: "/projects/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$5
	}),
	ProjectsIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
