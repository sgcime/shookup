"use client";

import { useState } from "react";

// Header Component
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span><img src="https://seeup.co.kr/assets/images/img/img_logo_l.png" alt="SEEUP Logo" className="h-10" /></span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/company" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              회사 소개
            </a>
            <a href="/project" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              서비스 소개
            </a>
            <a href="/contact" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              협력사 가입문의
            </a>
            <a
              href="https://www.seeup.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0fb4b6] text-white px-4 py-2 text-sm font-medium hover:bg-[#0da0a2] transition-colors"
            >
              SEEUP 라이더 바로가기
            </a>
          </nav>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-[#0fb4b6]">정산</span>을 넘어
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            배달 산업의 수익 구조를 한눈에
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
            <a
              href="https://pf.kakao.com/_YQXyn"
              className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/50 px-8 py-3 text-base font-medium hover:bg-white/30 transition-colors"
            >
              카카오채널 문의하기
            </a>
            <a
              href="/contact"
              className="inline-block bg-[#0fb4b6] text-white px-8 py-3 text-base font-medium hover:bg-[#0da0a2] transition-colors"
            >
              협력사 문의하기
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#0fb4b6]" />
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <circle cx="32" cy="32" r="28" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="32" r="20" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <text x="32" y="38" textAnchor="middle" fill="#0fb4b6" fontSize="20" fontWeight="bold">$</text>
        </svg>
      ),
      label: "실시간 순수익 확인",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <rect x="8" y="44" width="10" height="12" fill="#0fb4b6" opacity="0.5"/>
          <rect x="22" y="32" width="10" height="24" fill="#0fb4b6" opacity="0.7"/>
          <rect x="36" y="20" width="10" height="36" fill="#0fb4b6"/>
          <path d="M12 40L28 28L42 32L56 16" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <text x="50" y="14" fill="#0fb4b6" fontSize="14" fontWeight="bold">$</text>
        </svg>
      ),
      label: "수익 자동집계",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <circle cx="32" cy="32" r="24" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="32" r="4" fill="#0fb4b6"/>
          <path d="M32 32L44 20" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M32 32L20 44" stroke="#0fb4b6" strokeWidth="2"/>
          <circle cx="44" cy="20" r="6" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="44" r="6" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
        </svg>
      ),
      label: "정산 자동화",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <rect x="12" y="8" width="32" height="48" rx="2" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <path d="M12 16H44" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M18 24H38" stroke="#0fb4b6" strokeWidth="1.5"/>
          <path d="M18 32H38" stroke="#0fb4b6" strokeWidth="1.5"/>
          <path d="M18 40H30" stroke="#0fb4b6" strokeWidth="1.5"/>
          <path d="M36 48L44 56L56 40" stroke="#0fb4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "세무자료 연동",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <rect x="16" y="24" width="32" height="28" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <path d="M16 32H48" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M24 8V24" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M40 8V24" stroke="#0fb4b6" strokeWidth="2"/>
          <rect x="20" y="12" width="8" height="8" fill="#0fb4b6" opacity="0.3"/>
          <rect x="36" y="12" width="8" height="8" fill="#0fb4b6" opacity="0.3"/>
          <circle cx="32" cy="44" r="6" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
        </svg>
      ),
      label: "프로모션 정산",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
          <rect x="8" y="12" width="40" height="44" rx="2" stroke="#0fb4b6" strokeWidth="2" fill="none"/>
          <path d="M8 20H48" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M14 28H42" stroke="#0fb4b6" strokeWidth="1.5"/>
          <path d="M14 36H42" stroke="#0fb4b6" strokeWidth="1.5"/>
          <path d="M14 44H32" stroke="#0fb4b6" strokeWidth="1.5"/>
          <path d="M48 40L56 32" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M48 40L56 48" stroke="#0fb4b6" strokeWidth="2"/>
          <path d="M56 32V48" stroke="#0fb4b6" strokeWidth="2"/>
        </svg>
      ),
      label: "항목별 분리표시",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b3e3d] mb-2">
            배달 대행 수익,
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b3e3d]">
            정확히 보이시나요?
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <span className="text-2xl md:text-3xl font-bold text-[#0fb4b6]">씨업은</span>
            <span className="text-2xl md:text-3xl font-bold text-[#0fb4b6]">정확히</span>
            <span className="text-2xl md:text-3xl font-bold text-[#0fb4b6]">보입니다!</span>
          </div>
        </div>

        {/* Features Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <p className="text-sm text-[#3b3e3d] font-medium">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.slice(3, 6).map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <p className="text-sm text-[#3b3e3d] font-medium">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/project"
            className="inline-block bg-[#0fb4b6] text-white px-8 py-3 text-base font-medium hover:bg-[#0da0a2] transition-colors"
          >
            SEEUP 서비스 소개 바로가기
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      company: "A 협력사",
      content: "정산 단계가 줄어드니까 훨씬 편해졌습니다.",
    },
    {
      company: "B 협력사",
      content: "전에는 이것저것 확인할 게 많았는데 지금은 신경 쓸 게 많이 줄어 운영에 더 집중할 수 있어서 좋아요.",
    },
    {
      company: "C 협력사",
      content: "전에는 그냥 감으로 운영했는데 지금은 뭘 해야할지 기준이 생긴 느낌입니다.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1600&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          협력사들이 말하는 씨업 사용 후기
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/20">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {testimonial.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-white text-center text-lg leading-relaxed">
              {testimonials[activeTab].content}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/50 px-8 py-3 text-base font-medium hover:bg-white/30 transition-colors"
          >
            협력사 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b3e3d] mb-8">
          지금, 씨업과 함께 성장해 보세요.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pf.kakao.com/_YQXyn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#3b3e3d] text-white px-8 py-3 text-base font-medium hover:bg-[#2a2d2c] transition-colors"
          >
            카톡 상담하기
          </a>
          <a
            href="tel:82-02-858-5226"
            className="inline-flex items-center justify-center bg-[#8a8e8d] text-white px-8 py-3 text-base font-medium hover:bg-[#767a79] transition-colors"
          >
            전화 상담하기 (모바일 전용)
          </a>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t-2 border-[#0fb4b6]" />
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#f5f5f5] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="text-sm text-[#8a8e8d] space-y-1">
            <p>
              <span className="font-medium">상호</span> : 주식회사 슉업 |{" "}
              <span className="font-medium">대표자</span> : 정규열
            </p>
            <p>
              <span className="font-medium">사업자 등록번호</span> : 689-88-03394 |{" "}
              <span className="font-medium">대표번호</span> : 02-858-5226
            </p>
            <p>
              <span className="font-medium">주소</span> : 서울특별시 구로구 디지털로 31길 12, 2층 49호 (구로동, 넥스트데이)
            </p>
            <div className="pt-4">
              <p>&copy; 2026 주식회사 슉업</p>
              <p>Copyright &copy; 2026, All Rights Reserved - See Up</p>
            </div>
          </div>

          {/* Links
          <div className="text-sm space-y-2">
            <a href="#" className="text-[#8a8e8d] hover:text-[#3b3e3d] block underline">
              이용약관
            </a>
            <a href="#" className="text-[#8a8e8d] hover:text-[#3b3e3d] block underline">
              개인정보취급방침 */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
