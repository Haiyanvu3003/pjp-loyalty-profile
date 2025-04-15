// src/pages/ProfilePage.jsx
import { NavLink, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { label: "THÔNG TIN LIÊN HỆ", path: "contact" },
  { label: "HẠNG THÀNH VIÊN", path: "rank" },
  { label: "DÒNG HÀNG 610", path: "gold610" },
  { label: "DÒNG HÀNG CAO CẤP", path: "luxury" },
  { label: "CHÍNH SÁCH SỈ", path: "wholesale" },
];

export default function ProfilePage() {
  const location = useLocation();
  const activePath = location.pathname.split("/").pop();

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      {/* Banner */}
      <div className="w-full">
        <img src="/banner.jpg" alt="Banner" className="w-full object-cover h-auto" />
      </div>

      {/* Tiêu đề */}
      <div className="text-center mt-6 mb-8">
        <h1 className="text-2xl font-bold uppercase text-green-800 tracking-wide">
          THÔNG TIN TÀI KHOẢN
        </h1>
      </div>

      {/* Layout */}
      <div className="max-w-[1440px] mx-auto px-[50px] flex flex-col md:flex-row gap-12">
        {/* Menu bên trái */}
        <aside className="w-full md:w-[250px] space-y-4 pt-[80px]">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={`/profile/${item.path}`}
              className={({ isActive }) =>
                `block border px-5 py-3 rounded-lg text-sm font-semibold uppercase text-left tracking-wide ${
                  isActive || activePath === item.path
                    ? "bg-green-800 text-white"
                    : "border-green-700 text-green-900 hover:bg-green-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </aside>

        {/* Nội dung bên phải */}
        <section className="flex-1 pt-[40px]">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
