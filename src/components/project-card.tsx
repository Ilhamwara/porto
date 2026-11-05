import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: Props) {
  const isScreenshot =
    project.preview === "live" ||
    project.preview === "local" ||
    project.preview === "store";

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group card card-hover flex h-full flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden border-b border-border bg-ink">
        <div className="aspect-[16/9] w-full">
          <img
            src={project.cover}
            alt={
              isScreenshot
                ? `${project.name} — application screenshot`
                : project.preview === "diagram"
                  ? `${project.name} — service architecture diagram`
                  : `${project.name} — illustrated interface preview`
            }
            width={1200}
            height={760}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-md bg-black/45 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur">
            {project.category}
          </span>
          {project.latest && (
            <span className="flex items-center gap-1.5 rounded-md bg-lime px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
              <span className="h-1 w-1 rounded-full bg-ink" />
              Latest
            </span>
          )}
        </div>
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight">
            {project.name}
          </h3>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="mt-1 text-xs font-medium text-muted-foreground">
          {project.client}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.techStack.slice(0, 4).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
