import { useLocation } from "react-router-dom";
import { SiteLink as Link } from "./SiteLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion, Variants } from "framer-motion";
import {
  whoWeHelp,
  whatWeDo,
  howWeWork,
  aboutLinks,
  assessmentLinks,
  solutionLinks,
} from "./navData";

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function MobileNav() {
  const location = useLocation();
  const isActive = (href: string) =>
    location.pathname === href ? "text-primary font-medium" : "text-white/80";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-white/10"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-brand-dark text-white border-white/10 overflow-y-auto"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <motion.nav
          variants={mobileMenuVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-6 mt-10"
        >
          {/* Who We Help */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            Who We Help
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            {whoWeHelp.map((s) => (
              <SheetClose asChild key={s.title}>
                <Link
                  to={s.href}
                  className={`text-base hover:text-primary transition-colors ${isActive(s.href)}`}
                >
                  {s.title}
                </Link>
              </SheetClose>
            ))}
          </motion.div>

          {/* What We Do */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            What We Do
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            {whatWeDo.map((s) => (
              <div key={s.title} className="space-y-2">
                <SheetClose asChild>
                  <Link
                    to={s.href}
                    className={`text-base hover:text-primary transition-colors block ${isActive(s.href)}`}
                  >
                    {s.title}
                  </Link>
                </SheetClose>
                {s.children && s.children.length > 0 && (
                  <ul className="pl-4 space-y-2">
                    {s.children.map((child) => (
                      <li key={child.href}>
                        <SheetClose asChild>
                          <Link
                            to={child.href}
                            className="block text-sm text-white/60 hover:text-primary transition-colors"
                          >
                            {child.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>

          {/* How We Work */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            How We Work
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            {howWeWork.map((s) => (
              <SheetClose asChild key={s.title}>
                <Link
                  to={s.href}
                  className={`text-base hover:text-primary transition-colors ${isActive(s.href)}`}
                >
                  {s.title}
                </Link>
              </SheetClose>
            ))}
          </motion.div>

          {/* Solutions — enter through the problem */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            Solutions
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            {solutionLinks.map((s) => (
              <SheetClose asChild key={s.title}>
                <Link
                  to={s.href}
                  className={`text-base hover:text-primary transition-colors ${isActive(s.href)}`}
                >
                  {s.title}
                </Link>
              </SheetClose>
            ))}
          </motion.div>

          {/* About */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            About
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            {aboutLinks.map((s) => (
              <SheetClose asChild key={s.title}>
                <Link
                  to={s.href}
                  className={`text-base hover:text-primary transition-colors ${isActive(s.href)}`}
                >
                  {s.title}
                </Link>
              </SheetClose>
            ))}
          </motion.div>

          {/* Insights */}
          <motion.div variants={mobileItemVariants}>
            <SheetClose asChild>
              <Link
                to="/insights"
                className={`text-lg font-medium hover:text-primary transition-colors ${isActive("/insights")}`}
              >
                Insights
              </Link>
            </SheetClose>
          </motion.div>

          {/* Assessments */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            Assessments
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            <SheetClose asChild>
              <Link
                to="/assessments"
                className={`text-base font-bold hover:text-primary transition-colors ${isActive("/assessments")}`}
              >
                All Assessments
              </Link>
            </SheetClose>
            {assessmentLinks.map((s) => (
              <SheetClose asChild key={s.title}>
                <Link
                  to={s.href}
                  className={`text-base hover:text-primary transition-colors ${isActive(s.href)}`}
                >
                  {s.title}
                </Link>
              </SheetClose>
            ))}
          </motion.div>

          {/* Client Access */}
          <motion.div
            variants={mobileItemVariants}
            className="text-sm font-bold uppercase tracking-wider text-primary/70 pt-2"
          >
            Client Access
          </motion.div>
          <motion.div
            variants={mobileItemVariants}
            className="pl-4 flex flex-col space-y-4 border-l-2 border-white/10"
          >
            <SheetClose asChild>
              <Link
                to="/support"
                className="text-base text-white/80 hover:text-primary transition-colors"
              >
                Help Center
              </Link>
            </SheetClose>
            <a
              href="https://app.ymbs.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white/80 hover:text-primary transition-colors"
            >
              Elevation Sign-In
            </a>
            <SheetClose asChild>
              <Link
                to="/contact"
                className="text-base text-white/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </SheetClose>
          </motion.div>

          {/* CTA */}
          <motion.div variants={mobileItemVariants}>
            <SheetClose asChild>
              <Link to="/contact">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold w-full mt-4 rounded-full btn-glow">
                  Get Clarity
                </Button>
              </Link>
            </SheetClose>
          </motion.div>
        </motion.nav>
      </SheetContent>
    </Sheet>
  );
}
