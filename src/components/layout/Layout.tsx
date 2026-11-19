import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentModal from "@/components/ExitIntentModal";
import { useBreadcrumbSchema } from "@/lib/schema";

export default function Layout({ children }: { children: React.ReactNode }) {
  // BreadcrumbList schema is derived globally from the current route. Per-page
  // <title>/description/canonical/OG tags are managed by <SEOHead> on each page.
  useBreadcrumbSchema();
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
      {/* CRO Layer */}
      <StickyCTA />
      <ExitIntentModal />
    </div>
  );
}
