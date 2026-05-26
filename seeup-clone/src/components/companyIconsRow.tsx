import Image from "next/image";

const icons = [
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/87b40932-d8a4-4b57-a35a-4b5c87f65a0c/public",
    alt: "배달 서비스",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/8c7e974e-5f8a-4b9a-9e1e-2d3b4e5f6g7h/public",
    alt: "팀 협업",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/9f8g7h6e-5d4c-3b2a-1f0e-9d8c7b6a5f4g/public",
    alt: "보안",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/1e0d9c8b-7a6f-5e4d-3c2b-1a0f9e8d7c6b/public",
    alt: "금융 서비스",
  },
  {
    src: "https://imagedelivery.net/beKkh7_I246K4bC8vW46K4/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q/public",
    alt: "빠른 배송",
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
              className="icon-hover flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:border-white/10 rounded-full cursor-pointer p-2"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={160}
                height={160}
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}