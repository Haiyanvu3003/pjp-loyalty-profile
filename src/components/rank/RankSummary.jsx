export default function RankSummary() {
  return (
    <div className="w-full bg-white text-left px-4 sm:px-6 md:px-[50px] pt-6 pb-8 border-b border-gray-300">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* Hạng hiện tại + nút lịch sử mua hàng */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-green-800 text-xl sm:text-2xl font-bold uppercase">
            HẠNG HIỆN TẠI: <span className="text-green-900">VIP EMERALD</span>
          </div>
          <button className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold mt-2 sm:mt-0">
            LỊCH SỬ MUA HÀNG
          </button>
        </div>

        {/* Chiết khấu */}
        <div className="text-base sm:text-lg text-gray-800">
          Chiết khấu hiện tại của bạn cao nhất là:{" "}
          <span className="font-bold text-green-700">6%</span>
        </div>

        {/* Tổng doanh thu từng dòng hàng */}
        <div className="space-y-1 text-sm sm:text-base text-gray-700">
          <p>
            Tổng doanh thu sản phẩm truyền thống hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">1.600.000.000 VND</span>
          </p>
          <p>
            Tổng doanh thu sản phẩm cao cấp hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">0 VND</span>
          </p>
          <p>
            Tổng doanh thu sản phẩm tuổi vàng 610 hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">700.000.000 VND</span>
          </p>
          <p>
            ỨNG TRƯỚC NGUYÊN LIỆU CHIẾT KHẤU:{" "}
            <span className="text-green-700 font-semibold">2%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
