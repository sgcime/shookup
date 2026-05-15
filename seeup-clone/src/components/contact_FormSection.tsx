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
    // Tally embed script
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

          {/* Tally Form Embed */}
          <div className="min-h-[400px]">
            <script async src="https://tally.so/widgets/embed.js"></script>
          </div>
        </div>
      </div>
    </section>
  );
}
