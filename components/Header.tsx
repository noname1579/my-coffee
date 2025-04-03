import { useState } from "react"
import Burger from "./Burger"

const Header = () => {

  return ( 
    <div className="fixed w-full bg-white z-100 shadow-sm flex justify-between items-center h-15 md:px-50 px-10">
      <h1 className="text-3xl font-bold text-black">My coffee</h1>
      <nav className="space-x-10 md:flex hidden">
        <a href="#" className="text-black hover:text-[#C8A27C] transition text-[20px]">Главная</a>
        <a href="#" className="text-black hover:text-[#C8A27C] transition text-[20px]">Меню</a>
        <a href="#" className="text-black hover:text-[#C8A27C] transition text-[20px]">О нас</a>
        <a href="#" className="text-black hover:text-[#C8A27C] transition text-[20px]">Контакты</a>
      </nav>

        <div className="md:hidden">
          <Burger />
        </div>
    </div>
  )
}
 
export default Header