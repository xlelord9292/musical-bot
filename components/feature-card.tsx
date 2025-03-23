import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 border border-[#ff3131]/20 hover:border-[#ff3131]/40 hover:shadow-lg hover:shadow-[#ff3131]/10">
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}

