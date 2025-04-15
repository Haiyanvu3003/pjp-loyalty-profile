// src/pages/RankPage.jsx
import RankSummary from "../components/rank/RankSummary";
import TraditionalPolicy from "../components/rank/TraditionalPolicy";

export default function RankPage() {
  return (
    <div className="w-full bg-white font-sans min-h-screen px-4 sm:px-6 md:px-[50px] pt-10 pb-20">
      {/* PHẦN 1: Thông tin hạng hiện tại */}
      <RankSummary />

      {/* PHẦN 3: Chính sách dòng hàng truyền thống */}
      <TraditionalPolicy />
    </div>
  );
}
