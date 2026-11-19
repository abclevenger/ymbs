import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { track, initScrollDepthTracking } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";
import { submitLead, CRM_FIELDS } from "@/lib/crm";
import { TrustSignals } from "@/components/TrustSignals";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  useEffect(() => {
    captureAttribution();
    const cleanup = initScrollDepthTracking("/contact");
    return cleanup;
  }, []);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  // The step-2 field unmounts on step 3; preserve the challenge in state.
  const [challenge, setChallenge] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const needsOptions = [
    {
      id: "operations",
      label: "Operations",
      desc: "Workflows, governance, audits",
    },
    {
      id: "technology",
      label: "Technology",
      desc: "Software, integrations, audits",
    },
    {
      id: "leadership",
      label: "Leadership",
      desc: "Alignment, coaching, planning",
    },
    {
      id: "communications",
      label: "Communications",
      desc: "Messaging, brand clarity",
    },
    {
      id: "website",
      label: "Website",
      desc: "Design, development, maintenance",
    },
    { id: "seo", label: "SEO", desc: "Search visibility, audits, strategy" },
    { id: "general", label: "General", desc: "Other inquiries or questions" },
  ];

  const toggleNeed = (id: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id],
    );
    if (errors.needs)
      setErrors((prev) => {
        const c = { ...prev };
        delete c.needs;
        return c;
      });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateStep = (currentStep: number, formData?: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1 && selectedNeeds.length === 0) {
      newErrors.needs = "Please select at least one area you need help with.";
    }
    if ((currentStep === 2 || currentStep === 3) && challenge.trim().length < 10) {
      newErrors.message = "Please provide at least a brief description (10+ characters).";
    }
    if (currentStep === 3 && formData) {
      const firstName = formData.get("firstName") as string;
      const email = formData.get("email") as string;
      if (!firstName || firstName.trim().length < 2)
        newErrors.firstName = "First name is required.";
      if (!email || !validateEmail(email))
        newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (currentStep: number) => {
    if (validateStep(currentStep)) {
      track.assessmentFunnelStep("discovery_call", "step_" + currentStep + "_complete");
      setStep(currentStep + 1);
    } else if (currentStep === 2) {
      setTouched((prev) => ({ ...prev, message: true }));
    }
  };

  const handleBack = (fromStep: number) => {
    track.assessmentFunnelStep("discovery_call", `step_${fromStep}_back`);
    setStep(fromStep - 1);
  };

  // Track abandonment when user leaves without submitting
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!isSubmitted) {
        track.assessmentFunnelStep(
          "discovery_call",
          `abandoned_at_step_${step}`,
        );
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [step, isSubmitted]);

  const handleFieldBlur = (name: string, value: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "email" && value && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else if (name === "message" && value && value.trim().length < 10) {
      setErrors((prev) => ({
        ...prev,
        message:
          "Please provide at least a brief description (10+ characters).",
      }));
    } else if (name === "firstName" && value && value.trim().length < 2) {
      setErrors((prev) => ({ ...prev, firstName: "First name is required." }));
    } else {
      setErrors((prev) => {
        const c = { ...prev };
        delete c[name];
        return c;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    if (!validateStep(3, formData)) {
      setTouched({ firstName: true, email: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = challenge.trim();

    const result = await submitLead({
      formId: "Multi-Step Contact Form",
      source: "Contact Page",
      firstName,
      lastName,
      email,
      phone,
      organization: company,
      includeAttribution: true,
      customFields: {
        [CRM_FIELDS.inquiryMessage]: message,
        [CRM_FIELDS.selectedNeeds]: selectedNeeds.join(", "),
      },
      fieldLabels: {
        [CRM_FIELDS.inquiryMessage]: "Message",
        [CRM_FIELDS.selectedNeeds]: "Selected Needs",
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't submit your request. Please check your connection and try again.",
      );
      return;
    }

    track.contactFormSubmitted(selectedNeeds.join(", "), undefined);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Get Clarity | YMBS"
        description="Start with a free 30-minute fit conversation. Tell us where your organization is today and where you're trying to go—we'll help determine what expertise, systems, or support actually make sense."
        canonical="/contact"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Get Clarity",
          description:
            "Start with a free 30-minute fit conversation. Tell us where your organization is today and where you're trying to go—we'll help determine what expertise, systems, or support actually make sense.",
          url: "https://ymbs.pro/contact",
        }}
      />
      <section className="bg-brand-dark text-white pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Start with the problem—not the service.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            You do not need to know whether this is an operations, technology,
            communications, or leadership issue. Tell us what is happening.
            We'll help determine the right next step.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-[#1A2433] mb-2">
                30-minute conversation
              </h3>
              <p className="text-sm text-zinc-500">Understand the situation.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-[#1A2433] mb-2">
                Identify likely root cause
              </h3>
              <p className="text-sm text-zinc-500">
                Determine which disciplines may be involved.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-[#1A2433] mb-2">
                Recommend the next step
              </h3>
              <p className="text-sm text-zinc-500">
                Assessment, project, fractional support, or no engagement.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold text-[#1A2433] mb-2">No obligation</h3>
              <p className="text-sm text-zinc-500">
                No unnecessary sales pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-20 bg-muted/20 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-6">
            <TrustSignals variant="light" showRating={true} />
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border overflow-hidden relative min-h-[500px]">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Request Received
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mb-8">
                  We've received your details and will be in touch within one
                  business day to schedule your discovery call.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+14077837496"
                    onClick={() => track.phoneClick("/contact-success")}
                  >
                    <Button variant="outline" size="lg" className="font-bold">
                      Call Now: 407-783-7496
                    </Button>
                  </a>
                  <Link to="/assessments/system-health">
                    <Button
                      size="lg"
                      className="font-bold bg-primary text-black hover:bg-primary/90"
                    >
                      Start an Assessment{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-zinc-400 mt-6">
                  We will contact you using the details you provided.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm font-bold text-muted-foreground tracking-wider uppercase">
                    Step {step} of 3
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`h-2 rounded-full transition-all duration-300 ${s === step ? "w-8 bg-primary" : s < step ? "w-4 bg-primary/50" : "w-4 bg-muted"}`}
                      />
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="relative">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            What do you need help with?
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Select all that apply to your organization.
                          </p>
                          {errors.needs && (
                            <p className="text-sm text-red-500 mb-4 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4" /> {errors.needs}
                            </p>
                          )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          {needsOptions.map((need) => {
                            const isSelected = selectedNeeds.includes(need.id);
                            return (
                              <div
                                key={need.id}
                                onClick={() => toggleNeed(need.id)}
                                role="checkbox"
                                aria-checked={isSelected}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    toggleNeed(need.id);
                                  }
                                }}
                                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                                  isSelected
                                    ? "border-primary bg-primary/5 shadow-sm"
                                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                                }`}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-lg text-brand-dark">
                                    {need.label}
                                  </h4>
                                  <div
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${isSelected ? "border-primary bg-primary" : "border-muted-foreground"}`}
                                  >
                                    {isSelected && (
                                      <CheckCircle2 className="w-3 h-3 text-brand-dark" />
                                    )}
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {need.desc}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="pt-6 flex justify-end">
                          <Button
                            type="button"
                            size="lg"
                            onClick={() => handleNext(1)}
                            disabled={selectedNeeds.length === 0}
                            className="font-bold"
                          >
                            Next Step <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            Tell us more about your challenges
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            This helps us prepare for our discovery call.
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-3">
                            <Label
                              htmlFor="message"
                              className="text-base font-semibold"
                            >
                              What is the primary bottleneck you're experiencing
                              right now?
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={challenge}
                              onChange={(e) => setChallenge(e.target.value)}
                              required
                              onBlur={(e) =>
                                handleFieldBlur("message", e.target.value)
                              }
                              placeholder="e.g. We are paying for 5 tools that don't integrate, and our team is wasting hours on manual data entry..."
                              className={`min-h-[150px] text-base p-4 ${touched.message && errors.message ? "border-red-500" : ""}`}
                            />
                            {touched.message && errors.message && (
                              <p className="text-sm text-red-500 flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4" />{" "}
                                {errors.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="pt-6 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={() => handleBack(2)}
                            className="font-bold"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back
                          </Button>
                          <Button
                            type="button"
                            size="lg"
                            onClick={() => handleNext(2)}
                            className="font-bold"
                          >
                            Final Step <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            Your Contact Details
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Where should we reach you?
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              required
                              autoComplete="given-name"
                              placeholder="John"
                              onBlur={(e) =>
                                handleFieldBlur("firstName", e.target.value)
                              }
                              className={`${touched.firstName && errors.firstName ? "border-red-500" : ""}`}
                            />
                            {touched.firstName && errors.firstName && (
                              <p className="text-sm text-red-500 flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4" />{" "}
                                {errors.firstName}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              required
                              autoComplete="family-name"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            inputMode="email"
                            placeholder="john@example.com"
                            onBlur={(e) =>
                              handleFieldBlur("email", e.target.value)
                            }
                            className={`${touched.email && errors.email ? "border-red-500" : ""}`}
                          />
                          {touched.email && errors.email && (
                            <p className="text-sm text-red-500 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4" /> {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              inputMode="tel"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Organization</Label>
                            <Input
                              id="company"
                              name="company"
                              autoComplete="organization"
                              placeholder="Acme Corp"
                            />
                          </div>
                        </div>

                        <div className="pt-6 flex justify-between items-center">
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => handleBack(3)}
                            className="font-medium text-muted-foreground hover:text-brand-dark"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back
                          </Button>
                          <div className="flex flex-col items-end gap-2">
                            {submitError && (
                              <p className="text-sm text-red-500 flex items-center gap-1.5 text-right max-w-xs">
                                <AlertCircle className="w-4 h-4 shrink-0" />{" "}
                                {submitError}
                              </p>
                            )}
                            <Button
                              type="submit"
                              size="lg"
                              disabled={isSubmitting}
                              className="font-bold px-8 bg-primary text-black hover:bg-primary/90"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                "Submit Request"
                              )}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-sm font-bold text-zinc-900 mb-1">
                Yellow Mountain Business Solutions
              </p>
              <p className="text-xs text-zinc-500">
                Veteran-Owned · Based in Florida
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 mb-1">Call Us</p>
              <a
                href="tel:+14077837496"
                onClick={() => track.phoneClick("/contact")}
                className="text-sm text-primary hover:underline"
              >
                407-783-7496
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 mb-1">Email Us</p>
              <a
                href="mailto:info@ymbs.pro"
                onClick={() => track.emailClick("/contact")}
                className="text-sm text-primary hover:underline"
              >
                info@ymbs.pro
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 mb-1">
                Response Time
              </p>
              <p className="text-xs text-zinc-500">Within 1 business day</p>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-zinc-500">
            No obligation. No hard pitch. Just clarity. Your information is
            private and never shared.
          </p>
        </div>
      </section>
    </div>
  );
}
