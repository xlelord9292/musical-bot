import { ScrollReveal } from "@/components/scroll-reveal"

export function TOSSection() {
  return (
    <section id="tos" className="container mx-auto py-20">
      <ScrollReveal>
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Terms of{" "}
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Service</span>
        </h2>
      </ScrollReveal>

      <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm border border-white/10">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-white/80">
            <h3 className="text-xl font-bold text-white">1. Acceptance of Terms</h3>
            <p>
              By inviting Musical to your Discord server, you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our bot.
            </p>

            <h3 className="text-xl font-bold text-white">2. Use of the Bot</h3>
            <p>
              Musical is a Discord bot designed to play music in voice channels. You agree to use the bot only for its
              intended purposes and in compliance with Discord's Terms of Service.
            </p>

            <h3 className="text-xl font-bold text-white">3. User Conduct</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the bot to violate any laws or regulations</li>
              <li>Attempt to abuse, exploit, or harm the bot or its services</li>
              <li>Use the bot to distribute inappropriate or copyrighted content</li>
              <li>Interfere with other users' enjoyment of the bot</li>
            </ul>

            <h3 className="text-xl font-bold text-white">4. Availability and Updates</h3>
            <p>
              We strive to keep Musical online 24/7, but we do not guarantee uninterrupted service. The bot may be
              unavailable during maintenance or updates. We reserve the right to modify, suspend, or discontinue any
              aspect of the bot at any time.
            </p>

            <h3 className="text-xl font-bold text-white">5. Limitation of Liability</h3>
            <p>
              Musical is provided "as is" without warranties of any kind. We are not responsible for any damages or
              issues that may arise from the use of our bot.
            </p>

            <h3 className="text-xl font-bold text-white">6. Changes to Terms</h3>
            <p>
              We reserve the right to update these Terms of Service at any time. Continued use of the bot after changes
              constitutes acceptance of the new terms.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

