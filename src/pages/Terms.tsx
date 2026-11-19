import SEOHead from "@/components/SEOHead";

export default function Terms() {
  return (
    <div className="py-32 px-6 max-w-4xl mx-auto">
      <SEOHead
        title="Terms and Conditions | YMBS"
        description="The terms and conditions governing use of YMBS's website and services, including use license, disclaimers, and limitations."
        canonical="/terms"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Terms and Conditions
      </h1>
      <div className="prose prose-slate max-w-none text-muted-foreground">
        <p className="mb-4">Last updated: April 2026</p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          1. Agreement to Terms
        </h2>
        <p className="mb-4">
          By accessing our website, you agree to be bound by these Terms and
          Conditions and agree that you are responsible for compliance with any
          applicable local laws.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          2. Use License
        </h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on YMBS's website for personal,
          non-commercial transitory viewing only.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          3. Disclaimer
        </h2>
        <p className="mb-4">
          The materials on YMBS's website are provided on an "as is" basis. YMBS
          makes no warranties, expressed or implied, and hereby disclaims and
          negates all other warranties including, without limitation, implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          4. Limitations
        </h2>
        <p className="mb-4">
          In no event shall YMBS or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on YMBS's website.
        </p>
      </div>
    </div>
  );
}
