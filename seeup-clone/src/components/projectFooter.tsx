import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Company Info */}
          <div className="space-y-2 text-sm text-[#2c2e2f]">
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#14b2b2] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-[#2c2e2f]">씨업</span>
            </div>

            <p>
              <span className="font-medium">상호</span> : 주식회사 숲업 | <span className="font-medium">대표자</span> : 정규열
            </p>
            <p>
              <span className="font-medium">사업자 등록번호</span> : 689-88-03394 | <span className="font-medium">대표번호</span> : 02-858-5226
            </p>
            <p>
              <span className="font-medium">주소</span> : 서울특별시 구로구 디지털로 31길 12, 2층 49호 (구로동, 넥스트데이)
            </p>

            <div className="pt-4 space-y-1">
              <p className="text-[#939c9d]">&copy; 2026 주식회사 숲업</p>
              <p className="text-[#939c9d]">Copyright &copy; 2026, All Rights Reserved - See Up</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2 text-sm">
            <Link
              href="#"
              className="text-[#2c2e2f] hover:text-[#14b2b2] underline transition-colors"
            >
              이용약관
            </Link>
            <Link
              href="#"
              className="text-[#2c2e2f] hover:text-[#14b2b2] underline transition-colors"
            >
              개인정보취급방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
