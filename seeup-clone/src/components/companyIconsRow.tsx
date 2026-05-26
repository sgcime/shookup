import React from "react";

export default function IconsRow() {
  // 실제 첨부해주신 원본 이미지 속 아이콘의 고유 디테일을 고스란히 이식했습니다.
  const icons = [
    {
      alt: "배달 서비스",
      component: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M12 40H30V24H12V40Z" stroke="#0fb4b6" strokeWidth="3" strokeLinejoin="round" />
          <path d="M16 40C16 52.5 24 58 35 58" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <path d="M35 58H72M72 58L85 41V35H58" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="35" cy="74" r="9" stroke="#0fb4b6" strokeWidth="3" />
          <circle cx="72" cy="74" r="9" stroke="#0fb4b6" strokeWidth="3" />
          <path d="M54 35L48 24H32V35H54Z" stroke="#0fb4b6" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      alt: "팀 협업",
      component: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* 가운데 높은 동전 탑 */}
          <path d="M37 32C37 37 43 40 50 40C57 40 63 37 63 32M37 32V68C37 73 43 76 50 76C57 76 63 73 63 68V32M37 32C37 27 43 24 50 24C57 24 63 27 63 32" stroke="#0fb4b6" strokeWidth="3" strokeLinejoin="round" />
          <path d="M37 41C37 46 43 49 50 49C57 49 63 46 63 41" stroke="#0fb4b6" strokeWidth="3" />
          <path d="M37 50C37 55 43 58 50 58C57 58 63 55 63 50" stroke="#0fb4b6" strokeWidth="3" />
          <path d="M37 59C37 64 43 67 50 67C57 67 63 64 63 59" stroke="#0fb4b6" strokeWidth="3" />
          {/* 왼쪽 낮은 동전 탑 */}
          <path d="M13 46C13 50 18 53 25 53C32 53 37 50 37 46M13 46V64C13 68 18 71 25 71C32 71 37 68 37 64V46M13 46C13 42 18 39 25 39C32 39 37 42 37 46" stroke="#0fb4b6" strokeWidth="3" strokeLinejoin="round" />
          <path d="M13 55C13 59 18 62 25 62C32 62 37 59 37 55" stroke="#0fb4b6" strokeWidth="3" />
          {/* 오른쪽 낮은 동전 탑 */}
          <path d="M63 46C63 50 68 53 75 53C82 53 87 50 87 46M63 46V64C63 68 68 71 75 71C82 71 87 68 87 64V46M63 46C63 42 68 39 75 39C82 39 87 42 87 46" stroke="#0fb4b6" strokeWidth="3" strokeLinejoin="round" />
          <path d="M63 55C63 59 68 62 75 62C82 62 87 59 87 55" stroke="#0fb4b6" strokeWidth="3" />
        </svg>
      )
    },
    {
      alt: "보안",
      component: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="40" y="32" width="20" height="42" rx="10" stroke="#0fb4b6" strokeWidth="3" />
          <path d="M30 40H70" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="27" r="4" stroke="#0fb4b6" strokeWidth="3" />
          <path d="M22 64C22 64 34 52 40 52M78 64C78 64 66 52 60 52" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="74" r="5" stroke="#0fb4b6" strokeWidth="3" />
        </svg>
      )
    },
    {
      alt: "금융 서비스",
      component: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="50" cy="30" r="14" stroke="#0fb4b6" strokeWidth="3" />
          <path d="M50 22V38M44 26H54M44 34H56" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 44C24 44 20 62 38 68M76 44C76 44 80 62 62 68" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <path d="M38 68C44 70 56 70 62 68" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 52L26 68H36" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M82 52L74 68H64" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      alt: "빠른 배송",
      component: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* 뒤쪽 피자박스 레이어 세트 */}
          <path d="M12 20H48V42" stroke="#0fb4b6" strokeWidth="3" strokeLinejoin="round" />
          <path d="M16 15H44" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 10H40" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" />
          {/* 전면 오토바이 실루엣 채우기&선 매칭 */}
          <path d="M40 34H65L74 54V70H40V34Z" fill="#0fb4b6" />
          <path d="M74 54L84 54L88 44" stroke="#0fb4b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="48" cy="78" r="8" fill="#f8f9fa" stroke="#0fb4b6" strokeWidth="3" />
          <circle cx="78" cy="78" r="8" fill="#f8f9fa" stroke="#0fb4b6" strokeWidth="3" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* 한눈에 가득 차도록 간격(gap) 조정 및 가로 정렬 배치 강화 */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-28">
          {icons.map((icon, index) => (
            <div
              key={index}
              role="img"
              aria-label={icon.alt}
              {/* 요구사항 반영: 크기를기존 w-24~32에서 w-28~40(최대 160px 대형 스케일)으로 대폭 키움 */}
              className="flex items-center justify-center transition-all duration-300 hover:scale-112 cursor-pointer p-2 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
            >
              {icon.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}