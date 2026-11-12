import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Check,
  Code2,
  Database,
  Layers,
  Plug,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "Layanan — Jasa Pembuatan Aplikasi Web, Sistem Informasi & Laravel",
      },
      {
        name: "description",
        content:
          "Layanan pengembangan software: jasa pembuatan aplikasi web, website sekolah, sistem informasi, maintenance website, audit sistem informasi, Laravel, dan integrasi API.",
      },
      { property: "og:title", content: "Layanan — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content:
          "Jasa pembuatan aplikasi web, sistem informasi, website sekolah, maintenance, audit, Laravel, dan integrasi API.",
      },
      { property: "og:url", content: "https://ilhamwara.web.id/services" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/sipt-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Layanan pengembangan software",
          itemListElement: services.map((service, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: service.name,
            url: `https://ilhamwara.web.id/services/${service.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

const serviceIcons = {
  "jasa-pembuatan-aplikasi-web": Layers,
  "jasa-pembuatan-website-sekolah": Building2,
  "jasa-pembuatan-sistem-informasi": Database,
  "jasa-maintenance-website": Wrench,
  "jasa-audit-sistem-informasi": ShieldCheck,
  "jasa-laravel": Code2,
  "jasa-integrasi-api": Plug,
} as const;

function ServicesIndex() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 line-grid [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Layanan
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Jasa pembuatan software
              <br />
              yang bisa dipertanggungjawabkan.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Dari aplikasi web dan sistem informasi sampai website sekolah,
              maintenance, audit, Laravel, dan integrasi API. Setiap layanan
              punya scope dan deliverable yang jelas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Diskusikan kebutuhan <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/ratecard" className="btn btn-outline">
                Lihat rate card
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Area kerja
            </p>
            <h2 id="services" className="mt-3 font-display text-3xl font-bold">
              Pilih yang paling dekat.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Tidak yakin harus mulai dari mana? Kirim konteksnya — saya bantu
            tentukan layanan dan scope yang masuk akal.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon =
              serviceIcons[service.slug as keyof typeof serviceIcons] ?? Sparkles;
            return (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="card card-hover flex h-full flex-col p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                  {service.keyword}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {service.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {service.intro}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="text-xs font-semibold text-foreground">
                    Lihat detail
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-surface p-7 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Produk siap dikustomisasi</p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Butuh fondasi yang lebih siap pakai?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              LMS, HRIS, absensi, e-commerce, PPID, dan SIM sekolah bisa dimulai
              dari modul inti lalu disesuaikan.
            </p>
          </div>
          <Link to="/products" className="btn btn-dark shrink-0">
            Lihat products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-7 sm:p-9">
            <p className="eyebrow">Kenapa saya</p>
            <h2 className="mt-3 font-display text-2xl font-bold">
              Bukan hanya menulis kode.
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "9+ tahun pengalaman production",
                "Terbiasa dengan instansi dan enterprise",
                "Memahami database, API, dan deployment",
                "Dokumentasi dan handover yang rapi",
                "Bisa mengambil alih sistem yang sudah ada",
                "Tetap bertanggung jawab setelah launch",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-dark p-7 text-dark-foreground sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
              Butuh yang lebih spesifik?
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold">
              Enterprise, government, atau mobile.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-dark-foreground/60">
              Proyek dengan procurement, integrasi kompleks, atau data
              sensitivity tinggi diskusikan terpisah.
            </p>
            <Link to="/contact" className="btn mt-5 w-full bg-lime text-ink hover:bg-lime/90">
              Minta penawaran <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}