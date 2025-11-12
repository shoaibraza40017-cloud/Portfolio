"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import image1 from "@/image/image1.jpg"

export default function About() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    })
    observer.observe(document.getElementById("about-section"))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div
            id="about-section"
            className={`transform transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-neon-cyan text-sm font-mono font-bold mb-4"></p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Building Secure Digital Solutions</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              full-stack web development and cybersecurity, I specialize in creating
              high-performance applications while maintaining security best practices. My passion lies at the
              intersection of development and security.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I've worked with startups to Fortune 500 companies, conducting penetration tests, securing APIs, and
              building resilient systems. I believe that security should be built in from day one, not added as an
              afterthought.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4 hover:border-neon-cyan/60 transition-all duration-300">
                <p className="text-2xl font-bold text-neon-cyan">50+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="bg-neon-magenta/10 border border-neon-magenta/30 rounded-lg p-4 hover:border-neon-magenta/60 transition-all duration-300">
                <p className="text-2xl font-bold text-neon-magenta">100+</p>
                <p className="text-gray-400 text-sm">Security Tests</p>
              </div>
              <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4 hover:border-neon-green/60 transition-all duration-300">
                <p className="text-2xl font-bold text-neon-green">15+</p>
                <p className="text-gray-400 text-sm">Clients Worldwide</p>
              </div>
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4 hover:border-neon-cyan/60 transition-all duration-300">
                <p className="text-2xl font-bold text-neon-cyan">1</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
           <div className="relative h-96 md:h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-2xl blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/10 via-transparent to-neon-cyan/10 rounded-2xl border border-neon-cyan/20 flex items-center justify-center backdrop-blur-sm">
        <div className="text-center">
          <Image
            src={image1}
            alt="Decorative neon gradient"
            className="rounded-xl h-96 w-96 object-cover"
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  )
}
