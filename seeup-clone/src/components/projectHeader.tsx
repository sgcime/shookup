"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "회사 소개", href: "#" },
    { name: "서비스 소개", href: "#", active: true },
    { name: "협력사 가입문의", href: "#" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#14b2b2] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">S</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-[#2c2e2f]">씨업</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-[#f7f7f7] text-[#2c2e2f]"
                    : "text-[#2c2e2f] hover:bg-[#f7f7f7]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://www.seeup.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2 bg-[#14b2b2] text-white text-sm font-medium hover:bg-[#0e9a9a] transition-colors"
            >
              SEEUP 라이더 바로가기
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#2c2e2f]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium ${
                    item.active
                      ? "bg-[#f7f7f7] text-[#2c2e2f]"
                      : "text-[#2c2e2f] hover:bg-[#f7f7f7]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://www.seeup.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 px-4 py-3 bg-[#14b2b2] text-white text-sm font-medium text-center hover:bg-[#0e9a9a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SEEUP 라이더 바로가기
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
