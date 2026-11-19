import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Users } from "lucide-react";
import { track } from "@/lib/analytics";

interface ProofItem {
  text: string;
  meta: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    text: "A nonprofit just uncovered $47K in recoverable operational waste.",
    meta: "Operations · 2 min ago",
  },
  {
    text: "A law firm consolidated 6 disconnected tools into one CRM.",
    meta: "Technology · 5 min ago",
  },
  {
    text: "An executive team prepared for a high-stakes board presentation.",
    meta: "Communications · 11 min ago",
  },
  {
    text: "A mission-driven org aligned leadership around 3 clear priorities.",
    meta: "Leadership · 18 min ago",
  },
  {
    text: "An organization started a free system health assessment.",
    meta: "Assessment · 24 min ago",
  },
  {
    text: "A growing nonprofit booked a fractional COO discovery call.",
    meta: "Operations · 31 min ago",
  },
  {
    text: "A law firm started a technology systems assessment.",
    meta: "Technology · 42 min ago",
  },
];

const SESSION_KEY = "ymbs_social_proof_shown";

export default function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
    track.socialProofViewed();
    setTimeout(() => setVisible(false), 6000);
  }, []);

  useEffect(() => {
    // Only show once per session, and only after a delay
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (alreadyShown) return;

    const startTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      show();
      // Rotate through a few items
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % PROOF_ITEMS.length);
        show();
      }, 14000);
      // Stop rotating after showing ~3 items
      setTimeout(() => clearInterval(interval), 14000 * 3);
    }, 8000);

    return () => {
      clearTimeout(startTimer);
    };
  }, [show]);

  const item = PROOF_ITEMS[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 30, x: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 md:bottom-6 left-4 z-30 max-w-[300px] hidden sm:block"
          role="status"
          aria-live="polite"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#1A2433] leading-snug">
                {item.text}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Users className="w-3 h-3 text-zinc-400 shrink-0" />
                <p className="text-xs text-zinc-400">{item.meta}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
