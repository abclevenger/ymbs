import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * The blog uses the same branded header and footer as every YMBS page.
 * SiteLink ensures navigation from blog.ymbs.pro points back to ymbs.pro.
 * Article content and SEO metadata remain the responsibility of each page.
 */
export function isBlogHost(): boolean {
  return (
    typeof window !== "undefined" &&
    window.location.hostname === "blog.ymbs.pro"
  );
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
