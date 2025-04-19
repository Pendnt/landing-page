import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pendnt - Turn Conversations into Contacts",
  description:
    "Pendnt is an AI-powered pendant that listens to your trade show conversations and turns them into qualified CRM leads.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  )
}
