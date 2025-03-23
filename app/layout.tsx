import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { Outfit } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { RateLimiter } from "@/components/rate-limiter"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Musical - Discord Music Bot",
  description:
    "Bring seamless music streaming to your Discord server with high-quality audio and easy-to-use commands.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <RateLimiter>{children}</RateLimiter>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'