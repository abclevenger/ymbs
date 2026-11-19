import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts, authorLinks, categoryServiceLinks } from "@/lib/blogPosts";
import { buildArticleSchema } from "@/lib/seo";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";
import { isBlogHost } from "@/components/layout/BlogLayout";

const onBlog = isBlogHost();
const mainSite = (path: string) => (onBlog ? `https://ymbs.pro${path}` : path);

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  // Canonical path is always /insights/:slug on ymbs.pro — even on the subdomain
  const canonicalPath = post ? `/insights/${post.slug}` : "/insights";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  const service = categoryServiceLinks[post.category];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title={`${post.title} | YMBS Blog`}
        description={post.excerpt}
        canonical={canonicalPath}
        ogImage={post.image}
        ogType="article"
        schemaJson={buildArticleSchema({
          title: post.title,
          description: post.excerpt,
          canonicalPath,
          image: post.image,
          author: post.author,
          datePublished: post.date,
          dateModified: post.date,
        })}
      />
      {/* Hero */}
      <section className="bg-dark-section text-white pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-4 block">
            {post.category}
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
            <a
              href={mainSite(authorLinks[post.author] || "/team")}
              className="text-primary font-medium hover:underline"
            >
              By {post.author}
            </a>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-3xl mx-auto px-6 -mt-12 relative z-20">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="py-16 bg-light-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-zinc-700 leading-relaxed"
                style={{
                  fontFamily:
                    i === 0 ? "'Playfair Display', Georgia, serif" : undefined,
                  fontSize: i === 0 ? "1.35rem" : undefined,
                  color: i === 0 ? "#1A2433" : undefined,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author + service CTA */}
          <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <a
                  href={mainSite(authorLinks[post.author] || "/team")}
                  className="text-[#1A2433] font-bold hover:text-primary transition-colors"
                >
                  {post.author}
                </a>
                <p className="text-sm text-zinc-500">YMBS Advisor</p>
              </div>
            </div>
            {service && (
              <a href={mainSite(service.link)}>
                <Button
                  variant="outline"
                  className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all"
                >
                  Explore {service.label}{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-[#1A2433] text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Related articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/insights/${rp.slug}`}
                  className="flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      {rp.category}
                    </span>
                    <h3
                      className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {rp.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                      {rp.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Want help applying this to your organization?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            Get clarity. We'll help identify what's broken and tell you what
            we'd do next.
          </p>
          <a href={mainSite("/contact")}>
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 text-base rounded-full btn-glow transition-all hover:-translate-y-1"
            >
              Get Clarity
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
