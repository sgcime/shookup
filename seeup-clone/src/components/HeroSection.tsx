export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#333c46] leading-tight tracking-tight">
          <span className="block animate-fade-in-up opacity-0 animate-delay-1">
            정산을 넘어
          </span>
          <span className="block animate-fade-in-up opacity-0 animate-delay-2">
            운영을 바꾸
          </span>
          <span className="block animate-fade-in-up opacity-0 animate-delay-3">
            다.
          </span>
        </h1>
      </div>
    </section>
  );
}
