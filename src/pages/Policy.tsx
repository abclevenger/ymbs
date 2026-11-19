import SEOHead from "@/components/SEOHead";

export default function Policy() {
  return (
    <div className="py-32 px-6 max-w-4xl mx-auto">
      <SEOHead
        title="Privacy Policy | YMBS"
        description="How Yellow Mountain Business Solutions collects, uses, and protects your personal information when you use our website and services."
        canonical="/policy"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-muted-foreground">
        <p className="mb-4">Last updated: April 2026</p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you fill
          out forms, request an assessment, or communicate with us. This may
          include your name, email address, phone number, organization name, and
          any other information you choose to provide.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve
          our services, to communicate with you, to send you technical notices
          and support messages, and to respond to your comments and questions.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          3. Information Sharing
        </h2>
        <p className="mb-4">
          We do not share your personal information with third parties except as
          described in this privacy policy or with your consent. We may share
          information with vendors, consultants, and other service providers who
          need access to such information to carry out work on our behalf.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          4. Security
        </h2>
        <p className="mb-4">
          We take reasonable measures to help protect information about you from
          loss, theft, misuse and unauthorized access, disclosure, alteration
          and destruction.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          5. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at info@ymbs.pro.
        </p>
      </div>
    </div>
  );
}
