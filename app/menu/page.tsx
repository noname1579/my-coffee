"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { RussianRuble } from "lucide-react"
import { DotPulse } from "ldrs/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fetchWithFallback } from "@/lib/fetchData"

export default function Menu() {
  interface Item {
    image: string
    name: string
    price: number
    description: string
  }

  const [data, setData] = useState<Item[]>()

  const api_menu = "https://my-coffee-server-tau.vercel.app/data/menu"
  const fallback_menu = "/data/menu.json"

  useEffect(() => {
    fetchWithFallback<Item[]>(api_menu, fallback_menu)
      .then((res) => setData(res))
      .catch((error) => console.error(error))
  }, [])

  if (!data) {
    return (
      <div className="flex flex-col items-center bg-[#1A1512] justify-center h-screen gap-10 md:gap-18">
        <DotPulse size="43" speed="2" color="#C8A27C" />
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-32 bg-[#1A1512]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-[#C8A27C] uppercase tracking-[0.3em] text-sm mb-6">Меню</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F5F0EB]">
              Что <span className="text-[#C8A27C]">пить</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-[#241E1A] rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#F5F0EB]">{item.name}</h3>
                    <span className="text-[#C8A27C] font-bold text-lg flex items-center">
                      {item.price}<RussianRuble size={16} strokeWidth={3} />
                    </span>
                  </div>
                  <p className="text-[#F5F0EB]/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}