import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as projectGroups } from "./projects-D0Ea8WJG.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./projects._slug-DXD3VIDf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-CBwD7Dcx.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects",
				className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " All projects"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-6",
				children: [
					project.period && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: project.period
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl",
						children: project.client
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: project.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-1.5",
						children: project.techStack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-border bg-surface/60 px-2.5 py-1 text-xs text-foreground",
							children: t
						}, t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "items-h",
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "items-h",
					className: "font-display text-xl font-semibold text-foreground",
					children: "Projects delivered"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border rounded-lg border border-border bg-surface/40",
					children: project.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-4 py-3 text-sm text-foreground",
						children: item
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "resp-h",
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "resp-h",
					className: "font-display text-xl font-semibold text-foreground",
					children: "Responsibilities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: project.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r })]
					}, r))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Other projects",
				className: "mt-16 border-t border-border pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: "Explore more"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2",
					children: projectGroups.filter((p) => p.slug !== project.slug).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects/$slug",
						params: { slug: p.slug },
						className: "rounded-lg border border-border bg-surface/40 p-4 text-sm text-foreground transition-colors hover:border-primary",
						children: p.client
					}, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProjectDetail as component };
