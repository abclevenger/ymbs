import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Plus, Filter, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

// Representative sample of vendors to keep file size manageable while showing all categories
const vendors = [
  {
    name: "13Layers",
    category: "Cybersecurity",
    subcategory: "Security Consulting",
    url: "https://13layers.com",
    featured: true,
    logo: "13",
  },
  {
    name: "Akamai",
    category: "Cybersecurity",
    subcategory: "Edge Security",
    url: "https://akamai.com",
    featured: true,
    logo: "A",
  },
  {
    name: "Zscaler",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    url: "https://zscaler.com",
    featured: true,
    logo: "Z",
  },
  {
    name: "Clio",
    category: "Legal Software",
    subcategory: "Case Management",
    url: "https://clio.com",
    featured: true,
    logo: "C",
  },
  {
    name: "Zoom",
    category: "Communications",
    subcategory: "Video Conferencing",
    url: "https://zoom.us",
    featured: true,
    logo: "Z",
  },
  {
    name: "Microsoft 365",
    category: "Cloud",
    subcategory: "Productivity",
    url: "https://www.microsoft.com/microsoft-365",
    featured: true,
    logo: "M365",
  },
  {
    name: "Google Workspace",
    category: "Cloud",
    subcategory: "Productivity",
    url: "https://workspace.google.com",
    featured: true,
    logo: "GW",
  },
  {
    name: "PracticePanther",
    category: "Legal Software",
    subcategory: "Case Management",
    url: "https://www.practicepanther.com",
    logo: "PP",
  },
  {
    name: "Filevine",
    category: "Legal Software",
    subcategory: "Case Management",
    url: "https://filevine.com",
    logo: "F",
  },
  {
    name: "RingCentral",
    category: "UCaaS/VoIP",
    subcategory: "Cloud Phone",
    url: "https://www.ringcentral.com",
    logo: "R",
  },
  {
    name: "Spectrum Business",
    category: "Connectivity",
    subcategory: "Business Internet",
    url: "https://business.spectrum.com",
    logo: "SB",
  },
  {
    name: "AT&T Business Internet",
    category: "Connectivity",
    subcategory: "Business Internet",
    url: "https://business.att.com",
    logo: "AT&T",
  },
  {
    name: "Corvid Cyberdefense",
    category: "Cybersecurity",
    subcategory: "",
    url: "https://www.corvidcyberdefense.com",
    logo: "CC",
  },
  {
    name: "Cyber Sainik",
    category: "Cybersecurity",
    subcategory: "",
    url: "https://www.cybersainik.com",
    logo: "CS",
  },
  {
    name: "Cato Networks",
    category: "SD-WAN/SASE",
    subcategory: "",
    url: "https://www.catonetworks.com",
    logo: "CN",
  },
  {
    name: "Bigleaf",
    category: "SD-WAN/SASE",
    subcategory: "",
    url: "https://www.bigleaf.net",
    logo: "B",
  },
  {
    name: "Equinix",
    category: "Data Center/Colocation",
    subcategory: "",
    url: "https://www.equinix.com",
    logo: "E",
  },
  {
    name: "CoreSite",
    category: "Data Center/Colocation",
    subcategory: "",
    url: "https://www.coresite.com",
    logo: "C",
  },
  {
    name: "Dataprise",
    category: "Managed Services/MSP",
    subcategory: "",
    url: "https://www.dataprise.com",
    logo: "D",
  },
  {
    name: "BCM One",
    category: "Managed Services/MSP",
    subcategory: "",
    url: "https://www.bcmone.com",
    logo: "BO",
  },
  {
    name: "Genesys",
    category: "CCaaS/Contact Center",
    subcategory: "",
    url: "https://www.genesys.com",
    logo: "G",
  },
  {
    name: "Five9",
    category: "CCaaS/Contact Center",
    subcategory: "",
    url: "https://www.five9.com",
    logo: "F",
  },
  {
    name: "Talkdesk",
    category: "CCaaS/Contact Center",
    subcategory: "",
    url: "https://www.talkdesk.com",
    logo: "T",
  },
  {
    name: "Cisco",
    category: "Networking/Infrastructure",
    subcategory: "",
    url: "https://www.cisco.com",
    logo: "C",
  },
  {
    name: "4Voice",
    category: "Backup/DR/BCP",
    subcategory: "",
    url: "https://www.4voice.net",
    logo: "4",
  },
  {
    name: "Assured Data Protection",
    category: "Backup/DR/BCP",
    subcategory: "",
    url: "https://assured-dp.com",
    logo: "ADP",
  },
  {
    name: "boost.ai",
    category: "AI/Automation",
    subcategory: "",
    url: "https://boost.ai",
    logo: "B",
  },
  {
    name: "Yellow.ai",
    category: "AI/Automation",
    subcategory: "",
    url: "https://yellow.ai",
    logo: "Y",
  },
];

const categories = [
  "All",
  "AI/Automation",
  "Backup/DR/BCP",
  "CCaaS/Contact Center",
  "Cloud",
  "Connectivity",
  "Cybersecurity",
  "Data Center/Colocation",
  "Legal Software",
  "Managed Services/MSP",
  "Networking/Infrastructure",
  "Professional Services/Consulting",
  "SD-WAN/SASE",
  "UCaaS/VoIP",
];

