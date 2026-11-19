export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-new-tech-stack-failed",
    title: "Why Your New Tech Stack Failed (And How to Fix It)",
    category: "Technology & AI",
    author: "Ashley Clevenger",
    date: "Oct 12, 2025",
    excerpt:
      "You bought the software, trained the team, and a year later everyone is back to using spreadsheets. Here's why that happens and the exact steps to reverse it.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "6 min read",
    content: [
      "Most technology implementations fail not because the software is bad, but because the organization around it was never ready. The tool was purchased before the workflow was understood, the team was trained before the process was defined, and adoption was assumed rather than earned.",
      "The pattern is predictable: a leadership team sees a demo, gets excited, signs a contract, and expects transformation. Six months later, usage has collapsed, the old spreadsheets are back, and the new platform is an expensive ghost town.",
      "The fix starts with a simple question: what is the actual problem this tool is solving? If you cannot answer that in one sentence with a measurable outcome, you are buying software, not solving a problem.",
      "Before any new implementation, document the current workflow end to end. Identify the friction points. Define what success looks like in 90 days. Then—and only then—evaluate whether a new tool is even the right answer.",
      "Adoption is not a training problem. It is a design problem. If the new system makes people's jobs harder, they will work around it. The goal is to make the right way the easy way.",
      "At YMBS, we have seen organizations recover failed implementations by stepping back, mapping the real workflow, and rebuilding the system around how the work actually happens—not how the vendor demo pretended it did.",
    ],
  },
  {
    slug: "tribal-knowledge-trap-nonprofits",
    title: "The 'Tribal Knowledge' Trap in Nonprofits",
    category: "Operations & Governance",
    author: "Thania Clevenger",
    date: "Sep 28, 2025",
    excerpt:
      "When key processes live entirely in the heads of your most veteran staff members, your organization is at massive risk. Here is how to extract and document that knowledge.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "5 min read",
    content: [
      "In many nonprofits, the most important processes exist nowhere on paper. They live in the memory of one or two long-tenured staff members who quietly hold the organization together. This is not loyalty—it is a liability.",
      "When that person goes on vacation, gets sick, or leaves, the organization discovers how fragile its operations actually are. Grant reports miss deadlines. Board packets are incomplete. Reimbursements stall. The gap is invisible until it is catastrophic.",
      "The solution is not to hire more people. It is to make the knowledge transferable. Start with the processes that would cause the most disruption if they stopped tomorrow. Document them step by step, with the person who currently owns them.",
      "The goal is not a massive binder no one reads. It is a living system of documented workflows that any qualified person could follow. Start small, prioritize by risk, and build the habit of documentation into how work gets done.",
      "Tribal knowledge feels efficient because it avoids the work of writing things down. But the cost is paid later—at the worst possible moment—when that knowledge walks out the door.",
    ],
  },
  {
    slug: "getting-your-board-to-make-decisions",
    title: "Getting Your Board to Actually Make Decisions",
    category: "Leadership & Organizational Strategy",
    author: "Nestor Ortiz",
    date: "Sep 15, 2025",
    excerpt:
      "If your board meetings feel like endless discussions that never lead to action items, your governance structure needs a reset. Try this framework at your next meeting.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "5 min read",
    content: [
      "A board that discusses endlessly but decides nothing is not a governance body—it is a committee of concern. The symptom is familiar: the same topics appear on every agenda, conversations circle without landing, and action items are vague or absent.",
      "The root cause is usually unclear decision rights. When no one knows who actually has authority to decide, every decision becomes a group negotiation. That is exhausting and ineffective.",
      "Start by clarifying which decisions belong to the board, which belong to the executive director, and which require joint sign-off. Write it down. Make it visible. Most boards have never had this conversation explicitly.",
      "Next, structure agendas around decisions, not updates. If an item does not require a decision, it does not need board time. Send updates in writing. Reserve meeting time for the choices that actually require collective judgment.",
      "Finally, close every agenda item with a clear action: who decides, who acts, and by when. If you cannot answer those three questions, the item is not ready for the board.",
    ],
  },
  {
    slug: "cybersecurity-basics-mission-driven-orgs",
    title: "Cybersecurity Basics for Mission-Driven Orgs",
    category: "Technology & AI",
    author: "Ashley Clevenger",
    date: "Aug 30, 2025",
    excerpt:
      "You don't need a massive enterprise budget to protect your organization's data. Start with these five fundamental security practices that cost almost nothing.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "7 min read",
    content: [
      "Mission-driven organizations are not too small to be targeted. In fact, they are often preferred targets precisely because they tend to underinvest in security while holding sensitive donor, client, and operational data.",
      "The good news is that the vast majority of breaches are preventable with fundamentals—not expensive enterprise tools. Here are five practices that cost almost nothing and eliminate most risk.",
      "First, enable multi-factor authentication on every account that supports it. This single step blocks the overwhelming majority of automated account takeover attempts. It is free and takes minutes.",
      "Second, stop reusing passwords. A password manager costs a few dollars per user per month and eliminates the single most common breach vector: credential reuse across services.",
      "Third, keep systems updated. Unpatched software is the entry point for most ransomware. Turn on automatic updates wherever possible and assign someone to own it.",
      "Fourth, back up your data in a way that is disconnected from your network. If ransomware encrypts your primary systems, a clean offline backup is your recovery path.",
      "Fifth, train your team. Most breaches start with a human clicking something they should not have. A short, regular training cadence beats a once-a-year compliance video.",
    ],
  },
  {
    slug: "when-to-hire-fractional-coo",
    title: "When to Hire a Fractional COO",
    category: "Operations & Governance",
    author: "Thania Clevenger",
    date: "Aug 14, 2025",
    excerpt:
      "You're too big to run operations off the side of your desk, but too small for a full-time executive hire. Here is how a fractional COO bridges the gap.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "6 min read",
    content: [
      "There is a stage every growing organization hits where the founder or executive director can no longer personally hold every operational thread. Things start slipping. Decisions get delayed. The organization is too complex to run on instinct alone.",
      "At the same time, a full-time COO at $150,000+ per year is often more than the organization can justify. The work exists, but not at 40 hours a week every week. This is the gap a fractional COO fills.",
      "A fractional COO brings senior operational leadership at a fraction of the cost—typically a set number of days per month or a scoped engagement. You get executive-level structure, governance, and execution without the full-time commitment.",
      "The right time to consider it is when you notice recurring symptoms: unclear ownership, inconsistent processes, leadership spending time on operations instead of strategy, or growth exposing weaknesses that did not matter when you were smaller.",
      "The wrong time is when you want someone to simply execute your existing chaos more efficiently. A fractional COO's value is in building the systems that make the chaos unnecessary—not in working harder inside it.",
    ],
  },
  {
    slug: "aligning-internal-communications-change",
    title: "Aligning Internal Communications During Change",
    category: "Communications & Reputation",
    author: "Michelle Griffith",
    date: "Jul 22, 2025",
    excerpt:
      "The fastest way to derail an organizational change is inconsistent messaging. How to ensure your leadership team speaks with one voice.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "5 min read",
    content: [
      "During organizational change, the message your team receives is rarely the message leadership sent. It passes through layers of managers, each adding their own interpretation, until what reaches the front line bears little resemblance to the original intent.",
      "This is not a communication problem—it is an alignment problem. If your leadership team is not saying the same thing in the same way, the organization will fill the gaps with speculation. And speculation during change is almost always worse than the truth.",
      "Start with a single, clear message framework. What is changing, why, what it means for people, and what happens next. Every leader should be able to deliver this in under two minutes without notes.",
      "Then equip managers to cascade it. Give them the talking points, the anticipated questions, and the approved answers. Do not assume managers will figure out what to say—they need the same clarity leadership has.",
      "Finally, listen. Set up channels to hear what is actually landing. If the message is being misunderstood, the problem is almost never the audience. It is the sender. Adjust and repeat.",
    ],
  },
  {
    slug: "nonprofit-audit-readiness-checklist",
    title: "Nonprofit Audit Readiness: A 90-Day Checklist",
    category: "Nonprofit Management",
    author: "Thania Clevenger",
    date: "Jul 10, 2025",
    excerpt:
      "Audits don't have to be chaos. Follow this 90-day checklist to get your documentation, governance, and financial records audit-ready.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "8 min read",
    content: [
      "For many nonprofits, audit season is a scramble. Documentation is scattered, board minutes are incomplete, and someone is hunting for receipts at midnight. It does not have to be this way.",
      "Audit readiness is not a once-a-year event—it is a year-round operational discipline. But if you are starting late, here is a 90-day path to get organized.",
      "Days 1–30: Gather your governance documents. Board minutes, bylaws, conflict of interest policies, and approval records. If these are incomplete, that is your first priority—auditors look at governance before anything else.",
      "Days 31–60: Reconcile your financial records. Bank statements, expense documentation, grant tracking, and restricted vs. unrestricted funds. Ensure every transaction has a clear paper trail.",
      "Days 61–90: Prepare your schedules and supporting documentation. Fixed asset records, accounts payable and receivable detail, and any grant compliance reports. Walk through the audit process with your team so there are no surprises.",
      "The organizations that handle audits calmly are the ones that built documentation into their daily operations. The audit then becomes a confirmation of what you already know—not a forensic excavation.",
    ],
  },
  {
    slug: "evaluating-legal-practice-management-software",
    title: "Evaluating Legal Practice Management Software",
    category: "Law Firm Technology",
    author: "Ashley Clevenger",
    date: "Jun 28, 2025",
    excerpt:
      "A vendor-neutral framework for evaluating practice management platforms for law firms—without the sales pressure.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "9 min read",
    content: [
      "Choosing practice management software is one of the most consequential technology decisions a law firm makes. The wrong choice costs tens of thousands of dollars, months of disruption, and the goodwill of your staff.",
      "The problem is that most firms evaluate software by watching a polished demo. Demos are designed to sell, not to reveal whether the platform fits how your firm actually works.",
      "Start with your workflows, not the software. Map how matters move through your firm today—intake, assignment, document generation, billing, and reporting. Then evaluate platforms against that reality.",
      "Evaluate integration, not just features. A practice management system that cannot connect to your accounting, email, or document storage creates new silos while solving old ones.",
      "Consider total cost, not sticker price. Implementation, training, migration, ongoing support, and the cost of switching away if it fails. The cheapest platform is rarely the least expensive.",
      "Finally, talk to firms like yours who actually use it—not the references the vendor hand-picks. Ask what broke, what surprised them, and whether they would choose it again.",
    ],
  },
  {
    slug: "preparing-difficult-board-presentation",
    title: "Preparing for a Difficult Board Presentation",
    category: "Communications & Reputation",
    author: "Michelle Griffith",
    date: "Jun 15, 2025",
    excerpt:
      "When the message matters and the room is tough, preparation is everything. A framework for walking in composed, disciplined, and ready.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "6 min read",
    content: [
      "A difficult board presentation is not a test of your slides. It is a test of your composure, your clarity, and your preparation for the questions you hope no one asks.",
      "Most leaders prepare the presentation and hope the Q&A goes easy. The leaders who succeed do the opposite—they spend more time preparing for the hardest questions than for the slides themselves.",
      "Start by identifying the three questions you most hope the board does not ask. Those are the questions you must answer best. Draft clear, honest, 60-second responses to each one.",
      "Next, align your message. Know your one sentence—the single thing you want every board member to walk away believing. If you cannot state it in one sentence, you have not finished preparing.",
      "Finally, rehearse out loud, ideally with someone who will push back. The first time you hear a hard question should not be in the boardroom. Composure comes from having already navigated the discomfort in advance.",
      "When the message matters and the room is tough, you do not rise to the occasion. You fall to your level of preparation. Make that level high enough.",
    ],
  },
  {
    slug: "law-firm-intake-automation-guide",
    title: "Law Firm Intake Automation: A Practical Guide",
    category: "Law Firm Technology",
    author: "Ashley Clevenger",
    date: "May 30, 2025",
    excerpt:
      "Intake is where law firms win or lose clients. Here is a practical framework for automating intake without losing the human touch that converts.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "7 min read",
    content: [
      "Intake is the most consequential moment in a law firm's relationship with a potential client. It is also the moment most firms handle with disconnected tools, manual data entry, and slow response times that lose cases.",
      "The problem is not effort—most firms work hard at intake. The problem is that the process spans phone, email, web forms, and a CRM that may or may not talk to any of them. A potential client calls, emails, and submits a form, and no one connects the three.",
      "Automation does not mean removing the human. It means removing the friction so the human can focus on the conversation, not the data entry. The right intake system captures information once, routes it to the right person, and follows up automatically.",
      "Start by mapping your current intake flow end to end. Where does a lead enter? Who responds? How long does it take? Where does the information live? Most firms have never done this, and the gaps are immediately obvious.",
      "Then design the target flow. One entry point. Automatic routing. Immediate acknowledgment. A defined response time. A clear next step. The technology to support this exists in most modern CRMs—the gap is configuration, not capability.",
      "Finally, measure. Track response time, conversion rate, and where leads drop off. Intake automation is not a one-time project; it is a system you refine as you learn what actually converts.",
    ],
  },
  {
    slug: "nonprofit-board-governance-essentials",
    title: "Nonprofit Board Governance Essentials",
    category: "Operations & Governance",
    author: "Thania Clevenger",
    date: "May 18, 2025",
    excerpt:
      "Clear governance is not about control—it is about clarity. A practical guide to the governance fundamentals every nonprofit board should have in place.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "6 min read",
    content: [
      "Most nonprofit governance problems are not caused by bad people. They are caused by unclear structure. When no one knows who decides what, every decision becomes a negotiation, and the organization slows down.",
      "The foundation is decision rights. Which decisions belong to the board, which to the executive director, and which require joint sign-off. Write it down. Make it visible. Most boards have never had this conversation explicitly.",
      "Second is meeting structure. Boards that spend meeting time on updates rather than decisions waste their most valuable asset: collective judgment. Send updates in writing. Reserve meeting time for choices that require it.",
      "Third is documentation. If a key process exists only in someone's head, the organization is at risk. Document the core processes—financial controls, reporting, compliance—so they survive staff transitions.",
      "Fourth is reporting. The board needs enough visibility to govern without drowning in detail. The right reports answer the questions the board is responsible for, not every question that could be asked.",
      "Good governance feels boring because it works. The drama comes when governance is absent. Build the structure, and the organization can focus on its mission instead of its own internal friction.",
    ],
  },
  {
    slug: "fractional-coo-vs-consultant",
    title: "Fractional COO vs. Consultant: What's the Difference",
    category: "Operations & Governance",
    author: "Thania Clevenger",
    date: "May 5, 2025",
    excerpt:
      "A consultant recommends. A fractional COO implements. Understanding the difference helps you hire the right kind of help for your situation.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "5 min read",
    content: [
      "The terms get used interchangeably, but they describe fundamentally different engagements. A consultant studies your organization and delivers recommendations. A fractional COO takes ownership of operations and implements.",
      "Consultants are valuable when you need expertise you do not have and a fresh perspective. They diagnose, advise, and leave. The implementation is your problem. This is the right choice when you have the capacity to execute and only need the strategy.",
      "A fractional COO is the right choice when the problem is not just strategy but execution. When you know something needs to change but no one has the time or seniority to drive it. When operations need leadership, not just advice.",
      "The cost structure differs too. Consultants often bill by project or deliverable. Fractional COOs typically work on a monthly engagement for a defined scope of time. You get ongoing senior leadership without a full-time hire.",
      "The mistake organizations make is hiring a consultant when they actually need execution, then being frustrated that nothing changed. The recommendations were probably right. No one was there to implement them.",
      "Ask yourself: do we need someone to tell us what to do, or someone to help us do it? The answer tells you which you need.",
    ],
  },
  {
    slug: "crm-selection-nonprofits-guide",
    title: "CRM Selection for Nonprofits: A Practical Guide",
    category: "Technology & AI",
    author: "Ashley Clevenger",
    date: "Apr 22, 2025",
    excerpt:
      "A CRM is the backbone of nonprofit operations. Here is a vendor-neutral framework for choosing one that fits how your organization actually works.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "8 min read",
    content: [
      "Choosing a CRM is one of the most consequential technology decisions a nonprofit makes. The right choice organizes your donors, programs, and operations. The wrong choice creates an expensive system no one uses.",
      "Most nonprofits choose by watching a demo and comparing feature lists. This is backwards. Features matter less than fit. A CRM with every feature that does not match your workflows is worse than a simpler one that does.",
      "Start with your workflows. How do donors enter your system? How are programs tracked? What reports does the board need? Map the actual flow of information through your organization before evaluating a single platform.",
      "Consider total cost, not sticker price. Implementation, training, data migration, ongoing support, and the cost of switching if it fails. The cheapest CRM is rarely the least expensive.",
      "Evaluate integration. A CRM that cannot connect to your email, accounting, or fundraising tools creates new silos while solving old ones. Integration capability is not a feature—it is a requirement.",
      "Finally, talk to organizations like yours who actually use it. Ask what broke, what surprised them, and whether they would choose it again. The vendor's references are curated; peer references are honest.",
    ],
  },
  {
    slug: "crisis-communications-readiness",
    title: "Crisis Communications Readiness for Leaders",
    category: "Communications & Reputation",
    author: "Michelle Griffith",
    date: "Apr 10, 2025",
    excerpt:
      "The best time to prepare for a crisis is before it happens. A practical framework for leadership teams to build crisis readiness into their organization.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "6 min read",
    content: [
      "A crisis is not the time to figure out your communications. It is the time to execute a plan you already built. Organizations that handle crises well are not luckier—they are more prepared.",
      "The first step is identifying what a crisis looks like for your organization. A data breach, a leadership departure, a program failure, a public controversy. Name the scenarios so you can prepare for them specifically.",
      "Second, build a response team and define roles. Who speaks? Who decides? Who monitors? Who communicates internally? When no one knows their role, everyone improvises, and improvisation during a crisis is how small problems become large ones.",
      "Third, prepare holding statements. You will not have all the facts immediately, but you can control the first message. A holding statement acknowledges the situation, commits to transparency, and buys time to gather facts. Without one, the silence becomes the story.",
      "Fourth, rehearse. A plan on a shelf that no one has practiced is barely better than no plan. Run the scenario. Let leaders feel the pressure in a controlled environment. The first time someone faces a hard question should not be in a real crisis.",
      "Crisis readiness is not paranoia. It is the same discipline as fire drills—uncomfortable to prepare, invaluable when needed. The organizations that survive crises with their reputation intact are the ones that prepared.",
    ],
  },
  {
    slug: "ai-for-small-business-reality-check",
    title: "AI for Small Business: A Reality Check",
    category: "Technology & AI",
    author: "Ashley Clevenger",
    date: "Mar 28, 2025",
    excerpt:
      "AI is powerful, but most small businesses are applying it in the wrong places. Here is how to find where AI actually creates value versus where it creates noise.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "7 min read",
    content: [
      "Every small business leader is being told they need AI. Most are not sure what that means. The result is a wave of AI implementations that look impressive and deliver nothing measurable.",
      "The first question is not what AI can do, but what your organization actually needs. AI is a tool, not a strategy. A tool without a problem to solve is an expense, not an investment.",
      "The highest-ROI applications of AI for small organizations are unglamorous: summarizing documents, drafting first versions of communications, categorizing data, answering routine questions. These eliminate hours of repetitive work without requiring enterprise infrastructure.",
      "The lowest-ROI applications are the ones that sound impressive: autonomous agents, complex decision systems, replacing human judgment in high-stakes situations. These are where AI is least reliable and most likely to create new problems.",
      "A practical test: if a task is repetitive, predictable, and low-risk if done imperfectly, it is a candidate for AI. If a task requires judgment, context, or carries real consequences for error, keep a human in the loop.",
      "Start small, measure, and expand what works. The organizations benefiting from AI are not the ones that adopted the most—they are the ones that adopted the right things, in the right order, with the right expectations.",
    ],
  },
  {
    slug: "nonprofit-succession-planning-guide",
    title: "Nonprofit Succession Planning: A Practical Guide",
    category: "Leadership & Organizational Strategy",
    author: "Nestor Ortiz",
    date: "Mar 15, 2025",
    excerpt:
      "Executive transitions are the most dangerous moment for a nonprofit. Here is how to plan for succession before it becomes a crisis.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "6 min read",
    content: [
      "Most nonprofits do not plan for executive succession until the executive director announces they are leaving. By then, the organization is already behind. The result is a rushed search, a poor transition, and sometimes years of recovery.",
      "Succession planning is not about identifying a single replacement. It is about building an organization that can withstand a leadership change. That means documented processes, distributed knowledge, and a leadership team that can function without a single person holding every thread.",
      "Start with the operational question: if the executive director left tomorrow, what would break? The answer reveals where the organization is most fragile. Those are the areas to document, cross-train, and strengthen before a transition is imminent.",
      "Then address the leadership question: who on the current team could grow into greater responsibility? Succession is not always an external search. Sometimes the answer is internal, but only if you have invested in developing that talent.",
      "Finally, build the transition plan. A transition is not a single event; it is a process that spans months. The outgoing leader's knowledge, relationships, and institutional memory need to transfer deliberately, not disappear on their last day.",
      "The organizations that handle transitions well are the ones that started planning years before they needed to. Succession planning is not about anticipating departure—it is about building resilience.",
    ],
  },
  {
    slug: "law-firm-cybersecurity-requirements",
    title: "Cybersecurity Requirements for Law Firms",
    category: "Law Firm Technology",
    author: "Ashley Clevenger",
    date: "Feb 28, 2025",
    excerpt:
      "Law firms hold some of the most sensitive data in any industry. Here are the cybersecurity fundamentals every firm should have in place—regardless of size.",
    image:
      "https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a904acb9a0fb7c66989d43a.png",
    readTime: "7 min read",
    content: [
      "Law firms are prime targets for cyberattacks. They hold confidential client information, financial records, and litigation strategy—data that is valuable to attackers and damaging if exposed. Yet many firms treat cybersecurity as an IT detail rather than a business risk.",
      "The fundamentals cost less than most firms assume and prevent the vast majority of breaches. Multi-factor authentication on every account. A password manager. Automatic updates. Offline backups. These four practices eliminate most exposure.",
      "Beyond the basics, firms need to consider client requirements. Many clients now require evidence of security practices before engaging counsel. If you cannot demonstrate a defensible security posture, you may lose clients you already have.",
      "Email remains the primary attack vector. Phishing training is not a once-a-year compliance exercise; it is an ongoing practice. The firms that avoid breaches are the ones whose people recognize a phishing attempt because they have seen realistic ones in training.",
      "Vendor risk is often overlooked. Your data lives in your practice management, accounting, and document platforms. If those vendors are breached, your client data is exposed. Evaluate your vendors' security, not just your own.",
      "Finally, have an incident response plan. When something goes wrong, the plan should already exist. Who leads? Who communicates? What is the first step? A firm that improvises its response to a breach turns a manageable incident into a reputational crisis.",
    ],
  },
];

export const blogCategories = [
  "All",
  "Operations & Governance",
  "Technology & AI",
  "Communications & Reputation",
  "Leadership & Organizational Strategy",
  "Nonprofit Management",
  "Law Firm Technology",
];

export const authorLinks: Record<string, string> = {
  "Ashley Clevenger": "/ashley-clevenger",
  "Thania Clevenger": "/thania-clevenger",
  "Michelle Griffith": "/michelle-griffith",
  "Nestor Ortiz": "/nestor-ortiz",
};

export const categoryServiceLinks: Record<
  string,
  { link: string; label: string }
> = {
  "Operations & Governance": {
    link: "/services/operations",
    label: "Operations Services",
  },
  "Technology & AI": {
    link: "/services/technology",
    label: "Technology Services",
  },
  "Communications & Reputation": {
    link: "/services/communications",
    label: "Communications Services",
  },
  "Leadership & Organizational Strategy": {
    link: "/services/leadership",
    label: "Leadership Services",
  },
  "Nonprofit Management": {
    link: "/nonprofit-consulting",
    label: "Nonprofit Consulting",
  },
  "Law Firm Technology": {
    link: "/law-firm-technology",
    label: "Law Firm Technology",
  },
};
