import { DM_Sans, Space_Mono, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import type { Metadata } from "next"
import "./globals.css"

const _dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })
const _spaceMono = Space_Mono({ weight: "400", subsets: ["latin"], variable: "--font-mono" })
const _dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Radices | Systemic AI Intelligence",
  description: "Radices is a premier AI Automation agency specializing in systemic engineering and intelligent workflow solutions.",
  generator: "Radices AI",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_dmSans.variable} ${_spaceMono.variable} ${_dmSerif.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground relative overflow-x-hidden`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
