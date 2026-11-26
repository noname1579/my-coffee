const Footer = () => {
  return (
    <footer className="bg-[#0F0C0A] text-[#F5F0EB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>
              My coffee
            </h3>
            <p className="text-[#F5F0EB]/50 max-w-sm">
              Спешелти-кофейня в сердце Ростова. Обжариваем, варим, любим.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#C8A27C] mb-4">Часы</h4>
            <p className="text-[#F5F0EB]/70">Ежедневно</p>
            <p className="text-[#F5F0EB]/70">7:00 — 22:00</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#C8A27C] mb-4">Адрес</h4>
            <p className="text-[#F5F0EB]/70">Ростов-на-Дону</p>
            <p className="text-[#F5F0EB]/70">ул. Красноармейская, 11</p>
          </div>
        </div>
        <div className="border-t border-[#F5F0EB]/10 pt-8 flex justify-between text-sm text-[#F5F0EB]/40">
          <span>© 2025 My coffee</span>
          <span>Сделано с любовью к кофе</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer