import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Link as LinkIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  blogPosts,
  blogCategories,
  authorLinks,
  categoryServiceLinks,
} from "@/lib/blogPosts";
import { buildBlogIndexSchema } from "@/lib/seo";
import SEOHead from "@/components/SEOHead";
import { isBlogHost } from "@/components/layout/BlogLayout";

const onBlog = isBlogHost();
// On the blog subdomain, internal links should point to the blog root,
// and non-blog links should go to the main site.
const articleLink = (slug: string) =>
  onBlog ? `/insights/${slug}` : `/insights/${slug}`;
const mainSite = (path: string) => (onBlog ? `https://ymbs.pro${path}` : path);

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Insights & Resources | YMBS"
        description="Practical insights on operations, technology, communications, leadership, and organizational growth for leaders who need clear next steps—not consulting jargon."
        canonical="/insights"
        schemaJson={buildBlogIndexSchema()}
      />
      <section className="bg-dark-section text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,160,23,0.12),transparent)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            YMBS Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-balance">
            Practical insights on operations, technology, communications,
            leadership, and organizational growth—written for leaders who need
            useful answers, not consulting jargon.
          </p>
        </div>
      </section>

      <section className="py-12 bg-light-section border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-primary text-black font-bold rounded-full"
                    : "bg-white font-medium rounded-full border-zinc-300"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input
              placeholder="Search articles..."
              className="pl-9 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {selectedCategory !== "All" && categoryServiceLinks[selectedCategory] && (
        <section className="py-8 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg text-zinc-600 max-w-2xl">
              {selectedCategory} insights from the YMBS team.
            </p>
            <a href={mainSite(categoryServiceLinks[selectedCategory].link)}>
              <Button
                variant="outline"
                className="font-bold rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all whitespace-nowrap"
              >
                Explore {categoryServiceLinks[selectedCategory].label}{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>
      )}

      <section className="py-16 bg-light-section">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={articleLink(post.slug)}
                  className="flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-zinc-500">{post.date}</span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-[#1A2433]"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-4">
                      <span>
                        By{" "}
                        <a
                          href={mainSite(authorLinks[post.author] || "/team")}
                          onClick={(e) => e.stopPropagation()}
                          className="text-primary font-medium hover:underline"
                        >
                          {post.author}
                        </a>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                      <span className="text-[#0B1D33] font-bold text-sm flex items-center group-hover:text-primary transition-colors">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                      <a
                        href={mainSite(
                          categoryServiceLinks[post.category]?.link ||
                            "/contact",
                        )}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        <LinkIcon className="w-3 h-3" /> Service
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <h3 className="text-2xl font-bold mb-2 text-[#1A2433]">
                No articles found
              </h3>
              <p className="text-zinc-500">
                Try adjusting your search or category filter.
              </p>
              <Button
                variant="outline"
                className="mt-6 font-bold rounded-full"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,160,23,0.15),transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ready to fix what's holding your organization back?
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
