import { t as getProjectBySlug } from "./projects-D0Ea8WJG.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-DXD3VIDf.js
var $$splitNotFoundComponentImporter = () => import("./projects._slug-DJoHern3.mjs");
var $$splitComponentImporter = () => import("./projects._slug-CBwD7Dcx.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = getProjectBySlug(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Project not found — Ilham Wara Nugroho" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		return {
			meta: [
				{ title: `${project.client} — Projects · Ilham Wara Nugroho` },
				{
					name: "description",
					content: project.summary
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:title",
					content: `${project.client} — Ilham Wara Nugroho`
				},
				{
					property: "og:description",
					content: project.summary
				},
				{
					property: "og:url",
					content: `/projects/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/projects/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "CreativeWork",
					name: project.client,
					about: project.summary,
					keywords: project.techStack.join(", "),
					creator: {
						"@type": "Person",
						name: "Ilham Wara Nugroho"
					}
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Projects",
							item: "/projects"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: project.client,
							item: `/projects/${params.slug}`
						}
					]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
