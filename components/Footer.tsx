const Footer = () => {
  return ( 
    <footer className="bg-[#2C1810] text-white py-12">
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">My coffee</h3>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Часы работы</h4>
          <p className="text-gray-400">Ежедневно</p>
          <p className="text-gray-400">7:00 - 22:00</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Адрес</h4>
          <p className="text-gray-400">г. Ростов-на-Дону</p>
          <p className="text-gray-400">ул. Красноармейская 11</p>
        </div>
      </div>
    </div>
  </footer>
  )
}
 
export default Footer