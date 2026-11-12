import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Database,
  Layers,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import { profile } from "@/data/profile";
import { clients, featuredProjects, projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilham Wara Nugroho — Senior Full Stack Software Engineer" },
      {
        name: "description",
        content:
          "Senior full stack engineer with 9+ years delivering government and enterprise systems for BPOM, DLH DKI Jakarta, SMA Angkasa 2, and Perumda Tirta Jabar. Laravel, .NET, React, Go, PostgreSQL.",
      },
      { property: "og:title", content: "Ilham Wara Nugroho — Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Production systems for government and enterprise: Laravel, .NET, React, Next.js, PostgreSQL, and Linux infrastructure.",
      },
      { property: "og:url", content: "https://ilhamwara.web.id/" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/sidia-jakarta-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          url: "https://ilhamwara.web.id",
          address: { "@type": "PostalAddress", addressLocality: "Bekasi", addressCountry: "ID" },
          sameAs: [profile.linkedin, profile.github],
          knowsAbout: [
            "Laravel",
            ".NET",
            "React",
            "Next.js",
            "PostgreSQL",
            "REST API",
            "React Native",
            "Docker",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  {
    icon: Server,
    title: "Backend architecture",
    body: "Laravel and .NET services designed around clear domain boundaries, secure APIs, and data models that stay maintainable.",
    items: ["Laravel", ".NET", "REST API", "Microservices"],
  },
  {
    icon: Braces,
    title: "Product frontends",
    body: "React and Next.js interfaces that turn dense operational data into dashboards people can actually use.",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Smartphone,
    title: "Mobile delivery",
    body: "React Native and Flutter apps connected to the same APIs, shipped to production and maintained.",
    items: ["React Native", "Flutter", "Android", "API"],
  },
  {
    icon: Database,
    title: "Data & infrastructure",
    body: "PostgreSQL performance work, Linux servers, Nginx, Docker, and CI/CD that keep services online.",
    items: ["PostgreSQL", "Linux", "Nginx", "Docker"],
  },
];

const process = [
  {
    n: "01",
    title: "Understand the operation",
    body: "Map the real workflow and constraints before choosing a stack or writing a schema.",
  },
  {
    n: "02",
    title: "Design the system",
    body: "Data model, API contracts, roles, and failure modes — decided up front and documented.",
  },
  {
    n: "03",
    title: "Build in vertical slices",
    body: "Every feature ships end to end: database, backend, interface, and verification.",
  },
  {
    n: "04",
    title: "Ship and stay responsible",
    body: "Deploy, monitor, optimise queries, and keep production stable after launch.",
  },
];

function HomePage() {
  const latest = projects[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Ilham Wara Nugroho — Full Stack Engineering",
            description:
              "Full stack engineering for government and enterprise web and mobile systems.",
            areaServed: "Indonesia",
            email: profile.email,
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 line-grid [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="rise">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                <span className="live-dot" />
                Available for select engagements
              </span>
              <span className="text-xs text-muted-foreground">
                {profile.location}
              </span>
            </p>

            <h1 className="mt-7 font-display text-[2.65rem] font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.4rem]">
              Software that
              <br />
              public services
              <br />
              <span className="relative inline-block">
                rely on.
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-lime/80 sm:h-4" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm <strong className="font-semibold text-foreground">{profile.name}</strong>,
              a senior full stack engineer with {""}
              <strong className="font-semibold text-foreground">9+ years</strong> building
              enterprise-grade web and mobile systems for Indonesian government
              agencies and private organisations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn btn-primary group">
                Explore my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["9+", "Years shipping"],
                ["20+", "Production systems"],
                ["6+", "Government clients"],
              ].map(([n, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {n}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-surface p-2.5 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.5)]">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-ink">
                <img
                  src={latest.cover}
                  alt={`${latest.name} application screenshot`}
                  width={1200}
                  height={760}
                  className="w-full"
                  fetchPriority="high"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Currently building
                  </p>
                  <p className="truncate font-display text-sm font-semibold">
                    {latest.name} · {latest.client.split(" — ")[0]}
                  </p>
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: latest.slug }}
                  aria-label={`View ${latest.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-background"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 hidden items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-3 shadow-lg sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime text-ink">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <div>
                <p className="text-[11px] font-bold">Production ready</p>
                <p className="text-[10px] text-muted-foreground">Shipped, deployed, supported</p>
              </div>
            </div>

            <div className="absolute -right-2 top-8 hidden rotate-2 items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-lg lg:flex">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="font-mono text-[11px] font-medium">laravel · .net · go · react</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section aria-label="Clients" className="border-b border-border bg-surface/60 py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 sm:px-8">
          <span className="hidden shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Trusted by
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="marquee-track items-center gap-10">
              {[...clients, ...clients].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="whitespace-nowrap font-display text-sm font-semibold text-muted-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section aria-labelledby="work" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Selected work
            </p>
            <h2 id="work" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Systems in production.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {projects.length} applications across environmental monitoring,
              education, public health, and commerce — each with its own
              constraints and users.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            All projects
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface transition-colors group-hover:border-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* AI & accountability */}
      <section
        aria-labelledby="accountability"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="grid gap-8 border-y border-border py-10 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16 lg:py-14">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> On AI &amp; accountability
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              A note for anyone comparing AI-generated code with a system that
              has to survive production.
            </p>
          </div>

          <div>
            <span aria-hidden="true" className="block font-display text-5xl leading-none text-primary/25">
              &ldquo;
            </span>
            <blockquote id="accountability" className="mt-2">
              <p className="font-display text-[1.55rem] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem]">
                AI bisa membuat kode. Yang tidak bisa AI lakukan adalah{" "}
                <span className="relative inline-block">
                  bertanggung jawab
                  <span className="absolute inset-x-0 bottom-0.5 -z-10 h-2.5 bg-lime/80 sm:h-3.5" />
                </span>{" "}
                kalau sistem down, data bocor, atau laporan tidak diterima
                instansi.
              </p>
            </blockquote>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-foreground">
              I sell systems that are secure, integrated, and accountable — not
              just code.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn btn-dark">
                Talk about your system <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                See the proof <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-dark px-6 py-14 text-dark-foreground sm:px-10 md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.16]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-lime/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                <Sparkles className="h-3.5 w-3.5" /> What I do
              </p>
              <h2 id="capabilities" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                One engineer,
                <br />
                the whole stack.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-dark-foreground/65">
                From schema design to the last deploy, I stay close to the
                system. That's how the API, the interface, and the database
                stay consistent.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-lime"
                >
                  Explore services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dark-foreground/70 transition-colors hover:text-dark-foreground"
                >
                  View products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dark-foreground/60 transition-colors hover:text-dark-foreground"
                >
                  How I work
                </Link>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="bg-dark p-6 transition-colors hover:bg-white/[0.04]">
                  <c.icon className="h-5 w-5 text-lime" />
                  <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-dark-foreground/60">
                    {c.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.items.map((i) => (
                      <span
                        key={i}
                        className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-dark-foreground/55"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> How it runs
            </p>
            <h2 id="process" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Boring process.
              <br />
              Reliable outcome.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              I work best with teams that care about the operational detail.
              Clear stages, no surprise handoffs, and production treated as part
              of the job.
            </p>
            <Link to="/experience" className="btn btn-outline mt-6">
              See the track record <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {process.map((s) => (
              <li key={s.n} className="card p-6">
                <span className="font-display text-xs font-bold text-primary">{s.n}</span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Current role + stack */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card flex flex-col justify-between gap-8 p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Currently</p>
                <h2 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                  Full Stack Software Engineer
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  Dinas Lingkungan Hidup — Pemprov DKI Jakarta
                </p>
              </div>
              <span className="hidden rounded-lg bg-lime px-2.5 py-1 text-[11px] font-bold text-ink sm:block">
                2025 — Present
              </span>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Building enterprise Laravel and .NET systems, REST APIs, and
              production Linux infrastructure for the Jakarta provincial
              government's environmental programs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/experience" className="btn btn-dark">
                Full experience <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Layers className="h-4 w-4 text-primary" />
                {profile.experience.length} roles · {profile.achievements.length} delivery highlights
              </div>
            </div>
          </div>

          <div className="card p-7 sm:p-9">
            <p className="eyebrow">Core stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Golang",
                "Laravel",
                ".NET",
                "React",
                "Next.js",
                "Vue",
                "React Native",
                "Flutter",
                "PostgreSQL",
                "Docker",
                "REST API",
                "TypeScript",
                "Linux",
                "CI/CD",
              ].map((t) => (
                <span key={t} className="tag text-xs">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              Also comfortable with MySQL, SQL Server, Yii2, CodeIgniter,
              Firebase, Supabase, WordPress, Nginx, Socket.IO, and payment
              gateway integrations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-10 md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[32px] border-white/10" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                Let's talk
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                Got a system that needs to ship?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                I take on a small number of engagements at a time. Tell me what
                you're building, the constraints, and what "done" looks like.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn bg-white text-ink hover:bg-white/90"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="btn border border-white/30 text-white hover:bg-white/10"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
