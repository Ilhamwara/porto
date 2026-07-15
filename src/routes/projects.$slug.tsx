import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projectGroups } from "../data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Ilham Wara Nugroho" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.client} — Projects · Ilham Wara Nugroho` },
        { name: "description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:title", content: `${project.client} — Ilham Wara Nugroho` },
        { property: "og:description", content: project.summary },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.client,
            about: project.summary,
            keywords: project.techStack.join(", "),
            creator: {
              "@type": "Person",
              name: "Ilham Wara Nugroho",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "/projects" },
              {
                "@type": "ListItem",
                position: 3,
                name: project.client,
                item: `/projects/${params.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All projects
      </Link>
      <header className="mt-6">
        {project.period && (
          <div className="text-xs uppercase tracking-widest text-primary">{project.period}</div>
        )}
        <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
          {project.client}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((t: string) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface/60 px-2.5 py-1 text-xs text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <section aria-labelledby="items-h" className="mt-12">
        <h2 id="items-h" className="font-display text-xl font-semibold text-foreground">
          Projects delivered
        </h2>
        <ul className="mt-4 divide-y divide-border rounded-lg border border-border bg-surface/40">
          {project.items.map((item: string) => (
            <li key={item} className="px-4 py-3 text-sm text-foreground">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resp-h" className="mt-12">
        <h2 id="resp-h" className="font-display text-xl font-semibold text-foreground">
          Responsibilities
        </h2>
        <ul className="mt-4 space-y-2">
          {project.responsibilities.map((r: string) => (
            <li key={r} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label="Other projects" className="mt-16 border-t border-border pt-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Explore more</div>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {projectGroups
            .filter((p) => p.slug !== project.slug)
            .map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="rounded-lg border border-border bg-surface/40 p-4 text-sm text-foreground transition-colors hover:border-primary"
              >
                {p.client}
              </Link>
            ))}
        </div>
      </nav>
    </article>
  );
}

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-foreground">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This project doesn't exist or has been moved.</p>
      <Link
        to="/projects"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Back to projects
      </Link>
    </div>
  );
}
