import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333c46] mb-8">
              정산의 변화, 사업의 시작.
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                정산의 변화는 단순한 편의의 문제가 아닙니다.
                사업의 흐름을 바꾸고,
                결과를 바꾸는 중요한 시작입니다.
              </p>

              <p>
                씨업은 복잡한 정산 구조와
                보이지 않던 비효율을 개선하여
                사업자가 보다 명확한 기준 속에서 운영할 수 있도록 돕습니다.
              </p>

              <p>
                이를 통해 자금 흐름의 안정성을 높이고,
                실질적으로 '남는 구조'를 만들어갈 수 있는
                환경을 제공합니다.
              </p>

              <p>
                앞으로도 씨업은 단순한 정산 서비스를 넘어,
                사업자의 수익 구조 개선과 지속 가능한 성장을
                함께 고민하는 파트너로서
                가장 현실적이고 효과적인 해답을 만들어가겠습니다.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/3728083243/1975831523.jpeg"
                alt="고층 빌딩"
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
