"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function FormSection() {
  useEffect(() => {
    // Tally embed script 로직 (기존 로직 유지 및 보완)
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    
    const v = function () {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
          (e: Element) => {
            const iframe = e as HTMLIFrameElement;
            if (iframe.dataset.tallySrc) {
              iframe.src = iframe.dataset.tallySrc;
            }
          }
        );
      }
    };

    if (typeof window.Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    } else {
      // 이미 스크립트가 로드되어 있는 경우에도 초기화 실행
      v();
    }
  }, []);

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 -mt-16 md:-mt-20 relative z-20">
          {/* Card Header */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              협력사 가입 문의하기
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              아래 양식에 작성해 주시면 확인 후 안내드리겠습니다.
            </p>
          </div>

          {/* Tally Form Embed 영역 */}
          <div className="min-h-[500px] w-full">
            {/* ⚠️ 중요: 여기에 실제 Tally 폼 ID를 입력해야 합니다 */}
            <iframe
              data-tally-src="https://tally.so/embed/w71899?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="협력사 가입 문의하기"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}