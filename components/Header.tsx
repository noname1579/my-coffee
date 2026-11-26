"use client"
import Burger from "./Burger"
import Link from "next/link"
import { Coffee } from "lucide-react"
import { useEffect, useState } from "react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1512]/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-[#F5F0EB] flex items-center gap-2">
          <Coffee size={28} />
          <span className="text-xl font-bold" style={{ fontFamily: "var(--font-unbounded)" }}>
            My coffee
          </span>
        </Link>
        <nav className="space-x-8 md:flex hidden">
          <Link href="/" className="text-[#F5F0EB]/80 hover:text-[#C8A27C] transition text-sm uppercase tracking-wider">Главная</Link>
          <Link href="/menu" className="text-[#F5F0EB]/80 hover:text-[#C8A27C] transition text-sm uppercase tracking-wider">Меню</Link>
          <Link href="/about" className="text-[#F5F0EB]/80 hover:text-[#C8A27C] transition text-sm uppercase tracking-wider">О нас</Link>
          <Link href="/contacts" className="text-[#F5F0EB]/80 hover:text-[#C8A27C] transition text-sm uppercase tracking-wider">Контакты</Link>
        </nav>
        <div className="md:hidden">
          <Burger />
        </div>
      </div>
    </header>
  )
}

export default Header