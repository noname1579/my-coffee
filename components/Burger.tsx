import Link from "next/link";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center cursor-pointer" onClick={toggleMenu}>
        <div className={`w-8 h-1 my-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-8 h-1 my-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-8 h-1 my-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute right-0 mt-5 w-full bg-gray-900 rounded-md shadow-lg py-1 px-2 z-50 top-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col items-center">
              <motion.div variants={itemVariants}>
                <Link className="py-2 text-white z-10 block" href='/'>Главная</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link className="py-2 text-white z-10 block" href='/menu'>Меню</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link className="py-2 text-white z-10 block" href='/about'>О нас</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link className="py-2 text-white z-10 block" href='/contacts'>Контакты</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}