import SubServicePage from "@/components/SubServicePage";

export default function ExecutiveCommunicationsPage() {
  return (
    <SubServicePage
      path="/services/communications/executive-communications"
      pageTitle="Executive Communications & Readiness"
      title="Executive Communications & Readiness"
      description="Executive communications, media readiness, and high-stakes presentation preparation for leaders of nonprofits, law firms, and mission-driven organizations."
      pillar="Communications"
      parent={{ label: "Communications", path: "/services/communications" }}
      heroSubtitle="When the message, reputation, or organization is on the line, preparation is everything. YMBS prepares leaders for the moments that define how they are trusted."
      problems={[
        "Your leadership team is unprepared for board presentations, media interviews, or public meetings.",
        "Executives say different things to different audiences and trust erodes.",
        "Difficult questions catch leaders off guard and the response makes things worse.",
        "There is no clear messaging framework for major announcements or transitions.",
        "Leadership transitions create communication gaps that stakeholders fill with speculation.",
        "High-stakes moments arrive without rehearsal, and composure suffers.",
      ]}
      solutions={[
        {
          title: "Executive Readiness",
          desc: "We prepare leaders for board presentations, media interviews, community meetings, and difficult Q&A.",
        },
        {
          title: "Messaging Framework",
          desc: "We build a clear, consistent message framework so leadership speaks with one voice across audiences.",
        },
        {
          title: "Difficult Q&A Preparation",
          desc: "We identify the hardest questions and prepare honest, disciplined responses in advance.",
        },
        {
          title: "Crisis Readiness",
          desc: "We prepare leadership for reputation-sensitive moments before they happen.",
        },
        {
          title: "Stakeholder Communication",
          desc: "We help leaders communicate with boards, staff, clients, and the public in ways that build trust.",
        },
        {
          title: "Transition Support",
          desc: "We help leadership communicate during transitions, restructures, and major announcements.",
        },
      ]}
      outcomes={[
        { metric: "Composed", label: "Leadership under pressure" },
        { metric: "One voice", label: "Across all audiences" },
        { metric: "Prepared", label: "For the hardest questions" },
        { metric: "Trusted", label: "In high-stakes moments" },
      ]}
      faqs={[
        {
          q: "What kinds of moments do you prepare leaders for?",
          a: "Board presentations, media interviews, community meetings, leadership transitions, major announcements, public controversy, difficult Q&A, and any moment where the message or reputation is on the line.",
        },
        {
          q: "Is this media training?",
          a: "It includes media readiness, but it is broader. We prepare leaders for any high-stakes communication—internal or external—where composure, clarity, and preparation determine the outcome.",
        },
        {
          q: "How quickly can you prepare a leader for an upcoming moment?",
          a: "We offer focused readiness sessions for specific upcoming moments. The more lead time, the deeper the preparation, but we can mobilize quickly when a moment is imminent.",
        },
        {
          q: "Do you work with the whole leadership team or individuals?",
          a: "Both. Individual preparation builds personal composure; team alignment ensures everyone speaks with one voice. Most engagements include both.",
        },
      ]}
      relatedArticleSlugs={[
        "preparing-difficult-board-presentation",
        "aligning-internal-communications-change",
      ]}
      relatedServices={[
        { label: "Communications Strategy", path: "/services/communications" },
        {
          label: "Online Reputation Management",
          path: "/services/communications/reputation-management",
        },
        {
          label: "Executive Readiness Intensive",
          path: "/executive-readiness-intensive",
        },
        { label: "Michelle Griffith", path: "/michelle-griffith" },
      ]}
      expert={{
        name: "Michelle Griffith",
        title: "Strategic Communications, Operations & Growth",
        path: "/michelle-griffith",
      }}
    />
  );
}
