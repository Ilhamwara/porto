import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Info,
  Sparkles,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getProjectBySlug } from "@/data/projects";
import { getProductBySlug, products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produk tidak ditemukan — Ilham Wara" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const url = `https://ilhamwara.web.id/products/${params.slug}`;
    const title = `${product.name} — Ilham Wara`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
        { property: "og:url", content: url },
        {
          property: "og:image",
          content: "https://ilhamwara.web.id/projects/anxious-live.jpg",
        },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            category: product.category,
            brand: {
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
            mainEntity: product.faqs.map((faq) => ({
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
                name: "Products",
                item: "https://ilhamwara.web.id/products",
              },
              { "@type": "ListItem", position: 3, name: product.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const relatedProjects = product.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <article lang="id">
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Semua produk
        </Link>

        <header className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                {product.category}
              </span>
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                {product.startingPrice}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-foreground">
              {product.tagline}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Diskusikan produk ini <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/ratecard" className="btn btn-outline">
                Lihat rate card
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Cocok untuk</p>
            <ul className="mt-4 space-y-2.5">
              {product.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                Deployment
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {product.deployment.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {product.stack.map((item) => (
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
          <section aria-labelledby="modules">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Modul utama
            </p>
            <h2 id="modules" className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Yang sudah tersedia.
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.modules.map((module) => (
                <div
                  key={module}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4 text-sm"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">{module}</span>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="notes" className="mt-12">
            <h2 id="notes" className="font-display text-2xl font-bold">
              Catatan implementasi
            </h2>
            <ul className="mt-5 space-y-3">
              {product.notes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 border-b border-border pb-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
            {product.disclaimer && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-muted p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {product.disclaimer}
                </p>
              </div>
            )}
          </section>

          {relatedProjects.length > 0 && (
            <section aria-labelledby="related-projects" className="mt-12">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="eyebrow">Bukti kerja</p>
                  <h2 id="related-projects" className="mt-2 font-display text-2xl font-bold">
                    Sistem terkait
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
              {product.faqs.map((faq) => (
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
              Mau lihat apakah produk ini cocok dengan proses Anda?
            </p>
            <p className="mt-2 text-xs leading-relaxed text-dark-foreground/55">
              Kirim konteks singkat. Saya balas dengan modul, scope, dan
              perkiraan waktu implementasi.
            </p>
            <Link to="/contact" className="btn mt-4 w-full bg-lime text-ink hover:bg-lime/90">
              Hubungi saya <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Produk lain</p>
            <ul className="mt-4 space-y-1">
              {relatedProducts.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/products/$slug"
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
                Mulai dari modul yang paling mendesak.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                Tidak perlu langsung semua. Kita bisa mulai dari satu modul,
                mengukur hasilnya, lalu memperluas.
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

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <p className="font-display text-5xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">Produk tidak ditemukan</h1>
      <p className="mt-3 text-muted-foreground">
        Produk ini tidak ada atau sudah dipindahkan.
      </p>
      <Link to="/products" className="btn btn-primary mt-6">
        Lihat semua produk
      </Link>
    </div>
  );
}