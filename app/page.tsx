"use client"

import { Coffee, Clock, MapPin } from "lucide-react"
import Image from 'next/image'
import Head from "next/head"
import favicon from '../public/coffee.svg'
import items from '../mocks'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Head>
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Coffee shop interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4">My coffee</h1>
          <p className="text-xl mb-8">Самый лучшие кофе только у нас</p>
          <button className="bg-[#C8A27C] text-white px-20 py-3 rounded-full hover:bg-[#A88B6E] transition text-xl font-bold tracking-[1px]">
            Меню
          </button>
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
            { items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg object-cover transition-transform duration-300 transform hover:scale-110">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#362d2d] text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-[#C8A27C] text-xl font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full object-cover transition-transform duration-500 transform hover:scale-108">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Coffee brewing"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">История кофейни</h2>
            <p className="text-gray-600 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, cum odit. Debitis voluptatum, dolorem libero repudiandae consequuntur facilis enim, laboriosam fuga, impedit illo assumenda quidem quibusdam ullam ut amet facere.
            </p>
            <button className="bg-[#C8A27C] text-white px-8 py-3 rounded-full hover:bg-[#A88B6E] transition font-bold tracking-[1px]">
              Подробнее
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C1810] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">My coffee</h3>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Часы работы</h4>
              <p className="text-gray-400">Ежедневно</p>
              <p className="text-gray-400">7:00 - 22:00</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <p className="text-gray-400">г. Ростов-на-Дону</p>
              <p className="text-gray-400">test@mail.ru</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}