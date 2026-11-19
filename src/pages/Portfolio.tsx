import { useState } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import SEOHead from "@/components/SEOHead";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Array<{
    title: string;
    category: string;
    description: string;
    url: string;
    image: string;
    beforeImage?: string;
    tags: string[];
    results?: string[];
  }> = [
    {
      title: "Davis Wren CPA",
      category: "Financial Services",
      description:
        "A comprehensive digital presence and SEO-optimized platform for Davis Wren CPA. Designed to build trust, showcase accounting expertise, and capture prospective client inquiries.",
      url: "https://davis-wren-seo.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/3220c736-a50f-4896-89e0-c2991a7989f2.png",
      beforeImage:
        "https://vibe.filesafe.space/1776094666446468637/attachments/ba1531ad-7d38-4aa8-961a-d5d7c84c49b4.png",
      tags: ["Web Design", "SEO", "Financial Services"],
      results: [
        "+45% Lead Conversion",
        "Improved Local SEO",
        "Modernized Brand Identity",
      ],
    },
    {
      title: "Doctor Mold Pro",
      category: "Home Services",
      description:
        "A complete website redesign and CRM integration for a certified mold inspection and remediation company in Tampa Bay. Features a high-converting lead capture system and dynamic pricing estimator.",
      url: "https://moldpro.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/assets/a0ec9705-0b76-4b93-81e0-61b50978547a.png",
      beforeImage:
        "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-ae8453ef-4f09-4860-ab22-6c81ae5735d7.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1778526312&Signature=V6lell12cIQoeVNB2ESd3x9exxKUtLV7MaMwwCZADD9TjyQUft7TVGiyuCkwLE7kmwDBVuaec1g1QzgChOI30cHxgUKFuLozB7nGmLTNUGr73sazGRDJvCs2evfM84cunC%2BrshrBCVNVddz9DNoTTICQLs2IDnX2dhXw8I3EyW6pkS6xrv5f7DLIi4gphwqyjpKi1e4%2BqK8y%2F40K4n4ygv0VWfAFZ9wszKJ8vnNoDje%2BAuS3cLQlJjiALNCPqL5MbAVLaNYgUb88sT08zPoPUy4QHpoTqQSTAjct0j%2F7ylSWGiyqSEqCkR82%2FNA89o0ps9pjosyZlI2Mccr3uqHLcw%3D%3D",
      tags: ["Web Design", "SEO", "CRM Integration"],
      results: [
        "+45% Lead Conversion Rate",
        "-30% Cost Per Lead",
        "Automated CRM Sync",
      ],
    },
    {
      title: "John T. Floyd Law Firm",
      category: "Legal Services",
      description:
        "A premium, authoritative web presence for an elite, board-certified criminal defense attorney. The redesign focuses on trust signals, clear practice area navigation, and optimized conversion funnels.",
      url: "https://floyd-redesign.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/e295fb53-7186-4566-87e7-2214f88c6451.png",
      beforeImage:
        "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-97604649-1bd0-4b6b-a1bf-23ef47e4aff2.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1778526078&Signature=bMNgwwtuEvVrH95KEvwTJfQC1gt1M3DQMTbk5%2FNJvbvLNE8ZXIODQ2t8gzqz6BvPhr0QXnBvpSG7kb1S%2BE7PlnXpBQWnSwLyYFzTjj3%2B1y7RaHMOLn64Tzcrjgds7ufLaR9aA%2BO13yspv46mRxaom9Z7bSzMH10XI4HrWeZlwiBU%2FAhYtC1br9DFH7eEIIsyOc2ffxZ7rnxOiuEvyyypfH%2B2ODxmZ7R7O3%2B67mBXYQ70NnnVbmhwjMJxajGaLPku8mZQJ%2F6MfmrDw9gNuh2dS2wNfgKORhhvw9L6qLRLn1vTUl93ovjUMb6cT8o7NnOhj3d5t6FJrGzMpI6aNCF80w%3D%3D",
      tags: ["Web Design", "Brand Authority", "Lead Generation"],
      results: [
        "+60% Organic Traffic",
        "2x Faster Page Load",
        "Enhanced Trust Signals",
      ],
    },
    {
      title: "Mar Marina",
      category: "Marine Services",
      description:
        "A comprehensive digital presence for a full-service marina in Tarpon Springs. Features an interactive storage pricing calculator and a streamlined quote request system.",
      url: "https://mar-marine.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/7e5c8faa-4519-45f8-b628-a102b3c8afa4.png",
      beforeImage:
        "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-ae8c259a-fe96-4432-90cd-64a71874a648.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1778528298&Signature=vdlPqrCko6EzKzthMC0Nqi9BVBaWtBnRDWJGSWzNCyfGTASn%2Fa086p3Pg6FqucRIek%2BBRkk5qHdCu3zxtKIoJfyxJiTr2t%2Brxzip9EtkAwrGSxdU4icHukdpT5adhB%2BERhBX5OBjeeR9AmqdMuf1CsxGcI5y0Q%2BFCCVk%2BC%2F%2FOcVQ87ReiQOtWMCm15mVd8DLYYXRmKZuyIhG9Kph%2FGZhaXsqchfy53z1pCbx0%2FfEFVgo8X%2B8q1sa1ECnP0%2FDJKEBjJYjM9YGWeMrgcDGnHT6VblRHFn3%2F9ZO7IyUsxMD7DlJzvL3UuNEDlduXWqyWAplbTNrruspAj2Qz8hvF9tRmQ%3D%3D",
      tags: ["Web Design", "Lead Generation", "CRM Integration"],
      results: [
        "+35% Quote Requests",
        "Interactive Pricing Deployed",
        "Streamlined Booking",
      ],
    },
    {
      title: "Carbon Cat Charters",
      category: "Charter Services",
      description:
        "A premium booking platform for a luxury catamaran charter in Tampa Bay. Features live weather/tide integrations, interactive destination maps, and a seamless booking flow.",
      url: "https://carbon-copy-charters.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/75273996-2587-4601-b508-24a558c1f4f4.png",
      beforeImage:
        "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-d68d46c9-c1df-46bf-931d-cc4978ed74ab.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1778526493&Signature=ACvOpEvxyuQ270ktPxzLktvjma6sfNnfv6wExsNd6XMDaQ6JsbglcYk86HSoaIigPFvSjFVrZv0zd7goO3NWrmIhqx6yg2Hwf2a9D0p98H0R%2B%2FlxwvJRHFjehcaIkI6RmSTr%2B%2BrAxK87xxEcOgD%2B7KkzZQEbLI1d4wlXngLpMObTZ9ZA4Vl9V16IroTLCFLgYJrsdIHolJ4W6xCdocubb8AR1URDzM%2BwFmCE4mezHY%2F6eqfFauJYl07e81gOvvA7E4QJ4kpeKxI6r9Lzp0wzWG%2FjtRBOM7iJRJYOxPw8PsGoTH2ZdptgOqAuGolPhykGbDC19FZ5lR%2FJ9SE1asnaYQ%3D%3D",
      tags: ["Web Design", "API Integration", "Booking System"],
      results: [
        "+50% Direct Bookings",
        "Live Weather Integration",
        "Mobile Optimization",
      ],
    },
    {
      title: "ASA Corp",
      category: "Corporate Services",
      description:
        "A modern, professional digital presence for ASA Corp. Features streamlined navigation, clear service offerings, and a robust lead generation system.",
      url: "https://asacorp.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/e6216b07-bf27-4044-80f6-5013b053f5c9.png",
      beforeImage:
        "https://vibe.filesafe.space/1776094666446468637/attachments/3becde88-2eed-4a5e-8159-3da60a7a4018.png",
      tags: ["Web Design", "Corporate Identity", "Lead Generation"],
      results: [
        "+40% Corporate Inquiries",
        "Modernized Brand Identity",
        "Improved UX Flow",
      ],
    },
    {
      title: "BizLaw Lawyers",
      category: "Legal Services",
      description:
        "A comprehensive, high-converting website for BizLaw Lawyers. Designed to build trust, showcase legal expertise, and capture prospective client inquiries effectively.",
      url: "https://bizlawlawyers.com/",
      image:
        "https://vibe.filesafe.space/1776094666446468637/assets/2d4d4fef-a11b-4f64-ac0b-9f320eacd5ac.png",
      tags: ["Web Design", "Legal Tech", "SEO"],
      results: [
        "+55% Consultation Requests",
        "Top 3 Local SEO Ranking",
        "Secure Client Portal",
      ],
    },
    {
      title: "Kinsfolk Mortgage",
      category: "Financial Services",
      description:
        "A modern, trust-building digital presence for Kinsfolk Mortgage. Features a streamlined application process, clear service offerings, and an optimized lead generation funnel.",
      url: "https://kinfolk-mortgauge.vibepreview.com",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/d3884446-98ae-4fe8-b4e4-966f7619a5bf.png",
      beforeImage:
        "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-2fd13291-cc3c-4d71-8d7b-7e05d9397109.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1778526687&Signature=vLf41bpVqbTNHtTTG10kEgKO8OwNgP%2B6FFYLc1%2BmI6ZZ6y6IJNF02hhcUna2eqLl%2B9XKJ8KGhWRAm81AyCps6zXaHPc58Lb0mN9XMFBPb51cjYrPzzup%2Fl7WsZgCVPIZeDr838r5swGQ6xJvUKRyGb4mjH9M335nrULrXKCHpSLVQVbsy96dPJitu2hKu4NB5fwZBtcj3d5mb5QUeyDSS7i3HklBImvK69xdfytNKsBA01dqco1SYOVGgnbD5wOQW2NERk2OW4c3Ra053fLvxCqukjDEDW4NyipqVXrFGKDlaxktLbRC6XA%2FRdO%2FcNnsg8j3N0%2BDPg%2F8ORprpbGWhQ%3D%3D",
      tags: ["Web Design", "Financial Services", "Lead Generation"],
      results: [
        "+45% Application Starts",
        "Simplified User Journey",
        "Faster Load Times",
      ],
    },
    {
      title: "Green Built Alliance",
      category: "Nonprofit Organization",
      description:
        "A comprehensive digital platform for Green Built Alliance, featuring resources for sustainable building, community engagement, and clear organizational messaging.",
      url: "https://www.greenbuilt.org/",
      image:
        "https://vibe.filesafe.space/1776094666446468637/attachments/b8feb8e8-6677-4aad-ad2d-d1edabbf2095.png",
      beforeImage:
        "https://vibe.filesafe.space/1776094666446468637/attachments/abd12739-9417-40c6-85d4-98b1ceee243b.png",
      tags: ["Web Design", "Nonprofit", "Community Platform"],
      results: [
        "+30% Member Engagement",
        "Accessible Resource Library",
        "Streamlined Donations",
      ],
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEOHead
        title="Portfolio & Client Work | YMBS"
        description="Explore YMBS's recent digital experiences and projects for law firms, home services, and mission-driven organizations."
        canonical="/portfolio"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center px-6 overflow-hidden bg-dark-section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6 drop-shadow-md">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight font-serif text-white">
            Digital Experiences That{" "}
            <span className="text-gradient-primary">Drive Results.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-6 max-w-3xl mx-auto font-medium text-balance">
            Explore our recent projects for law firms, home services, and
            mission-driven organizations.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-light-section">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-primary/50 hover:text-zinc-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-zinc-200">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

                  {project.beforeImage ? (
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.image}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}

                  <div className="absolute top-4 left-4 z-20 flex gap-2 pointer-events-none">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-white/90 backdrop-blur-sm text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-primary font-bold text-xs tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {project.results && (
                    <div className="mb-6 space-y-2">
                      {project.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm font-medium text-zinc-800"
                        >
                          <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                          {result}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-6 border-t border-zinc-100">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-zinc-900 font-bold hover:text-primary transition-colors group/link"
                    >
                      View Live Site
                      <ExternalLink className="ml-2 w-4 h-4 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(252,223,2,0.1),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 text-balance">
            Let's build a scalable, high-converting platform for your
            organization.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(252,223,2,0.2)] hover:shadow-[0_0_30px_rgba(252,223,2,0.4)] hover:-translate-y-0.5 transition-all duration-300">
            START YOUR PROJECT
          </Button>
        </div>
      </section>
    </div>
  );
}
