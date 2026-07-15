import { createFileRoute } from "@tanstack/react-router";
import { profile } from "../data/profile";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "Professional experience of Ilham Wara Nugroho across DKI Jakarta Government, PT Mora Teknologi Indonesia, and PT Bening Guru Semesta.",
      },
      { property: "og:title", content: "Experience — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content: "9+ years of full stack engineering across government and enterprise.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Experience</span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        A decade of shipping production software.
      </h1>
      <p className="mt-4 text-muted-foreground">
        From high-performance Laravel APIs to enterprise .NET systems — here is where I've spent my time.
      </p>

      <ol className="mt-12 relative border-l border-border pl-8">
        {profile.experience.map((role) => (
          <li key={role.company} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[37px] mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <div className="text-xs uppercase tracking-widest text-primary">{role.period}</div>
            <h2 className="mt-1 font-display text-xl font-semibold text-foreground">
              {role.title}
            </h2>
            <p className="text-sm text-muted-foreground">{role.company}</p>
            <ul className="mt-4 space-y-2">
              {role.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
