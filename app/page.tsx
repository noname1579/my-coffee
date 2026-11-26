"use client"

import { RussianRuble } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"
import { useEffect, useState } from "react"
import { DotPulse } from "ldrs/react"
import "ldrs/react/DotPulse.css"
import { motion } from "framer-motion"
import { fetchLocalData } from "@/lib/fetchData"

export default function Home() {
  interface Item {
    image: string
    name: string
    price: number
    description: string
  }

  const [data, setData] = useState<Item[]>()

  useEffect(() => {
    fetchLocalData<Item[]>("/data/home.json")
      .then((res) => setData(res))
      .catch((error) => console.error(error + " :/"))
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

      {/* HERO */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1512] via-[#1A1512]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#C8A27C] uppercase tracking-[0.3em] text-sm mb-6"
          >
            Спешелти-кофейня · Ростов-на-Дону
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-[#F5F0EB] leading-none mb-8"
          >
            Кофе,<br />который<br /><span className="text-[#C8A27C]">будит город</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            <Link href="/menu" className="bg-[#C8A27C] text-[#1A1512] px-10 py-4 rounded-full font-bold hover:bg-[#F5F0EB] transition">
              Смотреть меню
            </Link>
            <Link href="/contacts" className="border border-[#F5F0EB]/30 text-[#F5F0EB] px-10 py-4 rounded-full font-bold hover:bg-[#F5F0EB]/10 transition">
              Как добраться
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ПОЧЕМУ МЫ */}
      <section className="py-32 bg-[#1A1512]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-[#F5F0EB]">
            Почему <span className="text-[#C8A27C]">мы</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Премиум бобы", desc: "Поставляем с лучших ферм мира, обжариваем каждое утро" },
              { num: "02", title: "Скорость", desc: "Готовим за 3 минуты — успеете даже в обеденный перерыв" },
              { num: "03", title: "Локация", desc: "В сердце города, рядом с офисами и остановками" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-t border-[#F5F0EB]/10 pt-8"
              >
                <span className="text-[#C8A27C] text-sm tracking-widest">{item.num}</span>
                <h3 className="text-2xl font-bold mt-4 mb-3 text-[#F5F0EB]">{item.title}</h3>
                <p className="text-[#F5F0EB]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОПУЛЯРНЫЕ НАПИТКИ */}
      <section className="py-32 bg-[#241E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#F5F0EB]">
              Популярное <span className="text-[#C8A27C]">меню</span>
            </h2>
            <Link href="/menu" className="text-[#C8A27C] hover:text-[#F5F0EB] transition text-sm uppercase tracking-wider">
              Всё меню →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-[#1A1512] rounded-2xl overflow-hidden"
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

      {/* ИСТОРИЯ */}
      <section className="py-32 bg-[#1A1512]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative h-[500px] w-full rounded-2xl overflow-hidden"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
              alt="Coffee brewing"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#C8A27C] uppercase tracking-[0.3em] text-sm mb-6">О нас</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F5F0EB]">История кофейни</h2>
            <p className="text-[#F5F0EB]/60 mb-8 leading-relaxed">
              Кофейня открылась в сердце города в 2025 году. Интерьер оформлен в стиле арт-хаус, с картинами местных художников на стенах и уютными уголками для чтения.
              Здесь проводились поэтические вечера, музыкальные выступления и мастер-классы по рисованию.
              Кофейня быстро стала любимым местом для студентов, художников и всех, кто искал вдохновение и общение.
            </p>
            <Link href="/about" className="inline-block border border-[#C8A27C] text-[#C8A27C] px-10 py-3 rounded-full hover:bg-[#C8A27C] hover:text-[#1A1512] transition font-bold">
              Подробнее
            </Link>
          </motion.div>
        </div>
      </section>

      {/* КАК ЗАКАЗАТЬ */}
      <section className="py-32 bg-[#241E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-[#F5F0EB]">
            Как <span className="text-[#C8A27C]">заказать</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { num: "1", title: "Выберите напиток", desc: "Загляните в меню и выберите, что хотите" },
              { num: "2", title: "Напишите нам", desc: "Позвоните или напишите в WhatsApp" },
              { num: "3", title: "Заберите заказ", desc: "Приходите и забирайте без ожидания" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-6xl font-bold text-[#C8A27C] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
                  {item.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#F5F0EB]">{item.title}</h3>
                <p className="text-[#F5F0EB]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}