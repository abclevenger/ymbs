import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Twitter,
  Linkedin,
  Mail,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { submitLead, CRM_FIELDS } from "@/lib/crm";

const questions = [
  {
    id: "q1",
    question: "How do you currently manage employee passwords and access?",
    options: [
      {
        value: "sso",
        label: "Single Sign-On (SSO) and mandatory MFA across all apps",
        score: 3,
      },
      { value: "manager", label: "Company-wide password manager", score: 2 },
      {
        value: "spreadsheets",
        label: "Shared documents, spreadsheets, or memory",
        score: 0,
      },
      {
        value: "none",
        label: "Everyone manages their own passwords independently",
        score: 0,
      },
    ],
  },
  {
    id: "q2",
    question:
      "When was your last formal cybersecurity risk assessment or audit?",
    options: [
      { value: "6months", label: "Within the past 6 months", score: 3 },
      { value: "1year", label: "Within the past year", score: 2 },
      { value: "more", label: "More than a year ago", score: 1 },
      { value: "never", label: "Never, or I'm not sure", score: 0 },
    ],
  },
  {
    id: "q3",
    question: "Do you have a formal incident response plan if a breach occurs?",
    options: [
      { value: "tested", label: "Yes, and we test it regularly", score: 3 },
      {
        value: "untested",
        label: "Yes, but it's rarely updated or tested",
        score: 1,
      },
      { value: "planned", label: "No, but we are working on one", score: 0 },
      {
        value: "none",
        label: "No, we would figure it out if it happens",
        score: 0,
      },
    ],
  },
  {
    id: "q4",
    question: "How are your organization's data backups managed?",
    options: [
      {
        value: "automated",
        label: "Automated daily backups to an offsite/cloud location",
        score: 3,
      },
      { value: "manual", label: "Manual backups done occasionally", score: 1 },
      {
        value: "local",
        label: "Local backups only (e.g., on-premise hard drives)",
        score: 0,
      },
      {
        value: "none",
        label: "We don't have a formal backup strategy",
        score: 0,
      },
    ],
  },
  {
    id: "q5",
    question: "How is cybersecurity training handled for your staff?",
    options: [
      {
        value: "regular",
        label: "Mandatory, regular training and phishing simulations",
        score: 3,
      },
      {
        value: "onboarding",
        label: "Basic training during onboarding only",
        score: 1,
      },
      {
        value: "informal",
        label: "Informal reminders via email occasionally",
        score: 0,
      },
      {
        value: "none",
        label: "No formal cybersecurity training provided",
        score: 0,
      },
    ],
  },
  {
    id: "q6",
    question:
      "Do you have a dedicated budget and team member for cybersecurity?",
    options: [
      {
        value: "yes",
        label: "Yes, we have a dedicated budget and named owner",
        score: 3,
      },
      {
        value: "budget",
        label: "We have a budget but no clear owner",
        score: 2,
      },
      {
        value: "owner",
        label: "Someone handles it as part of their job, but no real budget",
        score: 1,
      },
      { value: "none", label: "No budget and no dedicated owner", score: 0 },
    ],
  },
  {
    id: "q7",
    question: "Are your mobile devices and laptops encrypted and tracked?",
    options: [
      {
        value: "all",
        label: "Yes, all company devices are encrypted and managed (MDM)",
        score: 3,
      },
      {
        value: "some",
        label: "Some are, but we don't have a strict policy",
        score: 1,
      },
      {
        value: "none",
        label: "No, employees use unmanaged personal or company devices",
        score: 0,
      },
    ],
  },
  {
    id: "q8",
    question: "How do you handle third-party vendor security?",
    options: [
      {
        value: "strict",
        label: "We require security audits/certifications from all vendors",
        score: 3,
      },
      {
        value: "basic",
        label: "We ask basic questions before signing contracts",
        score: 1,
      },
      {
        value: "none",
        label: "We don't formally evaluate vendor security",
        score: 0,
      },
    ],
  },
];

