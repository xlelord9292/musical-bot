"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      {children}
    </div>
  )
}

