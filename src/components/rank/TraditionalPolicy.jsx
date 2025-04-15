// src/components/TraditionalPolicy.jsx

export default function TraditionalPolicy() {
    const data = [
      {
        label: "KHÁCH HÀNG MỚI",
        benefits: [
          { title: "Chiết khấu 8%", condition: "DT công = 10 triệu", sub: "(cho đơn hàng đầu tiên)" },
          { title: "Chiết khấu 10%", condition: "DT công = 20 triệu", sub: "(cho đơn hàng đầu tiên)" },
        ],
      },
      {
        label: "MEMBER",
        benefits: [
          { title: "Chiết khấu 3%", condition: "DT công = 15 triệu đến dưới 30 triệu" },
          { title: "Chiết khấu 4%", condition: "DT công = 30 triệu đến dưới 50 triệu" },
          { title: "Chiết khấu 5%", condition: "DT công = từ 50 triệu trở lên" },
        ],
      },
      {
        label: "VIP RUBY",
        benefits: [
          { year: "2026", title: "Chiết khấu 5%" },
        ],
      },
      {
        label: "VIP EMERALD",
        benefits: [
          { year: "2026", title: "Chiết khấu 7%" },
        ],
      },
      {
        label: "VIP DIAMOND",
        benefits: [
          { year: "2026", title: "Chiết khấu 9%" },
        ],
      },
    ];
  
    return (
      <div className="bg-white rounded-xl border border-green-700 overflow-hidden mt-8">
        <div className="bg-green-800 py-3 text-center text-white font-bold text-base sm:text-lg md:text-xl uppercase">
          DOANH THU DÒNG HÀNG TRUYỀN THỐNG CỦA BẠN HIỆN TẠI
        </div>
  
        <div className="px-4 sm:px-6 md:px-8 py-8 overflow-x-auto">
          <div className="min-w-[700px] relative flex justify-between items-start gap-6 pl-0">
            <div className="absolute top-[38px] left-[36px] right-0 h-[10px] bg-[#D5E3FF] z-0" />
            <div className="absolute top-[38px] left-[36px] w-[60%] h-[10px] bg-blue-600 z-10" />
  
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`z-20 flex flex-col items-center w-[120px] ${idx === 0 ? "ml-[-14px]" : ""}`}
              >
                <div className="w-[72px] h-[72px] bg-white border-[4px] border-green-700 rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-green-900 text-center leading-tight uppercase shadow-[0_0_0_2px_white,0_0_0_1px_#166534,0_0_6px_rgba(0,0,0,0.1)]">
                  {item.label}
                </div>
  
                <div className="h-4 w-0.5 border-l-2 border-dotted border-blue-600 my-1" />
  
                <div className="text-[9px] sm:text-[10px] text-center mt-2 text-green-900">
                  {item.benefits.map((b, bi) => (
                    <div key={bi} className="mb-1">
                      {b.year && (
                        <div className="italic text-xs font-semibold">
                          Quyền lợi {b.year}
                        </div>
                      )}
                      <div className="leading-snug">
                        {b.condition && <span className="italic font-semibold text-xs sm:text-sm">{b.condition}<br /></span>}
                        <span className="text-red-600 font-bold text-sm">{b.title}</span>
                        {b.sub && (
                          <div className="text-xs italic">{b.sub}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } 
  