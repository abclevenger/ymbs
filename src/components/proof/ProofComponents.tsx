import { type ReactNode } from "react";
import {
  CheckCircle2,
  Quote,
  Award,
  Layers,
  Users2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================================
 *  YMBS Reusable Proof Components
 *
 *  These components are intentionally EMPTY of invented claims.
 *  Populate them only with verified data from VERIFIED_PROOF.ts.
 *
 *  Placeholder convention:
 *    [VERIFIED RESULT NEEDED]
 *    [VERIFIED TESTIMONIAL NEEDED]
 *  ========================================================================= */

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

/* ----------------------------------------------------------------------- */
/* 1. CLIENT TESTIMONIAL                                                    */
/* ----------------------------------------------------------------------- */

export interface TestimonialData {
  quote: string;
  author: string;
  title: string; // role at client org
  organization?: string; // anonymized if needed, e.g. "Regional Nonprofit"
  verified?: boolean;
}

export function Testimonial({
  data,
  variant = "light",
}: {
  data: TestimonialData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <figure
      className={`rounded-2xl p-8 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      <Quote
        className={`w-8 h-8 mb-4 ${isDark ? "text-primary/70" : "text-primary/60"}`}
        aria-hidden="true"
      />
      <blockquote
        className={`text-lg leading-relaxed mb-6 italic ${
          isDark ? "text-white/90" : "text-[#1A2433]"
        }`}
      >
        {data.quote}
      </blockquote>
      <figcaption className="pt-4 border-t border-zinc-200/50">
        <p
          className={`font-bold ${isDark ? "text-white" : "text-[#1A2433]"}`}
          style={serif}
        >
          {data.author}
        </p>
        <p className="text-sm text-primary font-medium mt-0.5">
          {data.title}
          {data.organization ? ` · ${data.organization}` : ""}
        </p>
        {data.verified && (
          <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Verified client testimonial
          </p>
        )}
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------------- */
/* 2. OUTCOME SNAPSHOT                                                     */
/* ----------------------------------------------------------------------- */

export interface OutcomeSnapshotData {
  metric?: string; // e.g. "30%" — only if verified
  label: string; // e.g. "increase in retained clients"
  context?: string; // short explanation
  disciplines: string[];
  verified?: boolean;
}

export function OutcomeSnapshot({
  data,
  variant = "light",
}: {
  data: OutcomeSnapshotData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-2xl p-6 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      {data.metric && (
        <p className="text-4xl font-bold text-primary mb-2" style={serif}>
          {data.metric}
        </p>
      )}
      <p
        className={`font-bold mb-1 ${isDark ? "text-white" : "text-[#1A2433]"}`}
      >
        {data.label}
      </p>
      {data.context && (
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-white/60" : "text-zinc-600"
          }`}
        >
          {data.context}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {data.disciplines.map((d, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase"
          >
            {d}
          </span>
        ))}
      </div>
      {data.verified === false && (
        <p className="text-xs text-amber-600 mt-3 italic">
          [VERIFIED RESULT NEEDED]
        </p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* 3. CREDENTIAL / CERTIFICATION                                            */
/* ----------------------------------------------------------------------- */

export interface CredentialData {
  name: string; // e.g. "Accredited in Public Relations (APR)"
  holder: string; // team member name
  issuer?: string; // e.g. "PRSA"
  description?: string;
  verified?: boolean;
}

export function Credential({
  data,
  variant = "light",
}: {
  data: CredentialData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl p-6 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        <Award className="w-5 h-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p
          className={`font-bold ${isDark ? "text-white" : "text-[#1A2433]"}`}
          style={serif}
        >
          {data.name}
        </p>
        <p className="text-sm text-primary font-medium mt-0.5">
          {data.holder}
          {data.issuer ? ` · ${data.issuer}` : ""}
        </p>
        {data.description && (
          <p
            className={`text-sm mt-2 leading-relaxed ${
              isDark ? "text-white/60" : "text-zinc-600"
            }`}
          >
            {data.description}
          </p>
        )}
        {data.verified === false && (
          <p className="text-xs text-amber-600 mt-2 italic">
            [VERIFICATION NEEDED]
          </p>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* 4. FRAMEWORK / METHODOLOGY PROOF                                        */
/* ----------------------------------------------------------------------- */

export interface FrameworkProofData {
  name: string; // e.g. "SCALE™", "V.I.T.A.L.™", "Living Technology Record", "Compass 16"
  owner: string; // team member or "YMBS"
  description: string;
  link?: string;
  linkText?: string;
  status?: "published" | "pending-review"; // pending = not yet approved for public
}

export function FrameworkProof({
  data,
  variant = "light",
}: {
  data: FrameworkProofData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const pending = data.status === "pending-review";
  return (
    <div
      className={`rounded-2xl p-6 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
        <h3
          className={`text-lg font-bold ${isDark ? "text-white" : "text-[#1A2433]"}`}
          style={serif}
        >
          {data.name}
        </h3>
      </div>
      <p
        className={`text-sm leading-relaxed mb-3 ${
          isDark ? "text-white/70" : "text-zinc-600"
        }`}
      >
        {data.description}
      </p>
      <p className="text-xs text-primary font-medium">Led by {data.owner}</p>
      {pending && (
        <p className="text-xs text-amber-600 mt-2 italic">
          [CONTENT APPROVAL NEEDED — do not publish details until confirmed]
        </p>
      )}
      {data.link && data.linkText && !pending && (
        <Link
          to={data.link}
          className="text-sm text-primary font-bold inline-flex items-center gap-1.5 mt-3 hover:gap-2.5 transition-all"
        >
          {data.linkText} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* 5. INDUSTRY EXPERIENCE                                                  */
/* ----------------------------------------------------------------------- */

export interface IndustryExperienceData {
  industry: string;
  experience: string; // category-level description, no named clients
  disciplines: string[];
}

export function IndustryExperience({
  data,
  variant = "light",
}: {
  data: IndustryExperienceData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-2xl p-6 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      <h3
        className={`text-lg font-bold mb-2 ${
          isDark ? "text-white" : "text-[#1A2433]"
        }`}
        style={serif}
      >
        {data.industry}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-3 ${
          isDark ? "text-white/70" : "text-zinc-600"
        }`}
      >
        {data.experience}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {data.disciplines.map((d, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* 6. BEFORE → AFTER TRANSFORMATION                                        */
/* ----------------------------------------------------------------------- */

export interface BeforeAfterData {
  before: string;
  after: string;
  discipline: string;
  verified?: boolean;
}

export function BeforeAfter({
  data,
  variant = "light",
}: {
  data: BeforeAfterData;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-2xl p-6 border ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white border-zinc-200 shadow-sm"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
            Before
          </p>
          <p
            className={`text-sm leading-relaxed ${
              isDark ? "text-white/70" : "text-zinc-600"
            }`}
          >
            {data.before}
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">
            After
          </p>
          <p
            className={`text-sm font-medium leading-relaxed ${
              isDark ? "text-white" : "text-[#1A2433]"
            }`}
          >
            {data.after}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-zinc-200/50 flex items-center justify-between">
        <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase">
          {data.discipline}
        </span>
        {data.verified === false && (
          <span className="text-xs text-amber-600 italic">
            [VERIFIED OUTCOME NEEDED]
          </span>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* 7. PROOF STRIP — compact credibility band                              */
/* ----------------------------------------------------------------------- */

export interface ProofStripItem {
  icon?: ReactNode;
  label: string;
}

export function ProofStrip({
  items,
  variant = "light",
}: {
  items: ProofStripItem[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 ${
        isDark ? "text-white/60" : "text-zinc-500"
      }`}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5 text-sm font-medium">
          {item.icon ?? (
            <Users2
              className="w-4 h-4 text-primary shrink-0"
              aria-hidden="true"
            />
          )}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
