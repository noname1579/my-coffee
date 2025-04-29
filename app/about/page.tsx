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
            src="https://rosretail.com/storage/uploads/blocks/295/image/0.jpg"
            alt=""
            className="rounded-lg w-full h-[400px] object-cover"
            width={50}
            height={50}
          />
        <p className="text-center font-bold text-[#362d2d] max-w-100 text-xl m-auto">
          Кофейня открылась в сердце города в 2025 году. Интерьер кофейни был оформлен в стиле арт-хаус, с картинами местных художников на стенах и уютными уголками для чтения.
          Секретом успеха кофейни стал не только ароматный кофе, но и особое внимание к каждому посетителю. Кофейня быстро стала центром местной жизни, где рождались новые идеи.
          Это место стало символом единства и тепла для всех, кто искал уединение или компанию.
        </p>
        </div>
      </section>

      <Footer/>
    </main>
  )
}