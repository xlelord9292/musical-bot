"use client"

import { useEffect, useState } from "react"
import { getConfig } from "@/lib/config"

export function ServerCounter() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchServerCount = async () => {
      try {
        const config = await getConfig()
        setCount(config.serverCount || 0)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch server count:", error)
        setIsLoading(false)
      }
    }

    fetchServerCount()
  }, [])

  if (isLoading) {
    return <span>Loading...</span>
  }

  return <span>Together we achieved {count}+ servers and counting!</span>
}

