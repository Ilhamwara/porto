import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "Get in touch with Ilham Wara Nugroho — senior full stack engineer based in Bekasi, Indonesia. Available by email and LinkedIn.",
      },
      { property: "og:title", content: "Contact — Ilham Wara Nugroho" },
      { property: "og:description", content: "Let's build something reliable together." },
      { property: "og:url", content: "https://ilhamwara.web.id/contact" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/anxious-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best for project briefs and detailed questions.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ilham Wara Nugroho",
    href: profile.linkedin,
    note: "For professional enquiries and referrals.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ilhamwara",
    href: profile.github,
    note: "Code, experiments, and open work.",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "ilhamwara.web.id",
    href: profile.portfolio,
    note: "The public home of this work.",
  },
];

const fits = [
  "Enterprise web applications with complex data and roles",
  "Laravel or .NET backend architecture and API design",
  "React / Next.js dashboards for operational teams",
  "React Native or Flutter apps connected to existing APIs",
  "PostgreSQL performance work and production stabilisation",
  "Linux deployment, Nginx, Docker, and CI/CD",
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="eyebrow">
            <span className="h-px w-6 bg-primary" /> Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.03] sm:text-5xl md:text-6xl">
            Let's build
            <br />
            something reliable.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Whether it's an enterprise system, a mobile app, or a technical
            problem that has been sitting unresolved — I'd like to hear about
            it. I read every serious enquiry and reply with a clear next step.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> WIB (UTC+7)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="live-dot" /> Available for select engagements
            </span>
          </div>

          <div className="mt-10">
            <p className="eyebrow">Good fit</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {fits.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-dark text-dark-foreground">
            <div className="relative p-7 sm:p-8">
              <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
              <p className="relative text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                Direct line
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="relative mt-4 block break-all font-display text-2xl font-semibold leading-tight transition-colors hover:text-lime sm:text-3xl"
              >
                {profile.email}
              </a>
              <p className="relative mt-3 text-sm text-dark-foreground/60">
                The fastest way to reach me. Include the context, constraints,
                and timeline if you have them.
              </p>
              <div className="relative mt-6 grid gap-2 border-t border-white/10 pt-5 text-sm">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 text-dark-foreground/70 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-lime" /> LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 text-dark-foreground/70 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-lime" /> GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="border-t border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-dark-foreground/45">
                What happens next
              </p>
              <ol className="mt-4 space-y-3 text-sm text-dark-foreground/70">
                <li className="flex gap-3">
                  <span className="font-display text-xs font-bold text-lime">01</span>
                  I read the brief and reply with questions or a clear next step.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-xs font-bold text-lime">02</span>
                  A short call to align on scope, constraints, and success.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-xs font-bold text-lime">03</span>
                  A written plan with stages, deliverables, and timeline.
                </li>
              </ol>
            </div>
          </div>
        </aside>
      </div>

      <section aria-labelledby="channels" className="mt-14">
        <h2 id="channels" className="font-display text-xl font-bold">
          Other channels
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group card card-hover flex items-start gap-4 p-5"
            >
              <span className="icon-box shrink-0">
                <c.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 truncate text-sm font-semibold">{c.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-7 sm:flex-row sm:items-center">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Prefer to see the work first? The project index has every system
          with the stack, scope, and responsibilities for each.
        </p>
        <Link to="/projects" className="btn btn-dark shrink-0">
          Browse projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
