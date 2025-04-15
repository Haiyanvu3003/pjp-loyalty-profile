// src/pages/Gold610Page.jsx
import RankSummary from "../components/rank/RankSummary";
import Gold610Policy from "../components/rank/Gold610Policy";

export default function Gold610Page() {
  return (
    <div className="w-full bg-white font-sans min-h-screen px-4 sm:px-6 md:px-[50px] pt-10 pb-20">
      {/* PHẦN 1: Thông tin hạng hiện tại */}
      <RankSummary />

      {/* PHẦN 2: Chính sách dòng hàng 610 */}
      <Gold610Policy />
    </div>
  );
}
