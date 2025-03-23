import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PrivacyPage() {
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
            Privacy <span className="text-[#ff3131]">Policy</span>
          </h1>
        </ScrollReveal>

        <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm border border-[#ff3131]/20 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 text-white/80">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p>Musical collects minimal data necessary for operation, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Server IDs for configuration settings</li>
                  <li>User IDs for permission management</li>
                  <li>Command usage for improving the bot</li>
                  <li>Voice channel IDs for music playback</li>
                  <li>Song request history for queue management</li>
                </ul>
                <p className="mt-2">
                  We do not collect personal information beyond what is provided through Discord's API and necessary for
                  the bot's functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide and maintain our services</li>
                  <li>Improve and personalize user experience</li>
                  <li>Analyze usage patterns to enhance features</li>
                  <li>Communicate with users about updates or changes</li>
                  <li>Troubleshoot issues and provide support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your information to third parties. We may share
                  anonymous, aggregated data for analytical purposes.
                </p>
                <p className="mt-2">In certain circumstances, we may share information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                <p>
                  Musical integrates with third-party services such as YouTube, Spotify, and other music platforms to
                  provide its functionality. When you use these features, you may be subject to the privacy policies of
                  those services. We encourage you to review the privacy policies of these third-party services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect against unauthorized access, alteration,
                  disclosure, or destruction of your information. However, no method of transmission over the Internet
                  or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <p>
                  We retain data only as long as necessary to provide our services. You may request deletion of your
                  data at any time through our support server. When a server removes Musical, we automatically delete
                  all associated configuration data within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request a copy of your data in a structured, machine-readable format</li>
                </ul>
                <p className="mt-2">To exercise these rights, please contact us through our Discord support server.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                <p>
                  Musical is not intended for use by individuals under the age of 13, or the applicable age of digital
                  consent in your jurisdiction. We do not knowingly collect personal information from children. If we
                  learn that we have collected personal information from a child, we will take steps to delete that
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify users of any significant changes
                  through our Discord support server. Your continued use of Musical after such modifications constitutes
                  your acknowledgment of the modified Privacy Policy and your agreement to abide by it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us through our Discord
                  support server.
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

