"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { RussianRuble } from "lucide-react"
import { DotPulse } from "ldrs/react"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Menu() {
  interface Item {
    image: string
    name: string
    price: number
    description: string
  }

  const [data, setData] = useState<Item[]>()
  const [flippedCards, setFlippedCards] = useState<boolean[]>([])

  const api_menu = 'https://my-coffee-server-tau.vercel.app/data/menu'

  const reverseCard = (index: number) => {
    const newFlippedCards = [...flippedCards]
    newFlippedCards[index] = !newFlippedCards[index]
    setFlippedCards(newFlippedCards)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(api_menu).then(res => setData(res.data))
      }

      catch(error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return (
      <div className="flex flex-col items-center bg-[#362d2d] justify-center h-screen gap-10 md:gap-18">
        <h1 className="text-2xl text-white">Загрузка</h1>
        <DotPulse
          size="43"
          speed="2"
          color="white" 
        />
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-[#F8F5F2]">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Наше меню
          </h1>
          <div className="grid md:gap-x-10 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
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

      <Footer />
    </main>
  )
}