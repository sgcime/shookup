import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "SEEUP | 배달 산업의 수익 구조를 한눈에",
  description: "배달 대행 수익을 정확히 보여주는 씨업 - 실시간 순수익 확인, 수익 자동집계, 정산 자동화",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
