import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "Production applications delivered for BPOM, DLH DKI Jakarta, SMA Angkasa 2, Perumda Tirta Jabar, and independent products.",
      },
      { property: "og:title", content: "Projects — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content:
          "Selected government, education, public health, and private sector systems built over 9+ years.",
      },
      { property: "og:url", content: "https://ilhamwara.web.id/projects" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/kehati-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/projects" }],
  }),
  component: ProjectsIndex,
});

type Filter = "All" | ProjectCategory;

function ProjectsIndex() {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of projects) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    return map;
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">
          <span className="h-px w-6 bg-primary" /> Projects · {projects.length} applications
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
          Work that runs in the real world.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          A selection of systems I've designed, built, and supported — from
          Jakarta's environmental data platforms to school systems, regulatory
          services, an e-commerce store, and a frontend prototype. Each card
          opens the technical detail and what I was responsible for.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-2">
        {(["All", ...projectCategories] as Filter[]).map((c) => {
          const active = filter === c;
          const count = c === "All" ? projects.length : (counts.get(c) ?? 0);
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                active
                  ? "border-ink bg-ink text-background"
                  : "border-border bg-surface text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  active ? "bg-white/15 text-background" : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
        <LayoutGrid className="h-3.5 w-3.5" />
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter !== "All" && (
          <span className="rounded-md bg-muted px-2 py-0.5 font-semibold text-foreground">
            {filter}
          </span>
        )}
      </div>

      {visible.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="card mt-5 p-12 text-center">
          <p className="font-display text-lg font-semibold">No projects in this category yet.</p>
          <button type="button" onClick={() => setFilter("All")} className="btn btn-primary mt-4">
            Show all work
          </button>
        </div>
      )}

      <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-surface p-7 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow">Want the deeper version?</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            I can walk through architecture decisions, trade-offs, and the parts
            of these systems that aren't visible from the screens alone.
          </p>
        </div>
        <Link to="/contact" className="btn btn-dark shrink-0">
          Request a walkthrough <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
