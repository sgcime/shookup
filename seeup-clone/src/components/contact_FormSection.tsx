"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function FormSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const scriptSrc = "https://tally.so/widgets/embed.js";

    const loadTally = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        const iframes = document.querySelectorAll("iframe[data-tally-src]");
        iframes.forEach((e) => {
          const iframe = e as HTMLIFrameElement;
          if (iframe.dataset.tallySrc && !iframe.src) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };

    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    } else {
      loadTally();
    }

    const timer = setTimeout(() => {
      loadTally();
    }, 100);

    return () => clearTimeout(timer);
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
          <div className="min-h-[600px] w-full overflow-hidden relative">
            {isMounted && (
              <iframe
                data-tally-src="https://tally.so/embed/Y5zWP0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                style={{ border: "none", margin: 0 }}
                title="협력사 가입 문의하기"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}