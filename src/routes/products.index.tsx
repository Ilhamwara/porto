import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Clock,
  Database,
  FileText,
  Folder,
  GraduationCap,
  Plug,
  School,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { productCategories, products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      {
        title: "Products — LMS, HRIS, Absensi, E-Commerce & Sistem Informasi",
      },
      {
        name: "description",
        content:
          "Produk software yang bisa dikustomisasi: LMS, SAP/ERP integration, sistem informasi, mobile apps, HRIS, absensi, e-commerce, e-office, PPID, dan SIM sekolah.",
      },
      { property: "og:title", content: "Products — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content:
          "Productized systems for education, government, enterprise, and commerce.",
      },
      { property: "og:url", content: "https://ilhamwara.web.id/products" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/anxious-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Produk software",
          itemListElement: products.map((product, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: product.name,
            url: `https://ilhamwara.web.id/products/${product.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ProductsIndex,
});

const productIcons = {
  lms: GraduationCap,
  "sap-erp-integration": Plug,
  "sistem-informasi": Database,
  "mobile-apps": Smartphone,
  hris: Users,
  absensi: Clock,
  "e-commerce": ShoppingCart,
  "e-office": Folder,
  ppid: FileText,
  "sim-sekolah": School,
} as const;

function ProductsIndex() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 line-grid [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Products
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Produk software
              <br />
              yang bisa mulai cepat.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Tidak semua harus dibangun dari nol. Produk di bawah adalah fondasi
              yang sudah teruji, lalu disesuaikan dengan proses, data, dan
              kebutuhan tim Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Diskusikan produk <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Lihat layanan custom
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="products" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Product catalogue
            </p>
            <h2 id="products" className="mt-3 font-display text-3xl font-bold">
              Mulai dari yang paling dekat.
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {productCategories.map((category) => (
              <span key={category} className="tag">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon =
              productIcons[product.slug as keyof typeof productIcons] ?? Sparkles;
            return (
              <Link
                key={product.slug}
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="card card-hover flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-md bg-muted px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {product.tagline}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {product.modules.slice(0, 3).map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {module}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="text-xs font-semibold text-foreground">
                    Lihat produk
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-7 sm:p-9">
            <p className="eyebrow">Produk belum ada di daftar?</p>
            <h2 className="mt-3 font-display text-2xl font-bold">
              Masih bisa dibangun dari nol.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Kalau kebutuhan Anda tidak cocok dengan produk di atas, saya
              bangun sistem kustom dengan discovery, arsitektur, dan scope yang
              jelas. Itu domain layanan, bukan produk.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/services" className="btn btn-dark">
                Lihat layanan <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/ratecard" className="btn btn-outline">
                Lihat rate card
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-dark p-7 text-dark-foreground sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
              Semua produk
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-dark-foreground/70">
              {products.map((product) => (
                <li key={product.slug} className="flex items-center justify-between gap-3">
                  <span>{product.name}</span>
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="text-xs font-semibold text-lime"
                  >
                    Detail →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}