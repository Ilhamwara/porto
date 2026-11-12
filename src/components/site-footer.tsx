import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { to: "/projects", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/ratecard", label: "Rate card" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-ink font-display text-[13px] font-bold text-background">
                IW
              </span>
              <span className="font-display text-sm font-semibold">Ilham Wara Nugroho</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Senior full stack engineer building reliable web, mobile, and
              backend systems for government and enterprise teams.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <span className="live-dot" />
                Available for select work
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow">Sitemap</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted in Bekasi, Indonesia.
          </p>
          <p>Live screenshots and illustrative UI previews are labelled.</p>
        </div>
      </div>
    </footer>
  );
}
