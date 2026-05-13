import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      { name: "description", content: "Axentra Nexus, a unit of Dharitha Nexus LLP, is a premium BPO, lending and business solutions partner — scaling enterprises with precision, speed and intelligence." },
      { name: "author", content: "Dharitha Nexus LLP" },
      { name: "publisher", content: "Dharitha Nexus LLP" },
      { name: "copyright", content: "© Dharitha Nexus LLP. Axentra Nexus is a brand owned by Dharitha Nexus LLP." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Axentra Nexus — a unit of Dharitha Nexus LLP" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      { name: "twitter:title", content: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      { property: "og:description", content: "BPO | Lending | Customer Experience | Growth Solutions for the modern enterprise. A unit of Dharitha Nexus LLP." },
      { name: "twitter:description", content: "BPO | Lending | Customer Experience | Growth Solutions. A unit of Dharitha Nexus LLP." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dharitha Nexus LLP",
    alternateName: "Axentra Nexus",
    legalName: "Dharitha Nexus LLP",
    brand: {
      "@type": "Brand",
      name: "Axentra Nexus",
    },
    description:
      "Axentra Nexus is a brand owned and operated by Dharitha Nexus LLP, providing premium BPO, lending and business solutions.",
    email: "business@axentra.co.in",
    telephone: "+91-9113513387",
  };
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
