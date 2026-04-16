import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#333c46] mb-8">
              Vision | 비전
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                배달 시장에서 가장 신뢰 받는 정산 기반 서비스를 구축합니다.
              </p>

              <p>
                정확성과 투명성을 바탕으로
                누구나 안심하고 사용할 수 있는 환경을 제공하며,
                정산 분야의 새로운 기준을 만들어갑니다.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/3728083243/1306892537.jpeg"
                alt="비즈니스 악수"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
