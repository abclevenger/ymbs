import SEOHead from "@/components/SEOHead";

export default function Accessibility() {
  return (
    <div className="py-32 px-6 max-w-4xl mx-auto">
      <SEOHead
        title="Accessibility Statement | YMBS"
        description="Yellow Mountain Business Solutions is committed to digital accessibility for people with disabilities and continually improves the user experience for everyone."
        canonical="/accessibility"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Accessibility Statement
      </h1>
      <div className="prose prose-slate max-w-none text-muted-foreground">
        <p className="mb-4">
          Yellow Mountain Business Solutions is committed to ensuring digital
          accessibility for people with disabilities. We are continually
          improving the user experience for everyone and applying the relevant
          accessibility standards.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Conformance Status
        </h2>
        <p className="mb-4">
          The Web Content Accessibility Guidelines (WCAG) defines requirements
          for designers and developers to improve accessibility for people with
          disabilities. It defines three levels of conformance: Level A, Level
          AA, and Level AAA. YMBS is partially conformant with WCAG 2.2 level
          AA. Partially conformant means that some parts of the content do not
          fully conform to the accessibility standard.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Feedback
        </h2>
        <p className="mb-4">
          We welcome your feedback on the accessibility of the YMBS website.
          Please let us know if you encounter accessibility barriers on our
          site:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Email: info@ymbs.pro</li>
          <li>Phone: 407-783-7496</li>
        </ul>
        <p className="mb-4">
          We try to respond to feedback within 2 business days.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Technical Specifications
        </h2>
        <p className="mb-4">
          Accessibility of the YMBS website relies on the following technologies
          to work with the particular combination of web browser and any
          assistive technologies or plugins installed on your computer:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <p className="mb-4">
          These technologies are relied upon for conformance with the
          accessibility standards used.
        </p>
      </div>
    </div>
  );
}
