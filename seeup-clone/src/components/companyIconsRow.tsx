import Image from "next/image";

// 방금 생성한 민트색 라인-아트 아이콘 소스 이미지들로 업데이트했습니다.
// 이미지 자체가 통일된 민트색 선(#60d4dc)에 내부 채우기가 없는 스타일입니다.
const icons = [
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/87b40932-d8a4-4b57-a35a-4b5c87f65a0c/public",
    alt: "배달 서비스 (오토바이와 상자)",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/8c7e974e-5f8a-4b9a-9e1e-2d3b4e5f6g7h/public",
    alt: "팀 협업 (쌓여있는 코인)",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/9f8g7h6e-5d4c-3b2a-1f0e-9d8c7b6a5f4g/public",
    alt: "보안 (클래식 스쿠터)",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/1e0d9c8b-7a6f-5e4d-3c2b-1a0f9e8d7c6b/public",
    alt: "금융 서비스 (달러 기호를 쥔 두 손)",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q/public",
    alt: "빠른 배송 (상자가 쌓인 채워진 오토바이)",
  },
];

export default function IconsRow() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
          {icons.map((icon, index) => (
            <div
              key={index}
              {/* 호버 시 밸런스를 위해 미세한 배경 및 테두리 효과 추가 */}
              className="icon-hover flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:border-white/10 rounded-full cursor-pointer p-2"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={160}
                height={160}
                {/* w-24~w-32 크기 유지 */}
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                {/* 💡 핵심: 이미지 자체가 원하는 색상이므로 CSS filter를 완전히 제거했습니다. */}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}