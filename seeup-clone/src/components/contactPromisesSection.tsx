export default function PromisesSection() {
  const promises = [
    {
      number: "1",
      title: "상품을 그대로 반영합니다.",
      description: "상품의 실제 정산 구조를 오차 없는 정산 환경을 제공합니다.",
    },
    {
      number: "2",
      title: "자동화 된 정산 시스템",
      description: "정산부터 증빙, 지급까지 자동으로 전 과정을 하나의 흐름으로 처리합니다.",
    },
    {
      number: "3",
      title: "순수익을 실시간으로",
      description: "대표님의 순수익을 언제든지 바로 확인할 수 있습니다.",
    },
    {
      number: "4",
      title: "효율적인 관리",
      description: "복잡한 정산 자금 흐름 관리할 수 있습니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#2c2e2f] mb-16">
          씨업은 약속합니다.
        </h2>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {promises.map((promise) => (
            <div
              key={promise.number}
              className="px-6 py-8 text-center"
            >
              {/* Number */}
              <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-[#2c2e2f] mb-6">
                <span className="text-xl font-semibold text-[#2c2e2f]">
                  {promise.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2c2e2f] mb-4">
                {promise.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#939c9d] leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
