import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "CyberSecure Dev - Full Stack & Pentesting",
  description: "Professional portfolio of a full-stack web developer and cybersecurity pentester",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
