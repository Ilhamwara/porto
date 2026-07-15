import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe } from "lucide-react";
import { profile } from "../data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ilham Wara Nugroho" },
      {
        name: "description",
        content:
          "Get in touch with Ilham Wara Nugroho — Senior Full Stack Engineer based in Bekasi, Indonesia. Available via email, phone, and LinkedIn.",
      },
      { property: "og:title", content: "Contact — Ilham Wara Nugroho" },
      { property: "og:description", content: "Let's build something together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Globe, label: "LinkedIn", value: "Ilham Wara Nugroho", href: profile.linkedin },
    { icon: Globe, label: "GitHub", value: "ilhamwara", href: profile.github },
    { icon: Globe, label: "Portfolio", value: "ilhamwara.web.id", href: profile.portfolio },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        Let's build something together.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Whether it's an enterprise system, a mobile app, or a technical challenge — I'd love to hear about it.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it) => {
          const Content = (
            <div className="bento-card bento-card-hover flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface/60 text-primary">
                <it.icon className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
                <div className="mt-1 text-foreground">{it.value}</div>
              </div>
            </div>
          );
          return it.href ? (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noreferrer" : undefined}
              className="block"
            >
              {Content}
            </a>
          ) : (
            <div key={it.label}>{Content}</div>
          );
        })}
      </div>
    </div>
  );
}
