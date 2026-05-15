export default function HeroSection() {
  return (
    <section className="relative h-[280px] md:h-[320px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://static.wixstatic.com/media/11062b_753f0a79645943a49b74cb1823629ff1~mv2.jpg/v1/fill/w_1350,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_753f0a79645943a49b74cb1823629ff1~mv2.jpg"
        alt="협력사 가입 배경"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          협력사 가입 문의하기
        </h1>
        <p className="text-gray-200 text-sm md:text-base max-w-md leading-relaxed">
          안정적인 정산과 효율적인 운영,
          <br />
          씨업이 함께하겠습니다.
        </p>
      </div>
    </section>
  );
}
