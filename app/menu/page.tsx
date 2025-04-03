"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import data from "../mocks_menu"

export default function Menu() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-[#F8F5F2]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">
            Наше меню
          </h1>
          <div className="grid md:gap-x-10 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#362d2d] text-xl font-bold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[#C8A27C] text-xl font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}