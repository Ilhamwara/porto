import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Cloud,
  Database,
  Layers,
  Mail,
  MapPin,
  MonitorSmartphone,
  Server,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "About Ilham Wara Nugroho — senior full stack engineer specialised in Laravel, .NET, React, Next.js, PostgreSQL, and scalable backend architecture.",
      },
      { property: "og:title", content: "About — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content:
          "9+ years delivering mission-critical systems across government and enterprise.",
      },
      { property: "og:url", content: "https://ilhamwara.web.id/about" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/simpatik-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/about" }],
  }),
  component: AboutPage,
});

const skillIcons: Record<string, typeof Server> = {
  Backend: Server,
  Frontend: MonitorSmartphone,
  Mobile: MonitorSmartphone,
  Database: Database,
  Infrastructure: Cloud,
  "Cloud & Services": Layers,
};

const principles = [
  {
    title: "Clarity over cleverness",
    body: "Code that another engineer can pick up on a Monday morning is worth more than a clever abstraction nobody wants to touch.",
  },
  {
    title: "Own the production path",
    body: "A feature isn't finished when it merges. Deployment, monitoring, and the first support cycle are part of the work.",
  },
  {
    title: "Respect the operation",
    body: "Government and enterprise systems have real users with real deadlines. Stability is a feature, not an afterthought.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 line-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> About
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              I care about the parts
              <br />
              users never see.
            </h1>
            <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              <p>{profile.summary}</p>
              <p>{profile.summaryLong}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Work with me <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                See the work
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-lime/20 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-dark text-dark-foreground shadow-[0_30px_80px_-45px_rgba(15,23,42,0.6)]">
              <div className="relative border-b border-white/10 p-7">
                <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
                <div className="relative flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime font-display text-xl font-bold text-ink">
                    IW
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold">{profile.name}</p>
                    <p className="mt-0.5 text-sm text-lime">{profile.role}</p>
                  </div>
                </div>
                <div className="relative mt-6 space-y-2.5 text-sm text-dark-foreground/70">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-lime" /> {profile.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-lime" /> {profile.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-lime" /> 9+ years · available for select work
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/10">
                {[
                  ["20+", "Systems"],
                  ["6+", "Gov clients"],
                  ["13", "Case studies"],
                ].map(([n, l]) => (
                  <div key={l} className="p-5 text-center">
                    <p className="font-display text-2xl font-bold">{n}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-dark-foreground/50">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-5">
                <p className="text-[11px] uppercase tracking-widest text-dark-foreground/45">
                  Core focus
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Laravel", ".NET", "React", "PostgreSQL", "REST API", "DevOps"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded border border-white/10 px-2 py-1 text-[11px] text-dark-foreground/65"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="highlights" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Track record
            </p>
            <h2 id="highlights" className="mt-3 font-display text-3xl font-bold">
              The short version.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A mix of delivery depth, production responsibility, and range
              across web, mobile, backend, and infrastructure.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/50 text-ink">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="skills" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Toolkit
            </p>
            <h2 id="skills" className="mt-3 font-display text-3xl font-bold">
              Technical skills.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Chosen for the problem, not for the trend. These are the stacks I
            ship and support in production.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(profile.skills).map(([group, items]) => {
            const Icon = skillIcons[group] ?? Sparkles;
            return (
              <div key={group} className="card card-hover p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-sm font-semibold">{group}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="principles" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Principles
            </p>
            <h2 id="principles" className="mt-3 font-display text-3xl font-bold">
              How I work.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="card p-5">
                <span className="font-display text-xs font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-3 font-display text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="achievements" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Achievements</p>
              <h2 id="achievements" className="mt-2 font-display text-2xl font-bold">
                Delivery, verified in production.
              </h2>
            </div>
            <Link to="/experience" className="text-sm font-semibold text-primary">
              Experience timeline →
            </Link>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {profile.achievements.map((a, i) => (
              <li key={a} className="flex items-start gap-4 border-t border-border pt-4">
                <span className="font-display text-lg font-bold text-primary/40">0{i + 1}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
