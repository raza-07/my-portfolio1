import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import type { Metadata } from "next"
import "./globals.css"

const _inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
})

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
    <html lang="en" className={`${_inter.variable}`}>
      <body className={`font-inter antialiased bg-background text-foreground relative overflow-x-hidden`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
