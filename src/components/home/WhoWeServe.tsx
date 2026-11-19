import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { whoWeHelp } from "@/components/layout/navData";

/** Match the five primary navigation audiences using a single source of truth. */
export default function WhoWeServe() {
  return (
    <section
      className="py-14 md:py-20 bg-light-section"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-9 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Who we serve
          </p>
          <h2
            id="who-we-serve-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Built for the organizations that keep America moving.
          </h2>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
            Whether you lead a growing business, professional practice,
            nonprofit, or purpose-led organization, we help you bring the right
            expertise to your next priority.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {whoWeHelp.map((audience) => (
            <Link
              key={audience.href}
              to={audience.href}
              className="group card-light rounded-2xl p-6 flex flex-col h-full border border-zinc-200 hover:border-primary/50 hover:shadow-md transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <h3
                className="text-lg font-bold mb-3 text-[#1A2433] leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {audience.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed flex-1">
                {audience.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6700] group-hover:underline">
                See how we help{" "}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
