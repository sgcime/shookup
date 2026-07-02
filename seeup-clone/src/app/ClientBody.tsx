"use client";

import type { ReactNode } from "react";
import Script from "next/script";

export function ClientBody({ children }: { children: ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      {/* 1. 네이버 공통 log 외부 스크립트 로드 */}
      <Script 
        src="//wcs.naver.net/wcslog.js" 
        strategy="afterInteractive" 
      />

      {/* 2. 발급 가이드 동기화 스크립트 (인증키 및 변수 매칭) */}
      <Script id="naver-wcslog-init" strategy="afterInteractive">
        {`
          if (!window.wcs_add) window.wcs_add = {};
          window.wcs_add["wa"] = "s_594ad4cddc6d";
          
          if (!window._nasa) window._nasa = {};
          
          if (window.wcs) {
            window.wcs.inflow();
            window.wcs_do();
          }
        `}
      </Script>

      {children}
    </body>
  );
}