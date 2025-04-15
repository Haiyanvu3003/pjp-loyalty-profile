// src/components/rank/LuxuryPolicy.jsx
import RankSummary from "./RankSummary";

export default function LuxuryPolicy() {
  return (
    <div className="w-full bg-white font-sans min-h-screen px-4 sm:px-6 md:px-[50px] pt-10 pb-20">
      {/* PHẦN 1: Thông tin hạng hiện tại */}
      <RankSummary />

      {/* PHẦN 2: Chính sách dòng hàng cao cấp */}
      <div className="px-2 sm:px-4 md:px-6 py-6 overflow-x-auto">
        <div className="w-full min-w-[768px] overflow-x-auto">
          <table className="w-full border border-green-700 text-xs sm:text-sm text-green-900">
            <thead>
              <tr className="bg-green-800 text-white text-center">
                <th className="border border-green-700 px-2 py-2 w-[120px]">ĐỐI TƯỢNG</th>
                <th className="border border-green-700 px-2 py-2 w-[260px]">KHÁCH HÀNG MỚI</th>
                <th className="border border-green-700 px-2 py-2 w-[260px]" colSpan={2}>ĐỐI TÁC CHIẾN LƯỢC</th>
              </tr>
              <tr className="bg-green-800 text-white text-center">
                <th className="border border-green-700 p-1"></th>
                <th className="border border-green-700 p-1"></th>
                <th className="border border-green-700 p-1">DT HÓA ĐƠN 2026</th>
                <th className="border border-green-700 p-1">TRẢ THƯỞNG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-700 p-2 font-bold align-top">KHÁCH HÀNG MỚI</td>
                <td className="border border-green-700 p-2 text-green-900">
                  <div className="mb-2 italic">
                    Giảm <span className="text-red-600 font-bold">500k</span> đơn đầu<br />DT ≥ <span className="font-bold">50 triệu</span>
                  </div>
                  <div className="mb-2 italic">
                    Giảm <span className="text-red-600 font-bold">1.5 triệu</span> đơn đầu<br />DT ≥ <span className="font-bold">100 triệu</span>
                  </div>
                  <div className="mb-2 italic">
                    Quà <span className="text-red-600 font-bold">15 triệu</span><br />DT ≥ <span className="font-bold">1 TỶ</span>
                  </div>
                  <div className="italic">
                    Quà <span className="text-red-600 font-bold">35 triệu</span><br />DT ≥ <span className="font-bold">2 TỶ</span>
                  </div>
                </td>
                <td className="border border-green-700 p-2 text-center italic font-semibold text-green-700" colSpan={2}>
                  KHÔNG ÁP DỤNG
                </td>
              </tr>
              <tr>
                <td className="border border-green-700 p-2 font-bold align-top">ĐỐI TÁC CHIẾN LƯỢC</td>
                <td className="border border-green-700 p-2 text-center italic text-green-700 font-semibold" rowSpan={4}>
                  KHÔNG ÁP DỤNG
                </td>
                <td className="border border-green-700 p-2 text-center">
                  TĂNG TRƯỞNG ≥ <span className="font-bold">150%</span>
                </td>
                <td className="border border-green-700 p-2 text-center">
                  QUÀ <span className="font-bold">50 TRIỆU</span>
                </td>
              </tr>
              <tr>
                <td className="border border-green-700 p-2 text-center font-semibold">
                  DT 2024 1–3 TỶ
                </td>
                <td className="border border-green-700 p-2 text-center">
                  TĂNG TRƯỞNG ≥ <span className="font-bold">150%</span>
                </td>
                <td className="border border-green-700 p-2 text-center">
                  QUÀ <span className="font-bold">100 TRIỆU</span>
                </td>
              </tr>
              <tr>
                <td className="border border-green-700 p-2 text-center font-semibold">
                  DT 2024 5–7 TỶ
                </td>
                <td className="border border-green-700 p-2 text-center">
                  TĂNG TRƯỞNG ≥ <span className="font-bold">100%</span>
                </td>
                <td className="border border-green-700 p-2 text-center">
                  QUÀ <span className="font-bold">150 TRIỆU</span>
                </td>
              </tr>
              <tr>
                <td className="border border-green-700 p-2 text-center font-semibold">
                  DT 2024 ≥ 7 TỶ
                </td>
                <td className="border border-green-700 p-2 text-center">
                  TĂNG TRƯỞNG ≥ <span className="font-bold">100%</span>
                </td>
                <td className="border border-green-700 p-2 text-center">
                  QUÀ <span className="font-bold">200 TRIỆU</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
