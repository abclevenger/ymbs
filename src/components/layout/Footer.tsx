import { mainSiteHref } from "./SiteLink";

export function Footer() {
  return (
    <footer className="bg-[#0B1D33] pt-10 pb-6 border-t border-[#D4A017]/20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2 flex flex-col space-y-3">
            <img
              src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9056699a0fb7c6698b21c2.svg"
              alt="YMBS Logo"
              loading="lazy"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs text-white/60 text-balance leading-relaxed">
              Operations, technology, communications, and leadership advisory
              for nonprofits, law firms, and mission-driven organizations.
            </p>
            <div className="pt-1 flex w-full max-w-[80px]">
              <img
                src="https://vibe.filesafe.space/1776094666446468637/assets/cf8cb7f7-d1e1-4f70-9057-a095fc68b1cd.png"
                alt="Veteran Owned Business badge"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Company</h4>
            <ul className="space-y-1.5 text-xs text-white/60">
              <li>
                <a href={mainSiteHref("/team")} className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/team")} className="hover:text-primary">
                  Team
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/client-results")} className="hover:text-primary">
                  Experience & Deliverables
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/insights")} className="hover:text-primary">
                  Insights
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/contact")} className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Who We Help — same audience order as primary navigation */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Who We Help</h4>
            <ul className="space-y-1.5 text-xs text-white/60">
              <li><a href={mainSiteHref("/services")} className="hover:text-primary">Small &amp; Mid-Sized Businesses</a></li>
              <li><a href={mainSiteHref("/professional-services")} className="hover:text-primary">Professional Services Firms</a></li>
              <li><a href={mainSiteHref("/law-firm-technology")} className="hover:text-primary">Law Firms</a></li>
              <li><a href={mainSiteHref("/nonprofit-consulting")} className="hover:text-primary">Nonprofits</a></li>
              <li><a href={mainSiteHref("/mission-driven-organizations")} className="hover:text-primary">Mission-Driven Organizations</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Capabilities</h4>
            <ul className="space-y-1.5 text-xs text-white/60">
              <li>
                <a href={mainSiteHref("/services/operations")} className="hover:text-primary">
                  Operations
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/services/technology")} className="hover:text-primary">
                  Technology
                </a>
              </li>
              <li>
                <a
                  href={mainSiteHref("/services/communications")}
                  className="hover:text-primary"
                >
                  Communications
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/services/leadership")} className="hover:text-primary">
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href={mainSiteHref("/integrated-executive-advisory")}
                  className="hover:text-primary font-medium"
                >
                  Integrated Fractional Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Get Started</h4>
            <ul className="space-y-1.5 text-xs text-white/60">
              <li>
                <a
                  href={mainSiteHref("/assessments")}
                  className="hover:text-primary font-medium"
                >
                  Find the Real Problem
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/contact")} className="hover:text-primary font-medium">
                  Get Clarity
                </a>
              </li>
              <li>
                <a
                  href={mainSiteHref("/solutions/organizational-growth")}
                  className="hover:text-primary"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a href={mainSiteHref("/scale/assessment")} className="hover:text-primary">
                  SCALE&trade; Assessment
                </a>
              </li>

              <li>
                <a href={mainSiteHref("/support")} className="hover:text-primary">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Contact</h4>
            <ul className="space-y-1.5 text-xs text-white/60">
              <li>
                <a href="tel:+14077837496" className="hover:text-primary">
                  407-783-7496
                </a>
              </li>
              <li>
                <a href="mailto:info@ymbs.pro" className="hover:text-primary">
                  info@ymbs.pro
                </a>
              </li>
              <li className="leading-relaxed">
                3632 Land O Lakes Blvd
                <br />
                Suite 105-20
                <br />
                Land O Lakes, FL 34639
              </li>
            </ul>
          </div>
        </div>

        {/* Slim bottom bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/60">
              © 2026 Yellow Mountain Business Solutions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ymbspro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ymbsmgr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/yellow-mountain-business-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-xs text-white/60">
            <a href={mainSiteHref("/policy")} className="hover:text-primary">
              Privacy
            </a>
            <a href={mainSiteHref("/terms")} className="hover:text-primary">
              Terms
            </a>
            <a href={mainSiteHref("/accessibility")} className="hover:text-primary">
              Accessibility
            </a>
            <a href={mainSiteHref("/sitemap")} className="hover:text-primary">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
