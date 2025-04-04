'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

export default function About () {

  const img = 'https://media.istockphoto.com/id/1428594094/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D0%B8-%D1%81-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%81%D1%82%D0%BE%D0%BB%D0%B0%D0%BC%D0%B8-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%BE%D0%B9-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%BE%D0%B9-%D0%B8-%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D1%81%D0%BD%D1%8B%D0%BC%D0%B8-%D1%81%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=Wevl1Qzi2D18El1kRzOwAiUoM2XGwylgy_-q6IiwH8Y='

  return (
    <main className="min-h-screen">
      <Header/>

      <section className="pt-32 pb-20 bg-[#F8F5F2] md:px-80 px-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          История кофейни
        </h1>
        <p className="text-[#362d2d] font-bold text-center text-[20px]">Заведение открыто с 9999 года</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-15">
          <img
            src="https://assets.turbologo.ru/blog/ru/2020/02/18162724/a5a4b6991268b801e30d82bbc757c672-958x575.jpg"
            className="rounded-lg w-full h-[400px] object-cover"
          />
        <p className="text-center font-bold text-[#362d2d] max-w-100 text-xl m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe sed doloribus expedita iure quas atque corporis facilis adipisci, odit architecto! Magni aperiam veniam illum laudantium minima sunt placeat maxime!</p>
        </div>
      </section>

      <Footer/>
    </main>
  )
}