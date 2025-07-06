"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import axios from "axios"
import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type AnimationVariants = {
  hidden: { opacity: number; y?: number; x?: number }
  show: { opacity: number; y?: number; x?: number }
}

export default function About() {
  interface Item {
    name: string
    grade: number
    comment: string
  }

  const [data, setData] = useState<Item[]>([])

  const api_comments = 'https://my-coffee-server-tau.vercel.app/data/comments'

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(api_comments).then(res => setData(res.data))
      }
      catch(error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: AnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <main className="min-h-screen">
      <Header/>

      <motion.section 
        className="pt-32 pb-4 bg-[#F8F5F2] md:px-80 px-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-black">
          История кофейни
        </h1>
        
        <p className="text-[#362d2d] font-bold text-center text-[20px]">
          Заведение открыто с 2025 года
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-15"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Image
              src="https://rosretail.com/storage/uploads/blocks/295/image/0.jpg"
              alt=""
              className="rounded-lg w-full h-[400px] object-cover"
              width={50}
              height={50}
            />
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-center font-bold text-[#362d2d] max-w-100 text-[16px] md:text-xl m-auto"
          >
            Кофейня открылась в сердце города в 2025 году. Интерьер кофейни был оформлен в стиле арт-хаус, с картинами местных художников на стенах и уютными уголками для чтения.
            Секретом успеха кофейни стал не только ароматный кофе, но и особое внимание к каждому посетителю. Кофейня быстро стала центром местной жизни, где рождались новые идеи.
            Это место стало символом единства и тепла для всех, кто искал уединение или компанию.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section 
        className="pt-20 pb-20 bg-[#F0F0F0] md:px-80 px-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Отзывы покупателей
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {data.map((review, index) => (
            <motion.div 
              key={review.name}
              variants={itemVariants}
              className="border p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                <p className="font-bold text-[#362d2d] mr-2">{review.name}</p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      className={`h-5 w-5 ${index < review.grade ? 'text-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-[#362d2d] text-[17px]">{review.comment}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Footer/>
    </main>
  )
}