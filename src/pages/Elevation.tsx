import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Info,
  Star,
  ExternalLink,
  Sparkles,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ElevationDashboard } from "@/components/ElevationDashboard";
import { ROICalculator } from "@/components/ROICalculator";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useState, useRef, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";

// CountUp Component for animated numbers
const CountUp = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1,
        );
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// FadeUp Component for staggered section entrances
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Elevation() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="ELEVATION Growth Platform | YMBS"
        description="ELEVATION is the done-for-you growth platform that replaces your fragmented marketing, sales, and operations stack—fully built, managed, and optimized by YMBS."
        canonical="/elevation"
      />
      {/* Hero Section (DARK) */}
      <section className="relative section-spacing flex items-center justify-center text-center px-6 overflow-hidden bg-[#050505]">
        {/* Premium Dark Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 dark-glow"></div>
        <div className="absolute inset-0 bg-black/35 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] z-0 pointer-events-none opacity-80"></div>

        <div className="relative z-10 container-enterprise text-white">
          <FadeUp delay={0.1}>
            <p className="text-primary font-bold tracking-wider uppercase small-enterprise mb-6 drop-shadow-md">
              The Done-For-You Growth Infrastructure
            </p>
          </FadeUp>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="h1-enterprise mb-8 text-balance text-white"
          >
            Stop buying software.
            <br />
            Start building systems.
          </motion.h1>
          <FadeUp delay={0.3}>
            <p className="body-enterprise text-zinc-400 mb-6 p-enterprise mx-auto text-balance">
              ELEVATION is the unified platform that replaces your fragmented
              marketing, sales, and operations stack—fully built, managed, and
              optimized by our team.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="small-enterprise text-white mb-10 p-enterprise mx-auto font-medium tracking-wide">
              Built by operators who have deployed scalable systems across{" "}
              <span className="text-primary font-bold">50+ organizations</span>.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold small-enterprise px-8 h-[60px] rounded-full shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300"
                >
                  Get Clarity
                </Button>
              </Link>
              <Link to="/assessments/system-health">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:text-white font-bold small-enterprise px-8 h-[60px] rounded-full transition-all duration-300 hover:scale-[1.03]"
                >
                  TAKE SYSTEM HEALTH QUIZ
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Subtle Dashboard Peek */}
        <FadeUp
          delay={0.7}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl opacity-30 pointer-events-none mask-image-b"
        >
          <div className="h-48 bg-gradient-to-t from-[#050505] to-transparent absolute inset-0 z-10"></div>
          <div className="bg-zinc-900 border border-white/10 rounded-t-[24px] h-64 w-full shadow-[0_30px_120px_rgba(0,0,0,0.45)]"></div>
        </FadeUp>
      </section>

      {/* The Problem vs Solution (SPLIT: Light BG, Dark Card) - MOVED HERE */}
      <section className="section-spacing bg-light-section relative z-20">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-[#1E1E1E] font-bold small-enterprise px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-primary/30">
                <Sparkles className="w-4 h-4 text-[#1E1E1E]" /> AI-Powered
                Platform
              </div>
              <h2 className="h2-enterprise mb-6 text-[#1E1E1E]">
                Your Business is{" "}
                <span className="text-primary drop-shadow-[0_0_15px_rgba(252,223,2,0.6)]">
                  Losing
                </span>{" "}
                Customers Every Day
              </h2>
              <p className="body-enterprise text-[#4A4A4A] mb-8 p-enterprise">
                Right now, you're missing{" "}
                <strong className="text-primary">
                  62% of your after-hours calls
                </strong>{" "}
                and ignoring{" "}
                <strong className="text-primary">
                  78% of your chat messages
                </strong>
                . Our AI Agents plug the leaks in your business, responding to
                every lead instantly and rescuing lost revenue completely on
                autopilot.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#050505] text-white hover:bg-[#050505] hover:scale-[1.03] font-bold rounded-full px-8 h-[60px] small-enterprise shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
                >
                  Deploy AI Agents
                </Button>
              </Link>
            </FadeUp>
            <FadeUp delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50 rounded-[24px] transform rotate-3 scale-105 -z-10"></div>
              <img
                src="https://vibe.filesafe.space/1776094666446468637/attachments/d31fec80-3f5f-401b-ab67-859321feb7ab.png"
                alt="AI Dashboard"
                className="rounded-[24px] shadow-[0_30px_120px_rgba(0,0,0,0.15)] border border-white/50 w-full object-cover"
              />
            </FadeUp>
          </div>

          {/* Stats Row */}
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-24 border-y border-zinc-100 py-10 bg-white rounded-3xl shadow-sm">
              <div className="text-center">
                <div className="text-[56px] font-[800] text-primary mb-2">
                  <CountUp end={14.7} suffix="M+" />
                </div>
                <div className="text-[18px] text-[#4A4A4A] uppercase tracking-wider font-bold">
                  Calls Handled
                </div>
              </div>
              <div className="text-center">
                <div className="text-[56px] font-[800] text-primary mb-2">
                  <CountUp end={860} suffix="K+" />
                </div>
                <div className="text-[18px] text-[#4A4A4A] uppercase tracking-wider font-bold">
                  Appointments Booked
                </div>
              </div>
              <div className="text-center">
                <div className="text-[56px] font-[800] text-primary mb-2">
                  <CountUp end={64} suffix=",000+" />
                </div>
                <div className="text-[18px] text-[#4A4A4A] uppercase tracking-wider font-bold">
                  Hours Saved
                </div>
              </div>
              <div className="text-center">
                <div className="text-[56px] font-[800] text-primary mb-2">
                  <CountUp end={18.7} suffix="M+" />
                </div>
                <div className="text-[18px] text-[#4A4A4A] uppercase tracking-wider font-bold">
                  Messages Sent
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Interactive Dashboard Demo (LIGHT) */}
      <section className="section-spacing bg-light-section relative">
        <div className="container-enterprise">
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="h2-enterprise mb-4 text-[#1E1E1E]">
              How much revenue slips through disconnected systems?
            </h2>
            <p className="body-enterprise text-[#4A4A4A] p-enterprise mx-auto">
              No more logging into six different tools to figure out what's
              happening. ELEVATION brings your CRM, pipelines, and analytics
              into a single source of truth.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <ElevationDashboard />
          </FadeUp>
        </div>
      </section>

      {/* Video Walkthrough Section (DARK) */}
      <section className="section-spacing bg-dark-section relative overflow-hidden">
        {/* Premium Dark Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 dark-glow"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary font-bold small-enterprise px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-primary/30">
              <Play className="w-3 h-3 fill-primary text-primary" /> Platform
              Walkthrough
            </div>
            <h2 className="h2-enterprise mb-6 text-white">
              See ELEVATION in Action
            </h2>
            <p className="body-enterprise text-zinc-400 p-enterprise mx-auto mb-16">
              Watch how our unified platform brings your CRM, marketing, and
              operations into one seamless system.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="relative aspect-video rounded-[24px] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] bg-black group">
              {!playVideo ? (
                <div
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                  onClick={() => setPlayVideo(true)}
                >
                  <img
                    src="https://vibe.filesafe.space/1776094666446468637/attachments/d31fec80-3f5f-401b-ab67-859321feb7ab.png"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(252,223,2,0.5)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-brand-dark fill-brand-dark ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-zinc-900 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-primary animate-spin absolute" />
                  <iframe
                    src="https://www.youtube.com/embed/-huzGApDAhc?autoplay=1&si=EidY9bA-XrFtYVzN"
                    title="ELEVATION Platform Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full z-10"
                    onLoad={() => {
                      // Hide loader when iframe loads if needed, though iframe covers it
                    }}
                  ></iframe>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* The Problem vs Solution (SPLIT: Light BG, Dark Card) */}
      <section className="section-spacing bg-light-section">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.1}>
              <h2 className="h2-enterprise mb-6 text-[#1E1E1E]">
                The Fragmented Stack is costing you time and money.
              </h2>
              <p className="body-enterprise text-[#4A4A4A] mb-8 p-enterprise">
                Most organizations try to scale by duct-taping tools together.
                You buy a CRM, an email marketing tool, a scheduling app, and a
                pipeline manager. Then you spend hours trying to make them talk
                to each other. Data gets lost, follow-ups are missed, and you
                pay multiple subscriptions for tools you barely use.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Data silos between marketing and operations",
                  "Leads falling through the cracks due to manual follow-up",
                  "Paying for 5+ different software subscriptions",
                  "No clear visibility into what's actually working",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-[18px]">
                        ✕
                      </span>
                    </div>
                    <span className="text-[#4A4A4A] font-medium body-enterprise">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Dark Glass Card */}
            <FadeUp delay={0.3}>
              <div className="card-enterprise bg-[#050505] text-white overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/20 transition-colors duration-500"></div>

                <h3 className="h3-enterprise mb-6">The ELEVATION Solution</h3>
                <p className="body-enterprise text-zinc-400 mb-8 p-enterprise">
                  We replace the duct tape with a single, powerful engine. We
                  migrate your data, build your automations, and manage the
                  system so you can focus on your mission.
                </p>
                <ul className="space-y-5">
                  {[
                    "One unified platform for CRM, email, and pipelines",
                    "Automated lead capture and follow-up sequences",
                    "Consolidated billing (save thousands per year)",
                    "Real-time dashboards and reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="body-enterprise text-zinc-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section (LIGHT) */}
      <section className="section-spacing bg-light-section">
        <div className="container-enterprise">
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="h2-enterprise mb-4 text-[#1E1E1E]">
              Calculate Your Automation ROI
            </h2>
            <p className="body-enterprise text-[#4A4A4A] p-enterprise mx-auto">
              See exactly how much time and money your organization is losing to
              manual tasks—and what you could save by implementing ELEVATION.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <ROICalculator />
          </FadeUp>
        </div>
      </section>

      {/* Core Deliverables Grid (SOFT LIGHT) */}
      <section className="section-spacing bg-light-section">
        <div className="container-enterprise">
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="h2-enterprise mb-4 text-[#1E1E1E]">
              Everything you need to scale, built for you.
            </h2>
            <p className="body-enterprise text-[#4A4A4A] p-enterprise mx-auto">
              We don't just hand you a login. We build the infrastructure.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Unified CRM",
                desc: "A single source of truth for every contact, donor, or client. Track communication history, notes, and status in one place.",
              },
              {
                title: "Automated Follow-ups",
                desc: "Never let a lead go cold. We build automated email and SMS sequences that trigger based on user behavior.",
              },
              {
                title: "Pipeline Management",
                desc: "Visualize your sales, fundraising, or intake process. Drag and drop contacts through custom stages.",
              },
              {
                title: "Scheduling & Calendars",
                desc: "Replace Calendly. Let clients book directly on your calendar with automated reminders and intake forms.",
              },
              {
                title: "Forms & Surveys",
                desc: "Capture data beautifully. We build custom forms that feed directly into your CRM without manual entry.",
              },
              {
                title: "Analytics & Reporting",
                desc: "Know exactly what's working. Real-time dashboards showing conversion rates, pipeline value, and campaign ROI.",
              },
            ].map((feature, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white border border-zinc-100 rounded-[24px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-400 h-full">
                  <div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[#050505]" />
                  </div>
                  <h3 className="h3-enterprise mb-3 text-[#1E1E1E]">
                    {feature.title}
                  </h3>
                  <p className="body-enterprise text-[#4A4A4A]">
                    {feature.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section (LIGHT) - Splitting for fixes */}
      <section className="section-spacing bg-light-section relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          {/* Comparison Table */}
          <div className="mb-32">
            <FadeUp delay={0.1} className="text-center mb-12">
              <h3 className="h2-enterprise mb-4 text-[#1E1E1E]">
                Numbers don't lie
              </h3>
              <p className="body-enterprise text-[#4A4A4A] p-enterprise mx-auto">
                80% of leads are lost in the first 5 minutes. Respond instantly,
                beat your competition.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="max-w-5xl mx-auto bg-white rounded-[24px] border border-zinc-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-x-auto">
                <div className="min-w-[850px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-stretch bg-zinc-50 border-b border-zinc-200 text-sm font-bold uppercase tracking-wider text-zinc-500">
                    <div className="p-5 flex items-center">Metric</div>
                    <div className="p-5 flex items-center justify-center">
                      Human Agent
                    </div>
                    <div className="p-5 flex items-center justify-center text-[#050505] gap-2">
                      <Sparkles className="w-4 h-4 text-primary" /> AI Agent
                    </div>
                    <div className="p-5 flex items-center justify-center text-[#050505] bg-zinc-100 border-x border-zinc-200">
                      Revenue Impact
                    </div>
                    <div className="p-5 flex items-center justify-center">
                      Estimate
                    </div>
                  </div>
                  {/* Rows */}
                  {[
                    {
                      label: "Missed Calls Every Month",
                      human: "62%",
                      ai: "<3%",
                      impact: "Very High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$12k–$28k/mo",
                    },
                    {
                      label: "Missed Chat Conversations",
                      human: "78%",
                      ai: "0%",
                      impact: "High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$8k–$18k/mo",
                    },
                    {
                      label: "Employee Availability",
                      human: "8 hrs/day",
                      ai: "24x7",
                      impact: "High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$6k–$14k/mo",
                    },
                    {
                      label: "Response Time",
                      human: "~34 min",
                      ai: "<1 sec",
                      impact: "Medium-High",
                      impactColor: "text-zinc-800 bg-zinc-100",
                      estimate: "+$4k–$10k/mo",
                    },
                    {
                      label: "Review Response Rate",
                      human: "11%",
                      ai: "98%",
                      impact: "Medium",
                      impactColor: "text-zinc-700 bg-zinc-50",
                      estimate: "+$2k–$6k/mo",
                    },
                    {
                      label: "Lead Conversion Rate",
                      human: "23%",
                      ai: "48%",
                      impact: "Very High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$15k–$40k/mo",
                    },
                    {
                      label: "Concurrent Conversations",
                      human: "1-2 max",
                      ai: "Unlimited",
                      impact: "Very High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$5k–$15k/mo",
                    },
                    {
                      label: "Follow-up Persistence",
                      human: "1-2 attempts",
                      ai: "100% consistent",
                      impact: "High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$10k–$25k/mo",
                    },
                    {
                      label: "After-Hours Bookings",
                      human: "0%",
                      ai: "100% captured",
                      impact: "Very High",
                      impactColor: "text-zinc-900 bg-zinc-100",
                      estimate: "+$8k–$20k/mo",
                    },
                    {
                      label: "Language Support",
                      human: "1-2 languages",
                      ai: "90+ languages",
                      impact: "Medium",
                      impactColor: "text-zinc-700 bg-zinc-50",
                      estimate: "+$2k–$8k/mo",
                    },
                  ].map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                      className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] border-b border-zinc-100 last:border-0 items-stretch hover:bg-zinc-50 transition-colors"
                    >
                      <div className="p-5 flex items-center text-zinc-700 font-medium body-enterprise">
                        {row.label}
                      </div>
                      <div className="p-5 flex items-center justify-center text-zinc-500 font-medium body-enterprise">
                        {row.human}
                      </div>
                      <div className="p-5 flex items-center justify-center font-bold text-[#050505] body-enterprise">
                        {row.ai}
                      </div>
                      <div className="p-5 flex items-center justify-center bg-zinc-50/50 border-x border-zinc-100/50">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${row.impactColor}`}
                        >
                          {row.impact}
                        </span>
                      </div>
                      <div className="p-5 flex items-center justify-center text-zinc-500 text-sm font-medium">
                        {row.estimate}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
          {/* 4 Agents Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div className="bg-white border border-zinc-200 rounded-[24px] p-10 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-400 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-[#050505]" />
                </div>
                <h4 className="h3-enterprise mb-4 text-[#1E1E1E]">
                  Never miss a call, ever again
                </h4>
                <p className="body-enterprise text-[#4A4A4A] mb-8">
                  Your Voice Agent picks up every call 24x7—handling bookings,
                  answering questions, and managing waitlists in natural
                  conversation.
                </p>
                <div className="small-enterprise text-[#1E1E1E] font-bold flex items-center gap-2">
                  Voice Agent <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-white border border-zinc-200 rounded-[24px] p-10 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-400 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7 text-[#050505]" />
                </div>
                <h4 className="h3-enterprise mb-4 text-[#1E1E1E]">
                  Turn leads into revenue, on autopilot
                </h4>
                <p className="body-enterprise text-[#4A4A4A] mb-8">
                  Turn leads from any channel into more sales or appointments
                  around the clock, with a goal-oriented AI Employee
                  personalized to your business.
                </p>
                <div className="small-enterprise text-[#1E1E1E] font-bold flex items-center gap-2">
                  Sales Agent <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-white border border-zinc-200 rounded-[24px] p-10 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-400 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-[#050505]" />
                </div>
                <h4 className="h3-enterprise mb-4 text-[#1E1E1E]">
                  Book more appointments, automatically
                </h4>
                <p className="body-enterprise text-[#4A4A4A] mb-8">
                  Turn leads into new business around the clock by automatically
                  collecting appointment details and driving more bookings.
                </p>
                <div className="small-enterprise text-[#1E1E1E] font-bold flex items-center gap-2">
                  Appointment Scheduler{" "}
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="bg-white border border-zinc-200 rounded-[24px] p-10 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-400 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-[#050505]" />
                </div>
                <h4 className="h3-enterprise mb-4 text-[#1E1E1E]">
                  Build a 5-star reputation on autopilot
                </h4>
                <p className="body-enterprise text-[#4A4A4A] mb-8">
                  Show up higher on Google by automatically responding to
                  reviews with personalized replies, while retaining full
                  control.
                </p>
                <div className="small-enterprise text-[#1E1E1E] font-bold flex items-center gap-2">
                  Reputation Manager{" "}
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Trust Strip (DARK) */}
      <section className="py-20 bg-[#050505] text-white relative z-20 overflow-hidden">
        <div className="absolute inset-0 dark-glow"></div>
        <div className="container-enterprise text-center relative z-10">
          <FadeUp delay={0.1}>
            <h2 className="h2-enterprise mb-4">
              Built by <span className="text-primary">operators</span>. Not
              software resellers.
            </h2>
            <p className="body-enterprise text-zinc-400 p-enterprise mx-auto">
              Operations, technology, leadership, and communication deployed as
              one integrated system.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pricing Tiers / Offers (DARK) */}
      <section className="section-spacing bg-[#050505] text-white relative overflow-hidden">
        {/* Premium Dark Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 dark-glow"></div>

        <div className="relative z-10 container-enterprise">
          <FadeUp delay={0.1} className="text-center mb-20">
            <h2 className="h2-enterprise mb-4 text-white">
              Choose your implementation path.
            </h2>
            <p className="body-enterprise text-zinc-400 mb-6 p-enterprise mx-auto">
              Every deployment begins with a system audit and implementation
              roadmap.
            </p>
            <p className="body-enterprise text-zinc-400 p-enterprise mx-auto">
              Whether you need a foundational digital presence, aggressive
              search visibility, or a complete inbound lead machine, we have a
              system built for your exact stage of growth.
            </p>
          </FadeUp>

          {/* Offer 3: Integration & Lead System (ANCHOR PRICING - MOVED TO TOP) */}
          <FadeUp delay={0.3} className="mb-16 relative">
            {/* Spotlight Effect */}
            <div
              className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse z-0 pointer-events-none"
              style={{ animationDuration: "8s" }}
            ></div>

            <div className="card-enterprise bg-[#050505] p-8 md:p-12 relative overflow-hidden z-20 scale-[1.02] md:scale-[1.08] shadow-[0_40px_160px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-block bg-primary/10 text-primary font-bold small-enterprise px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-primary/20">
                    The Ultimate Growth Asset
                  </div>
                  <h3 className="h3-enterprise mb-4">
                    Integrated Lead Generation System
                  </h3>
                  <p className="text-zinc-300 body-enterprise mb-8 p-enterprise">
                    Most businesses launch with a website built by a friend,
                    family member, freelancer, or designer. It may look
                    professional—but if it isn't{" "}
                    <span className="text-primary">qualifying leads</span>,{" "}
                    <span className="text-primary">booking conversations</span>,
                    and turning traffic into{" "}
                    <span className="text-primary">measurable revenue</span>,
                    it's not a growth system. It's a{" "}
                    <span className="text-primary">digital brochure</span>.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-5 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-200 font-medium small-enterprise">
                        15+ Page SEO-Optimized Website
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-200 font-medium small-enterprise">
                        Fully Managed SEO Campaign
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-200 font-medium small-enterprise">
                        ELEVATION CRM & Automations
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-200 font-medium small-enterprise">
                        Live Pipeline & ROI Dashboards
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-200 font-medium small-enterprise">
                        AI Agent Setup & Automation
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-auto bg-black/50 backdrop-blur-md p-8 rounded-[24px] border border-white/10 text-center min-w-[320px]">
                  <div className="text-zinc-400 small-enterprise font-bold uppercase tracking-wider mb-3">
                    Custom Built For You
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    From $5,000{" "}
                    <span className="text-xl text-zinc-500 font-normal">
                      Setup
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-8">
                    + $1,297
                    <span className="text-base text-zinc-500 font-normal">
                      /mo
                    </span>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold h-[60px] small-enterprise rounded-full shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300">
                      Book a Strategy Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp
            delay={0.4}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="h-px bg-white/10 w-full max-w-[200px]"></div>
            <span className="text-zinc-500 font-medium small-enterprise uppercase tracking-widest">
              Or choose a standalone service
            </span>
            <div className="h-px bg-white/10 w-full max-w-[200px]"></div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Offer 1: Website Only */}
            <FadeUp delay={0.5}>
              <div className="card-enterprise bg-[#050505] p-8 flex flex-col opacity-80 hover:opacity-100 h-full">
                <h3 className="h3-enterprise mb-3">Website Design & Build</h3>
                <p className="text-zinc-400 small-enterprise mb-6 leading-relaxed flex-grow">
                  Stop losing referrals to a dated digital brochure. We build
                  professional, fast-loading, and conversion-focused websites
                  structured perfectly for search engines.
                </p>
                <div className="bg-black/40 p-5 rounded-[24px] border border-white/5 text-center mb-6">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Transparent Pricing
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    $300
                    <span className="text-sm text-zinc-500 font-normal">
                      /page
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px]">
                    10-page minimum engagement
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Custom design optimized for your ideal client
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Proper SEO architecture included
                    </span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button className="w-full bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold rounded-full small-enterprise h-[60px] shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300">
                    Start Your Build
                  </Button>
                </Link>
              </div>
            </FadeUp>

            {/* Offer 2: SEO Packages */}
            <FadeUp delay={0.6}>
              <div className="card-enterprise bg-[#050505] p-8 flex flex-col opacity-80 hover:opacity-100 h-full">
                <h3 className="h3-enterprise mb-3">
                  Search Engine Optimization
                </h3>
                <p className="text-zinc-400 small-enterprise mb-6 leading-relaxed flex-grow">
                  A beautiful website doesn't matter if no one can find it. Turn
                  your website into a traffic engine with our ongoing visibility
                  campaigns.
                </p>
                <div className="bg-black/40 p-5 rounded-[24px] border border-white/5 text-center mb-6">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Monthly Retainers
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    From $850
                    <span className="text-sm text-zinc-500 font-normal">
                      /mo
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px]">
                    Tiered packages available
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Local Visibility & Citation Building
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Content Creation & Authority Link Building
                    </span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button className="w-full bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold rounded-full small-enterprise h-[60px] shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300">
                    Explore SEO Options
                  </Button>
                </Link>
              </div>
            </FadeUp>

            {/* Offer 3: Sales Funnel Build */}
            <FadeUp delay={0.7}>
              <div className="card-enterprise bg-[#050505] p-8 flex flex-col opacity-80 hover:opacity-100 h-full">
                <h3 className="h3-enterprise mb-3">Sales Funnel Build</h3>
                <p className="text-zinc-400 small-enterprise mb-6 leading-relaxed flex-grow">
                  A highly-targeted, conversion-optimized funnel designed to
                  guide prospects seamlessly from awareness to action.
                </p>
                <div className="bg-black/40 p-5 rounded-[24px] border border-white/5 text-center mb-6">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    One-Time Build
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    From $1,500
                  </div>
                  <div className="text-zinc-500 text-[10px]">
                    Depending on complexity
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      High-converting landing pages
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Automated email nurture sequences
                    </span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button className="w-full bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold rounded-full small-enterprise h-[60px] shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300">
                    Build My Funnel
                  </Button>
                </Link>
              </div>
            </FadeUp>

            {/* Offer 4: Lead Magnet Creation */}
            <FadeUp delay={0.8}>
              <div className="card-enterprise bg-[#050505] p-8 flex flex-col opacity-80 hover:opacity-100 h-full">
                <h3 className="h3-enterprise mb-3">Lead Magnet Creation</h3>
                <p className="text-zinc-400 small-enterprise mb-6 leading-relaxed flex-grow">
                  Irresistible, high-value assets (eBooks, checklists,
                  mini-courses) designed specifically to capture your ideal
                  client's contact info.
                </p>
                <div className="bg-black/40 p-5 rounded-[24px] border border-white/5 text-center mb-6">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Custom Asset
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    $750
                    <span className="text-sm text-zinc-500 font-normal">
                      /asset
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px]">
                    Includes design & copywriting
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Professional copywriting & design
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs">
                      Opt-in form & delivery automation
                    </span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button className="w-full bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold rounded-full small-enterprise h-[60px] shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300">
                    Create Lead Magnet
                  </Button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="section-spacing bg-light-section">
        <div className="container-enterprise text-center">
          <FadeUp delay={0.1} className="max-w-3xl mx-auto">
            <h2 className="h2-enterprise mb-6 text-[#1E1E1E]">
              Websites built to perform
            </h2>
            <p className="body-enterprise text-[#4A4A4A] mb-10 p-enterprise mx-auto">
              We don't just build digital brochures. We build high-performance,
              SEO-driven assets designed to capture leads, engage audiences, and
              integrate seamlessly with your operations.
            </p>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-[#050505] text-white hover:bg-[#050505] hover:scale-[1.03] font-bold px-8 h-[60px] small-enterprise rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                VIEW OUR PORTFOLIO <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials Carousel (SOFT LIGHT) */}
      <section className="section-spacing bg-light-section border-t border-zinc-200">
        <div className="container-enterprise">
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="h2-enterprise mb-4 text-[#1E1E1E]">
              What our clients say
            </h2>
            <p className="body-enterprise text-[#4A4A4A] p-enterprise mx-auto">
              Real results from organizations that implemented the ELEVATION
              system.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    quote:
                      "The ELEVATION platform completely transformed our intake process. Between the automated CRM pipelines and the AI Voice Agent picking up after-hours calls, we stopped losing leads to competitors.",
                    result: "215% increase in qualified leads",
                    author: "Maria S.",
                    title: "Law Firm Partner",
                  },
                  {
                    quote:
                      "We canceled our Calendly, Mailchimp, and standalone CRM subscriptions. ELEVATION gave us a single, unified dashboard that runs our entire sales funnel. It cut our software costs by $800/month.",
                    result: "Consolidated tech stack, 40% cost reduction",
                    author: "James L.",
                    title: "Operations Director",
                  },
                  {
                    quote:
                      "Most agencies just build a website and leave. The ELEVATION team built our site, wired it into their CRM, and gave us a dashboard that proves exactly how much revenue their system is generating.",
                    result: "Generated $120k in attributed revenue in year 1",
                    author: "Elena R.",
                    title: "Executive Director",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 p-4"
                  >
                    <div className="bg-white border border-zinc-200 rounded-[24px] p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-400">
                      <div className="text-primary mb-6 flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="body-enterprise text-[#4A4A4A] mb-8 flex-grow italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 mb-6">
                        <p className="small-enterprise font-bold text-[#1E1E1E] mb-1">
                          Result:
                        </p>
                        <p className="small-enterprise text-[#4A4A4A]">
                          {testimonial.result}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#1E1E1E] small-enterprise leading-tight">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-zinc-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="position-static transform-none bg-white border-zinc-200 hover:bg-zinc-50" />
                <CarouselNext className="position-static transform-none bg-white border-zinc-200 hover:bg-zinc-50" />
              </div>
            </Carousel>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Section (LIGHT) */}
      <section className="section-spacing bg-light-section">
        <div className="container-enterprise max-w-4xl">
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="h2-enterprise mb-4 text-[#1E1E1E]">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <FadeUp delay={0.3} className="space-y-4">
            {[
              {
                q: "Why is this more expensive than just hiring someone to build a website?",
                a: "Because a website alone doesn't generate revenue—systems do. Most agencies build you a digital brochure and hand you the keys. We build a high-performance SEO asset, wire it directly into a CRM, build automated follow-up sequences, and manage the entire infrastructure so it actually produces inbound leads.",
              },
              {
                q: "What exactly is ELEVATION?",
                a: "ELEVATION is our proprietary, done-for-you growth infrastructure. It combines a powerful underlying software platform (handling CRM, email, SMS, pipelines, and scheduling) with our team's hands-on setup, strategy, and ongoing management.",
              },
              {
                q: "How does this compare to HubSpot or Salesforce?",
                a: "HubSpot and Salesforce are great tools, but they require you to build the engine yourself (or hire an expensive agency). ELEVATION provides enterprise-grade technology that is fully customized and managed by our team from day one, often at a fraction of the total cost of ownership.",
              },
              {
                q: "Will we lose our existing data?",
                a: "No. Our onboarding process includes full data migration from your existing CRM, spreadsheets, or email marketing tools. We clean and format the data before importing it into ELEVATION.",
              },
              {
                q: "Do we have to sign a long-term contract?",
                a: "We require an initial 3-month commitment to allow time for proper setup, migration, and team training. After that, agreements transition to a month-to-month or annual basis depending on your preference.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group border border-[#EAEAEA] rounded-[24px] bg-white/40 backdrop-blur-md [&_summary::-webkit-details-marker]:hidden hover:border-zinc-300 transition-all duration-400 overflow-hidden open:border-l-[4px] open:border-l-primary shadow-sm hover:shadow-md"
              >
                <summary className="flex items-center justify-between cursor-pointer px-8 h-[80px] font-bold body-enterprise text-[#1E1E1E]">
                  {faq.q}
                  <span className="transition-transform duration-400 group-open:rotate-180 text-zinc-400">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-8 pb-8 body-enterprise text-[#4A4A4A] p-enterprise">
                  <div className="pt-4 border-t border-[#EAEAEA]">{faq.a}</div>
                </div>
              </details>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Final CTA (SOFT LIGHT) */}
      <section className="section-spacing bg-light-section border-t border-zinc-200">
        <div className="container-enterprise max-w-4xl text-center">
          <FadeUp delay={0.1}>
            <h2 className="h2-enterprise mb-6 text-[#1E1E1E]">
              Ready to consolidate your tech stack?
            </h2>
            <p className="body-enterprise text-[#4A4A4A] mb-10 text-balance p-enterprise mx-auto">
              Stop paying for tools you don't use and processes that don't work.
              Let's build a system that scales with you.
            </p>
          </FadeUp>
          <FadeUp
            delay={0.3}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-[#050505] hover:bg-primary hover:scale-[1.03] font-bold px-8 h-[60px] small-enterprise w-full sm:w-auto rounded-full shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300"
              >
                Get Clarity
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
