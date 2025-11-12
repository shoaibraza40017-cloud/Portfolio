"use client";
import Image from "next/image";
import image1 from "@/image/logo2-Photoroom.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neon-cyan/10 bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-3">
              <Image
                src={image1}
                alt="My Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            
            </div>
            <p className="text-gray-400 text-sm">
              Full-stack developer & cybersecurity pentester
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {["About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white font-bold mb-4">Connect</p>
            <ul className="space-y-2">
              {["LinkedIn", "GitHub", "Twitter", "Email"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} CyberDev. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
