import { Menu } from "lucide-react"
import { useState } from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  function Click() {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return ( 
    <div className="fixed w-full bg-white z-1 shadow-sm flex justify-between items-center h-15 md:px-50 px-10">
      <h1 className="text-3xl font-bold text-black">My coffee</h1>
      <nav className="space-x-10 md:flex hidden">
        <a href="/" className="text-black hover:text-[#C8A27C] transition text-[20px]">Главная</a>
        <a href="/menu" className="text-black hover:text-[#C8A27C] transition text-[20px]">Меню</a>
        <a href="/about" className="text-black hover:text-[#C8A27C] transition text-[20px]">О нас</a>
        <a href="/contacts" className="text-black hover:text-[#C8A27C] transition text-[20px]">Конкакты</a>
      </nav>
        <Menu className="text-black scale-130 md:hidden" onClick={Click} />
    </div>
  )
}
 
export default Header