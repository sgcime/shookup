import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333c46] mb-8">
              Company Overview | 회사 소개
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                배달 시장이 빠르게 성장하면서 정산 구조 또한 점점 복잡해지고 있습니다.
                그 과정에서 많은 사업자들이 정산 지연, 불명확한 내역,
                비효율적인 자금 흐름으로 인해 운영상의 부담을 겪고 있습니다.
              </p>

              <p>
                씨업은 이러한 문제를 해결하기 위해 시작되었습니다.
                기존의 복잡한 정산 과정을 보다 간결하고 명확하게 개선하여,
                사업자가 예측 가능한 자금 흐름 속에서 안정적으로 운영할 수 있도록 돕습니다.
              </p>

              <p>
                단순히 정산을 처리하는 수준을 넘어,
                사업 운영 전반의 흐름을 이해하고 개선하는 데 집중하며
                이를 통해 자금에 대한 불확실성을 줄이고,
                사업자가 보다 중요한 의사결정과 성장에 집중할 수 있도록 지원합니다.
              </p>

              <p>
                씨업은 빠르고 정확한 정산 시스템을 기반으로
                운영의 안정성을 높이고, 장기적으로는 수익 구조 개선에 기여합니다.
                앞으로도 정산을 넘어 사업 성장에 기여하는 파트너로서
                지속적인 서비스 고도화와 혁신을 이어가겠습니다.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/3728083243/3426936736.jpeg"
                alt="배달 라이더"
                fill
                className="object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-8 right-8 bg-[#40b0b8] text-white px-6 py-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">We Are</p>
                <p className="text-lg font-bold">On The Way</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
