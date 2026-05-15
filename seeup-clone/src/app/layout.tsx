import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "SEEUP | 주식회사 슉업",
  description: "배달 산업의 수익 구조를 한눈에",
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
