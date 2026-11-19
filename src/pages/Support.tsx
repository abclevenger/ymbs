import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  MessageSquare,
  AlertTriangle,
  PhoneCall,
  Search,
  CheckCircle2,
  LifeBuoy,
  ArrowLeft,
  Loader2,
  AlertCircle,
  ClipboardCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TrustSignals } from "@/components/TrustSignals";
import SEOHead from "@/components/SEOHead";
import {
  submitLead,
  serializeAttachments,
  CRM_FIELDS,
  type CapturedAttachment,
} from "@/lib/crm";
import { services } from "@/components/support/supportData";
import {
  SupportDynamicFields,
  dynamicFieldMap,
} from "@/components/support/SupportDynamicFields";
import { SupportAttachments } from "@/components/support/SupportAttachments";
import { SupportFaqSection } from "@/components/support/SupportFaqSection";

export default function Support() {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [priority, setPriority] = useState<string>("Standard");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [faqSearch, setFaqSearch] = useState("");
  const [attachments, setAttachments] = useState<CapturedAttachment[]>([]);

  useEffect(() => {
    if (step === 2 && formRef.current) {
      setTimeout(
        () =>
          formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          }),
        100,
      );
    }
  }, [step]);

  const handleServiceClick = (id: string) => {
    setSelectedService(id);
    setPriority(id === "emergency" ? "Critical" : "Standard");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const organization = formData.get("organization") as string;
    const issueType = formData.get("issue_type") as string;
    const description = formData.get("description") as string;

    const customFields: Record<string, string> = {
      [CRM_FIELDS.supportService]: selectedService,
      [CRM_FIELDS.supportPriority]: priority,
      [CRM_FIELDS.supportIssueType]: issueType || "",
    };

    // Map each dynamic field to its own discrete CRM custom field
    let extraDetails = "";
    for (const [field, crmKey] of Object.entries(dynamicFieldMap)) {
      const el = e.currentTarget.elements.namedItem(field) as HTMLInputElement;
      const val = formData.get(field);
      if (el && el.type === "checkbox" && el.checked) {
        customFields[crmKey] = "Yes";
        extraDetails += `\n${field.replace(/_/g, " ").toUpperCase()}: Yes`;
      } else if (val && typeof val === "string" && val.trim() !== "") {
        customFields[crmKey] = val.trim();
        extraDetails += `\n${field.replace(/_/g, " ").toUpperCase()}: ${val}`;
      }
    }

    // Login issue checkbox (separate from dynamicFieldMap)
    const loginEl = e.currentTarget.elements.namedItem(
      "login_issue",
    ) as HTMLInputElement;
    if (loginEl && loginEl.checked) {
      customFields[CRM_FIELDS.supportLoginIssue] = "Yes";
      extraDetails += "\nLOGIN ISSUE: Yes";
    }

    // Attachments — serialized metadata sent to CRM
    if (attachments.length > 0) {
      customFields[CRM_FIELDS.supportAttachments] =
        serializeAttachments(attachments);
    }

    // Keep a human-readable combined description alongside the structured fields
    customFields[CRM_FIELDS.supportDescription] = extraDetails
      ? `${description}\n\n--- Additional Context ---${extraDetails}`
      : description;

    const fieldLabels: Record<string, string> = {
      [CRM_FIELDS.supportService]: "Service Category",
      [CRM_FIELDS.supportPriority]: "Priority",
      [CRM_FIELDS.supportIssueType]: "Issue Type",
      [CRM_FIELDS.supportDescription]: "Description",
      [CRM_FIELDS.supportPlatform]: "Platform / Tool",
      [CRM_FIELDS.supportWorkflowName]: "Workflow Name",
      [CRM_FIELDS.supportLoginIssue]: "Login Issue",
      [CRM_FIELDS.supportUrl]: "Page URL",
      [CRM_FIELDS.supportBrowser]: "Browser & Device",
      [CRM_FIELDS.supportDesiredChange]: "Desired Change",
      [CRM_FIELDS.supportTrigger]: "Trigger",
      [CRM_FIELDS.supportExpectedVsActual]: "Expected vs Actual",
      [CRM_FIELDS.supportInvoiceNumber]: "Invoice Number",
      [CRM_FIELDS.supportBillingContact]: "Billing Contact",
      [CRM_FIELDS.supportSystemDown]: "System Down",
      [CRM_FIELDS.supportUsersAffected]: "Users Affected",
      [CRM_FIELDS.supportRevenueImpact]: "Revenue Impact",
      [CRM_FIELDS.supportAttachments]: "Attachments",
    };

    const result = await submitLead({
      formId: "Support Portal Ticket",
      source: "Support Portal",
      firstName,
      lastName,
      email,
      phone,
      organization,
      customFields,
      fieldLabels,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't submit your ticket. Please check your connection and try again.",
      );
      return;
    }

    setIsSuccess(true);
    toast({
      title: "Support Ticket Submitted",
      description:
        "Your request has been routed to Ashley Clevenger. We will be in touch shortly.",
    });
    e.currentTarget.reset();
    setAttachments([]);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-background relative"
      ref={containerRef}
    >
      <SEOHead
        title="Support & Help Center | YMBS"
        description="Fast support for every Yellow Mountain service—all in one place. Search guides, browse FAQs, or contact the YMBS support team."
        canonical="/support"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-section text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(252,223,2,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            How can we help <span className="text-primary">today?</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Fast support for every Yellow Mountain service—all in one place.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8"
              onClick={() => {
                setStep(1);
                window.scrollTo({
                  top: document.getElementById("services-grid")?.offsetTop || 0,
                  behavior: "smooth",
                });
              }}
            >
              Submit Support Request
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() =>
                toast({
                  title: "Live Chat Initiated",
                  description: "Connecting you to the next available agent.",
                })
              }
            >
              <MessageSquare className="w-4 h-4 mr-2" /> Live Chat
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              asChild
            >
              <a
                href="https://forms.clickup.com/9008109186/p/f/8cetnm2-3114/COXW8UF78TWE8896VM/project-intake-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClipboardCheck className="w-4 h-4 mr-2" /> Project Intake Form
              </a>
            </Button>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search help articles, FAQs, tickets..."
              value={faqSearch}
              onChange={(e) => {
                setFaqSearch(e.target.value);
                if (e.target.value.length > 0) {
                  document
                    .getElementById("faq-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full bg-white/5 border-white/10 text-white pl-12 py-6 rounded-full focus-visible:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-alt-section min-h-[600px] relative">
        <AnimatePresence mode="wait">
          {/* STEP 1: Service Selection */}
          {step === 1 && (
            <motion.section
              key="step1"
              id="services-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    What do you need help with?
                  </h2>
                  <p className="text-zinc-500">
                    Select a category to route your ticket to the right
                    specialist.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        aria-label={service.label}
                        className={`min-h-[120px] p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 border ${
                          service.emergency
                            ? "bg-red-500/5 border-red-500/20 hover:border-red-500/50 hover:bg-red-500/10"
                            : "bg-white border-border hover:border-primary/50 hover:shadow-sm"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 ${service.emergency ? "text-red-500" : "text-zinc-600"}`}
                        />
                        <span
                          className={`font-semibold text-sm ${service.emergency ? "text-red-700" : "text-zinc-700"}`}
                        >
                          {service.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}

          {/* STEP 2: Dynamic Form */}
          {step === 2 && (
            <motion.section
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-12"
            >
              <div className="max-w-3xl mx-auto px-6" ref={formRef}>
                <Button
                  variant="ghost"
                  className="mb-6 -ml-4 text-zinc-500 hover:text-zinc-900"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
                </Button>

                <div className="bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12">
                  <div className="mb-6 pb-6 border-b border-border">
                    <TrustSignals variant="light" showRating={true} />
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                      <div className="h-2 rounded-full w-8 bg-primary transition-all" />
                      <div className="h-2 rounded-full w-4 bg-primary/50 transition-all" />
                    </div>
                    <span className="text-sm font-bold text-zinc-400 tracking-wider uppercase">
                      Step 2 of 2
                    </span>
                  </div>

                  <div className="mb-8 flex items-center justify-between border-b pb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        Submit a Ticket
                      </h2>
                      <p className="text-zinc-500">
                        Category:{" "}
                        <strong className="text-zinc-900">
                          {
                            services.find((s) => s.id === selectedService)
                              ?.label
                          }
                        </strong>
                      </p>
                    </div>
                    <div className="hidden sm:flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center">
                      {(() => {
                        const Icon =
                          services.find((s) => s.id === selectedService)
                            ?.icon || LifeBuoy;
                        return <Icon className="w-8 h-8 text-primary" />;
                      })()}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first_name">First Name *</Label>
                          <Input
                            id="first_name"
                            name="first_name"
                            required
                            placeholder="Jane"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last_name">Last Name *</Label>
                          <Input
                            id="last_name"
                            name="last_name"
                            required
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="jane@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Company Name *</Label>
                        <Input
                          id="organization"
                          name="organization"
                          required
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    {/* Ticket Details */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-semibold">Ticket Details</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="priority">Priority *</Label>
                          <Select
                            name="priority"
                            value={priority}
                            onValueChange={setPriority}
                            required
                          >
                            <SelectTrigger
                              className={
                                priority === "Critical"
                                  ? "border-red-500 text-red-600 font-semibold bg-red-50"
                                  : ""
                              }
                            >
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Low">Low</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="High">High</SelectItem>
                              <SelectItem value="Critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="issue_type">Issue Type *</Label>
                          <Select name="issue_type" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select issue type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Bug">Bug / Error</SelectItem>
                              <SelectItem value="Access Problem">
                                Access Problem
                              </SelectItem>
                              <SelectItem value="Configuration">
                                Configuration
                              </SelectItem>
                              <SelectItem value="Billing">Billing</SelectItem>
                              <SelectItem value="Feature Request">
                                Feature Request
                              </SelectItem>
                              <SelectItem value="Emergency">
                                Emergency
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <AnimatePresence>
                        {priority === "Critical" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-50 border border-red-200 rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between my-4 overflow-hidden"
                          >
                            <div>
                              <h4 className="text-red-800 font-bold flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Would you
                                like immediate escalation?
                              </h4>
                              <p className="text-red-600 text-sm mt-1">
                                Critical tickets trigger immediate SMS alerts to
                                our on-call team.
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="destructive"
                              className="shrink-0"
                              onClick={() =>
                                toast({
                                  title: "Emergency Line",
                                  description: "Calling emergency support...",
                                })
                              }
                            >
                              <PhoneCall className="w-4 h-4 mr-2" /> Call Now
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Dynamic contextual fields */}
                      <div className="my-6">
                        <SupportDynamicFields service={selectedService} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          name="description"
                          required
                          className="min-h-[150px] resize-y"
                          placeholder="• What happened?&#10;• When did it start?&#10;• What have you already tried?"
                        />
                      </div>

                      {/* Attachments */}
                      <SupportAttachments
                        attachments={attachments}
                        onAdd={(newAtts) =>
                          setAttachments((prev) => [...prev, ...newAtts])
                        }
                        onRemove={(index) =>
                          setAttachments((prev) =>
                            prev.filter((_, i) => i !== index),
                          )
                        }
                      />
                    </div>

                    <div className="pt-6">
                      {isSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-8"
                        >
                          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-2">
                            Ticket Submitted Successfully
                          </h3>
                          <p className="text-zinc-500 mb-6">
                            Your ticket has been routed to our support team.
                            We'll be in touch shortly.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() =>
                                (window.location.href = "tel:+14077837496")
                              }
                              className="font-bold"
                            >
                              <PhoneCall className="w-4 h-4 mr-2" /> Call
                              Support
                            </Button>
                            <Button
                              type="button"
                              onClick={() => {
                                setIsSuccess(false);
                                setStep(1);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="font-bold bg-primary text-black hover:bg-primary/90"
                            >
                              Submit Another Ticket
                            </Button>
                          </div>
                        </motion.div>
                      ) : (
                        <>
                          {submitError && (
                            <p className="text-sm text-red-500 flex items-center gap-1.5 mb-4 justify-center">
                              <AlertCircle className="w-4 h-4" /> {submitError}
                            </p>
                          )}
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 rounded-xl"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Submit Support Ticket"
                            )}
                          </Button>
                          <p className="text-center text-xs text-zinc-500 mt-4">
                            By submitting this ticket, you agree to our Support
                            Terms of Service.
                          </p>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <SupportFaqSection />

      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Button
          size="lg"
          className="rounded-full shadow-2xl bg-zinc-900 text-white hover:bg-zinc-800 border-4 border-white h-14 px-6 font-bold"
          onClick={() =>
            toast({
              title: "Live Chat",
              description: "Connecting to an agent...",
            })
          }
        >
          <MessageSquare className="w-5 h-5 mr-2 text-primary" /> Live Chat
        </Button>
      </div>

      {/* Mobile sticky action bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex gap-2 p-3 bg-white border-t border-border shadow-lg">
        <Button
          variant="outline"
          className="flex-1 font-bold h-12"
          onClick={() =>
            toast({
              title: "Live Chat",
              description: "Connecting to an agent...",
            })
          }
        >
          <MessageSquare className="w-4 h-4 mr-1.5 text-primary" /> Chat
        </Button>
        <Button
          className="flex-1 font-bold h-12 bg-primary text-black hover:bg-primary/90"
          onClick={() => {
            setStep(1);
            window.scrollTo({
              top: document.getElementById("services-grid")?.offsetTop || 0,
              behavior: "smooth",
            });
          }}
        >
          Submit Ticket
        </Button>
      </div>
    </div>
  );
}
