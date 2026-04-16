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
    <section className="py-8 md:py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="icon-hover flex items-center justify-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
