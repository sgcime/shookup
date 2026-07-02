"use client";

import type { ReactNode } from "react";
import Script from "next/script";

export function ClientBody({ children }: { children: ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <Script 
        src="//wcs.naver.net/wcslog.js" 
        strategy="afterInteractive" 
      />

      <Script id="naver-wcslog-init" strategy="afterInteractive">
        {`
          if (!window.wcs_add) window.wcs_add = {};
          window.wcs_add["wa"] = "s_594ad4cddc6d";
          
          if (!window._nasa) window._nasa = {};
          
          if (window.wcs) {
            window.wcs.inflow();
            window.wcs_do();
          }

          // 🛠️ 추가된 버튼 클릭 전환 추적 공통 함수
          window.trackNaverConversion = function(customType) {
            if (window.wcs) {
              var _conv = {};
              _conv.type = customType; // 'custom001' 또는 'custom002'가 들어옴
              window.wcs.trans(_conv);
              console.log("Naver conversion tracked:", customType);
            }
          };
        `}
      </Script>

      {children}
    </body>
  );
}