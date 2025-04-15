export default function RankProgress() {
    const currentPoint = 1600;
    const maxPoint = 1800;
    const percentage = (currentPoint / maxPoint) * 100;
  
    const ranks = [
      { label: "Member", point: 0 },
      { label: "VIP Ruby", point: 500 },
      { label: "VIP Emerald", point: 1400 },
      { label: "VIP Diamond", point: 1800 },
    ];
  
    return (
      <div className="border border-green-900 rounded-xl overflow-hidden w-full bg-white">
        {/* Header */}
        <div className="bg-green-900 text-white text-center text-xl font-bold py-3 uppercase">
          ĐIỂM PJP TÍCH LŨY CỦA BẠN
        </div>
  
        {/* Progress Section */}
        <div className="relative px-6 pt-12 pb-10">
          {/* Line tiến trình */}
          <div className="absolute top-[90px] left-[60px] right-[60px] h-[20px] bg-[#D6E4FF] rounded-full z-0">
            <div
              className="bg-blue-600 h-full rounded-full z-10 relative"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
  
          {/* Các mốc điểm */}
          <div className="flex justify-between items-end relative z-20">
            {ranks.map((rank, index) => (
              <div key={index} className="flex flex-col items-center w-[80px]">
                <div className="text-green-700 font-bold text-xs sm:text-sm mb-2 text-center">
                  {rank.label}
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white border-4 border-white shadow-lg relative z-30" style={{ marginTop: "-40px" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-green-900 font-bold text-lg border-4 border-green-500 bg-white">
                    {rank.point}
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Gợi ý nâng hạng */}
          <p className="italic text-center text-gray-800 max-w-xl mx-auto mt-10 text-sm sm:text-base">
            Bạn còn thiếu <span className="font-bold">{maxPoint - currentPoint} ĐIỂM PJP</span> để đạt hạng mức <span className="font-bold">VIP DIAMOND</span>
          </p>
        </div>
      </div>
    );
  }
  