import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { blogCategories } from "@/lib/blogPosts";

const BLOG_HOST = "blog.ymbs.pro";

export function isBlogHost(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hostname === BLOG_HOST;
}

function BlogHeader() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-white/10 shadow-lg py-1"
          : "bg-brand-dark border-transparent py-2",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a834be399074f5ef633b4a6.svg"
            alt="YMBS Logo"
            loading="eager"
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-12" : "h-16",
            )}
          />
          <span
            className="text-white font-bold text-lg hidden sm:block"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Blog
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "text-white/80 hover:text-primary transition-colors font-medium",
              location.pathname === "/" && "text-primary",
            )}
          >
            All Articles
          </Link>
          {blogCategories.slice(0, 4).map((cat) => (
            <a
              key={cat}
              href={`https://ymbs.pro/insights`}
              className="text-white/60 hover:text-primary transition-colors text-sm"
            >
              {cat}
            </a>
          ))}
          <a href="https://ymbs.pro/contact">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-5 btn-glow transition-all">
              Get Clarity
            </Button>
          </a>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-brand-dark text-white border-white/10 overflow-y-auto"
          >
            <SheetTitle className="sr-only">Blog Navigation</SheetTitle>
            <div className="flex flex-col space-y-5 mt-10">
              <SheetClose asChild>
                <Link
                  to="/"
                  className={cn(
                    "text-lg font-medium hover:text-primary transition-colors",
                    location.pathname === "/" && "text-primary",
                  )}
                >
                  All Articles
                </Link>
              </SheetClose>
              <div className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2">
                Categories
              </div>
              {blogCategories.map((cat) => (
                <a
                  key={cat}
                  href="https://ymbs.pro/insights"
                  className="pl-4 text-base text-white/80 hover:text-primary transition-colors"
                >
                  {cat}
                </a>
              ))}
              <a href="https://ymbs.pro/contact" className="mt-4">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold w-full rounded-full btn-glow">
                  Get Clarity
                </Button>
              </a>
              <a
                href="https://ymbs.pro"
                className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 pt-4 border-t border-white/10"
              >
                Back to YMBS <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function BlogFooter() {
  return (
    <footer className="bg-[#0B1D33] pt-16 pb-8 border-t border-[#D4A017]/20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 flex flex-col space-y-6">
            <img
              src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a834be399074f5ef633b4a6.svg"
              alt="YMBS Logo"
              loading="lazy"
              className="h-24 w-auto object-contain"
            />
            <p className="text-sm text-white/60 text-balance max-w-md">
              The YMBS Blog — practical insights on operations, technology,
              communications, leadership, and organizational growth for leaders
              who need clear next steps, not consulting jargon.
            </p>
            <a
              href="https://ymbs.pro"
              className="text-primary font-medium hover:text-white transition-colors flex items-center gap-2"
            >
              Visit YMBS <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Explore YMBS</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="https://ymbs.pro/services/operations">Operations</a>
              </li>
              <li>
                <a href="https://ymbs.pro/services/technology">Technology</a>
              </li>
              <li>
                <a href="https://ymbs.pro/services/communications">
                  Communications
                </a>
              </li>
              <li>
                <a href="https://ymbs.pro/services/leadership">Leadership</a>
              </li>
              <li>
                <a href="https://ymbs.pro/contact">Get Clarity</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 Yellow Mountain Business Solutions.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <a href="https://ymbs.pro/policy" className="hover:text-primary">
              Privacy
            </a>
            <a href="https://ymbs.pro/terms" className="hover:text-primary">
              Terms
            </a>
            <a
              href="https://ymbs.pro/accessibility"
              className="hover:text-primary"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Per-page <title>/description/canonical/OG tags are managed by <SEOHead> on
  // each blog page. The canonical always points to the ymbs.pro/insights
  // version (never the subdomain URL) to prevent duplicate content.
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to content
      </a>
      <BlogHeader />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <BlogFooter />
    </div>
  );
}
