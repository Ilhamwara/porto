import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

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
      { property: "og:url", content: "https://ilhamwara.web.id/experience" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/sidia-jakarta-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">
          <span className="h-px w-6 bg-primary" /> Experience
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
          Nine years of shipping
          <br />
          production software.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          From high-performance Laravel APIs to enterprise .NET systems and
          government digital services. Here's where the time went, and what it
          was spent on.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
        <ol className="relative border-l border-border pl-6 sm:pl-8">
          {profile.experience.map((role, i) => (
            <li key={role.company} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary sm:-left-[39px]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
              </span>

              <div className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-xs font-bold text-background sm:flex">
                      {role.company
                        .replace(/^(PT|Dinas)\s/, "")
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                        {role.period}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold">{role.title}</h2>
                      <p className="mt-0.5 text-sm text-muted-foreground">{role.company}</p>
                    </div>
                  </div>
                  {i === 0 && (
                    <span className="flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                      <Sparkles className="h-3 w-3" /> Current
                    </span>
                  )}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {role.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <p className="eyebrow">Career at a glance</p>
            <dl className="mt-5 space-y-4">
              {[
                ["Experience", "9+ years", Briefcase],
                ["Location", profile.location, MapPin],
                ["Focus", "Enterprise & government", Sparkles],
                ["Availability", "Select engagements", CheckCircle2],
              ].map(([label, value, Icon]) => {
                const I = Icon as typeof Briefcase;
                return (
                  <div key={label as string} className="flex items-start gap-3">
                    <I className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        {label as string}
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium">{value as string}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="rounded-2xl bg-dark p-6 text-dark-foreground">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
              Open to
            </p>
            <p className="mt-3 font-display text-lg font-semibold leading-snug">
              Senior full stack roles and focused delivery engagements.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-dark-foreground/60">
              Remote or hybrid, with a preference for teams building systems
              that operate at real scale.
            </p>
            <Link to="/contact" className="btn mt-4 w-full bg-lime text-ink hover:bg-lime/90">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Deeper detail</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The project pages cover systems, responsibilities, and the stack
              used on each engagement.
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Open project index <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
