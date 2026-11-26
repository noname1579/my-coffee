"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fetchLocalData } from "@/lib/fetchData"

export default function About() {
  interface Item {
    name: string
    grade: number
    comment: string
  }

  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    fetchLocalData<Item[]>("/data/comments.json")
      .then((res) => setData(res))
      .catch((error) => console.error(error))
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-20 bg-[#1A1512]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-[#C8A27C] uppercase tracking-[0.3em] text-sm mb-6">О нас</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F5F0EB]">
              История <span className="text-[#C8A27C]">кофейни</span>
            </h1>
            <p className="text-[#F5F0EB]/60 text-xl mt-6">Заведение открыто с 2025 года</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              className="relative h-[500px] w-full rounded-2xl overflow-hidden"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Coffee"
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
              <p className="text-[#F5F0EB]/70 text-lg leading-relaxed mb-6">
                Кофейня открылась в сердце города в 2025 году. Интерьер оформлен в стиле арт-хаус, с картинами местных художников на стенах и уютными уголками для чтения.
              </p>
              <p className="text-[#F5F0EB]/70 text-lg leading-relaxed mb-6">
                Секретом успеха кофейни стал не только ароматный кофе, но и особое внимание к каждому посетителю. Здесь проводились поэтические вечера, музыкальные выступления и мастер-классы по рисованию.
              </p>
              <p className="text-[#F5F0EB]/70 text-lg leading-relaxed">
                Это место стало символом единства и тепла для всех, кто искал уединение или компанию.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#241E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-20 text-[#F5F0EB]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Отзывы <span className="text-[#C8A27C]">гостей</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1512] p-8 rounded-2xl border border-[#F5F0EB]/5"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.grade ? "text-[#C8A27C] fill-[#C8A27C]" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[#F5F0EB]/80 mb-4 leading-relaxed">{review.comment}</p>
                <p className="text-[#C8A27C] font-bold text-sm">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}