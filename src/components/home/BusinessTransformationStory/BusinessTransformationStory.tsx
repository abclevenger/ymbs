import { useRef } from "react";
import { stages, disciplines, scaleMarkers } from "./storyStages";
import {
  stageVis,
  NAVY,
  GOLD_RGB,
  AMBER_RGB,
  mix,
  strainAmount,
  scaleAppearAmount,
} from "./diagram";
import Diagram from "./Diagram";
import { useStoryProgress } from "./useStoryProgress";

/**
 * Premium scroll-driven storytelling section with a diagnostic "clarity lens":
 * a fragmented business is scanned, strain builds as it grows, expertise
 * arrives, and one coordinated team forms around the organization.
 *
 * Layout: protected text-safe column (one dominant headline at a time) beside
 * the animated visualization. Visualization lives in Diagram.tsx; scroll and
 * viewport state live in useStoryProgress.ts; geometry lives in diagram.ts.
 */
export default function BusinessTransformationStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, p, reduced, small, currentStage, goToChapter } =
    useStoryProgress(sectionRef);
  return (
    <section
      ref={sectionRef}
      className={`relative bg-dark-section ${reduced ? "" : "h-[200vh] lg:h-[240vh]"}`}
      aria-labelledby="transformation-story-heading"
    >
      {/* Full narrative for screen readers and search engines */}
      <div className="sr-only">
        <h2 id="transformation-story-heading">
          From fragmented to coordinated: how YMBS works
        </h2>
        <ol>
          {stages.map((s) => (
            <li key={`sr-${s.id}`}>
              <p>
                <strong>{s.headline}</strong> {s.body}
              </p>
            </li>
          ))}
        </ol>
        <p>Our four disciplines:</p>
        <ul>
          {disciplines.map((d) => (
            <li key={`sr-${d.id}`}>
              {d.label}: {d.blurb}
            </li>
          ))}
        </ul>
        <p>
          Guided by the SCALE™ framework:{" "}
          {scaleMarkers.map((m) => m.name).join(", ")}.
        </p>
      </div>

      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row"
        style={{ background: NAVY }}
      >
        {/* ---- TEXT-SAFE ZONE — only the dominant stage renders ---- */}
        <div className="relative z-20 w-full flex-1 lg:flex-none lg:w-[40%] flex items-center px-6 md:px-10 lg:pl-[6vw] lg:pr-10 pt-24 lg:pt-20 pb-2 lg:pb-0 pointer-events-none">
          <div className="relative w-full max-w-xl min-h-[200px] lg:min-h-[280px]">
            {(() => {
              let activeIdx = 0;
              let maxVis = -1;
              for (let idx = 0; idx < stages.length; idx++) {
                const vis =
                  reduced && stages[idx].id === "coordinated"
                    ? 1
                    : reduced
                      ? 0
                      : stageVis(
                          p,
                          stages[idx].start,
                          stages[idx].end,
                          idx === 0,
                          idx === stages.length - 1,
                        );
                if (vis > maxVis) {
                  maxVis = vis;
                  activeIdx = idx;
                }
              }
              const stage = stages[activeIdx];
              const isCoordinated = stage.id === "coordinated";
              return (
                <div
                  key={stage.id}
                  className="story-stage-active relative w-full"
                >
                  <h2
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] text-balance mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stage.headline}
                  </h2>
                  {stage.body && (
                    <p
                      className={`text-base md:text-lg leading-relaxed ${
                        stage.id === "align"
                          ? "text-primary font-semibold tracking-wide"
                          : "text-zinc-300"
                      }`}
                    >
                      {stage.body}
                    </p>
                  )}
                  {isCoordinated && (
                    <div className="mt-6 lg:mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 pointer-events-auto">
                      <a
                        href="/contact"
                        data-analytics="discovery_call_click:transformation_story"
                        className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-primary/90"
                      >
                        Get Clarity
                      </a>
                      <a
                        href="/scale"
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-primary transition-colors"
                      >
                        See how SCALE™ works
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>

        {/* ---- VISUALIZATION ZONE ---- */}
        <div className="relative z-10 w-full lg:w-[60%] h-[64vh] lg:h-full">
          <div className="absolute inset-x-0 top-0 bottom-[140px] lg:top-20 lg:bottom-16 lg:right-[4vw]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${mix(
                  GOLD_RGB,
                  AMBER_RGB,
                  strainAmount(p),
                  0.04 + scaleAppearAmount(p) * 0.1,
                )}, transparent 45%)`,
              }}
              aria-hidden="true"
            />
            <Diagram p={p} reduced={reduced} small={small} />
          </div>
        </div>

        {/* Chapter dots (desktop) — jump between beats */}
        {!reduced && (
          <nav
            aria-label="Story chapters"
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-4 z-30"
          >
            {stages.map((s, i) => {
              const isCurrent = i === currentStage;
              return (
                <button
                  key={`dot-${s.id}`}
                  type="button"
                  onClick={() => goToChapter(i)}
                  aria-label={`Go to chapter: ${s.chapter}`}
                  aria-current={isCurrent ? "step" : undefined}
                  className="group flex items-center gap-3 focus-visible:outline-none"
                >
                  <span
                    className={`text-[10px] uppercase tracking-[0.18em] transition-opacity ${
                      isCurrent
                        ? "opacity-80 text-primary"
                        : "opacity-0 group-hover:opacity-60 group-focus-visible:opacity-60 text-white"
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    aria-hidden="true"
                  >
                    {s.chapter}
                  </span>
                  <span
                    className={`block rounded-full transition-all ${
                      isCurrent
                        ? "h-2.5 w-2.5 bg-primary"
                        : "h-1.5 w-1.5 bg-white/30 group-hover:bg-white/60 group-focus-visible:ring-2 group-focus-visible:ring-primary"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        )}

        {/* Scroll hint — fades as scrolling begins */}
        {!reduced && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
            style={{ opacity: Math.max(0, 1 - p * 12) }}
            aria-hidden="true"
          >
            <span
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Scroll to explore
            </span>
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              className="text-white/40"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="27"
                rx="9.5"
                stroke="currentColor"
                strokeOpacity="0.4"
              />
              <rect
                x="8.5"
                y="5"
                width="3"
                height="7"
                rx="1.5"
                fill="currentColor"
                className="animate-bounce"
                style={{ animationDuration: "1.5s" }}
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
