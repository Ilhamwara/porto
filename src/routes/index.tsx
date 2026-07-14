import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { profile } from "@/data/profile";
import { projectGroups } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilham Wara Nugroho — Senior Full Stack Software Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 9+ years building enterprise & government systems for BPOM, BNPB, LPDP, and DKI Jakarta. Laravel · .NET · React · Next.js.",
      },
      { property: "og:title", content: "Ilham Wara Nugroho — Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work & experience delivering enterprise-grade systems for Indonesian government and private organizations.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featuredClients = ["BPOM", "DLH DKI Jakarta", "BNPB", "LPDP", "Kemendikbud", "IPB"];
  const coreTech = ["Laravel", ".NET", "React", "Next.js", "PostgreSQL", "Docker", "REST API", "TypeScript"];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {/* Bento grid */}
      <section aria-label="Overview" className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
        {/* Hero */}
        <BentoCard
          interactive={false}
          className="md:col-span-4 md:row-span-2 flex flex-col justify-between min-h-[420px]"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for select engagements
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              {profile.role} — designing and shipping enterprise-grade web and mobile systems for 9+ years.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              Get in touch
            </Link>
          </div>
        </BentoCard>

        {/* Stat */}
        <BentoCard className="md:col-span-2 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">By the numbers</span>
          <div className="space-y-4 mt-4">
            <Stat n="9+" label="Years of experience" />
            <div className="h-px bg-border" />
            <Stat n="20+" label="Production systems" />
            <div className="h-px bg-border" />
            <Stat n="6+" label="Government clients" />
          </div>
        </BentoCard>

        {/* Location / contact quick */}
        <BentoCard className="md:col-span-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Based in</span>
          <div className="mt-3 flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-lg font-medium">Bekasi, Indonesia</span>
          </div>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> github.com/ilhamwara
            </a>
          </div>
        </BentoCard>

        {/* Tech stack */}
        <BentoCard className="md:col-span-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Core stack</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {coreTech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* Featured clients */}
        <BentoCard className="md:col-span-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by</span>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {featuredClients.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center rounded-md border border-border bg-surface/40 px-3 py-4 text-center text-sm font-medium text-foreground"
              >
                {c}
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Latest role */}
        <BentoCard className="md:col-span-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Currently</span>
          <h2 className="mt-3 font-display text-xl font-semibold text-foreground">
            Full Stack Software Engineer
          </h2>
          <p className="mt-1 text-sm text-primary">Dinas Lingkungan Hidup Pemprov DKI Jakarta</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Building enterprise Laravel & .NET systems, RESTful APIs, and production-grade Linux infrastructure for the Jakarta government.
          </p>
          <Link
            to="/experience"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            Full experience <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </BentoCard>
      </section>

      {/* Featured projects */}
      <section aria-labelledby="featured-projects" className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Selected work</span>
            <h2 id="featured-projects" className="mt-2 font-display text-3xl font-semibold text-foreground">
              Featured projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden text-sm text-primary transition-colors hover:text-foreground sm:inline-flex sm:items-center sm:gap-1.5"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectGroups.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="bento-card bento-card-hover block"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.client}</h3>
                  {p.period && <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-foreground">{n}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
