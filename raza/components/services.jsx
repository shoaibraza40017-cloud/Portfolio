"use client"

export default function Services() {
  const services = [
    {
      title: "Full Stack Development",
      description: "Custom web applications built with modern tech stack and security first approach.",
      icon: "◆",
      color: "neon-cyan",
    },
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments and vulnerability testing for your applications.",
      icon: "⚔",
      color: "neon-magenta",
    },
    {
      title: "Security Consulting",
      description: "Expert guidance on implementing security best practices and compliance frameworks.",
      icon: "◈",
      color: "neon-green",
    },
    {
      title: "API Security",
      description: "Secure API design, implementation, and protection against common vulnerabilities.",
      icon: "⬢",
      color: "neon-cyan",
    },
    {
      title: "Code Auditing",
      description: "In-depth code review focusing on security vulnerabilities and performance optimization.",
      icon: "⬢",
      color: "neon-magenta",
    },
    {
      title: "DevSecOps",
      description: "Integration of security into your CI/CD pipeline for continuous protection.",
      icon: "⚙",
      color: "neon-green",
    },
  ]

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-neon-cyan/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-neon-cyan/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl mb-4 text-${service.color}`}>{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
