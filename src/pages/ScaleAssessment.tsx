import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  AlertTriangle,
  TrendingUp,
  Target,
  RotateCcw,
  FileWarning,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { track } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";
import { submitLead, CRM_FIELDS } from "@/lib/crm";
import {
  pillars,
  scaleOptions,
  getScoreLabel,
  type Answer,
} from "@/components/scale/scaleAssessmentData";
import { ScaleLeadCapture } from "@/components/scale/ScaleLeadCapture";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ScaleAssessment() {
  const [stage, setStage] = useState<"intro" | "quiz" | "lead" | "results">(
    "intro",
  );
  const [currentPillar, setCurrentPillar] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    track.highIntentPageView("/scale/assessment", "SCALE");
  }, []);

  // Draft persistence: let visitors reload or return without losing progress.
  useEffect(() => {
    if (stage === "intro" && !restored) {
      setRestored(true);
      try {
        const raw = localStorage.getItem("ymbs_scale_draft");
        if (raw) {
          const saved = JSON.parse(raw) as Record<string, Answer[]>;
          const savedCount = Object.values(saved).reduce(
            (s, a) => s + a.length,
            0,
          );
          if (savedCount > 0) {
            setAnswers(saved);
            setStage("quiz");
            track.assessmentFunnelStep("SCALE", "draft_restored");
          }
        }
      } catch {
        // Corrupt or unavailable draft — start fresh.
      }
    }
  }, [stage, restored]);

  // Persist answers as they are given.
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      try {
        localStorage.setItem("ymbs_scale_draft", JSON.stringify(answers));
      } catch {
        // Storage unavailable — assessment still works without persistence.
      }
    }
  }, [answers]);

  const totalQuestions = pillars.reduce(
    (sum, p) => sum + p.questions.length,
    0,
  );
  const answeredCount = Object.values(answers).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );
  const progress = (answeredCount / totalQuestions) * 100;

  const handleAnswer = (value: Answer) => {
    const pillarKey = pillars[currentPillar].letter;
    const currentAnswers = answers[pillarKey] || [];
    const newAnswers = [...currentAnswers];
    newAnswers[currentQuestion] = value;
    setAnswers({ ...answers, [pillarKey]: newAnswers });

    setTimeout(() => {
      if (currentQuestion < pillars[currentPillar].questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (currentPillar < pillars.length - 1) {
        track.assessmentFunnelStep(
          "SCALE",
          `pillar_${pillars[currentPillar].letter}_complete`,
        );
        setCurrentPillar(currentPillar + 1);
        setCurrentQuestion(0);
      } else {
        track.assessmentCompleted("SCALE");
        track.assessmentFunnelStep("SCALE", "completed");
        setStage("lead");
      }
    }, 250);
  };

  const calculateScore = (pillarLetter: string) => {
    const pillarAnswers = answers[pillarLetter] || [];
    if (pillarAnswers.length === 0) return 0;
    const sum = pillarAnswers.reduce((acc, val) => acc + val, 0);
    const maxScore =
      pillars.find((p) => p.letter === pillarLetter)!.questions.length * 4;
    return Math.round((sum / maxScore) * 100);
  };

  const overallScore = Math.round(
    pillars.reduce((sum, p) => sum + calculateScore(p.letter), 0) /
      pillars.length,
  );

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentPillar > 0) {
      const prevPillar = currentPillar - 1;
      setCurrentPillar(prevPillar);
      setCurrentQuestion(pillars[prevPillar].questions.length - 1);
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentPillar(0);
    setCurrentQuestion(0);
    setSubmitError(null);
    try {
      localStorage.removeItem("ymbs_scale_draft");
    } catch {
      // Storage unavailable — reset still works in-memory.
    }
    setStage("intro");
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;

    const structureScore = calculateScore("S");
    const cultureScore = calculateScore("C");
    const alignmentScore = calculateScore("A");
    const liabilityScore = calculateScore("L");
    const executionScore = calculateScore("E");
    const overallLabel = getScoreLabel(overallScore);

    const result = await submitLead({
      formId: "SCALE Assessment",
      source: "SCALE Assessment",
      firstName,
      lastName,
      email,
      organization,
      customFields: {
        [CRM_FIELDS.scaleScore]: overallScore.toString(),
        [CRM_FIELDS.scaleStructureScore]: structureScore.toString(),
        [CRM_FIELDS.scaleCultureScore]: cultureScore.toString(),
        [CRM_FIELDS.scaleAlignmentScore]: alignmentScore.toString(),
        [CRM_FIELDS.scaleLiabilityGovernanceScore]: liabilityScore.toString(),
        [CRM_FIELDS.scaleExecutionScore]: executionScore.toString(),
        [CRM_FIELDS.scaleAnswers]: JSON.stringify(answers),
        [CRM_FIELDS.assessmentType]: "SCALE",
        [CRM_FIELDS.assessmentResult]: overallLabel.label,
      },
      fieldLabels: {
        [CRM_FIELDS.scaleScore]: "SCALE Overall Score",
        [CRM_FIELDS.scaleStructureScore]: "Structure Score",
        [CRM_FIELDS.scaleCultureScore]: "Culture Score",
        [CRM_FIELDS.scaleAlignmentScore]: "Alignment Score",
        [CRM_FIELDS.scaleLiabilityGovernanceScore]:
          "Liability & Governance Score",
        [CRM_FIELDS.scaleExecutionScore]: "Execution Score",
        [CRM_FIELDS.scaleAnswers]: "SCALE Answers",
        [CRM_FIELDS.assessmentType]: "Assessment Type",
        [CRM_FIELDS.assessmentResult]: "Assessment Result",
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(
        "We couldn't save your SCALE results. Your score is still available below — please retry the submission to ensure your report is delivered.",
      );
      return;
    }

    setStage("results");
  };

  // Results analysis
  const scores = pillars.map((p) => ({
    ...p,
    score: calculateScore(p.letter),
  }));
  const strongest = [...scores].sort((a, b) => b.score - a.score)[0];
  const weakest = [...scores].sort((a, b) => a.score - b.score)[0];
  const outsideReviewRecommended = weakest.letter === "L" && weakest.score < 60;
  const overallLabel = getScoreLabel(overallScore);

  const recommendations = [
    weakest.letter === "S" &&
      "Document roles, SOPs, and decision rights to stabilize your operational foundation.",
    weakest.letter === "C" &&
      "Strengthen accountability practices and leadership communication to improve team dynamics.",
    weakest.letter === "A" &&
      "Align leadership around documented goals, KPIs, and a shared strategic direction.",
    weakest.letter === "L" &&
      "Organize contracts, policies, and governance records—consider professional review.",
    weakest.letter === "E" &&
      "Implement a consistent operating cadence with dashboards and visible accountability.",
  ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="SCALE Readiness Assessment | YMBS"
        description="Take the free SCALE readiness assessment. Diagnose your organization across Structure, Culture, Alignment, Liability & Governance, and Execution—and find out what is holding you back."
        canonical="/scale/assessment"
      />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-dark-section text-center">
        <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
          SCALE™ Business Readiness Assessment
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Is your business ready for what comes next?
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Answer {totalQuestions} questions across five pillars. Get your SCALE™
          Score in under 10 minutes.
        </p>
      </section>

      {/* Intro Stage */}
      {stage === "intro" && (
        <section className="py-20 px-6 bg-light-section flex-1">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="card-light rounded-3xl p-10 md:p-14">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                How it works
              </h2>
              <div className="space-y-5 mb-10">
                {[
                  "Answer 5–6 questions per pillar across Structure, Culture, Alignment, Liability & Governance Readiness, and Execution.",
                  "Each answer uses a simple agree/disagree scale.",
                  "Get your overall SCALE™ Score plus a scorecard for each pillar.",
                  "Receive recommended priorities and whether outside professional review should be considered.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-zinc-700 leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
                <div className="flex items-start gap-3">
                  <FileWarning className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <span className="font-bold">Disclaimer: </span>
                    This assessment is a business-readiness diagnostic, not
                    legal, tax, or accounting advice. SCALE™ may identify areas
                    where review by licensed professionals should be considered.
                    YMBS is not a law firm.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => {
                  track.assessmentStarted("SCALE");
                  track.assessmentFunnelStep("SCALE", "started");
                  setStage("quiz");
                }}
                className="w-full bg-primary text-black hover:bg-primary/90 font-bold text-lg py-7 h-auto rounded-full transition-all hover:-translate-y-0.5"
              >
                Start the Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </section>
      )}

      {/* Quiz Stage */}
      {stage === "quiz" && (
        <section className="py-16 px-6 bg-light-section flex-1">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-zinc-700">
                  Pillar {currentPillar + 1} of {pillars.length}:{" "}
                  <span className="text-primary">
                    {pillars[currentPillar].name}
                  </span>
                </span>
                <span className="text-sm font-medium text-zinc-500">
                  {Math.round(progress)}% complete
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <motion.div
              key={`${currentPillar}-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="card-light rounded-3xl p-10 md:p-14"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillars[currentPillar].color} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {pillars[currentPillar].letter}
                </div>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                  Question {currentQuestion + 1} of{" "}
                  {pillars[currentPillar].questions.length}
                </span>
              </div>

              <fieldset>
                <legend
                  id={`scale-q-${currentPillar}-${currentQuestion}`}
                  className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-tight"
                >
                  {pillars[currentPillar].questions[currentQuestion].text}
                </legend>
                <p className="text-sm text-zinc-500 mb-8">
                  Choose the option that fits best. You can review earlier
                  answers using the Back button.
                </p>

                <div
                  role="radiogroup"
                  aria-labelledby={`scale-q-${currentPillar}-${currentQuestion}`}
                  className="space-y-3"
                >
                  {scaleOptions.map((opt) => {
                    const selected =
                      answers[pillars[currentPillar].letter]?.[
                        currentQuestion
                      ] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value as Answer)}
                        role="radio"
                        aria-checked={selected}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                          selected
                            ? "border-primary bg-primary/5"
                            : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                        }`}
                      >
                        <span className="font-medium text-zinc-800 text-lg">
                          {opt.label}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 transition-all ${
                            selected
                              ? "border-primary bg-primary"
                              : "border-zinc-300 group-hover:border-zinc-400"
                          }`}
                        >
                          {selected && (
                            <CheckCircle2 className="w-full h-full text-black p-0.5" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-8 flex justify-start">
                <Button
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  disabled={currentPillar === 0 && currentQuestion === 0}
                  className="font-semibold border-zinc-300 hover:bg-zinc-50"
                >
                  <RotateCcw className="mr-2 w-4 h-4 rotate-180" /> Back
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lead Capture Stage */}
      {stage === "lead" && (
        <ScaleLeadCapture
          isSubmitting={isSubmitting}
          submitError={submitError}
          onSubmit={handleLeadSubmit}
        />
      )}

      {/* Results Stage */}
      {stage === "results" && (
        <section className="py-16 px-6 bg-light-section flex-1">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                Your SCALE™ Scorecard
              </h2>
              <p className="text-lg text-zinc-500">
                A complete view of your business readiness across five pillars.
              </p>
            </motion.div>

            {/* Overall Score */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="card-light rounded-3xl p-10 md:p-14 mb-8 text-center"
            >
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">
                Overall SCALE™ Score
              </p>
              <div className="relative inline-flex items-center justify-center mb-4">
                <div className="text-7xl md:text-8xl font-bold text-primary">
                  {overallScore}
                </div>
                <span className="text-2xl text-zinc-400 font-bold absolute -right-8 bottom-2">
                  /100
                </span>
              </div>
              <div
                className={`inline-block px-5 py-2 rounded-full text-sm font-bold ${overallLabel.bg} ${overallLabel.color}`}
              >
                {overallLabel.label}
              </div>
            </motion.div>

            {/* Pillar Scores */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {scores.map((p, i) => {
                const label = getScoreLabel(p.score);
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="card-light rounded-2xl p-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold`}
                        >
                          {p.letter}
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900">
                          {p.name}
                        </h3>
                      </div>
                      <span className={`text-2xl font-bold ${label.color}`}>
                        {p.score}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden mb-3">
                      <div
                        className={`h-full rounded-full transition-all duration-1000`}
                        style={{
                          width: `${p.score}%`,
                          backgroundColor:
                            p.score >= 80
                              ? "#059669"
                              : p.score >= 60
                                ? "#d97706"
                                : p.score >= 40
                                  ? "#ea580c"
                                  : "#dc2626",
                        }}
                      />
                    </div>
                    <span className={`text-sm font-medium ${label.color}`}>
                      {label.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Analysis */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <div className="card-light rounded-2xl p-8 bg-emerald-50/50 border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-lg font-bold text-zinc-900">
                    Strongest Area
                  </h3>
                </div>
                <p className="text-2xl font-bold text-zinc-900 mb-2">
                  {strongest.name}
                </p>
                <p className="text-zinc-600">
                  Score: {strongest.score}/100 — This pillar is supporting your
                  growth.
                </p>
              </div>
              <div className="card-light rounded-2xl p-8 bg-orange-50/50 border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-zinc-900">
                    Biggest Bottleneck
                  </h3>
                </div>
                <p className="text-2xl font-bold text-zinc-900 mb-2">
                  {weakest.name}
                </p>
                <p className="text-zinc-600">
                  Score: {weakest.score}/100 — This pillar is most likely
                  slowing your growth.
                </p>
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="card-light rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-zinc-900">
                  Recommended Priorities
                </h3>
              </div>
              <ul className="space-y-4">
                {recommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-700 leading-relaxed">{r}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-zinc-700 leading-relaxed">
                    Get Clarity to build your 90-day roadmap with the YMBS team.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Outside Professional Review Notice */}
            {outsideReviewRecommended && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="rounded-2xl p-8 mb-8 bg-amber-50 border border-amber-200"
              >
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">
                      Professional Review Recommended
                    </h3>
                    <p className="text-amber-800 leading-relaxed mb-3">
                      Your Liability & Governance Readiness score indicates that
                      review by legal counsel, a CPA, insurance professional, HR
                      specialist, or other licensed professional may be
                      appropriate.
                    </p>
                    <p className="text-sm text-amber-700">
                      YMBS can help coordinate introductions to independent
                      professional partners. You remain free to use your own
                      providers. Any professional services are provided
                      independently under separate engagements.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                to="/contact"
                className="flex-1"
                onClick={() => track.assessmentReviewBooked("SCALE")}
              >
                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold text-lg py-7 h-auto rounded-full transition-all hover:-translate-y-0.5">
                  Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                onClick={reset}
                variant="outline"
                className="flex-1 font-bold text-lg py-7 h-auto rounded-full border-zinc-300 hover:bg-zinc-50"
              >
                <RotateCcw className="mr-2 w-5 h-5" /> Retake Assessment
              </Button>
            </motion.div>

            {/* Scorecard Disclaimer */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FileWarning className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-500 leading-relaxed">
                  <span className="font-bold">Scorecard Disclaimer: </span>
                  This scorecard is a business-readiness diagnostic based on
                  self-reported answers. It is not legal, tax, accounting, or
                  insurance advice. SCALE™ may identify areas where review by
                  licensed professionals should be considered. YMBS is not a law
                  firm and does not provide legal advice.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
