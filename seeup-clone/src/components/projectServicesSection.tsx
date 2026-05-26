import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "세무 자료 연동",
      description: "카드 매입자료/증빙 자동 생성",
    },
    {
      title: "실시간 순수익 확인",
      description: "대표님이 실제로 버는 금액을 실시간으로 확인 가능합니다.",
    },
    {
      title: "수익 자동집계",
      description: "매출 데이터를 자동으로 수집/계산 가능합니다.",
    },
    {
      title: "항목별 분리 표시",
      description: "[ 라이더 지급액 / 프로모션비 / PG 수수료 ]를 한눈에",
    },
    {
      title: "정산 자동화",
      description: "일정산 / 주정산 선택 라이더 별 자동 처리",
    },
    {
      title: "프로모션 선정산",
      description: "건수별 / 금액별 프로모션 즉시 반영",
    },
  ];

  const icons = [
    <svg key="tax" viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
      <path d="M40 12L15 24L40 36L65 24L40 12Z" />
      <path d="M15 34L40 46L65 34" />
      <path d="M15 44L40 56L65 44" />
      <path d="M15 54L40 66L65 54" />
    </svg>,
    <svg key="profit" viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
      <path d="M22 28C22 32.4 27.4 36 34 36C40.6 36 46 32.4 46 28M22 28V52C22 56.4 27.4 60 34 60C40.6 60 46 56.4 46 52V28M22 28C22 23.6 27.4 20 34 20C40.6 20 46 23.6 46 28" />
      <path d="M46 38C46 42.4 51.4 46 58 46C64.6 46 70 42.4 70 38M46 38V62C46 66.4 51.4 70 58 70C64.6 70 70 66.4 70 62V38M46 38C46 33.6 51.4 30 58 30C64.6 30 70 33.6 70 38" />
    </svg>,
    <svg key="revenue" viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
      <circle cx="40" cy="28" r="10" />
      <path d="M40 14V18M40 38V42M26 28H30M50 28H54M30.1 18.1L32.9 20.9M47.1 35.1L49.9 37.9M26 38L31 34M54 18L49 22" />
      <path d="M20 54C25 50 35 46 40 52C45 58 55 54 60 50M15 58C22 58 28 62 40 62C52 62 58 58 65 58" />
    </svg>,
    <svg key="display" viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
      <path d="M20 15H52V65H20V15Z" />
      <path d="M28 27H32M28 39H32M28 51H32" />
      <path d="M38 27H44M38 39H44M38 51H44" />
      <path d="M48 45L62 25L66 29L52 49L48 45Z" />
    </svg>,
    <svg key="automation" viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
      <circle cx="30" cy="25" r="6" />
      <path d="M20 48V37C20 34.8 30 34.8 30 37V48M25 48V60M30 48V60" />
      <path d="M42 18H65V45H42V18Z" />
      <path d="M53.5 45V62M45 62H62" />
    </svg>,
    <svg key="promotion" viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
      <path d="M20 35H60V65H20V35Z" />
      <path d="M16 25H64V35H16V25Z" />
      <path d="M40 25V65" />
      <path d="M40 25C40 18 32 15 32 20C32 25 40 25 40 25Z" />
      <path d="M40 25C40 18 48 15 48 20C48 25 40 25 40 25Z" />
    </svg>
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#f3f4f6]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?fm=jpg&q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-20 tracking-tight">
          씨업은 약속합니다.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-10 md:p-12 flex flex-col items-center text-center rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
            >
              <h3 className="text-2xl font-extrabold text-[#2c2e2f] mb-8 tracking-tight">
                {service.title}
              </h3>

              <div className="w-24 h-24 mb-8 flex items-center justify-center transition-transform duration-300 hover:rotate-3">
                {icons[index]}
              </div>

              <p className="text-base md:text-lg text-[#555f61] font-medium leading-relaxed whitespace-pre-line max-w-[280px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}