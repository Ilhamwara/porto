import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Layers,
  UserRound,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

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
    const url = `https://ilhamwara.web.id/projects/${params.slug}`;
    return {
      meta: [
        { title: `${project.name} — Ilham Wara Nugroho` },
        { name: "description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:title", content: `${project.name} — ${project.client}` },
        { property: "og:description", content: project.summary },
        { property: "og:url", content: url },
        {
          property: "og:image",
          content: `https://ilhamwara.web.id${project.cover.replace(".svg", ".jpg")}`,
        },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ilhamwara.web.id/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://ilhamwara.web.id/projects",
              },
              { "@type": "ListItem", position: 3, name: project.name, item: url },
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
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const index = projects.findIndex((p) => p.slug === project.slug);
  const previewLabel =
    project.preview === "live"
      ? project.status === "Demo"
        ? "Demo app screenshot"
        : "Live app screenshot"
      : project.preview === "local"
        ? "App screenshot (local build)"
        : project.preview === "store"
          ? "App store screenshot"
          : project.preview === "diagram"
            ? "Service architecture diagram"
            : "Illustrative UI preview";
  const previewLinkLabel = project.url?.includes("play.google.com")
    ? "View on Play Store"
    : "Visit live site";
  const previewNote =
    project.preview === "live"
      ? project.status === "Demo"
        ? "Screenshot taken from the demo deployment."
        : "Screenshot taken from the public application."
      : project.preview === "local"
        ? "Screenshot taken from the running application build."
        : project.preview === "store"
          ? "Screenshot from the published app listing."
          : project.preview === "diagram"
            ? "Diagram of the service architecture and data flow."
            : "Preview is an illustrative UI mockup. No client data is shown.";

  return (
    <article>
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <header className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                {project.category}
              </span>
              {project.latest && (
                <span className="rounded-md bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                  Latest
                </span>
              )}
              {project.status && (
                <span className="rounded-md border border-border bg-surface px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {project.status}
                </span>
              )}
              {project.period && (
                <span className="text-xs text-muted-foreground">{project.period}</span>
              )}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {project.techStack.map((t) => (
              <span key={t} className="tag text-xs">
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-ink shadow-[0_40px_90px_-50px_rgba(15,23,42,0.55)]">
          <img
            src={project.cover}
            alt={`${project.name} — ${previewLabel.toLowerCase()}`}
            width={1200}
            height={760}
            className="w-full"
          />
          <span className="absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium text-white/80 backdrop-blur">
            {previewLabel}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <section aria-labelledby="overview">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Overview
            </p>
            <h2 id="overview" className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              The problem and the build.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </section>

          <section aria-labelledby="features" className="mt-12">
            <h2 id="features" className="font-display text-xl font-bold sm:text-2xl">
              What's inside
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="role" className="mt-12">
            <h2 id="role" className="font-display text-xl font-bold sm:text-2xl">
              My role
            </h2>
            <ul className="mt-5 space-y-3">
              {project.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3 border-b border-border pb-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="stack" className="mt-12">
            <h2 id="stack" className="font-display text-xl font-bold sm:text-2xl">
              Technology
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <p className="eyebrow">Project facts</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">Client</dt>
                  <dd className="mt-0.5 font-medium">{project.client}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">Sector</dt>
                  <dd className="mt-0.5 font-medium">{project.category}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">Timeline</dt>
                  <dd className="mt-0.5 font-medium">{project.period ?? "Delivered engagement"}</dd>
                </div>
              </div>
            </dl>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-5 w-full"
              >
                {previewLinkLabel} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            <div className="mt-6 rounded-xl bg-muted p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Want a walkthrough of the architecture, data model, or delivery
                decisions behind this project?
              </p>
              <Link to="/contact" className="btn btn-primary mt-3 w-full text-xs">
                Ask about this project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <p className="mt-4 text-center text-[10px] text-muted-foreground">
              {previewNote}
            </p>
          </div>

          <Link
            to="/projects"
            className="mt-4 flex items-center justify-between rounded-xl border border-border bg-surface p-4 text-sm font-semibold transition-colors hover:border-foreground"
          >
            Browse all {projects.length} projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>

      <nav aria-label="Other projects" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Keep exploring</p>
              <h2 className="mt-2 font-display text-2xl font-bold">Other selected work</h2>
            </div>
            <span className="hidden text-xs text-muted-foreground sm:block">
              {index + 1} / {projects.length}
            </span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group card card-hover flex flex-col overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden border-b border-border">
                  <img
                    src={p.cover}
                    alt=""
                    width={1200}
                    height={760}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-display text-sm font-semibold">{p.name}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{p.category}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </article>
  );
}

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <p className="font-display text-5xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">
        This project doesn't exist or has been moved.
      </p>
      <Link to="/projects" className="btn btn-primary mt-6">
        Back to projects
      </Link>
    </div>
  );
}
