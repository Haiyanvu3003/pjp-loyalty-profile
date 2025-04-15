import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OtpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone || "";

  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!phone) navigate("/");
  }, [phone, navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleContinue = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loginPhone", phone);
    navigate("/profile/contact", { state: { phone } });
  };

  const handleResend = () => {
    alert("🔄 Hệ thống đã gửi lại mã OTP!");
    setCountdown(60);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-10 py-8 font-sans">
      {/* ✅ Logo mới */}
      <img src="/Xanh.png" alt="PJP Logo" className="h-[100px] sm:h-[120px] md:h-[140px] mb-6" />

      {/* Tiêu đề */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-900 text-center uppercase leading-tight mb-3">
        MỜI QUÝ KHÁCH <br className="hidden sm:block" /> NHẬP MÃ XÁC THỰC
      </h1>

      <p className="text-center text-sm sm:text-base text-gray-700 mb-1">
        Mã xác thực đã được gửi tới Zalo số điện thoại:
      </p>
      <p className="text-blue-600 font-semibold underline text-center mb-6 text-base sm:text-lg">
        {phone}
      </p>

      {/* Input OTP */}
      <input
        type="text"
        placeholder="Nhập mã OTP bạn vừa nhận được"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
        className="w-full max-w-[600px] text-center border border-black rounded-xl px-4 py-3 text-base sm:text-lg mb-6 font-medium text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      {/* Nút tiếp tục */}
      <button
        onClick={handleContinue}
        className="w-full max-w-[600px] bg-[#0063F7] hover:bg-blue-800 text-white font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg mb-4 transition"
      >
        TIẾP TỤC
      </button>

      {/* Gửi lại mã */}
      <button
        onClick={handleResend}
        disabled={countdown > 0}
        className={`w-full max-w-[600px] ${
          countdown > 0
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#00B140] hover:bg-green-700 text-white"
        } font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg mb-4 transition`}
      >
        {countdown > 0
          ? `Gửi lại OTP nếu Quý Khách Hàng chưa nhận được (${countdown}s)`
          : "Gửi lại OTP nếu Quý Khách Hàng chưa nhận được"}
      </button>

      <p className="text-center text-sm text-black leading-snug max-w-[600px]">
        Trong trường hợp không nhận OTP qua Zalo, hệ thống sẽ <br />
        tự động gửi lại OTP qua SMS
      </p>
    </div>
  );
}
