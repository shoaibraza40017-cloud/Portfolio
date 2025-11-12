"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "SecureAPI Gateway",
      description: "Enterprise-grade API gateway with built-in security features and real-time threat detection.",
      tags: ["Node.js", "Security", "AWS"],
      link: "#",
    },
    {
      id: 2,
      title: "VulnScanner Pro",
      description: "Automated vulnerability scanning tool for web applications with detailed reporting.",
      tags: ["Python", "React", "Database"],
      link: "#",
    },
    {
      id: 3,
      title: "CryptoVault",
      description: "Secure file encryption and storage system with blockchain verification.",
      tags: ["Next.js", "Encryption", "Web3"],
      link: "#",
    },
    {
      id: 4,
      title: "MonitorX Dashboard",
      description: "Real-time network monitoring and security analytics dashboard.",
      tags: ["React", "WebSocket", "D3.js"],
      link: "#",
    },
    {
      id: 5,
      title: "PenTest Automation",
      description: "Automated penetration testing framework for comprehensive security audits.",
      tags: ["Python", "Automation", "CLI"],
      link: "#",
    },
    {
      id: 6,
      title: "DevSecOps Pipeline",
      description: "Complete CI/CD pipeline with integrated security scanning and compliance checks.",
      tags: ["Docker", "Kubernetes", "DevOps"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-neon-cyan/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm font-mono font-bold mb-4">// FEATURED WORK</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Recent Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 border border-neon-cyan/20 rounded-xl overflow-hidden transition-all duration-300 transform hover:border-neon-cyan/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-magenta/0 group-hover:from-neon-cyan/10 group-hover:to-neon-magenta/10 transition-all duration-300"></div>

              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-neon-cyan flex-1">{project.title}</h3>
                  <div className="w-10 h-10 rounded-lg bg-neon-magenta/20 flex items-center justify-center group-hover:bg-neon-magenta/40 transition-colors">
                    <span className="text-neon-magenta">→</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full hover:bg-neon-cyan/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-neon-green font-bold text-sm group-hover:gap-3 transition-all"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
