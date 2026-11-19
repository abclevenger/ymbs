import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export default function Team() {
  const team = [
    {
      name: "Thania Clevenger",
      role: "Operations, Governance & Organizational Strategy",
      subtitle: "Fractional COO | Operations & Governance",
      image:
        "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png",
      bio: "Thania is the architect behind scalable organizational systems. She transforms tribal knowledge into documented workflows and builds compliance foundations that allow mission-driven organizations to scale safely and efficiently.",
      expertise: [
        "Standard Operating Procedures",
        "Governance",
        "Compliance",
        "Organizational Structure",
        "Accountability Systems",
      ],
      outcome:
        "Recovered $2M+ in operational waste across growing organizations.",
      emotional: "Built to bring order where growth created complexity.",
      link: "/thania-clevenger",
    },
    {
      name: "Ashley Clevenger",
      role: "Business Technology, Growth & Sales Operations",
      subtitle: "Technology Strategist | Founder, YMBS",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/51e89f65-186a-4fdc-84c6-eadc6e1a2e2c.jpg",
      bio: "Ashley connects business, technology, and sales operations. He builds CRM, automation, AI, and revenue systems—cutting through vendor chaos to turn disconnected tools into infrastructure that drives growth. Additional expertise includes cybersecurity, UCaaS/CCaaS, SEO, and custom application development.",
      expertise: [
        "CRM & Sales Systems",
        "AI & Automation",
        "Revenue Operations",
        "Cybersecurity",
        "UCaaS / CCaaS",
        "SEO & Digital Systems",
      ],
      outcome:
        "Built growth and technology systems driving 7-figure expansion.",
      emotional: "Turns technology from overhead into advantage.",
      link: "/ashley-clevenger",
    },
    {
      name: "Nestor Ortiz",
      role: "Leadership, Organizational Development & Executive Strategy",
      subtitle: "Leadership & Organizational Strategy Advisor",
      image:
        "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9047cf0dae815363fd4e1d.png",
      bio: "Nestor builds leadership systems, executive alignment, and accountability. He specializes in multi-year strategic planning and guiding boards and leadership teams through complex transitions—ensuring that the vision set in the boardroom translates directly into execution.",
      expertise: [
        "Strategic Planning",
        "Executive Alignment",
        "Change Leadership",
        "Organizational Culture",
        "Accountability Systems",
      ],
      outcome:
        "Developed accountable teams that perform without founder dependency.",
      emotional: "Builds leaders teams can trust without constant oversight.",
      link: "/nestor-ortiz",
    },
    {
      name: "Michelle Griffith",
      role: "Strategic Communications, Operations & Growth",
      subtitle: "Fractional Chief Communications & Reputation Officer",
      image:
        "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png",
      bio: "Michelle aligns strategic communications, organizational positioning, and growth strategy. Before joining YMBS, she spent more than a decade at Clearview Communications, including leadership of the firm, and served in national communications and crisis-response roles. Organizations bring her in when reputation, stakeholder trust, or a critical public moment is on the line.",
      expertise: [
        "Strategic Communications",
        "Organizational Positioning",
        "Growth Strategy",
        "Executive Readiness",
        "Reputation & Crisis Counsel",
        "Fractional CCO",
      ],
      outcome:
        "Aligned communication systems across high-growth leadership teams.",
      emotional:
        "Creates communication that keeps teams aligned under pressure.",
      link: "/michelle-griffith",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Our Team | YMBS"
        description="Meet the YMBS integrated advisory team: operations, technology, communications, and leadership specialists working together as one coordinated unit for nonprofits, law firms, and mission-driven organizations."
        canonical="/team"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6 drop-shadow-md">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Meet the YMBS Team
          </h1>
          <p className="text-xl text-primary font-bold mb-4 max-w-2xl mx-auto">
            Senior specialists. One coordinated team.
          </p>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium text-balance">
            Clients may enter through one discipline, but YMBS brings the right
            expertise together when the problem crosses departments. Operations
            + Technology + Communications + Leadership.
          </p>
        </div>
      </section>

      {/* Metric Bar */}
      <section className="bg-white py-12 border-b border-zinc-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-10 text-zinc-900 uppercase tracking-widest">
            One coordinated leadership team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "Operations", label: "Governance & execution" },
              { number: "Technology", label: "Systems & growth" },
              { number: "Communications", label: "Messaging & reputation" },
              { number: "Leadership", label: "Alignment & strategy" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {stat.number}
                </span>
                <span className="text-base text-zinc-600 font-medium tracking-wide text-balance">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roster */}
      <section className="py-24 bg-light-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="card-light rounded-2xl overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} at Yellow Mountain Business Solutions`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
                  </div>
                  <div className="sm:w-3/5 p-8 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-zinc-900">
                        {member.name}
                      </h3>
                      <p className="text-primary font-bold uppercase tracking-wider text-sm">
                        {member.role}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase tracking-wide mt-1 mb-1">
                        {member.subtitle}
                      </p>
                    </div>
                    <p className="text-lg text-zinc-600 leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 mb-6 flex flex-col gap-2">
                      <p className="text-lg font-medium text-zinc-900 italic">
                        "{member.outcome}"
                      </p>
                      <p className="text-base text-zinc-500 italic">
                        {member.emotional}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wider">
                        Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, j) => (
                          <span
                            key={j}
                            className="bg-zinc-100 text-zinc-600 text-xs font-semibold px-2.5 py-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Optional Social Link */}
                    <div className="mt-6 pt-6 border-t border-zinc-100 flex justify-between items-center">
                      <Link to={member.link}>
                        <Button
                          variant="outline"
                          className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm"
                        >
                          View Full Profile{" "}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO CALL */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              When to call them
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Thania",
                desc: "Your organization feels operationally stuck, governance is unclear, or growth is exposing process weaknesses.",
              },
              {
                name: "Ashley",
                desc: "Technology decisions are getting expensive, fragmented, risky, or difficult to implement.",
              },
              {
                name: "Michelle",
                desc: "Leadership needs to communicate something important, sensitive, or reputation-critical.",
              },
              {
                name: "Nestor",
                desc: "Leadership is misaligned, difficult decisions are stalled, or strategy isn't turning into action.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200"
              >
                <h3 className="text-lg font-bold mb-2 text-primary uppercase tracking-wider">
                  Call {item.name} when:
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Partnership: Fractional COO + CCO */}
      <section className="py-24 bg-dark-section text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              Featured Executive Partnership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Transition Partnership: Fractional COO + CCO
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Thania determines{" "}
              <span className="text-white font-semibold">
                what needs to happen operationally
              </span>
              . Michelle determines{" "}
              <span className="text-white font-semibold">
                how those decisions get communicated
              </span>{" "}
              to boards, employees, clients, and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-dark rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904440722007d7ffee3e5b.png"
                  alt="Thania Clevenger, Fractional COO at YMBS"
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Thania Clevenger
                  </h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">
                    Fractional COO · Operations
                  </p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Redesigns workflows, diagnoses operational bottlenecks, and
                restructures governance systems so the organization can execute
                efficiently.
              </p>
            </div>

            <div className="card-dark rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a90453a9a0fb7c669893ce7.png"
                  alt="Michelle Griffith, Strategic Communications, Operations & Growth Advisor at YMBS"
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Michelle Griffith
                  </h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">
                    Fractional CCO · Communications
                  </p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Crafts the narrative around operational changes, prepares
                leadership for high-stakes moments, and protects reputation
                during transitions.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/michelle-griffith">
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full">
                Learn More About Michelle Griffith{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SCALE Framework Integration */}
      <section className="py-20 bg-light-section border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  The SCALE™ Framework
                </p>
                <h2
                  className="text-2xl font-bold text-zinc-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Four experts. One diagnostic lens.
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  The team works across the five SCALE dimensions—not as four
                  disconnected practices. Thania owns Structure and governance.
                  Ashley owns the technology that runs it. Michelle owns how
                  decisions get communicated. Nestor owns the Culture and
                  Alignment that make execution stick.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/scale"
                    className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Explore the SCALE™ Framework{" "}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/scale/assessment"
                    className="text-zinc-600 font-medium text-sm hover:text-primary transition-colors"
                  >
                    Take the assessment →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Team Philosophy */}
      <section className="pt-16 pb-14 bg-alt-section border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
            One integrated team.{" "}
            <span className="text-primary font-bold">No silos.</span>
          </h2>
          <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
            YMBS was built to solve the problem of siloed consulting. You no
            longer need to hire one firm for nonprofit strategic planning,
            another for IT audits, and a third for executive coaching. We
            provide one integrated team of experts spanning operations,
            technology, communications, and leadership.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6 border border-zinc-200 shadow-sm h-32 w-48">
              <img
                src="https://vibe.filesafe.space/1776094666446468637/attachments/98bbc533-b5eb-4bdc-9f89-eae373909f5f.webp"
                alt="Yellow Mountain Logo"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6 border border-zinc-200 shadow-sm h-32 w-48">
              <img
                src="https://vibe.filesafe.space/1776094666446468637/attachments/82593cbf-0d03-4aeb-9662-05cf227aaceb.png"
                alt="Veteran Owned Business"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(252,223,2,0.1),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to recover the profit hiding inside your operation?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 text-balance">
            Get clarity. We'll tell you directly what we'd recommend, and
            whether we're the right fit for your organization.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full btn-glow hover:-translate-y-0.5 transition-all duration-300">
                Get Clarity <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
