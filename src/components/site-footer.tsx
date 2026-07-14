import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with care in Bekasi.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
