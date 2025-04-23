// src/components/rank/RankSummary.jsx
import { Link, useLocation } from "react-router-dom";

export default function RankSummary() {
  const location = useLocation();
  const isOrderPage = location.pathname === "/profile/orders";

  if (isOrderPage) return null;

  return (
    <div className="w-full bg-white text-left px-4 sm:px-6 md:px-[50px] pt-6 pb-8 border-b border-gray-300">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* Trạng thái thành viên + nút lịch sử mua hàng */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-green-800 text-xl sm:text-2xl font-bold uppercase">
            TRẠNG THÁI THÀNH VIÊN: <span className="text-green-900">VIP EMERALD</span>
          </div>
          <Link
            to="/profile/orders"
            className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold mt-2 sm:mt-0"
          >
            LỊCH SỬ MUA HÀNG
          </Link>
        </div>

        {/* Chiết khấu */}
        <div className="text-base sm:text-lg text-gray-800">
          Chiết khấu hiện tại của bạn cao nhất là:{" "}
          <span className="font-bold text-green-700">6%</span>
        </div>

        {/* Tổng doanh thu từng dòng hàng */}
        <div className="space-y-1 text-sm sm:text-base text-gray-700">
          <p>
            Tông doanh thu công dòng hàng Truyền Thống hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">1.600.000.000 VND</span>
          </p>
          <p>
            Tổng doanh thu hóa đơn dòng hàng cao cấp hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">0 VND</span>
          </p>
          <p>
            Tổng doanh thu công Tuổi Vàng 610 hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">700.000.000 VND</span>
          </p>
          <p className="text-sm sm:text-base text-green-800 font-semibold mt-2">
            ỨNG TRƯỚC NGUYÊN LIỆU CHIẾT KHẤU: <span className="text-green-900">2%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
