import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Target,
  BarChart,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SeoRoiCalculator } from "@/components/SeoRoiCalculator";
import SEOHead from "@/components/SEOHead";

export default function SeoServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="SEO Services | YMBS"
        description="Data-driven SEO strategies that put your organization in front of the people actively searching for your services. Stop being the best-kept secret in your industry."
        canonical="/services/seo"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 flex items-center justify-center text-left px-6 overflow-hidden bg-[#09090B]">
        {/* Premium Dark Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(252,223,2,0.15),transparent)]"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#FCDF02] font-bold tracking-wider uppercase text-sm mb-6 block drop-shadow-md">
              Search Engine Optimization
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight font-serif text-white">
              Stop being the best-kept secret in your industry.
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed text-balance">
              Beautiful websites don't generate leads if no one can find them.
              We build data-driven SEO strategies that put your organization in
              front of the people actively searching for your services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/assessments/seo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#FCDF02] text-black hover:bg-[#FCDF02]/90 font-bold px-8 py-6 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(252,223,2,0.3)] hover:shadow-[0_0_30px_rgba(252,223,2,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  GET A FREE SEO AUDIT
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold px-8 py-6 h-auto text-lg rounded-full transition-all duration-300"
                >
                  TALK TO AN EXPERT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
                SEO isn't magic. It's structure, relevance, and authority.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Most organizations treat SEO as an afterthought or a dark art.
                They pay monthly retainers for vague "optimizations" and never
                see a return on investment.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We treat SEO as a predictable growth engine. We fix the
                technical foundation, align your content with actual search
                intent, and build authority so you dominate your local market or
                niche.
              </p>
              <ul className="space-y-4">
                {[
                  "Technical foundation built for speed and crawlability",
                  "Content strategies based on real search volume, not guesses",
                  "Local SEO dominance for geographic-specific services",
                  "Transparent reporting tied to leads and revenue, not just traffic",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-brand-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Search,
                  title: "Keyword Strategy",
                  desc: "Targeting high-intent terms.",
                },
                {
                  icon: Globe,
                  title: "Technical SEO",
                  desc: "Fast, mobile-first, error-free.",
                },
                {
                  icon: Target,
                  title: "Local Dominance",
                  desc: "Winning the maps and local pack.",
                },
                {
                  icon: BarChart,
                  title: "ROI Reporting",
                  desc: "Tracking leads, not just clicks.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-muted/50 p-6 rounded-xl border border-border"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-brand-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
              See the Value of SEO
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find out exactly how much revenue you're leaving on the table by
              not ranking on the first page.
            </p>
          </div>
          <SeoRoiCalculator />
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
              SEO Growth Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for ongoing search engine optimization. Choose
              the velocity that matches your growth goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-background rounded-2xl p-8 border border-border flex flex-col shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Local Visibility
                </h3>
                <p className="text-muted-foreground mb-6 h-12">
                  Essential SEO for local dominance and foundational search
                  health.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-dark">
                    $850
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Google Business Profile optimization",
                  "Local citation building & cleanup",
                  "On-page technical monitoring",
                  "1x targeted blog post per month",
                  "Basic keyword rank tracking",
                  "Monthly performance report",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold"
              >
                START WITH LOCAL
              </Button>
            </div>

            {/* Tier 2 */}
            <div className="bg-brand-dark text-white rounded-2xl p-8 border-2 border-primary flex flex-col shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Content & Authority</h3>
                <p className="text-white/70 mb-6 h-12">
                  Aggressive growth for competitive markets requiring fresh
                  content.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$1,800</span>
                  <span className="text-white/70">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Local Visibility",
                  "4x high-quality SEO articles per month",
                  "Advanced content gap analysis",
                  "Strategic internal linking structure",
                  "Competitor backlink monitoring",
                  "Quarterly technical deep-dive audits",
                  "Dedicated account manager",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                ACCELERATE GROWTH
              </Button>
            </div>

            {/* Tier 3 */}
            <div className="bg-background rounded-2xl p-8 border border-border flex flex-col shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Market Leader
                </h3>
                <p className="text-muted-foreground mb-6 h-12">
                  Full-scale SEO domination including proactive digital PR and
                  link building.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-dark">
                    $3,500+
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Content & Authority",
                  "Proactive white-hat link building",
                  "Digital PR and outreach campaigns",
                  "Custom interactive assets (calculators, guides)",
                  "Conversion Rate Optimization (CRO)",
                  "Custom Looker Studio dashboards",
                  "Bi-weekly strategy calls",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold"
              >
                DOMINATE YOUR MARKET
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
              What our clients say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from organizations that stopped hiding and started
              dominating their search results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We were spending thousands on ads every month. The SEO strategy YMBS implemented allowed us to cut our ad spend by 60% while actually increasing our lead volume.",
                result: "315% increase in organic traffic in 6 months",
                author: "Sarah J., Marketing Director",
              },
              {
                quote:
                  "Our local visibility was nonexistent. Now we show up in the top 3 for almost every service we offer in our city. The ROI has been incredible.",
                result: "Ranked #1 in local map pack for 12 key terms",
                author: "Michael T., Managing Partner",
              },
              {
                quote:
                  "The transparency is what sold me. They don't just send a generic report; they show us exactly how the traffic is translating into actual revenue for the firm.",
                result: "Generated $120k in attributed revenue in year 1",
                author: "Elena R., Operations Head",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-brand-dark text-white rounded-xl p-8 flex flex-col shadow-lg"
              >
                <div className="text-primary mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-medium text-white/70 mb-6">
                  Result: {testimonial.result}
                </p>
                <p className="font-bold text-primary">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to stop hiding?</h2>
          <p className="text-xl text-white/80 mb-10">
            Let's run a free, no-obligation audit on your current website to see
            exactly where you're losing traffic to competitors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/assessments/seo">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg w-full sm:w-auto">
                GET A FREE SEO AUDIT
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
