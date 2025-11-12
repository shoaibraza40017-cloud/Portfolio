"use client"

import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      icon: "◆",
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    backend: {
      icon: "◈",
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    },
    security: {
      icon: "⚔",
      title: "Security",
      skills: [
        "Penetration Testing",
        "OWASP",
        "Cryptography",
        "Network Security",
        "API Security",
        "Vulnerability Assessment",
      ],
    },
    tools: {
      icon: "⚙",
      title: "Tools & DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Linux"],
    },
  }

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-neon-cyan/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm font-mono font-bold mb-4">SKILLS & EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Technical Arsenal</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? "bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                  : "border border-neon-cyan/30 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/60"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill}
              className="group bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-cyan/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-lg font-bold text-neon-cyan">{skill}</p>
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                  <span className="text-neon-cyan text-xs">→</span>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-neon-cyan to-neon-magenta h-full rounded-full animate-pulse"
                  style={{
                    width: `${85 + Math.random() * 15}%`,
                    animation: `grow 2s ease-out forwards`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
