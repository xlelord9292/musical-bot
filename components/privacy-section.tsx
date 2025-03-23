import { ScrollReveal } from "@/components/scroll-reveal"

export function PrivacySection() {
  return (
    <section id="privacy" className="container mx-auto py-20">
      <ScrollReveal>
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Privacy{" "}
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Policy</span>
        </h2>
      </ScrollReveal>

      <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm border border-white/10">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-white/80">
            <h3 className="text-xl font-bold text-white">1. Information We Collect</h3>
            <p>Musical collects minimal data necessary for operation, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Server IDs for configuration settings</li>
              <li>User IDs for permission management</li>
              <li>Command usage for improving the bot</li>
            </ul>

            <h3 className="text-xl font-bold text-white">2. How We Use Information</h3>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize user experience</li>
              <li>Analyze usage patterns to enhance features</li>
              <li>Communicate with users about updates or changes</li>
            </ul>

            <h3 className="text-xl font-bold text-white">3. Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your information to third parties. We may share anonymous,
              aggregated data for analytical purposes.
            </p>

            <h3 className="text-xl font-bold text-white">4. Data Security</h3>
            <p>
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure,
              or destruction of your information.
            </p>

            <h3 className="text-xl font-bold text-white">5. Data Retention</h3>
            <p>
              We retain data only as long as necessary to provide our services. You may request deletion of your data at
              any time through our support server.
            </p>

            <h3 className="text-xl font-bold text-white">6. Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>

            <h3 className="text-xl font-bold text-white">7. Changes to Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any significant changes
              through our Discord support server.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

