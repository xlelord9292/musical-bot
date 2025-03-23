"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface RateLimiterProps {
  children: React.ReactNode
}

export function RateLimiter({ children }: RateLimiterProps) {
  const { toast } = useToast()
  const [isBlocked, setIsBlocked] = useState(false)

  useEffect(() => {
    const requestCount = Number.parseInt(sessionStorage.getItem("requestCount") || "0")
    const lastRequestTime = Number.parseInt(sessionStorage.getItem("lastRequestTime") || "0")
    const now = Date.now()

    if (now - lastRequestTime > 60000) {
      sessionStorage.setItem("requestCount", "1")
      sessionStorage.setItem("lastRequestTime", now.toString())
      return
    }

    sessionStorage.setItem("requestCount", (requestCount + 1).toString())
    sessionStorage.setItem("lastRequestTime", now.toString())

    if (requestCount > 50) {
      setIsBlocked(true)
      toast({
        title: "Rate limit exceeded",
        description: "Too many requests. Please try again later.",
        variant: "destructive",
      })

      setTimeout(() => {
        setIsBlocked(false)
        sessionStorage.setItem("requestCount", "0")
      }, 60000)
    }
  }, [toast])

  if (isBlocked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 p-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">Rate Limit Exceeded</h1>
        <p className="mb-8 text-white/70">Too many requests detected. Please wait a moment before trying again.</p>
      </div>
    )
  }

  return <>{children}</>
}

