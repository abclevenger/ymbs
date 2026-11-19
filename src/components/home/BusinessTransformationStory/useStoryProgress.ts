import { useCallback, useEffect, useRef, useState } from "react";
import { stages } from "./storyStages";

const CHAPTER_TARGET = [0.05, 0.34, 0.58, 0.95];

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/**
 * Shared scroll/reduced-motion/viewport state for the story section:
 * normalized scroll progress, current stage index, chapter jump, analytics.
 */
export function useStoryProgress(
  sectionRef: React.RefObject<HTMLElement | null>,
) {
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [small, setSmall] = useState(false);
  const rafRef = useRef<number>(0);
  const reachedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setSmall(mq.matches);
    const handler = () => setSmall(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      rafRef.current = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      setProgress(clamp(-rect.top / scrollable));
    };
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduced, sectionRef]);

  const p = reduced ? 1 : progress;
  const found = stages.findIndex((s) => p >= s.start && p < s.end);
  const currentStage = found === -1 ? stages.length - 1 : found;

  // Analytics: fire once per stage per page view
  useEffect(() => {
    if (reduced || progress <= 0) return;
    const id = stages[currentStage].id;
    if (!reachedRef.current.has(id)) {
      reachedRef.current.add(id);
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", "story_stage_reached", { stage_id: id });
    }
  }, [currentStage, progress, reduced]);

  const goToChapter = useCallback(
    (i: number) => {
      const section = sectionRef.current;
      if (!section) return;
      const top = section.getBoundingClientRect().top + window.scrollY;
      const scrollable = section.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: top + CHAPTER_TARGET[i] * scrollable,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [reduced, sectionRef],
  );

  return { progress, p, reduced, small, currentStage, goToChapter };
}
