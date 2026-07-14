import { t as profile } from "./profile-D6th2xcy.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Github, i as Globe, n as Mail, r as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-QHDdJFcO.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const items = [
		{
			icon: Mail,
			label: "Email",
			value: profile.email,
			href: `mailto:${profile.email}`
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			value: "Ilham Wara Nugroho",
			href: profile.linkedin
		},
		{
			icon: Github,
			label: "GitHub",
			value: "ilhamwara",
			href: profile.github
		},
		{
			icon: Globe,
			label: "Portfolio",
			value: "ilhamwara.web.id",
			href: profile.portfolio
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl",
				children: "Let's build something together."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted-foreground",
				children: "Whether it's an enterprise system, a mobile app, or a technical challenge — I'd love to hear about it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2",
				children: items.map((it) => {
					const Content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bento-card bento-card-hover flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface/60 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: it.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-foreground",
							children: it.value
						})] })]
					});
					return it.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: it.href,
						target: it.href.startsWith("http") ? "_blank" : void 0,
						rel: it.href.startsWith("http") ? "noreferrer" : void 0,
						className: "block",
						children: Content
					}, it.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Content }, it.label);
				})
			})
		]
	});
}
//#endregion
export { ContactPage as component };
