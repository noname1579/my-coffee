import type { Metadata } from "next"
import { Unbounded, Inter } from "next/font/google"
import "./styles/globals.css"

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "My coffee",
  description: "Спешелти-кофейня в Ростове-на-Дону",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="bg-[#1A1512] text-[#F5F0EB]">
        {children}
      </body>
    </html>
  )
}