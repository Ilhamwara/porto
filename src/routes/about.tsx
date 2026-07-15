import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { profile } from "../data/profile";
import { BentoCard } from "../components/bento-card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "About Ilham Wara Nugroho — Senior Full Stack Engineer specialized in Laravel, .NET, React, Next.js, PostgreSQL, and scalable backend architecture.",
      },
      { property: "og:title", content: "About — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content:
          "9+ years delivering mission-critical systems across government and enterprise.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">About</span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        Building software that governments and enterprises rely on.
      </h1>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>{profile.summary}</p>
        <p>{profile.summaryLong}</p>
      </div>

      <section aria-labelledby="highlights" className="mt-16">
        <h2 id="highlights" className="font-display text-2xl font-semibold text-foreground">
          Key technical highlights
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {profile.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 rounded-lg border border-border bg-surface/50 p-3 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {h}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="mt-16">
        <h2 id="skills" className="font-display text-2xl font-semibold text-foreground">
          Technical skills
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(profile.skills).map(([group, items]) => (
            <BentoCard key={group}>
              <h3 className="text-xs uppercase tracking-widest text-primary">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface/60 px-2 py-1 text-xs text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section aria-labelledby="achievements" className="mt-16">
        <h2 id="achievements" className="font-display text-2xl font-semibold text-foreground">
          Achievements
        </h2>
        <ul className="mt-6 space-y-3">
          {profile.achievements.map((a) => (
            <li key={a} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
