import Image from "next/image";

const values = [
  {
    title: "Accuracy | 정확성",
    description: "정산의 기본은 정확성입니다. 체계적인 데이터 관리와 검증을 통해 신뢰할 수 있는 정산 결과를 제공합니다.",
  },
  {
    title: "Speed | 신속성",
    description: "정산의 속도는 곧 사업의 흐름입니다. 빠른 정산으로 자금 공백을 최소화하고 안정적인 운영을 지원합니다.",
  },
  {
    title: "Transparency | 투명성",
    description: "복잡한 정산 구조를 누구나 이해할 수 있도록 단순화하고, 명확한 기준과 정보를 제공하여 신뢰할 수 있는 환경을 만듭니다.",
  },
  {
    title: "Growth | 성장",
    description: "씨업은 단순한 서비스 제공자가 아닌, 사업자의 성장을 함께 만들어가는 파트너입니다. 지속 가능한 운영과 수익 구조 개선을 위해 함께 고민합니다.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/3728083243/2741177460.jpeg"
                alt="손 조각상"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#333c46] mb-10">
              Core Value | 핵심 가치
            </h2>

            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="border-l-4 border-[#40b0b8] pl-6">
                  <h3 className="text-lg font-bold text-[#333c46] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
