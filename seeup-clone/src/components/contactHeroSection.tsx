export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          <span className="block">빠르고 명확한 정산,</span>
          <span className="block">운영의 기준을 만듭니다.</span>
        </h1>
        <p className="text-white/90 text-sm md:text-base max-w-xl">
          씨업은 지속 가능한 운영과 성장을 함께 만들어가는 파트너입니다.
        </p>
      </div>
    </section>
  );
}
