"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import YandexMap from "@/components/YandexMap"
import { motion } from "framer-motion"

export default function Contacts() {
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
            <p className="text-[#C8A27C] uppercase tracking-[0.3em] text-sm mb-6">Контакты</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F5F0EB]">
              Где нас <span className="text-[#C8A27C]">найти</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-10">
              <div className="flex gap-4">
                <MapPin size={24} className="text-[#C8A27C] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-[#C8A27C] mb-2">Адрес</h2>
                  <p className="text-[#F5F0EB] text-lg">г. Ростов-на-Дону</p>
                  <p className="text-[#F5F0EB]/60">ул. Красноармейская 11</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-[#C8A27C] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-[#C8A27C] mb-2">Часы работы</h2>
                  <p className="text-[#F5F0EB] text-lg">Понедельник — Воскресенье</p>
                  <p className="text-[#F5F0EB]/60">7:00 — 22:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-[#C8A27C] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-[#C8A27C] mb-2">Телефон</h2>
                  <a href="tel:+79519999999" className="text-[#F5F0EB] text-lg hover:text-[#C8A27C] transition">
                    +7 (951) 999 99 99
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-[#C8A27C] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-[#C8A27C] mb-2">Почта</h2>
                  <a href="mailto:testtesttest@mail.ru" className="text-[#F5F0EB] text-lg hover:text-[#C8A27C] transition">
                    testtesttest@mail.ru
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/79519999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C8A27C] text-[#1A1512] px-10 py-4 rounded-full font-bold hover:bg-[#F5F0EB] transition"
              >
                Написать в WhatsApp
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden h-[500px]">
              <YandexMap apiKey="9aac5128-f4a3-4873-b629-97a7d5402b90" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}