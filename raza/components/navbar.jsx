"use client"

import { useState } from "react"
import Image from "next/image";
import logo from "@/image/logo2-Photoroom.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
         <div className="flex items-center justify-center">
  <div className="flex items-center justify-center">
  <div className="relative w-16 h-16">
    {/* Animated outer border */}
    <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/50 animate-ping"></div>

    {/* Static border */}
    <div className="absolute inset-0 rounded-full border-2 border-neon-cyan"></div>

    {/* Logo */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        src={logo}
        alt="My Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  </div>
</div>
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neon-cyan p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-neon-cyan/20 pt-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
