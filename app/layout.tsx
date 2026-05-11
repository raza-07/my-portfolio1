import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import type { Metadata } from "next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const _serif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-serif" })

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
    <html lang="en" className={`dark ${_geist.variable} ${_geistMono.variable}`}>
      <body className={`font-sans antialiased bg-black text-white relative overflow-x-hidden`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
