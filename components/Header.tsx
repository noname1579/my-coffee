import Burger from "./Burger"
import Link from "next/link"
import { Coffee } from "lucide-react"

const Header = () => {

  return ( 
    <div className="fixed w-full bg-white z-100 shadow-sm flex justify-between items-center h-15 md:px-50 px-10">
      <div className="text-[#362d2d] flex items-center">
        <Coffee /> 
        <h1 className="text-2xl font-bold text-[#362d2d] flex items-center p-5">My coffee</h1>
      </div>
      <nav className="space-x-10 md:flex hidden">
        <Link href="/" className="text-black hover:text-[#C8A27C] transition text-[20px]">Главная</Link>
        <Link href="/menu" className="text-black hover:text-[#C8A27C] transition text-[20px]">Меню</Link>
        <Link href="/about" className="text-black hover:text-[#C8A27C] transition text-[20px]">О нас</Link>
        <Link href="/contacts" className="text-black hover:text-[#C8A27C] transition text-[20px]">Контакты</Link>
      </nav>

        <div className="md:hidden">
          <Burger />
        </div>
    </div>
  )
}
 
export default Header