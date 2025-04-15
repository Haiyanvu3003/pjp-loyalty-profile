// pages/ProfileLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

const menu = [
  { label: "THÔNG TIN LIÊN HỆ", to: "contact" },
  { label: "HẠNG THÀNH VIÊN", to: "rank" },
  { label: "DÒNG HÀNG 610", to: "gold610" },
  { label: "DÒNG HÀNG CAO CẤP", to: "luxury" },
  { label: "CHÍNH SÁCH SỈ", to: "wholesale" },
];

export default function ProfileLayout() {
  return (
    <div className="bg-white font-sans w-full min-h-screen">
      {/* Banner */}
      <div className="w-full">
        <img src="/banner.jpg" alt="Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Title */}
      <div className="text-center mt-6 mb-6">
        <h2 className="text-2xl font-bold uppercase text-green-800">
          THÔNG TIN TÀI KHOẢN
        </h2>
      </div>

      {/* Layout content */}
      <div className="max-w-[1440px] mx-auto px-8 flex gap-12">
        {/* Menu */}
        <aside className="min-w-[240px] space-y-4">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={`/profile/${item.to}`}
              className={({ isActive }) =>
                `block px-5 py-3 text-sm font-semibold uppercase border rounded-md ${
                  isActive
                    ? "bg-green-800 text-white"
                    : "text-green-800 border-green-700 hover:bg-green-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </aside>

        {/* Content right */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
