import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center cursor-pointer" onClick={toggleMenu}>
        <div className={`w-8 h-1 my-0.5 bg-[#F5F0EB] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
        <div className={`w-8 h-1 my-0.5 bg-[#F5F0EB] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
        <div className={`w-8 h-1 my-0.5 bg-[#F5F0EB] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-5 w-full bg-[#1A1512] rounded-md shadow-lg py-4 px-4 z-50 top-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col items-center gap-4">
              <motion.div variants={itemVariants}><Link className="py-2 text-[#F5F0EB]" href="/" onClick={toggleMenu}>Главная</Link></motion.div>
              <motion.div variants={itemVariants}><Link className="py-2 text-[#F5F0EB]" href="/menu" onClick={toggleMenu}>Меню</Link></motion.div>
              <motion.div variants={itemVariants}><Link className="py-2 text-[#F5F0EB]" href="/about" onClick={toggleMenu}>О нас</Link></motion.div>
              <motion.div variants={itemVariants}><Link className="py-2 text-[#F5F0EB]" href="/contacts" onClick={toggleMenu}>Контакты</Link></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}