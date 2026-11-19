import { useLocation } from "react-router-dom";
import { SiteLink as Link } from "./SiteLink";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import {
  whoWeHelp,
  whatWeDo,
  howWeWork,
  aboutLinks,
  assessmentLinks,
  solutionLinks,
} from "./navData";

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhoWeHelpActive =
    location.pathname === "/services" ||
    location.pathname === "/nonprofit-consulting" ||
    location.pathname === "/law-firm-technology" ||
    location.pathname === "/professional-services" ||
    location.pathname === "/mission-driven-organizations";

  const isWhatWeDoActive = location.pathname.includes("/services");

  const isHowWeWorkActive =
    location.pathname === "/scale" ||
    location.pathname === "/scale/assessment" ||
    location.pathname === "/integrated-executive-advisory" ||
    location.pathname === "/mission-foundation";

  const isAboutActive =
    location.pathname === "/team" ||
    location.pathname === "/client-results" ||
    location.pathname === "/company-profile" ||
    location.pathname === "/scale" ||
    location.pathname === "/partners";

  const isAssessmentsActive =
    location.pathname.startsWith("/assessments") ||
    location.pathname === "/scale/assessment";

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-white/10 shadow-lg py-1"
          : "bg-brand-dark border-transparent py-2",
      )}
    >
      {/* Top Bar — utility only */}
      <div
        className={cn(
          "hidden md:flex justify-end items-center px-6 text-sm max-w-7xl mx-auto w-full transition-all duration-300 overflow-hidden",
          isScrolled
            ? "h-0 opacity-0 m-0"
            : "h-8 opacity-100 mb-2 border-b border-white/10 pb-2",
        )}
      >
        <div className="flex items-center space-x-4 text-white">
          <a
            href="tel:+14077837496"
            className="hover:text-primary transition-colors"
          >
            407-783-7496
          </a>
          <span className="text-white/30">|</span>
          <a
            href="mailto:info@ymbs.pro"
            className="hover:text-primary transition-colors"
          >
            info@ymbs.pro
          </a>
          <span className="text-white/30">|</span>
          <Link
            to="/support"
            className="hover:text-primary transition-colors font-medium text-primary"
          >
            Help Center
          </Link>
          <span className="text-white/30">|</span>
          <a
            href="https://app.ymbs.pro"
            title="Sign in to the separate Elevation platform"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium text-primary"
          >
            Elevation Sign-In
          </a>
          <span className="text-white/30">|</span>
          <a
            href="https://forms.clickup.com/9008109186/p/f/8cetnm2-3114/COXW8UF78TWE8896VM/project-intake-form"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium text-primary"
          >
            Support
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://assets.cdn.filesafe.space/Qox9LgP4rnP1Zvis428l/media/6a9056699a0fb7c6698b21c2.svg"
            alt="YMBS Logo"
            loading="eager"
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-14" : "h-20",
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Who We Help */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                    isWhoWeHelpActive && "text-primary",
                  )}
                >
                  Who We Help
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[750px] bg-brand-dark text-white border-white/10">
                    {whoWeHelp.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white h-full"
                          >
                            <div className="text-sm font-bold leading-none text-primary mb-2">
                              {item.title}
                            </div>
                            <p className="line-clamp-3 text-sm leading-snug text-white/70">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* What We Do */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                    isWhatWeDoActive && "text-primary",
                  )}
                >
                  What We Do
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[750px] bg-brand-dark text-white border-white/10">
                    {whatWeDo.map((service) => (
                      <li key={service.title} className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                          >
                            <div className="text-sm font-bold leading-none text-primary mb-2">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        {service.children && service.children.length > 0 && (
                          <ul className="pl-3 space-y-1">
                            {service.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  to={child.href}
                                  className="block text-xs text-white/60 hover:text-primary transition-colors py-1"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-white/5 border-t border-white/10 text-center">
                    <Link
                      to="/services"
                      className="text-sm font-bold text-primary hover:text-white transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* How We Work */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                    isHowWeWorkActive && "text-primary",
                  )}
                >
                  How We Work
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[750px] bg-brand-dark text-white border-white/10">
                    {howWeWork.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white h-full"
                          >
                            <div className="text-sm font-bold leading-none text-primary mb-2">
                              {item.title}
                            </div>
                            <p className="line-clamp-3 text-sm leading-snug text-white/70">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions — enter through the problem, not the pillar */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                    location.pathname.startsWith("/solutions") &&
                      "text-primary",
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 bg-brand-dark text-white border-white/10">
                    {solutionLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white h-full"
                          >
                            <div className="text-sm font-bold leading-none text-primary mb-2">
                              {item.title}
                            </div>
                            <p className="line-clamp-3 text-sm leading-snug text-white/70">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                    isAboutActive && "text-primary",
                  )}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 bg-brand-dark text-white border-white/10">
                    {aboutLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                          >
                            <div className="text-sm font-bold leading-none text-primary">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Assessments */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                    isAssessmentsActive && "text-primary",
                  )}
                >
                  Assessments
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 bg-brand-dark text-white border-white/10">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/assessments"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white border-b border-white/10 mb-2"
                        >
                          <div className="text-sm font-bold leading-none text-primary">
                            All Assessments
                          </div>
                          <div className="text-xs text-white/50 mt-1">
                            Find the real problem
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {assessmentLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                          >
                            <div className="text-sm font-bold leading-none text-primary">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Insights */}
              <NavigationMenuItem>
                <Link to="/insights">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                      location.pathname === "/insights" && "text-primary",
                    )}
                  >
                    Insights
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/contact">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-6 btn-glow transition-all">
              Get Clarity
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
}
