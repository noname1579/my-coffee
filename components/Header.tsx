import Burger from "./Burger"
import Link from "next/link"
import { Coffee } from "lucide-react"

const Header = () => {

  return ( 
    <div className="fixed w-full bg-white z-50 shadow-sm flex justify-between items-center h-14 md:px-50 px-10">
      <div className="text-[#362d2d] flex items-center">
        <Coffee size={30} /> 
        <h1 className="text-2xl font-bold text-[#362d2d] flex p-3">My coffee</h1>
      </div>
      <nav className="space-x-10 md:flex hidden">
        <Link href="/" className="text-black hover:text-[#C8A27C] transition text-lg">Главная</Link>
        <Link href="/menu" className="text-black hover:text-[#C8A27C] transition text-lg">Меню</Link>
        <Link href="/about" className="text-black hover:text-[#C8A27C] transition text-lg">О нас</Link>
        <Link href="/contacts" className="text-black hover:text-[#C8A27C] transition text-lg">Контакты</Link>
      </nav>

      <div className="md:hidden">
        <Burger />
      </div>
    </div>
  )
}
 
export default Header