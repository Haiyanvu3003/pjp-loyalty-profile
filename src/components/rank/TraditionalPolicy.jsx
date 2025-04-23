export default function TraditionalPolicy() {
  const data = [
    {
      label: "MEMBER",
      milestone: null,
      benefits: [],
      customContent: (
        <div className="text-[9px] sm:text-[10px] text-center text-green-900 mt-[172px]">
          <div className="leading-snug">
            <span className="italic font-semibold text-xs sm:text-sm">DT công = 15 triệu đến dưới 30 triệu<br /></span>
            <span className="text-red-600 font-bold text-sm">Chiết khấu 3%</span>
          </div>
          <div className="leading-snug mt-2">
            <span className="italic font-semibold text-xs sm:text-sm">DT công = 30 triệu đến dưới 50 triệu<br /></span>
            <span className="text-red-600 font-bold text-sm">Chiết khấu 4%</span>
          </div>
          <div className="leading-snug mt-2">
            <span className="italic font-semibold text-xs sm:text-sm">DT công = từ 50 triệu trở lên<br /></span>
            <span className="text-red-600 font-bold text-sm">Chiết khấu 5%</span>
          </div>
        </div>
      ),
    },
    {
      label: "VIP RUBY",
      milestone: "500 triệu",
      benefits: [
        { year: "2026", title: "Chiết khấu 5%" },
      ],
    },
    {
      label: "VIP EMERALD",
      milestone: "1,4 Tỷ",
      benefits: [
        { year: "2026", title: "Chiết khấu 7%" },
      ],
    },
    {
      label: "VIP DIAMOND",
      milestone: "1,8 Tỷ",
      benefits: [
        { year: "2026", title: "Chiết khấu 9%" },
      ],
    },
  ];

  const currentRevenue = 1600; // 1.6 tỷ
  const minRevenue = 0;
  const maxRevenue = 1800;
  const progressPercent = ((currentRevenue - minRevenue) / (maxRevenue - minRevenue)) * 100;

  return (
    <div className="bg-white rounded-xl border border-green-700 overflow-hidden mt-0">
      <div className="bg-green-800 py-3 text-center text-white font-bold text-base sm:text-lg md:text-xl uppercase">
        DOANH THU DÒNG HÀNG TRUYỀN THỐNG CỦA BẠN HIỆN TẠI
      </div>

      <div className="px-0 sm:px-0 md:px-0 py-8 overflow-x-auto">
        <div className="min-w-[700px] relative flex justify-between items-start gap-6">
          <div className="absolute top-[72px] left-[36px] right-[36px] h-[10px] bg-[#D5E3FF] z-0 rounded-full" />
          <div
            className="absolute top-[72px] left-[36px] h-[10px] bg-blue-600 z-10 rounded-full"
            style={{ right: `${100 - 80}%` }}
          />

          {data.map((item, idx) => (
            <div
              key={idx}
              className="z-20 flex flex-col items-center w-[120px] relative"
            >
              {item.milestone && (
                <div className="text-green-700 font-semibold text-[10px] sm:text-xs text-center mb-2">
                  {item.milestone}
                </div>
              )}

              <div className="w-[72px] h-[72px] bg-white border-[4px] border-green-700 rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-green-900 text-center leading-tight uppercase shadow-[0_0_0_2px_white,0_0_0_1px_#166534,0_0_6px_rgba(0,0,0,0.1)] absolute top-[36px]">
                {item.label}
              </div>

              {item.customContent || (
                <div className="text-[9px] sm:text-[10px] text-center text-green-900 mt-[172px]">
                  {item.benefits.map((b, bi) => (
                    <div key={bi} className="mb-2">
                      {b.year && (
                        <>
                          <div className="italic font-semibold text-xs sm:text-sm leading-snug">
                            Quyền lợi {b.year}
                          </div>
                          <div className="text-red-600 font-bold text-sm">{b.title}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
