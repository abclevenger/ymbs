import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  Mic,
  Newspaper,
  TrendingUp,
  Search,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function LawFirmPRSystem() {
  const deliverables = [
    {
      icon: FileText,
      title: "Messaging & Discovery Phase",
      desc: "We interview your partners, analyze your market position, and build a messaging framework that differentiates your firm.",
      items: [
        "Partner discovery interviews",
        "Competitive positioning analysis",
        "Core message framework",
        "Target practice area identification",
      ],
      price: "$5,000–$8,000",
    },
    {
      icon: Newspaper,
      title: "PR Toolkit Buildout",
      desc: "We build the assets your firm needs to earn media coverage, position partners as authorities, and convert inbound interest.",
      items: [
        "Firm boilerplate & partner bios",
        "Press release templates",
        "Media pitch kit",
        "Practice area authority articles (3)",
        "Editorial calendar (90 days)",
      ],
      price: "$7,500–$12,000",
    },
    {
      icon: TrendingUp,
      title: "Quarterly Tune-Up (Optional)",
      desc: "Ongoing quarterly support to keep your PR engine running, refresh content, and respond to media opportunities.",
      items: [
        "Quarterly strategy review",
        "1 new authority article per quarter",
        "Media opportunity monitoring",
        "Performance report",
      ],
      price: "$2,500/quarter",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Law Firm Authority & PR System | YMBS"
        description="A productized communications engagement that builds your law firm's public authority, earns media coverage, and positions your partners as the obvious choice in your practice area."
        canonical="/law-firm-pr-system"
      />
      {/* HERO */}
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.12),transparent)]"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-white"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
              Productized for Law Firms
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-balance"
          >
            The{" "}
            <span className="text-gradient-primary">
              Law Firm Authority & PR System
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto font-medium text-balance leading-relaxed"
          >
            A productized communications engagement that builds your firm's
            public authority, earns media coverage, and positions your partners
            as the obvious choice in your practice area.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <Link to="/contact">
              <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 transform hover:-translate-y-1">
                Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="#pricing">
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 backdrop-blur-md"
              >
                See Pricing
              </Button>
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 font-medium"
          >
            Single engagement · No long-term retainer required · Built by
            Michelle Griffith
          </motion.p>
        </motion.div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-32 bg-light-section border-b border-zinc-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
              Why most law firm PR doesn't work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              className="card-light rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                The typical approach
              </h3>
              <ul className="space-y-3 text-zinc-600">
                {[
                  "Generic press releases nobody reads",
                  "Vanity metrics that don't generate cases",
                  "Retainers with no clear deliverables",
                  "PR that's disconnected from your practice strategy",
                  "No system to convert media attention into clients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-500 text-sm font-bold">✕</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card-light rounded-2xl p-8 border-primary/20 ring-1 ring-primary/10"
            >
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                The YMBS approach
              </h3>
              <ul className="space-y-3 text-zinc-700">
                {[
                  "Authority articles that rank and get cited",
                  "Media pitches tied to real case outcomes",
                  "Fixed deliverables with clear pricing",
                  "PR built on top of your practice area strategy",
                  "A system that turns visibility into signed cases",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section
        id="pricing"
        className="py-32 bg-dark-section relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,223,2,0.05),transparent_70%)] pointer-events-none"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              What's included
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Three phases. One engagement. Clear deliverables at each step.
            </p>
          </motion.div>

          <div className="space-y-8">
            {deliverables.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="card-dark rounded-3xl p-10"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <span className="text-primary font-bold text-sm tracking-widest uppercase">
                            Phase {i + 1}
                          </span>
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        {phase.price}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                        {phase.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-2 text-zinc-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <div className="inline-block bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6 mb-8">
              <p className="text-sm text-zinc-400 font-medium mb-1">
                Total engagement range
              </p>
              <p className="text-4xl font-bold text-white">$12,500 – $20,000</p>
              <p className="text-sm text-zinc-500 mt-1">
                Phases 1 + 2 combined · Quarterly tune-up optional
              </p>
            </div>
            <div>
              <Link to="/contact">
                <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-12 py-8 h-auto text-xl rounded-full shadow-[0_0_40px_rgba(252,223,2,0.2)] hover:shadow-[0_0_60px_rgba(252,223,2,0.3)] hover:-translate-y-1 transition-all duration-500">
                  Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* OUTCOMES */}
      <section className="py-32 bg-alt-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 tracking-tight">
              What this produces
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Not press clippings. Measurable authority that compounds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Searchable Authority",
                desc: "Articles that rank for your practice area and position your partners as the answer.",
                metric: "3+ ranking articles",
              },
              {
                icon: Mic,
                title: "Media-Ready Partners",
                desc: "Partners who can confidently handle interviews, press calls, and speaking opportunities.",
                metric: "All partners prepped",
              },
              {
                icon: Award,
                title: "Differentiated Positioning",
                desc: "A clear, defensible narrative that separates your firm from every other firm in your market.",
                metric: "1 unified message",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="card-light rounded-3xl p-10"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <p className="text-primary font-bold text-lg">
                    {item.metric}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.15),transparent)]"></div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
            Your firm's authority isn't built by waiting for the phone to ring.
          </h2>
          <p className="text-xl text-zinc-400 mb-14 text-balance leading-relaxed max-w-2xl mx-auto">
            Get clarity. Michelle will assess your firm's positioning and tell
            you directly whether this engagement is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-12 py-8 h-auto text-xl rounded-full shadow-[0_0_40px_rgba(252,223,2,0.2)] hover:shadow-[0_0_60px_rgba(252,223,2,0.3)] hover:-translate-y-1 transition-all duration-500">
                Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/michelle-griffith">
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold px-12 py-8 h-auto text-xl rounded-full transition-all duration-300 backdrop-blur-md"
              >
                Meet Michelle
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
