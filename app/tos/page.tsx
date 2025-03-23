import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TOSPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1a0a0a] via-[#2a0f0f] to-[#1a0a0a]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-[#ff3131]/20">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[#ff3131] opacity-75 blur-sm animate-pulse"></div>
              <Image
                src="/bot.png"
                alt="Musical Logo"
                width={40}
                height={40}
                className="h-10 w-10 relative rounded-full"
              />
            </div>
            <span className="text-2xl font-bold text-white">Musical</span>
          </div>

          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#ff3131] group relative">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3131] transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto py-16 flex-1">
        <ScrollReveal>
          <h1 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Terms of <span className="text-[#ff3131]">Service</span>
          </h1>
        </ScrollReveal>

        <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm border border-[#ff3131]/20 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 text-white/80">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By inviting Musical to your Discord server, you agree to be bound by these Terms of Service. If you do
                  not agree to these terms, please do not use our bot.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use of the Bot</h2>
                <p>
                  Musical is a Discord bot designed to play music in voice channels. You agree to use the bot only for
                  its intended purposes and in compliance with Discord's Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use the bot to violate any laws or regulations</li>
                  <li>Attempt to abuse, exploit, or harm the bot or its services</li>
                  <li>Use the bot to distribute inappropriate or copyrighted content</li>
                  <li>Interfere with other users' enjoyment of the bot</li>
                  <li>Attempt to reverse engineer, decompile, or otherwise extract the source code of the bot</li>
                  <li>Use the bot for any commercial purposes without explicit permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Availability and Updates</h2>
                <p>
                  We strive to keep Musical online 24/7, but we do not guarantee uninterrupted service. The bot may be
                  unavailable during maintenance or updates. We reserve the right to modify, suspend, or discontinue any
                  aspect of the bot at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p>
                  Musical is provided "as is" without warranties of any kind. We are not responsible for any damages or
                  issues that may arise from the use of our bot. In no event shall Musical, its operators, developers,
                  or contributors be liable for any direct, indirect, incidental, special, or consequential damages
                  arising out of or in any way connected with the use of the bot.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
                <p>
                  Musical may integrate with third-party services such as YouTube, Spotify, and other music platforms.
                  We are not responsible for the content provided by these services, and your use of such content is
                  subject to the terms and conditions of those services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                <p>
                  All intellectual property rights in and to the bot, including but not limited to copyright,
                  trademarks, and trade secrets, are owned by Musical. You may not use our intellectual property without
                  prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to Musical at any time, without prior notice
                  or liability, for any reason whatsoever, including without limitation if you breach these Terms of
                  Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to update these Terms of Service at any time. Continued use of the bot after
                  changes constitutes acceptance of the new terms. We will make reasonable efforts to notify users of
                  significant changes through our Discord support server.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us through our Discord support
                  server.
                </p>
              </div>

              <div className="pt-4 border-t border-[#ff3131]/20">
                <p className="text-sm text-white/60">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto py-6">
        <div className="flex flex-col items-center justify-center gap-4 border-t border-[#ff3131]/20 pt-6 text-center">
          <div className="flex items-center gap-2">
            <Image src="/bot.png" alt="Musical Logo" width={24} height={24} className="h-6 w-6 rounded-full" />
            <span className="text-lg font-bold text-white">Musical</span>
          </div>

          <div className="text-sm text-white/50">© {new Date().getFullYear()} Musical. All rights reserved.</div>
        </div>
      </footer>
    </main>
  )
}

