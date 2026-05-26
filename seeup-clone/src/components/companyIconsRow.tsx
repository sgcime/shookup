import React from "react";

export default function IconsRow() {
  // 컴파일러 꼬임 방지 및 완벽한 민트색 라인 아트를 위해 고유 SVG 코드를 내장했습니다.
  const icons = [
    {
      alt: "배달 서비스",
      component: (
        <svg viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 오토바이 몸체 및 바퀴 */}
          <circle cx="25" cy="55" r="7" />
          <circle cx="65" cy="55" r="7" />
          <path d="M25 55H45L55 35H35L25 55Z" />
          <path d="M55 35L61 47" />
          {/* 배달 박스 */}
          <rect x="15" y="25" width="16" height="14" rx="2" />
        </svg>
      )
    },
    {
      alt: "팀 협업",
      component: (
        <svg viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 동전/코인 탑 누적 레이아웃 */}
          <path d="M15 32C15 36 21 39 28 39C35 39 41 36 41 32M15 32V44C15 48 21 51 28 51C35 51 41 48 41 44V32M15 32C15 28 21 25 28 25C35 25 41 28 41 32" />
          <path d="M39 42C39 46 45 49 52 49C59 49 65 46 65 42M39 42V54C39 58 45 61 52 61C59 61 65 58 65 54V42M39 42C39 38 45 35 52 35C59 35 65 38 65 42" />
        </svg>
      )
    },
    {
      alt: "보안",
      component: (
        <svg viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 정면에서 본 클래식 스쿠터 라인 */}
          <path d="M40 20C32 20 28 24 28 32V52C28 56 32 58 40 58C48 58 52 56 52 52V32C52 24 48 20 40 20Z" />
          <circle cx="40" cy="20" r="3" />
          <path d="M35 15H45" />
          <rect x="37" y="58" width="6" height="10" rx="1" />
        </svg>
      )
    },
    {
      alt: "금융 서비스",
      component: (
        <svg viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 달러 코인을 감싸는 두 손 */}
          <circle cx="40" cy="30" r="11" />
          <path d="M40 24V36M37 27H43M37 33H43" />
          <path d="M22 36C22 45 32 58 40 58C48 58 58 45 58 36" />
          <path d="M16 40V52H26" />
          <path d="M64 40V52H54" />
        </svg>
      )
    },
    {
      alt: "빠른 배송",
      component: (
        <svg viewBox="0 0 80 80" fill="none" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 상자가 여러 개 레이어드된 배달 모빌리티 */}
          <circle cx="65" cy="56" r="6" />
          <circle cx="28" cy="56" r="6" />
          <path d="M28 56H48L56 38H40L28 56Z" />
          {/* 뒷단에 적재된 다단 물류 레이어 상자 선 */}
          <path d="M16 26H34V46H16V26Z" />
          <path d="M18 21H32M20 16H30" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
          {icons.map((icon, index) => (
            <div
              key={index}
              role="img"
              aria-label={icon.alt}
              className="icon-hover flex items-center justify-center transition-all duration-300 hover:scale-110 rounded-full cursor-pointer p-4 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            >
              {/* 내장형 코드가 들어가 있어 외부 네트워크 통신 없이 초고속으로 깨끗하게 표현됩니다 */}
              {icon.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}