export default function CyberAssessment() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleOptionSelect = (value: string) => {
    const option = questions[currentStep].options.find(
      (o) => o.value === value,
    );
    if (option) {
      setAnswers((prev) => ({
        ...prev,
        [questions[currentStep].id]: option.score,
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const email = formData.get("email") as string;

    setIsSubmitting(true);
    setSubmitError(null);

    const { percentage } = calculateScore();
    const resultContent = getResultContent(percentage);

    const result = await submitLead({
      formId: "Cyber Readiness Assessment Form",
      source: "Cyber Readiness Assessment",
      firstName,
      email,
      customFields: {
        [CRM_FIELDS.cyberScore]: percentage.toString(),
        [CRM_FIELDS.cyberAnswers]: JSON.stringify(answers),
        [CRM_FIELDS.assessmentType]: "Cyber Readiness",
        [CRM_FIELDS.assessmentResult]: resultContent.title,
      },
      fieldLabels: {
        [CRM_FIELDS.cyberScore]: "Cyber Score",
        [CRM_FIELDS.cyberAnswers]: "Cyber Answers",
        [CRM_FIELDS.assessmentType]: "Assessment Type",
        [CRM_FIELDS.assessmentResult]: "Assessment Result",
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't save your assessment results. Please check your connection and try again.",
      );
      return;
    }

    setIsLeadCaptured(true);
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (acc, curr) => acc + curr,
      0,
    );
    const maxScore = questions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);
    return { totalScore, percentage };
  };

  const getResultContent = (percentage: number) => {
    if (percentage >= 80) {
      return {
        icon: <ShieldCheck className="w-16 h-16 text-green-500 mb-6" />,
        title: "Strong Posture",
        description:
          "Your organization has a solid foundation in cybersecurity. You are implementing best practices for access, backups, and training. However, the threat landscape evolves quickly—regular audits are essential to maintain this posture.",
        color: "text-green-500",
      };
    } else if (percentage >= 40) {
      return {
        icon: <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />,
        title: "Vulnerable Posture",
        description:
          "You have some basic protections in place, but significant gaps leave your organization exposed to data loss, ransomware, or compliance failures. A formal review and remediation plan should be a priority.",
        color: "text-yellow-500",
      };
    } else {
      return {
        icon: <ShieldAlert className="w-16 h-16 text-destructive mb-6" />,
        title: "High Risk Posture",
        description:
          "Your organization is currently operating with critical vulnerabilities. The lack of formalized access controls, backups, and incident response planning means a single breach could cause severe operational disruption.",
        color: "text-destructive",
      };
    }
  };

  if (isComplete && !isLeadCaptured) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-muted/30">
        <SEOHead
          title="Cyber Readiness Assessment | YMBS"
          description="Free cybersecurity readiness assessment from YMBS. Evaluate your passwords, backups, training, device management, and vendor security posture."
          canonical="/assessments/cyber-readiness"
        />

        <div className="max-w-xl w-full text-center">
          <Card className="border-border shadow-lg">
            <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-4">Your Report is Ready</h2>
              <p className="text-muted-foreground mb-8">
                Enter your email to view your results instantly and get a
                detailed PDF report sent to your inbox.
              </p>
              <form
                onSubmit={handleLeadSubmit}
                className="w-full space-y-4 text-left"
              >
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
                {submitError && (
                  <p className="text-sm text-red-500 flex items-center gap-1.5 mb-3">
                    <AlertCircle className="w-4 h-4" /> {submitError}
                  </p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-bold mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "VIEW MY RESULTS & GET PDF"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isComplete && isLeadCaptured) {
    const { percentage } = calculateScore();
    const result = getResultContent(percentage);

    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-muted/30">
        <SEOHead
          title="Cyber Readiness Assessment | YMBS"
          description="Free cybersecurity readiness assessment from YMBS. Evaluate your passwords, backups, training, device management, and vendor security posture."
          canonical="/assessments/cyber-readiness"
        />
        <div className="max-w-2xl w-full text-center">
          <Card className="border-border shadow-lg">
            <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center">
              {result.icon}
              <h2 className="text-4xl font-bold mb-4">Assessment Complete</h2>
              <p className={`text-2xl font-bold mb-6 ${result.color}`}>
                {result.title}
              </p>

              <div className="w-full bg-muted rounded-full h-4 mb-8 overflow-hidden">
                <div
                  className={`h-full ${percentage >= 80 ? "bg-green-500" : percentage >= 40 ? "bg-yellow-500" : "bg-destructive"}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-balance">
                {result.description}
              </p>

              <div className="bg-brand-dark text-white rounded-xl p-8 w-full text-left mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Recommended Next Steps:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Review these results with your leadership team or board.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Identify the most critical gap (e.g., backups or access
                      control) and address it immediately.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white/90">
                      Schedule a formal technology and security audit to get a
                      comprehensive roadmap.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
                <Button size="lg" className="font-bold px-8">
                  Get Clarity
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setIsComplete(false);
                    setIsLeadCaptured(false);
                    setCurrentStep(0);
                    setAnswers({});
                  }}
                >
                  RETAKE ASSESSMENT
                </Button>
              </div>

              <div className="border-t border-border pt-8 w-full mt-4">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  Share your results
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={`https://twitter.com/intent/tweet?text=I just took the YMBS Cyber Readiness Assessment and scored ${percentage}%! Check your security posture here: https://ymbs.pro/assessments/cyber-readiness`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5 text-brand-dark" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ymbs.pro/assessments/cyber-readiness`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-brand-dark" />
                  </a>
                  <a
                    href={`mailto:?subject=Cyber Readiness Assessment&body=I just took the YMBS Cyber Readiness Assessment. You can take it here: https://ymbs.pro/assessments/cyber-readiness`}
                    className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Share via Email"
                  >
                    <Mail className="w-5 h-5 text-brand-dark" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = (currentStep / questions.length) * 100;
  const hasAnsweredCurrent = answers[currentQuestion.id] !== undefined;

  return (
    <div className="min-h-[80vh] flex flex-col items-center py-20 px-6 bg-muted/30">
      <SEOHead
        title="Cyber Readiness Assessment | YMBS"
        description="Free cybersecurity readiness assessment from YMBS. Evaluate your passwords, backups, training, device management, and vendor security posture."
        canonical="/assessments/cyber-readiness"
      />
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cyber Readiness Assessment
          </h1>
          <p className="text-xl text-muted-foreground">
            Find out where your organization's security posture stands.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
            <span>
              Question {currentStep + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Completed</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-border shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-2xl font-bold mb-8 text-brand-dark leading-tight">
                  {currentQuestion.question}
                </h2>

                <RadioGroup
                  className="space-y-4"
                  value={
                    questions[currentStep].options.find(
                      (o) => o.score === answers[currentQuestion.id],
                    )?.value
                  }
                  onValueChange={handleOptionSelect}
                >
                  {currentQuestion.options.map((option, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`option-${idx}`}
                        className="mt-0.5"
                      />
                      <Label
                        htmlFor={`option-${idx}`}
                        className="text-base font-medium cursor-pointer leading-relaxed flex-grow"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex justify-between mt-12 pt-6 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!hasAnsweredCurrent}
                    className="font-bold px-8"
                  >
                    {currentStep === questions.length - 1
                      ? "See Results"
                      : "Next Question"}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
