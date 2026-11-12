import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getProjectBySlug } from "@/data/projects";
import { getServiceBySlug, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Layanan tidak ditemukan — Ilham Wara" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const url = `https://ilhamwara.web.id/services/${params.slug}`;
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:url", content: url },
        {
          property: "og:image",
          content: "https://ilhamwara.web.id/projects/sipt-live.jpg",
        },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.h1,
            description: service.metaDescription,
            serviceType: service.keyword,
            areaServed: "Indonesia",
            provider: {
              "@type": "Person",
              name: "Ilham Wara Nugroho",
              url: "https://ilhamwara.web.id",
            },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ilhamwara.web.id/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Layanan",
                item: "https://ilhamwara.web.id/services",
              },
              { "@type": "ListItem", position: 3, name: service.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const relatedProjects = service.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <article lang="id">
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Semua layanan
        </Link>

        <header className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                Layanan
              </span>
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                {service.keyword}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Diskusikan layanan ini <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/ratecard" className="btn btn-outline">
                Lihat rate card
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Cocok untuk</p>
            <ul className="mt-4 space-y-2.5">
              {service.audience.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {service.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <section aria-labelledby="problems">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Masalah yang biasa muncul
            </p>
            <h2 id="problems" className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Kalau ini terasa familiar, kita perlu bicara.
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {service.problems.map((problem) => (
                <div key={problem} className="card p-4 text-sm leading-relaxed text-muted-foreground">
                  {problem}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="deliverables" className="mt-12">
            <h2 id="deliverables" className="font-display text-2xl font-bold">
              Yang Anda dapatkan
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {relatedProjects.length > 0 && (
            <section aria-labelledby="related-projects" className="mt-12">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="eyebrow">Bukti kerja</p>
                  <h2 id="related-projects" className="mt-2 font-display text-2xl font-bold">
                    Studi kasus terkait
                  </h2>
                </div>
                <Link to="/projects" className="text-sm font-semibold text-primary">
                  Semua project →
                </Link>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedProjects.slice(0, 2).map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="font-display text-2xl font-bold">
              Pertanyaan yang sering muncul
            </h2>
            <div className="mt-4">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-border py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold">
                    {faq.q}
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-dark p-6 text-dark-foreground">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
              <Sparkles className="h-3.5 w-3.5" /> Mulai dari sini
            </p>
            <p className="mt-3 font-display text-lg font-semibold leading-snug">
              Kirim konteks singkat. Saya balas dengan scope dan langkah yang
              realistis.
            </p>
            <Link to="/contact" className="btn mt-4 w-full bg-lime text-ink hover:bg-lime/90">
              Hubungi saya <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Layanan lain</p>
            <ul className="mt-4 space-y-1">
              {relatedServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-10 md:px-14">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                Langkah berikutnya
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold">
                Ceritakan masalahnya, bukan hanya fiturnya.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                Saya bantu tentukan scope, prioritas, dan pendekatan yang paling
                masuk akal untuk kebutuhan Anda.
              </p>
            </div>
            <Link to="/contact" className="btn shrink-0 bg-white text-ink hover:bg-white/90">
              Mulai diskusi <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <p className="font-display text-5xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">Layanan tidak ditemukan</h1>
      <p className="mt-3 text-muted-foreground">
        Halaman layanan ini tidak ada atau sudah dipindahkan.
      </p>
      <Link to="/services" className="btn btn-primary mt-6">
        Lihat semua layanan
      </Link>
    </div>
  );
}