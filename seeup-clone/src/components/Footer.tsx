import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="https://ext.same-assets.com/3728083243/3084130489.png"
              alt="SeeUp Logo"
              width={100}
              height={33}
              className="h-8 w-auto mb-6"
            />

            <div className="space-y-2 text-sm text-gray-600">
              <p>상호 : 주식회사 숲업 | 대표자 : 정규열</p>
              <p>사업자 등록번호 : 689-88-03394 | 대표번호 : 02-858-5226</p>
              <p>주소 : 서울특별시 구로구 디지털로 31길 12, 2층 49호 (구로동, 넥스트데이)</p>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>&copy; 2026 주식회사 숲업</p>
              <p>Copyright &copy; 2026, All Rights Reserved - See Up</p>
            </div>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-[#40b0b8] underline transition-colors"
              >
                이용약관
              </Link>
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-[#40b0b8] underline transition-colors"
              >
                개인정보취급방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
