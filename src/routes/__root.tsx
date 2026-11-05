import { HeadContent, Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { name: "theme-color", content: "#f6f4ef" },
      { property: "og:site_name", content: "Ilham Wara Nugroho" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  }),
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeadContent />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-28 text-center">
      <p className="font-display text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        This page doesn't exist or has been moved. Let's get you back to the work.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
        <Link to="/projects" className="btn btn-outline">
          View projects
        </Link>
      </div>
    </div>
  );
}
