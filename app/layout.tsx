import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Mohamed Sayed - Portfolio",
  description: "Portfolio website of Mohamed Sayed, a Junior Front-End Developer skilled in ReactJS and TypeScript",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
