// src/pages/Gold610Page.jsx
import Gold610Policy from "../components/rank/Gold610Policy";
import TraditionalPolicy610 from "../components/rank/TraditionalPolicy610";

export default function Gold610Page() {
  return (
    <div className="w-full bg-white font-sans min-h-screen px-4 sm:px-6 md:px-[50px] pt-10 pb-20">
      {/* PHẦN 1: Thông tin hạng hiện tại (tùy biến riêng cho trang Gold610) */}
     
      <TraditionalPolicy610 />
     

      {/* PHẦN 2: Chính sách dòng hàng 610 */}
      <Gold610Policy />
    </div>
  );
}
