import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  CreditCard,
  Gauge,
  Handshake,
  Layers,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  addOns,
  buildPackages,
  carePackages,
  customEngineering,
  engagementSteps,
  licenseNote,
  rateFaqs,
  terms,
} from "@/data/ratecard";

export const Route = createFileRoute("/ratecard")({
  head: () => ({
    meta: [
      { title: "Rate Card — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "Managed care, storefront builds, add-ons, and terms. Indicative rates for product builds and ongoing support, with enterprise and government work quoted separately.",
      },
      { property: "og:title", content: "Rate Card — Ilham Wara Nugroho" },
      {
        property: "og:description",
        content:
          "Clear scope. Clear price. Managed care and product builds, with custom enterprise and government quotes.",
      },
      { property: "og:url", content: "https://ilhamwara.web.id/ratecard" },
      {
        property: "og:image",
        content: "https://ilhamwara.web.id/projects/sidia-jakarta-live.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilhamwara.web.id/ratecard" }],
  }),
  component: RateCardPage,
});

const careIcons = [Server, Gauge, Handshake, Building2];
const buildIcons = [ShoppingBag, Rocket, Wrench];

function RateCardPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 line-grid [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rise">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> Engagement &amp; rate card
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Clear scope.
              <br />
              Clear price.
              <br />
              <span className="relative inline-block">
                No surprises.
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-lime/80 sm:h-4" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Product builds and managed care for storefronts, portals, and
              operational systems. All prices are annual or one-time as marked,
              in IDR, excluding VAT.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Enterprise, government, mobile, and complex integrations are
              quoted separately — those projects carry different risk,
              procurement, and support requirements.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Discuss your scope <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                See the work
              </Link>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Indicative rates in IDR · Valid 2026 · Excludes VAT/PPN · Final
              quote after discovery.
            </p>
          </div>

          <aside className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-dark text-dark-foreground shadow-[0_30px_80px_-45px_rgba(15,23,42,0.6)]">
              <div className="relative p-7 sm:p-8">
                <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
                <p className="relative flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                  <Sparkles className="h-3.5 w-3.5" /> At a glance
                </p>
                <div className="relative mt-6 space-y-4">
                  {[
                    ["Managed care", "from Rp 7.2jt / year", "hosting + support"],
                    ["Product build", "from Rp 15jt", "one-time"],
                    ["License only", "Rp 6jt / year", "client hosts"],
                    ["Enterprise / government", "custom quote", "by scope"],
                  ].map(([label, price, note]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-dark-foreground">{label}</p>
                        <p className="mt-0.5 text-[11px] text-dark-foreground/45">{note}</p>
                      </div>
                      <p className="shrink-0 text-right font-display text-sm font-semibold text-lime">
                        {price}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="btn mt-6 w-full bg-lime text-ink hover:bg-lime/90"
                >
                  Book a discovery call <ArrowUpRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-center text-[10px] text-dark-foreground/40">
                  No obligation. A short call is enough to know if we fit.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Managed care */}
      <section aria-labelledby="care" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-6 bg-primary" /> A. Managed care
          </p>
          <h2 id="care" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Hosting, maintenance, support.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Annual plans for systems that are already live. Pick the support
            level that matches your traffic and how often the product changes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {carePackages.map((pkg, i) => {
            const Icon = careIcons[i] ?? Server;
            return (
              <article
                key={pkg.name}
                className={
                  pkg.recommended
                    ? "relative flex flex-col overflow-hidden rounded-xl border border-primary/30 bg-primary/[0.04] p-6 sm:p-7"
                    : "card card-hover flex flex-col p-6 sm:p-7"
                }
              >
                {pkg.recommended && (
                  <span className="absolute right-4 top-4 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                    Recommended
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{pkg.name}</h3>
                    <p className="text-xs text-muted-foreground">{pkg.bestFor}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-end gap-2">
                  <span className="font-display text-3xl font-bold tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="pb-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    per year
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{pkg.monthly}</p>

                <ul className="mt-5 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link to="/contact" className="btn btn-outline w-full">
                    Choose {pkg.name} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">
                License only — {licenseNote.price}
              </p>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                {licenseNote.description}
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="shrink-0 text-sm font-semibold text-primary"
          >
            Ask about licensing →
          </Link>
        </div>
      </section>

      {/* Product builds */}
      <section aria-labelledby="builds" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-y border-border py-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-6 bg-primary" /> B. Product builds
              </p>
              <h2 id="builds" className="mt-3 font-display text-3xl font-bold">
                One-time project pricing.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fixed-scope packages for storefronts and product platforms. The
                final quote depends on features, integrations, and how much
                content needs to be migrated.
              </p>
            </div>
            <Link to="/contact" className="btn btn-dark">
              Request a build quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {buildPackages.map((pkg, i) => {
              const Icon = buildIcons[i] ?? Rocket;
              return (
                <article key={pkg.name} className="card card-hover flex flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{pkg.name}</h3>
                  </div>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="font-display text-3xl font-bold tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    one-time
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    {pkg.scope}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link to="/contact" className="btn btn-outline w-full">
                      Discuss {pkg.name} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            Mobile apps, enterprise systems, government procurement, ERP
            integrations, and complex data migrations are quoted separately.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section aria-labelledby="addons" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> C. Add-ons
            </p>
            <h2 id="addons" className="mt-3 font-display text-3xl font-bold">
              Priced separately. Approved first.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Anything outside the package is quoted and approved in writing
              before work starts. No silent additions, no unlimited support.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-muted p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Work outside the package is billed at the rate below or quoted
                per scope when the effort is not predictable.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            {addOns.map(([name, price], i) => (
              <div
                key={name}
                className={`flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <span className="text-sm">{name}</span>
                <span className="shrink-0 font-mono text-xs font-semibold text-muted-foreground">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section aria-labelledby="terms" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="h-px w-6 bg-primary" /> D. Terms
            </p>
            <h2 id="terms" className="mt-2 font-display text-2xl font-bold">
              The fine print, in plain language.
            </h2>
          </div>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {terms.map((term) => (
              <li key={term} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{term}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-4 text-[11px] leading-relaxed text-muted-foreground">
            This rate card is not a final offer. Final pricing is issued after
            scope, integrations, and support level are confirmed. Valid 2026.
          </p>
        </div>
      </section>

      {/* Custom engineering */}
      <section aria-labelledby="custom" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-dark px-6 py-12 text-dark-foreground sm:px-10 md:px-14 md:py-14">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.15]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                <Layers className="h-3.5 w-3.5" /> Custom engineering
              </p>
              <h2 id="custom" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Bigger systems.
                <br />
                Separate quote.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-dark-foreground/65">
                The packages above are productized. Enterprise, government,
                mobile, and integration-heavy work is scoped and priced
                individually because the risk is different.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn bg-lime text-ink hover:bg-lime/90">
                  Request a custom quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="btn border border-white/20 text-white hover:bg-white/10"
                >
                  See the work
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {customEngineering.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-white/10 p-4 text-[13px] leading-relaxed text-dark-foreground/75"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="engagement" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">How an engagement starts</p>
              <h2 id="engagement" className="mt-2 font-display text-2xl font-bold">
                From context to a written quote.
              </h2>
            </div>
            <Link to="/contact" className="text-sm font-semibold text-primary">
              Start the conversation →
            </Link>
          </div>
          <ol className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step) => (
              <li key={step.n} className="border-t border-border pt-4">
                <span className="font-display text-xs font-bold text-primary">{step.n}</span>
                <h3 className="mt-2 font-display text-sm font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
        <p className="eyebrow">
          <span className="h-px w-6 bg-primary" /> Questions
        </p>
        <h2 id="faq" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Before you ask for a quote.
        </h2>
        <div className="mt-8">
          {rateFaqs.map((faq) => (
            <details key={faq.q} className="group border-b border-border py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold">
                {faq.q}
                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-10 md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                Next step
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
                Send the scope. I'll send a straight answer.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
                You do not need a perfect brief. Tell me the problem, the
                constraints, and the deadline. I will tell you what is realistic
                and what it costs.
              </p>
            </div>
            <Link to="/contact" className="btn shrink-0 bg-white text-ink hover:bg-white/90">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}