// src/components/rank/RankSummary.jsx
export default function RankSummary() {
  return (
    <div className="w-full bg-white text-left px-4 sm:px-6 md:px-[50px] pt-6 pb-8 border-b border-gray-300">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* Trạng thái thành viên + nút lịch sử mua hàng */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-green-800 text-xl sm:text-2xl font-bold uppercase">
            TRẠNG THÁI THÀNH VIÊN: <span className="text-green-900">VIP EMERALD</span>
          </div>
          <button className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold mt-2 sm:mt-0">
            LỊCH SỬ MUA HÀNG
          </button>
        </div>


        {/* Tổng doanh thu từng dòng hàng */}
        <div className="space-y-1 text-sm sm:text-base text-gray-700">
         
         
          <p>
            Tổng doanh thu công Tuổi Vàng 610 hiện tại:{" "}
            <span className="text-blue-600 underline font-medium">700.000.000 VND</span>
          </p>
         
        </div>
      </div>
    </div>
  );
}