export default function Suppliers() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVendors = vendors.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || v.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredVendors = filteredVendors.filter((v) => v.featured);
  const otherVendors = filteredVendors.filter((v) => !v.featured);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <SEOHead
        title="Technology Solution Finder | YMBS"
        description="Search, filter, and compare best-in-class technology suppliers. YMBS partners with leading vendors to deliver integrated solutions across multiple platforms."
        canonical="/suppliers"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-dark text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium mb-6">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a
              href="/services/technology"
              className="hover:text-primary transition-colors"
            >
              Technology
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Solution Finder</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Yellow Mountain Solution Finder
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mb-10">
            Search, filter by category or problem, and compare technology
            suppliers. We partner with best-in-class vendors to deliver
            integrated solutions across multiple platforms.
          </p>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <Input
                  placeholder="Search vendor name or category..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-zinc-500 pl-12 h-12 text-lg focus-visible:ring-primary"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-bold text-lg shrink-0">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-brand-dark" />
                <h2 className="text-lg font-bold text-brand-dark">
                  Categories
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-primary/10 text-brand-dark font-bold border border-primary/20"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-brand-dark"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-12 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                <h3 className="font-bold text-brand-dark mb-2">
                  Need a custom plan?
                </h3>
                <p className="text-sm text-zinc-600 mb-4">
                  Get a summary of recommended vendors and a suggested stack
                  from an advisor.
                </p>
                <Button className="w-full bg-brand-dark text-white hover:bg-brand-dark/90 font-bold">
                  Request Plan
                </Button>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-grow">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  {selectedCategory === "All"
                    ? "All Suppliers"
                    : selectedCategory}
                </h2>
                <p className="text-zinc-500 font-medium">
                  Showing {filteredVendors.length} results
                </p>
              </div>
            </div>

            {featuredVendors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Featured Partners
                </h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {featuredVendors.map((vendor, i) => (
                    <VendorCard key={i} vendor={vendor} />
                  ))}
                </div>
              </div>
            )}

            {otherVendors.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Suppliers
                </h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {otherVendors.map((vendor, i) => (
                    <VendorCard key={i} vendor={vendor} />
                  ))}
                </div>
              </div>
            )}

            {filteredVendors.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-zinc-200">
                <p className="text-xl font-bold text-brand-dark mb-2">
                  No suppliers found
                </p>
                <p className="text-zinc-500">
                  Try adjusting your search or category filter.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 prose prose-slate prose-headings:text-brand-dark prose-a:text-primary max-w-none">
          <h2>Business Technology Solutions by Industry</h2>
          <p>
            The Yellow Mountain Solution Finder helps companies discover the
            right technology stack for their industry and size. Companies in the
            legal industry commonly use the following technology stack
            categories: practice management, cloud communications,
            cybersecurity, and connectivity. Small businesses typically rely on
            these platforms for daily operations.
          </p>

          <h3>Technology Stack for Law Firms</h3>
          <p>
            Law firms typically use legal practice management software, cloud
            communication systems, cybersecurity platforms, document management
            systems, and reliable internet and network infrastructure.
            Recommended tools include{" "}
            <strong>legal practice management software</strong> such as Clio,
            PracticePanther, and Filevine for case management, billing, and
            client intake.
          </p>

          <h3>Technology Stack for Nonprofits</h3>
          <p>
            Nonprofits commonly use legal software (where applicable),
            cybersecurity, connectivity, and communications platforms. Many rely
            on the same practice management and cloud tools as law firms when
            they provide legal or advocacy services, plus business internet and
            business phone systems.
          </p>

          <h2>Vendor Relationship Disclaimer</h2>
          <p className="text-sm text-zinc-500">
            The vendors and suppliers listed on this page are organizations
            whose products or services we may integrate, recommend, or utilize
            as part of the solutions we deliver to our clients. We operate as an
            independent solutions provider and do not represent ourselves as
            employees, agents, or official representatives of these vendors
            unless explicitly stated.
          </p>
        </div>
      </section>
    </div>
  );
}

function VendorCard({ vendor }: { vendor: any }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col h-full relative group">
      {vendor.featured && (
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-sm">
          <div className="w-2 h-2 bg-brand-dark rounded-full"></div>
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center font-bold text-zinc-500 shrink-0 border border-zinc-200">
          {vendor.logo}
        </div>
        <div>
          <h4 className="font-bold text-lg text-brand-dark leading-tight">
            {vendor.name}
          </h4>
          <p className="text-sm text-primary font-bold">{vendor.category}</p>
        </div>
      </div>

      {vendor.subcategory && (
        <Badge
          variant="secondary"
          className="w-fit mb-6 bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
        >
          {vendor.subcategory}
        </Badge>
      )}

      <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between gap-3">
        <Button
          variant="outline"
          className="flex-grow bg-white border-zinc-200 text-brand-dark hover:bg-zinc-50 hover:text-primary font-bold text-xs"
          asChild
        >
          <a href={vendor.url} target="_blank" rel="noopener noreferrer">
            Visit Website <ExternalLink className="w-3 h-3 ml-2" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 text-zinc-400 hover:text-primary hover:bg-primary/10"
          aria-label="Save"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
