"use client"

import { useEffect, useState } from "react"

export default function Hero({ scrollY }) {
  const [displayText, setDisplayText] = useState("")
  const fullText = "> Full Stack Developer & Cybersecurity Pentester"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_25%,rgba(0,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(0,255,255,0.05)_75%,rgba(0,255,255,0.05))] bg-[length:60px_60px] animate-pulse opacity-30"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan rounded-full mix-blend-screen blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-neon-magenta rounded-full mix-blend-screen blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 animate-fade-in">
          <p className="text-neon-cyan text-sm md:text-base font-mono font-bold mb-4 opacity-80">Shoaib Raza</p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent">
          Securing & Building
        </h1>

        <div className="h-20 sm:h-24 md:h-32 mb-8">
          <p className="text-lg sm:text-2xl md:text-4xl font-mono text-neon-green mb-4 font-bold">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Building robust web applications and testing their security. Specialized in full-stack development,
          penetration testing, and cybersecurity solutions.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-neon-cyan text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 transition-all duration-300">
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
