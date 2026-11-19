import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Shield } from "lucide-react";
import { track } from "@/lib/analytics";

const STORAGE_KEY = "ymbs_exit_intent_seen";
const COOLDOWN_HOURS = 24;

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    // Respect cooldown so we don't annoy returning visitors
    try {
      const last = localStorage.getItem(STORAGE_KEY);
      if (last) {
        const hoursSince = (Date.now() - parseInt(last, 10)) / 36e5;
        if (hoursSince < COOLDOWN_HOURS) return;
      }
    } catch {
      // localStorage unavailable — proceed
    }

    const isMobile = /Mobile|Android|iPhone/i.test(navigator.userAgent);

    const trigger = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      setOpen(true);
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }
      track.exitIntent("exit_intent_shown");
    };

    const handleMouseOut = (e: MouseEvent) => {
      // Only trigger when cursor leaves the top of the viewport (toward tabs/close)
      if (e.clientY <= 0) {
        trigger();
      }
    };

    // Mobile fallback: trigger after reaching ~70% of page
    const handleScroll = () => {
      if (shownRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = scrollTop / docHeight;
      if (isMobile && pct > 0.7) {
        trigger();
      }
    };

    if (!isMobile) {
      document.addEventListener("mouseout", handleMouseOut);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const close = () => {
    setOpen(false);
    track.exitIntent("exit_intent_dismissed");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors z-10 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-[#0B1D33] px-8 py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h2
                id="exit-intent-title"
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Before you go—find what's holding you back.
              </h2>
              <p className="text-white/80 leading-relaxed max-w-md mx-auto">
                Start with a free 30-minute fit conversation. We'll talk through
                what's changing and what the most practical next step may be.
              </p>
            </div>

            <div className="px-8 py-8">
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  30 minutes. No obligation. No hard pitch.
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <Shield className="w-4 h-4 text-primary shrink-0" />
                  Veteran-owned. Senior fractional leadership.
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => {
                  track.discoveryCallClick("exit_intent_modal");
                  track.exitIntent("exit_intent_click");
                  close();
                }}
                className="block w-full text-center bg-primary text-black font-bold text-base px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.02] min-h-[48px]"
              >
                Get Clarity
              </Link>
              <p className="text-center text-xs text-zinc-400 mt-4">
                Prefer to start on your own?{" "}
                <Link
                  to="/assessments/system-health"
                  onClick={close}
                  className="text-primary font-medium hover:underline"
                >
                  Take the free system health quiz
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
