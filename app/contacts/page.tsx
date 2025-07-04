'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import YandexMap from "@/components/YandexMap"

export default function Contacts () {

  return (
    <main className="min-h-screen">
      <Header/>
      
      <section className="pt-32 pb-20 bg-[#F8F5F2] md:px-80 px-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Контакты
        </h1>
        <div className="text-center">
          <div className="flex flex-col items-center my-10 gap-3">
            <div className="flex items-center">
              <MapPin size={26} className=" text-[#362d2d] mx-1" />
              <h2 className="text-xl mx-1 text-[#362d2d] font-bold">
                Адрес
              </h2>
            </div>
            <p className="text-gray-800 text-[17px]">
              г. Ростов-на-Дону
              <br />
              ул. Красноармейская 11
            </p>
          </div>

          <div className="flex flex-col items-center my-10 gap-3">
            <div className="flex items-center">
              <Clock size={26} className=" text-[#362d2d] mx-1" />
              <h2 className="text-xl mx-1 text-[#362d2d] font-bold">
                Время работы
              </h2>
            </div>
            <p className="text-gray-800 text-[17px]">
              Понедельник - Воскресенье
              <br />
              7:00 - 22:00
            </p>
          </div>

          <div className="flex flex-col items-center my-10 gap-3">
            <div className="flex items-center">
              <Phone size={26} className=" text-[#362d2d] mx-1" />
              <h2 className="text-xl mx-1 text-[#362d2d] font-bold">
                Телефон
              </h2>
            </div>
            <p className="text-gray-800 text-[17px]">
              +7 (951) 999 99 99
            </p>
          </div>
          
          <div className="flex flex-col items-center my-10 gap-3">
            <div className="flex items-center">
              <Mail size={26} className=" text-[#362d2d] mx-1" />
              <h2 className="text-xl mx-1 text-[#362d2d] font-bold">
                Почта
              </h2>
            </div>
            <p className="text-gray-800 text-[17px]">
              testtesttest@mail.ru
            </p>
          </div>
        </div>

      </section>

      <YandexMap apiKey='9aac5128-f4a3-4873-b629-97a7d5402b90' />

      <Footer/>
    </main>
  )
}