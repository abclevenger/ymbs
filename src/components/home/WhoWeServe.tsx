const audiences = [
  {
    title: "Small & Mid-Sized Businesses",
    desc: "You need senior-level expertise but can't justify — or aren't ready for — a full executive team. We plug in exactly where you need us.",
  },
  {
    title: "Nonprofits",
    desc: "Boards, funders, and communities are watching. We help you build governance, systems, and messaging that hold up under scrutiny.",
  },
  {
    title: "Law Firms",
    desc: "Reputation is the product. We help firms modernize operations and technology while keeping partner communication and client trust intact.",
  },
  {
    title: "Mission-Driven Organizations",
    desc: "Purpose-first organizations outside traditional nonprofit structure. We help mission-led teams build discipline to match their ambition.",
  },
];

/**
 * Who we serve — the backbone of America. Four audience cards in one row
 * on desktop (lg:grid-cols-4).
 */
export default function WhoWeServe() {
  return (
    <section className="py-16 md:py-24 bg-light-section">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Who we serve
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2433] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The backbone of America.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="card-light rounded-2xl p-6 md:p-8 flex flex-col h-full"
            >
              <h3
                className="text-[1.2rem] font-bold mb-3.5 text-[#1A2433] leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {a.title}
              </h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
