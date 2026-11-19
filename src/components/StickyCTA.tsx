import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/analytics";

const EXEMPT_PATHS = [
  "/contact",
  "/support",
  "/privacy",
  "/terms",
  "/policy",
  "/accessibility",
  "/a2p",
];

/**
 * Mobile-only sticky "Get Clarity" mini-bar.
 * Appears after the user scrolls past the hero (approx. 80vh) on mobile
 * widths only. Keeps the primary CTA always reachable without cluttering
 * the desktop experience.
 */
export default function StickyCTA() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport width — only show on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const isExempt = EXEMPT_PATHS.some(
      (p) => location.pathname === p || location.pathname.startsWith(p),
    );
    if (isExempt || !isMobile) {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      const scrolled = window.scrollY;
      // Show after scrolling past the hero (~80% of viewport height)
      const heroThreshold = window.innerHeight * 0.8;
      const shouldShow = scrolled > heroThreshold;
      setVisible(shouldShow);
      if (shouldShow) track.stickyCtaViewed();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, isMobile]);

  // Reset on route change
  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  // Add bottom padding to main content so the bar never covers content
  useEffect(() => {
    const el = document.getElementById("main-content");
    if (!el) return;
    if (visible) {
      el.classList.add("pb-20", "md:pb-0");
    } else {
      el.classList.remove("pb-20", "md:pb-0");
    }
    return () => el.classList.remove("pb-20", "md:pb-0");
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && isMobile && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          role="region"
          aria-label="Get clarity"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="bg-[#0B1D33]/95 backdrop-blur-md border-t border-primary/20 px-4 py-3 flex items-center gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
            <Link
              to="/contact"
              onClick={() => track.discoveryCallClick("sticky_mobile")}
              className="flex-1 flex items-center justify-center bg-primary text-black font-bold text-sm px-5 py-3 rounded-full min-h-[48px] active:scale-95 transition-transform"
            >
              Get Clarity
            </Link>
            <a
              href="tel:+14077837496"
              onClick={() => track.phoneClick("sticky_mobile")}
              aria-label="Call YMBS"
              className="flex items-center justify-center bg-white/10 border border-white/15 text-white px-4 py-3 rounded-full min-h-[48px] min-w-[48px] active:scale-95 transition-transform"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
