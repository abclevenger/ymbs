import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

type Problem = {
  label: string;
  href: string;
  cta: string;
  pillar: "technology" | "operations" | "communications" | "leadership";
};

const problems: Problem[] = [
  {
    label: "Technology isn't working together.",
    href: "/technology",
    cta: "Explore Technology",
    pillar: "technology",
  },
  {
    label: "We're losing time to manual processes.",
    href: "/operations",
    cta: "Explore Operations",
    pillar: "operations",
  },
  {
    label: "We need stronger sales and customer systems.",
    href: "/technology",
    cta: "Explore Technology",
    pillar: "technology",
  },
  {
    label: "Operations are becoming difficult to manage.",
    href: "/operations",
    cta: "Explore Operations",
    pillar: "operations",
  },
  {
    label: "Our messaging and customer experience are inconsistent.",
    href: "/communications",
    cta: "Explore Communications",
    pillar: "communications",
  },
  {
    label: "We need experienced leadership or implementation support.",
    href: "/leadership",
    cta: "Explore Leadership",
    pillar: "leadership",
  },
];

const pillarAccent: Record<Problem["pillar"], string> = {
  technology: "text-primary",
  operations: "text-primary",
  communications: "text-primary",
  leadership: "text-primary",
};

export default function ProblemDiscovery() {
  return (
    <section
      id="whats-holding-you-back"
      aria-labelledby="problem-discovery-heading"
      className="py-16 md:py-24 bg-background"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold text-primary mb-3 uppercase tracking-[0.15em]">
            Start with the problem
          </p>
          <h2
            className="text-3xl md:text-[2.5rem] font-bold mb-4 tracking-tight leading-[1.1] text-balance text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            id="problem-discovery-heading"
          >
            What's holding your business back?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            You don't have to know which discipline you need. Pick the problem
            that sounds most familiar — we'll connect you to the right
            expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {problems.map((problem) => (
            <Link
              key={problem.label}
              to={problem.href}
              onClick={() =>
                track.highIntentPageView(problem.href, "Problem Discovery")
              }
              className="group block rounded-2xl border border-border bg-card p-6 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-base md:text-lg font-semibold text-foreground leading-snug mb-4">
                {problem.label}
              </p>
              <span
                className={`inline-flex items-center text-sm font-semibold ${pillarAccent[problem.pillar]} group-hover:underline`}
              >
                {problem.cta}
                <svg
                  className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Not sure where the problem starts?
          </p>
          <Link
            to="/scale/assessment"
            onClick={() => track.assessmentStarted("SCALE")}
            className="inline-flex items-center justify-center btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-8 h-12 text-sm md:text-base rounded-full transition-all hover:-translate-y-1"
          >
            Take the Free SCALE™ Assessment
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
