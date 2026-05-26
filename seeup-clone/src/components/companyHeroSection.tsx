export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-4 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        {/* 사진처럼 하나의 거대한 타이틀 덩어리로 묶고, 
          글자 크기를 한 단계씩 더 키웠습니다 (최대 text-9xl).
        */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#000000] leading-[1.25] tracking-tight">
          {/* "정산을 넘어" 라인 */}
          <span className="block animate-fade-in-up opacity-0 animate-delay-1 mb-4 md:mb-6">
            정산을 넘어
          </span>
          
          {/* "운영을 바꾸다." 라인 */}
          <span className="block animate-fade-in-up opacity-0 animate-delay-2">
            운영을 바꾸다.
          </span>
        </h1>
      </div>
    </section>
  );
}