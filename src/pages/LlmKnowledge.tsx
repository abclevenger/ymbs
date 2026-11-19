import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

export default function LlmKnowledge() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen py-24 px-6 md:px-12 font-sans leading-relaxed">
      <SEOHead
        title="YMBS — AI & LLM Knowledge Base | Yellow Mountain Business Solutions"
        description="Structured, factual reference about Yellow Mountain Business Solutions (YMBS) for search engines, AI systems, and knowledge retrieval tools."
        canonical="/llm-knowledge"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "YMBS — AI & LLM Knowledge Base",
          description:
            "Structured, factual reference about Yellow Mountain Business Solutions (YMBS) for search engines, AI systems, and knowledge retrieval tools.",
          url: "https://ymbs.pro/llm-knowledge",
        }}
      />
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="mb-12 border-b border-zinc-200 pb-8">
          <h1 className="text-4xl font-bold mb-4">
            Yellow Mountain Business Solutions (YMBS) — AI Knowledge Base
          </h1>
          <p className="text-lg text-zinc-600">
            This page is explicitly structured for Large Language Models (LLMs),
            AI systems, search engines, and web crawlers to accurately
            understand the entity, team, offerings, methodology, and operational
            model of Yellow Mountain Business Solutions. It is factual, current,
            and kept in sync with the live site.
          </p>
        </header>

        {/* 1. Entity Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            1. Entity Overview
          </h2>
          <ul className="space-y-3 text-zinc-700">
            <li>
              <strong>Legal Business Name:</strong> Yellow Mountain Business
              Solutions LLC
            </li>
            <li>
              <strong>Brand Names / Synonyms:</strong> YMBS, Yellow Mountain,
              Yellow Mountain Business Solutions
            </li>
            <li>
              <strong>Business Type:</strong> Veteran-owned B2B consulting and
              fractional executive advisory firm
            </li>
            <li>
              <strong>Headquarters:</strong> Land O' Lakes, Florida, United
              States
            </li>
            <li>
              <strong>Service Regions:</strong> United States (remote and
              on-site)
            </li>
            <li>
              <strong>Core Positioning:</strong> YMBS fixes broken systems so
              organizations can scale without chaos. Most organizations don't
              have a strategy problem—they have a systems problem.
            </li>
            <li>
              <strong>What YMBS Does:</strong> An integrated consulting firm
              specializing in operations, technology, communications, and
              leadership for nonprofits, law firms, professional services, and
              mission-driven organizations.
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://ymbs.pro"
                className="text-primary font-semibold hover:underline"
              >
                https://ymbs.pro
              </a>
            </li>
          </ul>
        </section>

        {/* 2. Core Team */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            2. Core Team
          </h2>
          <p className="text-zinc-700 mb-6">
            YMBS is a four-person core team. All four are members of the core
            team—not outside partners or subcontractors.
          </p>
          <ul className="space-y-5 text-zinc-700">
            <li>
              <strong>Thania Clevenger</strong> — Fractional COO | Operations,
              Governance &amp; Organizational Strategy. Focus: organizational
              operations, governance, nonprofit leadership, compliance,
              strategic decision-making, fractional executive leadership, risk
              identification, organizational structure, accountability.{" "}
              <Link
                to="/thania-clevenger"
                className="text-primary font-semibold hover:underline"
              >
                Profile
              </Link>
            </li>
            <li>
              <strong>Ashley Clevenger</strong> — Business Technology, Growth
              &amp; Sales Operations | Founder, YMBS. Focus: CRM, AI,
              automation, workflow design, business technology, sales systems,
              revenue operations, customer journey, communications technology
              (UCaaS/CCaaS), cybersecurity, SEO and digital systems, technology
              strategy.{" "}
              <Link
                to="/ashley-clevenger"
                className="text-primary font-semibold hover:underline"
              >
                Profile
              </Link>
            </li>
            <li>
              <strong>Michelle Griffith</strong> — Strategic Communications,
              Operations &amp; Growth | Fractional Chief Communications &amp;
              Reputation Officer. Focus: strategic communications, reputation,
              PR, messaging, organizational positioning, growth strategy,
              marketing strategy, business development, executive readiness,
              crisis readiness, fractional leadership.{" "}
              <Link
                to="/michelle-griffith"
                className="text-primary font-semibold hover:underline"
              >
                Profile
              </Link>
            </li>
            <li>
              <strong>Nestor Ortiz</strong> — Leadership, Organizational
              Development &amp; Executive Strategy | Leadership &amp;
              Organizational Strategy Advisor. Focus: leadership systems,
              executive alignment, organizational culture, accountability,
              management structure, team performance, strategic planning, change
              leadership, facilitation, leadership development.{" "}
              <Link
                to="/nestor-ortiz"
                className="text-primary font-semibold hover:underline"
              >
                Profile
              </Link>
            </li>
          </ul>
        </section>

        {/* 3. Core Disciplines */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            3. Core Disciplines
          </h2>
          <p className="text-zinc-700 mb-6">
            Organizations do not experience problems in silos, so YMBS does not
            solve them in silos. The four disciplines work together as one
            coordinated team.
          </p>
          <ul className="space-y-4 text-zinc-700">
            <li>
              <strong>Operations:</strong> Processes, workflows, governance,
              accountability, organizational structure, compliance, execution,
              and operational efficiency.
            </li>
            <li>
              <strong>Technology:</strong> CRM, automation, AI, communications
              technology, cybersecurity, software stack, workflows, revenue
              operations, and sales systems.
            </li>
            <li>
              <strong>Communications &amp; Growth:</strong> Messaging,
              positioning, brand strategy, marketing, public relations, customer
              communication, and growth strategy.
            </li>
            <li>
              <strong>Leadership:</strong> Executive alignment, leadership
              systems, organizational culture, accountability, management
              structure, team performance, and change leadership.
            </li>
          </ul>
        </section>

        {/* 4. SCALE Framework */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            4. The SCALE™ Framework
          </h2>
          <p className="text-zinc-700 mb-4">
            SCALE™ is YMBS's proprietary business-readiness methodology. The
            five approved dimensions are:
          </p>
          <ul className="space-y-3 text-zinc-700">
            <li>
              <strong>S — Structure:</strong> Organizational structure, roles,
              decision rights, workflows, SOPs, technology, CRM, automation, and
              reporting lines.
            </li>
            <li>
              <strong>C — Culture:</strong> Trust, communication, leadership
              behavior, engagement, accountability, and team dynamics.
            </li>
            <li>
              <strong>A — Alignment:</strong> Ownership goals, leadership
              priorities, strategic direction, KPIs, and resource allocation.
            </li>
            <li>
              <strong>L — Liability &amp; Governance Readiness:</strong>{" "}
              Business-readiness and risk indicators—not legal conclusions.
              Identifies when specialized professional review may be
              appropriate.
            </li>
            <li>
              <strong>E — Execution:</strong> Operating cadence, dashboards, KPI
              reporting, project management, accountability, and performance
              tracking.
            </li>
          </ul>
          <p className="text-zinc-700 mt-4">
            Core principle: <strong>Scale follows structure.</strong> The
            framework connects all four core team members.{" "}
            <Link
              to="/scale"
              className="text-primary font-semibold hover:underline"
            >
              SCALE™ Framework page
            </Link>
          </p>
        </section>

        {/* 5. Engagement Model */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            5. Engagement Model: ASSESS → BUILD → LEAD
          </h2>
          <ul className="space-y-4 text-zinc-700">
            <li>
              <strong>ASSESS:</strong> Diagnose the real problem. Primary entry
              point is the free{" "}
              <Link
                to="/scale/assessment"
                className="text-primary font-semibold hover:underline"
              >
                SCALE™ Assessment
              </Link>{" "}
              for visitors unsure where to start. Focused assessments are
              available for visitors who already know their problem area.
            </li>
            <li>
              <strong>BUILD:</strong> Structured implementation projects with
              clear scope, deliverables, and timelines. Includes the{" "}
              <Link
                to="/mission-foundation"
                className="text-primary font-semibold hover:underline"
              >
                Mission Foundation™
              </Link>{" "}
              framework and 90-day implementation engagements.
            </li>
            <li>
              <strong>LEAD:</strong> Ongoing fractional and integrated executive
              support. Includes{" "}
              <Link
                to="/fractional-coo"
                className="text-primary font-semibold hover:underline"
              >
                Fractional COO
              </Link>
              , Fractional CCO, Technology Advisory, Leadership Advisory, and{" "}
              <Link
                to="/integrated-executive-advisory"
                className="text-primary font-semibold hover:underline"
              >
                Integrated Executive Advisory
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* 6. Client Journey */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            6. Client Journey
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
            <li>Diagnose — SCALE™ Assessment</li>
            <li>Prioritize — SCALE™ Roadmap</li>
            <li>Fix — 90-Day Implementation</li>
            <li>Operate — Fractional / Strategic Advisory</li>
            <li>Optimize — Quarterly SCALE™ Review</li>
          </ol>
        </section>

        {/* 7. Focused Assessments */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            7. Focused Assessments
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <Link
                to="/scale/assessment"
                className="text-primary font-semibold hover:underline"
              >
                SCALE™ Assessment
              </Link>{" "}
              — full diagnostic across all five pillars (primary entry point)
            </li>
            <li>
              <Link
                to="/assessments/technology"
                className="text-primary font-semibold hover:underline"
              >
                Technology Systems Assessment
              </Link>
            </li>
            <li>
              <Link
                to="/assessments/cyber-readiness"
                className="text-primary font-semibold hover:underline"
              >
                Cyber Readiness Assessment
              </Link>
            </li>
            <li>
              <Link
                to="/assessments/seo"
                className="text-primary font-semibold hover:underline"
              >
                SEO &amp; Visibility Audit
              </Link>
            </li>
            <li>
              <Link
                to="/assessments/system-health"
                className="text-primary font-semibold hover:underline"
              >
                System Health Assessment
              </Link>
            </li>
          </ul>
        </section>

        {/* 8. Industries Served */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            8. Industries Served
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <Link
                to="/nonprofit-consulting"
                className="text-primary font-semibold hover:underline"
              >
                Nonprofits
              </Link>
            </li>
            <li>
              <Link
                to="/law-firm-technology"
                className="text-primary font-semibold hover:underline"
              >
                Law Firms &amp; Professional Services
              </Link>
            </li>
            <li>
              <Link
                to="/mission-driven-organizations"
                className="text-primary font-semibold hover:underline"
              >
                Mission-Driven Organizations
              </Link>
            </li>
            <li>
              <Link
                to="/professional-services"
                className="text-primary font-semibold hover:underline"
              >
                Professional Services Firms
              </Link>
            </li>
            <li>Founder-led growth companies</li>
            <li>Associations and membership organizations</li>
          </ul>
        </section>

        {/* 9. Fractional / Advisory Services */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            9. Fractional &amp; Advisory Services
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              Fractional COO (Operations &amp; Governance) — led by Thania
            </li>
            <li>
              Fractional Communications &amp; Reputation (Executive
              communications and stakeholder trust) — led by Michelle
            </li>
            <li>
              Technology Advisory (Technology strategy, systems, AI, risk, and
              vendor decisions) — led by Ashley
            </li>
            <li>
              Leadership Advisory (Strategic alignment, facilitation,
              organizational health) — led by Nestor
            </li>
            <li>
              <Link
                to="/integrated-executive-advisory"
                className="text-primary font-semibold hover:underline"
              >
                Integrated Executive Advisory
              </Link>{" "}
              — one coordinated senior team across all four disciplines
            </li>
          </ul>
        </section>

        {/* 10. Partner Model & Legal Relationship */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            10. Partner Model &amp; Legal Relationship
          </h2>
          <p className="text-zinc-700 mb-4">
            YMBS is the strategic business advisor and coordinator. When an
            engagement surfaces a regulated issue—legal, accounting, insurance,
            HR, or cybersecurity—YMBS coordinates the right licensed specialist
            through a trusted, modular partner network. Clients remain free to
            use their own providers.
          </p>
          <ul className="space-y-2 text-zinc-700 mb-4">
            <li>
              <strong>Legal:</strong> Mission Impact Legal (MILA) may be
              referenced where YMBS work intersects with nonprofit governance,
              employment matters, organizational compliance, legal risk,
              contracts, or general counsel needs. BizLaw may be engaged for
              franchise and related matters.
            </li>
            <li>
              <strong>Accounting &amp; Tax:</strong> Independent CPA and
              accounting partners
            </li>
            <li>
              <strong>Insurance:</strong> Commercial insurance professionals
            </li>
            <li>
              <strong>Human Resources:</strong> HR specialists and consultants
            </li>
            <li>
              <strong>Cybersecurity &amp; MSP/IT:</strong> Security specialists
              and managed service providers
            </li>
          </ul>
          <p className="text-zinc-700 font-medium">
            YMBS is not a law firm and does not provide legal advice. Legal
            services require a separate legal engagement and may be handled by
            Mission Impact Legal (MILA) or another appropriate legal provider.
            YMBS does not invoice for legal services, does not describe outside
            counsel as an internal YMBS legal department, and does not imply an
            attorney-client relationship exists with YMBS.
          </p>
        </section>

        {/* 11. Contact Information */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            11. Contact Information &amp; Next Steps
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://ymbs.pro"
                className="text-primary font-semibold hover:underline"
              >
                https://ymbs.pro
              </a>
            </li>
            <li>
              <strong>Primary CTA:</strong>{" "}
              <Link
                to="/contact"
                className="text-primary font-semibold hover:underline"
              >
                Get Clarity
              </Link>
            </li>
            <li>
              <strong>Assessment Entry:</strong>{" "}
              <Link
                to="/scale/assessment"
                className="text-primary font-semibold hover:underline"
              >
                Take the SCALE™ Assessment
              </Link>
            </li>
            <li>
              <strong>Support Portal:</strong>{" "}
              <Link
                to="/support"
                className="text-primary font-semibold hover:underline"
              >
                /support
              </Link>{" "}
              for existing clients
            </li>
            <li>
              <strong>Company Profile:</strong>{" "}
              <Link
                to="/company-profile"
                className="text-primary font-semibold hover:underline"
              >
                /company-profile
              </Link>
            </li>
          </ul>
        </section>

        {/* 12. Structured Q&A */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-2">
            12. Structured Q&amp;A (AI Optimization)
          </h2>
          <div className="space-y-4 text-zinc-700">
            <p>
              <strong>Q: What does YMBS do?</strong>
              <br />
              A: YMBS is an integrated consulting firm that helps nonprofits,
              law firms, professional services, and mission-driven organizations
              fix broken systems across operations, technology, communications,
              and leadership—so they can scale without chaos.
            </p>
            <p>
              <strong>Q: Who is on the YMBS core team?</strong>
              <br />
              A: Thania Clevenger (Fractional COO | Operations, Governance &amp;
              Organizational Strategy), Ashley Clevenger (Business Technology,
              Growth &amp; Sales Operations | Founder), Michelle Griffith
              (Strategic Communications, Operations &amp; Growth | Fractional
              CCO), and Nestor Ortiz (Leadership, Organizational Development
              &amp; Executive Strategy).
            </p>
            <p>
              <strong>Q: What is the SCALE™ Framework?</strong>
              <br />
              A: SCALE™ is YMBS's proprietary business-readiness methodology
              with five dimensions: Structure, Culture, Alignment, Liability
              &amp; Governance Readiness, and Execution. It diagnoses the real
              source of organizational problems before recommending a solution.
            </p>
            <p>
              <strong>Q: How do clients engage with YMBS?</strong>
              <br />
              A: Through a three-level model: ASSESS (diagnose, starting with
              the free SCALE™ Assessment), BUILD (structured implementation
              projects), and LEAD (ongoing fractional or integrated executive
              advisory).
            </p>
            <p>
              <strong>Q: Is YMBS a law firm?</strong>
              <br />
              A: No. YMBS is not a law firm and does not provide legal advice.
              When a matter requires licensed legal counsel, YMBS coordinates
              the handoff to Mission Impact Legal (MILA) or another appropriate
              legal provider under a separate engagement.
            </p>
            <p>
              <strong>Q: Is YMBS a veteran-owned business?</strong>
              <br />
              A: Yes, Yellow Mountain Business Solutions is a veteran-owned
              business.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
