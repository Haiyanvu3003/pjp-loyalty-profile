// src/components/rank/LuxuryPolicy.jsx
import RankSummary from "./RankSummary";

export default function LuxuryPolicy() {
  return (
    <div className="w-full bg-white font-sans min-h-screen px-4 sm:px-6 md:px-[50px] pt-10 pb-20">
      {/* PHẦN 1: Thông tin hạng hiện tại */}
      <RankSummary />

      {/* PHẦN 2: Chính sách dòng hàng cao cấp - BẢNG 1 */}
      <div className="px-2 sm:px-4 md:px-6 py-6 overflow-x-auto">
        <div className="w-full min-w-[768px] overflow-x-auto rounded-[16px] border border-green-700 overflow-hidden">
          <table className="w-full text-xs sm:text-sm text-green-900">
            <thead>
              <tr className="bg-green-800 text-white text-center">
                <th className="px-2 py-3 w-[150px] border border-green-700" rowSpan={2}>ĐỐI TƯỢNG</th>
                <th className="px-2 py-3 w-[400px] border border-green-700" rowSpan={2}>CHƯƠNG TRÌNH KHÁCH HÀNG MỚI</th>
                <th className="px-2 py-3 w-[300px] border border-green-700" colSpan={2}>CHƯƠNG TRÌNH ĐỐI TÁC CHIẾN LƯỢC</th>
              </tr>
              <tr className="bg-green-800 text-white text-center">
                <th className="px-2 py-2 w-[150px] border border-green-700">TÍCH LŨY DOANH THU HÓA ĐƠN <span className="text-yellow-400">2026</span></th>
                <th className="px-2 py-2 w-[150px] border border-green-700">TRẢ THƯỞNG <span className="text-yellow-400">2026</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-green-700 p-3 font-bold text-green-800 uppercase" rowSpan={4}>KHÁCH HÀNG MỚI</td>
                <td className="border border-green-700 p-3 italic">Ưu đãi <strong>500 nghìn</strong> cho hóa đơn đầu tiên<br />DT công từ <strong>50 triệu</strong></td>
                <td className="border border-green-700 p-3 italic text-green-700 font-semibold" rowSpan={4}>KHÔNG ÁP DỤNG</td>
                <td className="border border-green-700 p-3 italic text-green-700 font-semibold" rowSpan={4}>KHÔNG ÁP DỤNG</td>
              </tr>
              <tr className="text-center">
                <td className="border border-green-700 p-3 italic">Ưu đãi <strong>1,5 triệu</strong> cho hóa đơn đầu tiên<br />DT công từ <strong>100 triệu</strong></td>
              </tr>
              <tr className="text-center">
                <td className="border border-green-700 p-3 italic">Nhận gói quà tặng trị giá <strong>15 triệu</strong> cho hóa đơn đầu tiên DT công từ <strong>1 Tỷ</strong></td>
              </tr>
              <tr className="text-center">
                <td className="border border-green-700 p-3 italic">Nhận gói quà tặng trị giá <strong>35 triệu</strong> cho hóa đơn đầu tiên DT công từ <strong>2 Tỷ</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PHẦN 3: Chính sách dòng hàng cao cấp - BẢNG 2 */}
      <div className="px-2 sm:px-4 md:px-6 py-6 overflow-x-auto">
        <div className="w-full min-w-[768px] overflow-x-auto rounded-[16px] border border-green-700 overflow-hidden">
          <table className="w-full text-xs sm:text-sm text-green-900">
            <thead>
              <tr className="bg-green-800 text-white text-center">
                <th className="px-2 py-3 w-[120px] border border-green-700" colSpan={2} rowSpan={2}>ĐỐI TƯỢNG</th>
                <th className="px-2 py-3 w-[180px] border border-green-700" rowSpan={2}>KHÔNG ÁP DỤNG</th>
                <th className="px-2 py-3 w-[250px] border border-green-700" colSpan={2}>CHƯƠNG TRÌNH ĐỐI TÁC CHIẾN LƯỢC</th>
              </tr>
              <tr className="bg-green-800 text-white text-center">
                <th className="px-2 py-2 border border-green-700">TÍCH LŨY DOANH THU HÓA ĐƠN <span className="text-yellow-400">2026</span></th>
                <th className="px-2 py-2 border border-green-700">TRẢ THƯỞNG <span className="text-yellow-400">2026</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-green-700 p-3 font-bold text-green-800 uppercase" rowSpan={4}>ĐỐI TÁC KHÁCH HÀNG CHIẾN LƯỢC</td>
                <td className="border border-green-700 p-3 italic">DT HÓA ĐƠN 2024<br />TỪ <strong>1 - DƯỚI 3 TỶ</strong></td>
                <td className="border border-green-700 p-3 italic text-green-700 font-semibold" rowSpan={4}>KHÔNG ÁP DỤNG</td>
                <td className="border border-green-700 p-3 italic">DOANH THU TĂNG TRƯỞNG ĐẠT TỪ <strong>150%</strong> TRỞ LÊN</td>
                <td className="border border-green-700 p-3 italic">QUÀ TẶNG TRANG SỨC TRỊ GIÁ <strong>50 TRIỆU</strong> ĐỒNG</td>
              </tr>
              <tr className="text-center">
                <td className="border border-green-700 p-3 italic">DT HÓA ĐƠN 2024<br />TỪ <strong>3 - DƯỚI 5 TỶ</strong></td>
                <td className="border border-green-700 p-3 italic">DOANH THU TĂNG TRƯỞNG ĐẠT TỪ <strong>150%</strong> TRỞ LÊN</td>
                <td className="border border-green-700 p-3 italic">QUÀ TẶNG TRANG SỨC TRỊ GIÁ <strong>100 TRIỆU</strong> ĐỒNG</td>
              </tr>
              <tr className="text-center">
                <td className="border border-green-700 p-3 italic">DT HÓA ĐƠN 2024<br />TỪ <strong>5 - DƯỚI 7 TỶ</strong></td>
                <td className="border border-green-700 p-3 italic">DOANH THU TĂNG TRƯỞNG ĐẠT TỪ <strong>100%</strong> TRỞ LÊN</td>
                <td className="border border-green-700 p-3 italic">QUÀ TẶNG TRANG SỨC TRỊ GIÁ <strong>150 TRIỆU</strong> ĐỒNG</td>
              </tr>
              <tr className="text-center">
                <td className="border border-green-700 p-3 italic">DT HÓA ĐƠN 2024<br />TỪ <strong>TỶ TRỞ LÊN</strong></td>
                <td className="border border-green-700 p-3 italic">DOANH THU TĂNG TRƯỞNG ĐẠT TỪ <strong>100%</strong> TRỞ LÊN</td>
                <td className="border border-green-700 p-3 italic">QUÀ TẶNG TRANG SỨC TRỊ GIÁ <strong>200 TRIỆU</strong> ĐỒNG</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
