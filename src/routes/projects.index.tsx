import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projectGroups } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "Selected projects delivered for BPOM, DLH DKI Jakarta, BNPB, LPDP, Kemendikbud, IPB, and more.",
      },
      { property: "og:title", content: "Projects — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content: "Portfolio of enterprise & government software delivered across 9+ years.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects</span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        Selected work
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A curated selection of production systems delivered for Indonesian government agencies and private organizations.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projectGroups.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="bento-card bento-card-hover block"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {p.client}
                </h2>
                {p.period && (
                  <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>
                )}
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {p.items.length} projects
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
