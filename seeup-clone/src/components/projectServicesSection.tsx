export default function ServicesSection() {
  const services = [
    {
      title: "세무 자료 연동",
      description: "카드 매입자료/증빙 자동 생성",
      borderColor: "",
    },
    {
      title: "실시간 순수익 확인",
      description: "대표님이 실제로 버는 금액을 실시간으로 확인 가능합니다.",
      borderColor: "border-l-4 border-[#e8a54b]",
    },
    {
      title: "수익 자동집계",
      description: "매출 데이터를 자동으로 수집/계산 가능합니다.",
      borderColor: "border-l-4 border-[#d97d4a]",
    },
  ];

  // Custom SVG icons
  const icons = [
    // Tax Data Integration - stacked layers icon
    <svg key="tax" viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <path d="M40 20L10 35V45L40 60L70 45V35L40 20Z" fill="#14b2b2" fillOpacity="0.3"/>
      <path d="M40 10L10 25V35L40 50L70 35V25L40 10Z" fill="#14b2b2" fillOpacity="0.5"/>
      <path d="M40 0L10 15V25L40 40L70 25V15L40 0Z" fill="#14b2b2"/>
    </svg>,
    // Real-time Profit - coins/stack icon
    <svg key="profit" viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <ellipse cx="40" cy="60" rx="25" ry="8" fill="#14b2b2" fillOpacity="0.3"/>
      <ellipse cx="40" cy="50" rx="25" ry="8" fill="#14b2b2" fillOpacity="0.5"/>
      <ellipse cx="40" cy="40" rx="25" ry="8" fill="#14b2b2" fillOpacity="0.7"/>
      <ellipse cx="40" cy="30" rx="25" ry="8" fill="#14b2b2"/>
      <ellipse cx="40" cy="20" rx="25" ry="8" fill="#e8a54b"/>
    </svg>,
    // Auto Revenue - gear icon
    <svg key="revenue" viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <path d="M40 25C31.7 25 25 31.7 25 40C25 48.3 31.7 55 40 55C48.3 55 55 48.3 55 40C55 31.7 48.3 25 40 25ZM40 48C36.1 48 33 44.9 33 41C33 37.1 36.1 34 40 34C43.9 34 47 37.1 47 41C47 44.9 43.9 48 40 48Z" fill="#14b2b2"/>
      <path d="M67 36H62C61.3 33.3 60.1 30.8 58.5 28.6L62 25.1L56.9 20L53.4 23.5C51.2 21.9 48.7 20.7 46 20V15H38V20C35.3 20.7 32.8 21.9 30.6 23.5L27.1 20L22 25.1L25.5 28.6C23.9 30.8 22.7 33.3 22 36H17V44H22C22.7 46.7 23.9 49.2 25.5 51.4L22 54.9L27.1 60L30.6 56.5C32.8 58.1 35.3 59.3 38 60V65H46V60C48.7 59.3 51.2 58.1 53.4 56.5L56.9 60L62 54.9L58.5 51.4C60.1 49.2 61.3 46.7 62 44H67V36Z" fill="#14b2b2" fillOpacity="0.5"/>
    </svg>,
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?fm=jpg&q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-8 md:p-10 flex flex-col items-center text-center ${service.borderColor}`}
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-[#2c2e2f] mb-6">
                {service.title}
              </h3>

              {/* Icon */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                {icons[index]}
              </div>

              {/* Description */}
              <p className="text-sm text-[#939c9d] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
