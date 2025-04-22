'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

export default function About () {

  return (
    <main className="min-h-screen">
      <Header/>

      <section className="pt-32 pb-20 bg-[#F8F5F2] md:px-80 px-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          История кофейни
        </h1>
        <p className="text-[#362d2d] font-bold text-center text-[20px]">Заведение открыто с 2025 года</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-15">
          <Image
            src="https://assets.turbologo.ru/blog/ru/2020/02/18162724/a5a4b6991268b801e30d82bbc757c672-958x575.jpg"
            alt=""
            className="rounded-lg w-full h-[400px] object-cover"
            width={50}
            height={50}
          />
        <p className="text-center font-bold text-[#362d2d] max-w-100 text-xl m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe sed doloribus expedita iure quas atque corporis facilis adipisci, odit architecto! Magni aperiam veniam illum laudantium minima sunt placeat maxime!</p>
        </div>
      </section>

      <Footer/>
    </main>
  )
}