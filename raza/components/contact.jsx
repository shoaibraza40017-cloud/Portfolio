"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", project: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-neon-cyan/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Get In Touch</h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let’s discuss how I can help secure and build your next big idea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                <span className="text-neon-cyan text-xl">✉</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white font-bold">shoaibraza24087@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-neon-magenta/20 flex items-center justify-center flex-shrink-0">
                <span className="text-neon-magenta text-xl">📍</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white font-bold">Mumbai</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                <span className="text-neon-green text-xl">💬</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Response Time</p>
                <p className="text-white font-bold">Within 24 Hours</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/60"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/60"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Project Type</label>
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/60"
              >
                <option value="">Select project type...</option>
                <option value="development">Full Stack Development</option>
                <option value="security">Security Assessment</option>
                <option value="consulting">Security Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/60 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-green font-bold py-3 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
