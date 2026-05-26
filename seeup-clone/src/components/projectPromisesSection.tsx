export default function PromisesSection() {
  const promises = [
    {
      number: "1",
      title: "플랫폼 구조을 그대로 반영",
      description: "배달 플랫폼의 실제 정산 구조를 반영하여 오차 없는 정산 환경을 제공합니다.",
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
      title: "효율적인 정산 구조",
      description: "복잡한 정산 과정을 단순화하고 자금 흐름을 안정적으로 관리할 수 있도록 지원합니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#2c2e2f] mb-16">
          씨업은 약속합니다.
        </h2>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise) => (
            <div
              key={promise.number}
              className="bg-white px-8 py-12 text-center rounded-lg shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-extrabold text-[#2c2e2f] mb-6">
                {promise.number}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#2c2e2f] mb-6 leading-snug">
                {promise.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-[#2c2e2f] leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}