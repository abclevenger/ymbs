import SEOHead from "@/components/SEOHead";

export default function A2p() {
  return (
    <div className="py-32 px-6 max-w-4xl mx-auto">
      <SEOHead
        title="A2P 10DLC Compliance | YMBS"
        description="How Yellow Mountain Business Solutions uses A2P (Application-to-Person) messaging, including opt-in consent, opt-out procedures, and data privacy."
        canonical="/a2p"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        A2P 10DLC Compliance
      </h1>
      <div className="prose prose-slate max-w-none text-muted-foreground">
        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Application-to-Person (A2P) Messaging
        </h2>
        <p className="mb-4">
          Yellow Mountain Business Solutions (YMBS) utilizes standard A2P
          (Application-to-Person) messaging protocols for communication with our
          clients and prospects. This includes appointment reminders, assessment
          results, and necessary operational updates.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Opt-in and Consent
        </h2>
        <p className="mb-4">
          We only send SMS messages to individuals who have explicitly opted in
          to receive communications from us. Consent is typically gathered
          through our online forms, assessments, or during discovery calls.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Opt-out Procedures
        </h2>
        <p className="mb-4">
          You may opt out of receiving SMS messages from YMBS at any time.
          Simply reply "STOP" to any message you receive from us. Upon receiving
          your opt-out request, we will immediately cease sending SMS messages
          to your number.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Message Frequency and Rates
        </h2>
        <p className="mb-4">
          Message frequency varies based on your interaction with our team and
          systems. Standard message and data rates may apply depending on your
          mobile carrier plan.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Privacy and Data Sharing
        </h2>
        <p className="mb-4">
          We respect your privacy. Mobile information will not be shared with
          third parties/affiliates for marketing/promotional purposes. All the
          above categories exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties.
        </p>
      </div>
    </div>
  );
}
