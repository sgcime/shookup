"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/3728083243/3084130489.png"
              alt="SeeUp Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#40b0b8] transition-colors rounded-md hover:bg-gray-50"
            >
              회사 소개
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#40b0b8] transition-colors rounded-md hover:bg-gray-50"
            >
              서비스 소개
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#40b0b8] transition-colors rounded-md hover:bg-gray-50"
            >
              협력사 가입문의
            </Link>
            <Link
              href="https://www.seeup.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 text-sm font-medium text-[#40b0b8] border-2 border-[#40b0b8] rounded-md hover:bg-[#40b0b8] hover:text-white transition-all duration-300"
            >
              SEEUP 라이더 바로가기
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#40b0b8] hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
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
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#40b0b8] hover:bg-gray-50 rounded-md"
              >
                회사 소개
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#40b0b8] hover:bg-gray-50 rounded-md"
              >
                서비스 소개
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#40b0b8] hover:bg-gray-50 rounded-md"
              >
                협력사 가입문의
              </Link>
              <Link
                href="https://www.seeup.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 px-5 py-2.5 text-sm font-medium text-center text-[#40b0b8] border-2 border-[#40b0b8] rounded-md hover:bg-[#40b0b8] hover:text-white transition-all duration-300"
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
