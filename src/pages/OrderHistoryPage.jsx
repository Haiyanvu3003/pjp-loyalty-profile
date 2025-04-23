// src/pages/OrderHistoryPage.jsx
import { useEffect } from "react";

export default function OrderHistoryPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fake order data (sẽ thay bằng API sau)
  const orders = [
    {
      date: "15/04/2025",
      id: "9000165432",
      type: "TRUYỀN THỐNG",
      status: "THÀNH CÔNG",
      value: "100.000.000 VNĐ",
    },
    {
      date: "10/04/2025",
      id: "9000253778",
      type: "CAO CẤP",
      status: "THÀNH CÔNG",
      value: "72.000.000 VNĐ",
    },
    {
      date: "05/04/2025",
      id: "9001695432",
      type: "KIM CƯƠNG",
      status: "THÀNH CÔNG",
      value: "85.500.000 VNĐ",
    },
    {
      date: "01/04/2025",
      id: "9000160320",
      type: "CÔNG NGHỆ Ý",
      status: "THÀNH CÔNG",
      value: "102.500.000 VNĐ",
    },
  ];

  return (
    <div className="w-full bg-white font-sans min-h-screen pb-20">
      {/* Tiêu đề */}
      <div className="text-center py-6 font-bold text-xl sm:text-2xl text-green-800 uppercase">
        Lịch sử mua hàng
      </div>

      {/* Bảng lịch sử đơn hàng */}
      <div className="max-w-5xl mx-auto overflow-x-auto px-4">
        <table className="w-full text-sm text-green-900 border border-green-700 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-green-800 text-white text-center">
              <th className="p-3 border border-green-700">THỜI GIAN MUA HÀNG</th>
              <th className="p-3 border border-green-700">MÃ HÓA ĐƠN</th>
              <th className="p-3 border border-green-700">DÒNG HÀNG</th>
              <th className="p-3 border border-green-700">TRẠNG THÁI</th>
              <th className="p-3 border border-green-700">GIÁ TRỊ HÓA ĐƠN</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="text-center border-t border-green-700">
                <td className="p-3 border border-green-700">{order.date}</td>
                <td className="p-3 border border-green-700">{order.id}</td>
                <td className="p-3 border border-green-700">{order.type}</td>
                <td className="p-3 border border-green-700">{order.status}</td>
                <td className="p-3 border border-green-700">{order.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phân trang đơn giản */}
        <div className="flex justify-center gap-3 mt-6">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 rounded-full font-semibold text-sm border ${
                num === 1 ? "bg-green-700 text-white" : "text-green-800 border-green-600"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
