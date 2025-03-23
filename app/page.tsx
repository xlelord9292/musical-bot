import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Music, Headphones, Server, Users, Zap, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServerCounter } from "@/components/server-counter"
import { MusicWaveform } from "@/components/music-waveform"
import { MusicParticles } from "@/components/music-particles"
import { getConfig } from "@/lib/config"
import { FeatureCard } from "@/components/feature-card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default async function Home() {
  const config = await getConfig()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1a0a0a] via-[#2a0f0f] to-[#1a0a0a]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div>
        <MusicWaveform />
        <MusicParticles />
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

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href={config.discordInviteUrl} external>
              Discord
            </NavLink>
            <NavLink href="/tos">TOS</NavLink>
            <NavLink href="/privacy">Privacy</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Link href={config.botInviteUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ff3131] hover:bg-[#ff4545] shadow-lg shadow-[#ff3131]/20 transition-all duration-300 hover:shadow-[#ff3131]/40">
                Invite Me
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section
        id="home"
        className="container mx-auto flex flex-col items-center justify-center py-32 text-center min-h-[90vh]"
      >
        <Suspense fallback={<div className="h-6"></div>}>
          <div className="mb-6 flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-[#ff3131] backdrop-blur-sm animate-pulse">
            <Server className="h-4 w-4" />
            <ServerCounter />
          </div>
        </Suspense>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
          Unleash the perfect <span className="text-[#ff3131]">rhythm</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-white/80">
          Bring seamless music streaming to your Discord server with high-quality audio and easy-to-use commands.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={config.botInviteUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#ff3131] hover:bg-[#ff4545] shadow-lg shadow-[#ff3131]/20 transition-all duration-300 hover:shadow-[#ff3131]/40"
            >
              Add To Discord
            </Button>
          </Link>
          <Link href={config.supportServerUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-[#ff3131]/30 text-white hover:bg-[#ff3131]/10 hover:border-[#ff3131]/50 transition-all duration-300"
            >
              Support Server
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-[#ff3131]/50 hover:text-[#ff3131] transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="container mx-auto py-20">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            <span className="text-[#ff3131]">Powerful</span> Features
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delay={0.1}>
            <FeatureCard
              icon={<Music className="h-10 w-10 text-[#ff3131]" />}
              title="High Quality Audio"
              description="Experience crystal clear sound with our high-fidelity audio streaming technology."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <FeatureCard
              icon={<Headphones className="h-10 w-10 text-[#ff3131]" />}
              title="Multiple Sources"
              description="Play music from YouTube, Spotify, SoundCloud, and many more platforms."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <FeatureCard
              icon={<Users className="h-10 w-10 text-[#ff3131]" />}
              title="DJ Roles"
              description="Control who can manage the music with customizable DJ roles and permissions."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-[#ff3131]" />}
              title="Fast Response"
              description="Enjoy quick command responses and minimal latency for a smooth experience."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-[#ff3131]" />}
              title="24/7 Uptime"
              description="Our bot stays online around the clock, ensuring your music never stops."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <FeatureCard
              icon={<Server className="h-10 w-10 text-[#ff3131]" />}
              title="Easy Setup"
              description="Get started in seconds with simple commands and intuitive controls."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ section */}
      <section id="faq" className="container mx-auto py-20">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Frequently Asked <span className="text-[#ff3131]">Questions</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 border border-[#ff3131]/20 hover:border-[#ff3131]/40">
              <h3 className="mb-2 text-xl font-bold text-white">How do I add Musical to my server?</h3>
              <p className="text-white/70">
                Simply click the "Add to Discord" button on our website, authorize the bot, and select your server.
                That's it!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 border border-[#ff3131]/20 hover:border-[#ff3131]/40">
              <h3 className="mb-2 text-xl font-bold text-white">What commands can I use?</h3>
              <p className="text-white/70">
                Musical supports a wide range of commands like /play, /skip, /queue, /pause, and many more. Check our
                documentation for the full list.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 border border-[#ff3131]/20 hover:border-[#ff3131]/40">
              <h3 className="mb-2 text-xl font-bold text-white">Is Musical free to use?</h3>
              <p className="text-white/70">
                Yes! Musical is completely free to use with all features included. There are no premium restrictions or
                paywalls.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 border border-[#ff3131]/20 hover:border-[#ff3131]/40">
              <h3 className="mb-2 text-xl font-bold text-white">How do I report issues?</h3>
              <p className="text-white/70">
                Join our support server and create a ticket, or use the /report command directly in your Discord server.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto py-20">
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-r from-[#ff3131]/10 to-[#ff3131]/5 p-10 text-center backdrop-blur-sm border border-[#ff3131]/20">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Ready to elevate your Discord experience?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg text-white/80">
              Join thousands of servers already enjoying the perfect music experience with Musical.
            </p>
            <Link href={config.botInviteUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#ff3131] hover:bg-[#ff4545] text-white transition-all duration-300 shadow-lg shadow-[#ff3131]/20 hover:shadow-[#ff3131]/40"
              >
                Add Musical to Discord
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-10">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#ff3131]/20 pt-10 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[#ff3131] opacity-75 blur-sm"></div>
              <Image
                src="/bot.png"
                alt="Musical Logo"
                width={30}
                height={30}
                className="h-8 w-8 relative rounded-full"
              />
            </div>
            <span className="text-xl font-bold text-white">Musical</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="text-sm text-white/70 hover:text-[#ff3131] transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm text-white/70 hover:text-[#ff3131] transition-colors">
              Features
            </a>
            <a href="#faq" className="text-sm text-white/70 hover:text-[#ff3131] transition-colors">
              FAQ
            </a>
            <Link
              href={config.discordInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-[#ff3131] transition-colors"
            >
              Discord
            </Link>
            <Link href="/tos" className="text-sm text-white/70 hover:text-[#ff3131] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-[#ff3131] transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="text-sm text-white/50">© {new Date().getFullYear()} Musical. All rights reserved.</div>
        </div>
      </footer>
    </main>
  )
}

function NavLink({
  href,
  children,
  external = false,
}: { href: string; children: React.ReactNode; external?: boolean }) {
  const Component = external || href.startsWith("/") ? Link : "a"
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Component href={href} className="text-white hover:text-[#ff3131] transition-colors relative group" {...props}>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3131] transition-all duration-300 group-hover:w-full"></span>
    </Component>
  )
}

