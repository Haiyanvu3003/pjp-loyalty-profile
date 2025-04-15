import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = (method) => {
    if (!phone) {
      alert("Vui lòng nhập số điện thoại");
      return;
    }

    // Gửi API mock
    fetch("http://localhost:3001/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, method }),
    });

    // Điều hướng sang trang OTP
    navigate("/otp", { state: { phone } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-10 py-8 font-sans">
      {/* ✅ Logo mới */}
      <img
        src="/Xanh.png"
        alt="PJP Logo"
        className="h-[100px] sm:h-[120px] md:h-[140px] mb-6"
      />

      {/* Tiêu đề */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-900 text-center uppercase leading-snug mb-4">
        ĐĂNG NHẬP TÀI KHOẢN
      </h1>

      {/* Hướng dẫn */}
      <p className="text-sm sm:text-base text-center text-gray-700 mb-6 max-w-[400px]">
        Vui lòng nhập số điện thoại của bạn để đăng nhập và nhận mã xác thực.
      </p>

      {/* Input Số điện thoại */}
      <input
        type="tel"
        placeholder="Nhập số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full max-w-[400px] border border-gray-400 rounded-xl px-4 py-3 text-center text-base sm:text-lg text-green-900 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Nút gửi OTP qua Zalo */}
      <button
        onClick={() => handleSendOtp("zns")}
        className="w-full max-w-[400px] bg-[#0063F7] hover:bg-blue-800 text-white font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg mb-4 transition"
      >
        Gửi OTP qua Zalo
      </button>

      {/* Nút gửi OTP qua SMS */}
      <button
        onClick={() => handleSendOtp("sms")}
        className="w-full max-w-[400px] bg-[#00B140] hover:bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg mb-4 transition"
      >
        Gửi OTP qua SMS
      </button>

      {/* Ghi chú */}
      <p className="text-sm text-gray-600 text-center max-w-[400px]">
        Hệ thống ưu tiên gửi OTP qua Zalo OA. Nếu không nhận được, bạn có thể chọn gửi lại bằng tin nhắn SMS.
      </p>
    </div>
  );
}
