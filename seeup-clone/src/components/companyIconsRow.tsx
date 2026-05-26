import Image from "next/image";

const icons = [
  {
    src: "https://ext.same-assets.com/3728083243/1127098426.svg",
    alt: "배달 서비스",
  },
  {
    src: "https://ext.same-assets.com/3728083243/4059434053.svg",
    alt: "팀 협업",
  },
  {
    src: "https://ext.same-assets.com/3728083243/3599253166.svg",
    alt: "보안",
  },
  {
    src: "https://ext.same-assets.com/3728083243/3122586123.svg",
    alt: "금융 서비스",
  },
  {
    src: "https://ext.same-assets.com/3728083243/2140439288.svg",
    alt: "빠른 배송",
  },
];

export default function IconsRow() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        {/* 가로 간격을 더 넓히고 모바일에서도 줄바꿈이 자연스럽도록 조절 */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="icon-hover flex items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                {/* 원본 해상도가 깨지지 않도록 width/height 기본값을 160으로 확장 */}
                width={160}
                height={160}
                {/* 1. 크기 대폭 확대: 모바일 w-24, 태블릿 w-28, 데스크톱 w-32 
                  2. CSS filter를 이용해 검은색/타색상 아이콘을 사진과 일치하는 민트색(#60d4dc) 톤으로 강제 변환
                */}
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                style={{
                  filter: "invert(81%) sepia(21%) saturate(983%) corner-hue(135deg) hue-rotate(135deg) brightness(96%) contrast(89%)"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}