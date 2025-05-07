"use client"

import { Coffee, Clock, MapPin, RussianRuble } from "lucide-react"
import Image from 'next/image'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import { DotPulse } from 'ldrs/react'
import 'ldrs/react/DotPulse.css'

export default function Home() {

  const [data, setData] = useState(null)
  const [flippedCards, setFlippedCards] = useState<boolean[]>([])

  const api_home = 'https://my-coffee-server-tau.vercel.app/data'

  const reverseCard = (index: number) => {
    const newFlippedCards = [...flippedCards]
    newFlippedCards[index] = !newFlippedCards[index]
    setFlippedCards(newFlippedCards)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(api_home).then(res => setData(res.data))
      }

      catch(error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-10 md:gap-18">
        <h1 className="text-2xl">Загрузка</h1>
        <DotPulse
          size="43"
          speed="1.3"
          color="white" 
        />
      </div>
    )
  }

  return (
    <main className="min-h-screen">

      <Header/>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
        <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:6xl font-bold">My coffee</h1>
          <p className="text-xl mb-70 mt-5 md:mb-30">Самый лучший кофе у нас</p>
          <Link href='/menu' className="bg-[#C8A27C] text-white px-20 py-3 rounded-full hover:bg-[#967c63] transition text-xl font-bold cursor-pointer">
            Меню
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-[#C8A27C]" />
            <h3 className="text-xl font-bold mb-2 text-black">Премиум бобы</h3>
            <p className="text-gray-600">Кофе поставляется с лучших ферм мира</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-[#C8A27C]" />
            <h3 className="text-xl font-bold mb-2 text-black">Всегда свежий кофе</h3>
            <p className="text-gray-600">Обжаривается каждое утро</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-[#C8A27C]" />
            <h3 className="text-xl font-bold mb-2 text-black">Удобное расположение</h3>
            <p className="text-gray-600">Идеально для работы или отдыха</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F5F2]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Популярные напитки</h2>
          <div className="grid md:gap-x-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div key={index} className='bg-white rounded-lg overflow-hidden shadow-lg object-cover transition-transform duration-300 transform hover:scale-110' onClick={() => reverseCard(index)}>
                <div className={`relative h-48 transition-transform duration-300 transform ${flippedCards[index] ? '' : 'rotate-y-180'}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-[#362d2d] text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-[#C8A27C] text-xl font-bold flex">{item.price}<RussianRuble strokeWidth={3} /></p>
                </div>

                <div className={`absolute inset-0 bg-white p-4 flex items-center justify-center text-center backface-hidden transform ${flippedCards[index] ? '' : 'rotate-y-180'}`}>
                  <p className="text-[#362d2d] text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Coffee brewing"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">История кофейни</h2>
            <p className="text-gray-600 mb-8">
              Кофейня открылась в сердце города в 2025 году. Интерьер кофейни был оформлен в стиле арт-хаус, с картинами местных художников на стенах и уютными уголками для чтения.
              Здесь проводились поэтические вечера, музыкальные выступления и мастер-классы по рисованию.
              Кофейня быстро стала любимым местом для студентов, художников и всех, кто искал вдохновение и общение.
            </p>
            <Link href='/about' className="bg-[#C8A27C] text-white px-10 py-3 rounded-full hover:bg-[#A88B6E] transition font-bold tracking-[0.5px] cursor-pointer">
              Подробнее
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}