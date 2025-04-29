import Link from "next/link";
import { useState, useEffect } from "react"

export default function Burger () {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } 

    else {
      document.body.style.overflow = 'auto'
    }

}, [isOpen]);

  return (
    <div>
        <div className="flex flex-col justify-center items-center cursor-pointer" onClick={toggleMenu}>
            <div className={`w-8 h-1 my-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-8 h-1 my-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-8 h-1 my-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </div>
        {isOpen && (
            <div className="absolute right-0 mt-5 w-full bg-gray-900 rounded-md shadow-lg py-1 px-2 z-50 top-10">
                <div className="flex flex-col items-center">
                  <Link className="py-2 text-white z-10" href='/'>Главная</Link>
                  <Link className="py-2 text-white z-10" href='/menu'>Меню</Link>
                  <Link className="py-2 text-white z-10" href='/about'>О нас</Link>
                  <Link className="py-2 text-white z-10" href='/contacts'>Контакты</Link>
                </div>
            </div>
        )}
    </div>
  )
}