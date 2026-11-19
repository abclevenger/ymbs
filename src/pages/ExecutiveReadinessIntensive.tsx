import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Mic,
  Video,
  FileText,
  Phone,
  Calendar,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { submitLead, splitFullName, CRM_FIELDS } from "@/lib/crm";

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

export default function ExecutiveReadinessIntensive() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    scenario: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    const filled = Object.values({ ...form, [name]: value }).filter(
      (v) => v.trim() !== "",
    ).length;
    setProgress(Math.round((filled / 6) * 100));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const { firstName, lastName } = splitFullName(form.name);

    const result = await submitLead({
      formId: "Executive Readiness Booking",
      source: "Executive Readiness Intensive",
      firstName,
      lastName,
      email: form.email,
      phone: form.phone,
      organization: form.company,
      customFields: {
        [CRM_FIELDS.executiveReadinessType]: "Executive Readiness Intensive",
        [CRM_FIELDS.executiveReadinessScenario]: form.scenario,
        [CRM_FIELDS.executiveReadinessDate]: form.date,
      },
      fieldLabels: {
        [CRM_FIELDS.executiveReadinessType]: "Booking Type",
        [CRM_FIELDS.executiveReadinessScenario]: "Scenario",
        [CRM_FIELDS.executiveReadinessDate]: "Target Date",
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't submit your booking request. Please check your connection and try again.",
      );
      return;
    }

    setSubmitted(true);
  };

  const sessionStructure = [
    {
      phase: "Phase 1",
      title: "Pre-Session Discovery",
      icon: FileText,
      duration: "1 week before",
      desc: "Michelle reviews your scenario, stakeholders, prior messaging, and the specific outcome you need. She maps the risks and builds a custom session agenda.",
      deliverables: [
        "Scenario brief",
        "Stakeholder map",
        "Risk assessment",
        "Custom session agenda",
      ],
    },
    {
      phase: "Phase 2",
      title: "The Intensive Session",
      icon: Mic,
      duration: "Half-day (4 hours)",
      desc: "A focused, high-energy working session that combines message development, mock Q&A, on-camera rehearsal, and real-time feedback.",
      deliverables: [
        "Core message framework",
        "Key talking points",
        "Mock Q&A rehearsal with video review",
        "Crisis response playbook",
      ],
    },
    {
      phase: "Phase 3",
      title: "Post-Session Follow-Up",
      icon: Phone,
      duration: "Within 1 week",
      desc: "Michelle delivers the finalized materials and conducts a follow-up call to refine messaging based on any developments since the session.",
      deliverables: [
        "Finalized message framework document",
        "Rehearsal video review notes",
        "Adjustment call (60 min)",
        "30-day access for urgent questions",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Executive Readiness Intensive | YMBS"
        description="A focused, high-impact engagement that prepares a leader for a high-stakes moment—board presentation, media interview, crisis response, or public appearance."
        canonical="/executive-readiness-intensive"
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
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
              Signature Offer · Michelle Griffith
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-balance"
          >
            The{" "}
            <span className="text-gradient-primary">
              Executive Readiness Intensive
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto font-medium text-balance leading-relaxed"
          >
            A focused, high-impact engagement that prepares a leader for a
            specific high-stakes moment—board presentation, media interview,
            crisis response, or public appearance.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <a href="#booking">
              <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 transform hover:-translate-y-1">
                Book the Intensive <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#structure">
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 backdrop-blur-md"
              >
                See Session Structure
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-400 font-medium"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Starting at
              $7,500
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Half-day
              intensive
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> No retainer
              required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 30-day
              post-session support
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-32 bg-light-section border-b border-zinc-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 tracking-tight">
              Who this is for
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Leaders facing a specific moment where preparation is
              non-negotiable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Board Presentations",
                desc: "Defending a strategic shift, seeking approval, or reporting to stakeholders under scrutiny.",
              },
              {
                icon: Mic,
                title: "Media Interviews",
                desc: "On-camera interviews, press conferences, or public testimony where every word matters.",
              },
              {
                icon: Video,
                title: "Crisis Response",
                desc: "Responding to an incident, legal development, or public controversy with composure and clarity.",
              },
              {
                icon: Calendar,
                title: "Leadership Transitions",
                desc: "Announcing a CEO change, merger, or organizational restructuring to employees and the public.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="card-light rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* SESSION STRUCTURE */}
      <section
        id="structure"
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
              The session structure
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Three phases. One outcome: you walk into the room ready.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sessionStructure.map((phase, i) => {
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
                            {phase.phase}
                          </span>
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                        {phase.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.deliverables.map((d, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-2 text-zinc-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-base">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* PRICING */}
      <section className="py-32 bg-alt-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto">
              One engagement. No retainer. No surprise invoices.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="card-light rounded-3xl p-10 md:p-14 max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-sm text-zinc-500 font-medium mb-2">
                Starting at
              </p>
              <p className="text-6xl font-bold text-zinc-900 mb-2">$7,500</p>
              <p className="text-lg text-zinc-500">
                Single engagement · All three phases included
              </p>
            </div>
            <div className="space-y-3 mb-10 text-left max-w-md mx-auto">
              {[
                "Pre-session discovery and scenario mapping",
                "Half-day intensive with mock Q&A and video rehearsal",
                "Custom message framework and crisis playbook",
                "Post-session follow-up and 30-day urgent access",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-lg text-zinc-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="#booking">
              <Button className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold px-12 py-7 h-auto text-xl rounded-full shadow-[0_0_40px_rgba(252,223,2,0.2)] hover:shadow-[0_0_60px_rgba(252,223,2,0.3)] hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto">
                Book the Intensive <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-sm text-zinc-400 mt-6">
              Complex scenarios or multi-executive prep may require a custom
              quote.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* BOOKING FORM */}
      <section
        id="booking"
        className="py-32 bg-dark-section relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(252,223,2,0.1),transparent)]"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Book the Executive Readiness Intensive
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Tell Michelle about your scenario. She'll respond within 24 hours
              to schedule a discovery call.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-dark rounded-3xl p-14 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Request received.
              </h3>
              <p className="text-lg text-zinc-400 mb-8 max-w-md mx-auto">
                Michelle will personally review your scenario and respond within
                24 hours to schedule your discovery call.
              </p>
              <Link to="/michelle-griffith">
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold px-8 py-6 h-auto rounded-full"
                >
                  Back to Michelle's Page
                </Button>
              </Link>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="card-dark rounded-3xl p-8 md:p-12 space-y-6"
            >
              {/* Progress bar */}
              <div className="mb-2">
                <div className="flex justify-between text-sm text-zinc-400 mb-2">
                  <span>Form progress</span>
                  <span className="text-primary font-bold">{progress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-medium">
                    Company / Organization *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@acme.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-medium">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white font-medium">
                  Target Date for Your High-Stakes Moment
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scenario" className="text-white font-medium">
                  Describe Your Scenario *
                </Label>
                <Textarea
                  id="scenario"
                  name="scenario"
                  value={form.scenario}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's the moment you're preparing for? Board presentation, media interview, crisis response, leadership transition..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 resize-none"
                />
              </div>

              {submitError && (
                <p className="text-sm text-red-400 flex items-center gap-1.5 mb-4 justify-center">
                  <AlertCircle className="w-4 h-4" /> {submitError}
                </p>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow bg-primary text-black hover:bg-primary/90 font-bold w-full py-7 h-auto text-lg rounded-full transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Booking Request{" "}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
              <p className="text-sm text-zinc-500 text-center">
                Michelle reviews every request personally. No automated
                responses.
              </p>
            </motion.form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
