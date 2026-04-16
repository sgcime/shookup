import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/3728083243/1847322616.jpeg"
                alt="주식 차트 분석"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#333c46] mb-8">
              Mission | 미션
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                정산의 기준을 새롭게 정의하고
                배달대행 대표님의 성장을 가속화합니다.
              </p>

              <p>
                단순한 속도 개선이 아닌,
                대표님의 사업 운영 전반에
                긍정적인 영향을 주는 정산 구조를 만들어
                더 많은 배달 대행 대표님들이
                안정적으로 성장하실 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
