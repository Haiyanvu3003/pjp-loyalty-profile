// src/components/rank/Gold610Policy.jsx
export default function Gold610Policy() {
    return (
      <div className="bg-white rounded-xl border border-green-700 overflow-hidden mt-8">
        <div className="bg-green-800 py-3 text-center text-white font-bold text-base sm:text-lg md:text-xl uppercase">
          DOANH THU DÒNG HÀNG 610 HIỆN TẠI CỦA BẠN
        </div>
  
        <div className="px-4 sm:px-6 md:px-8 py-8 overflow-x-auto">
          <div className="w-[700px] md:w-full relative flex justify-start items-start gap-[160px]">
            {/* Thanh tiến độ */}
            <div className="absolute top-[38px] left-[36px] right-[36px] h-[10px] bg-[#D5E3FF] z-0" />
            <div className="absolute top-[38px] left-[36px] w-[50%] h-[10px] bg-blue-600 z-10" />
  
            {/* Mốc 600 */}
            <div className="z-20 flex flex-col items-center w-[160px] ml-[-14px]">
              <div className="w-[72px] h-[72px] bg-white border-[4px] border-green-700 rounded-full flex items-center justify-center text-xs font-bold text-green-900 text-center leading-tight uppercase shadow-[0_0_0_2px_white,0_0_0_1px_#166534,0_0_6px_rgba(0,0,0,0.1)]">
                600 TRIỆU
              </div>
              <div className="h-4 w-0.5 border-l-2 border-red-700 my-2" />
              <div className="flex flex-col items-center">
                <img src="/gift-10tr.png" alt="Trang sức" className="w-[130px] h-auto rounded mb-2" />
                <div className="bg-green-800 text-white text-xs font-bold px-2 py-1 rounded text-center">
                  TẶNG 1 TRANG SỨC<br />TRỊ GIÁ <span className="text-white">10 TRIỆU</span>
                </div>
              </div>
            </div>
  
            {/* Mốc 1000 */}
            <div className="z-20 flex flex-col items-center w-[160px] translate-x-[60px]">
              <div className="w-[72px] h-[72px] bg-white border-[4px] border-green-700 rounded-full flex items-center justify-center text-xs font-bold text-green-900 text-center leading-tight uppercase shadow-[0_0_0_2px_white,0_0_0_1px_#166534,0_0_6px_rgba(0,0,0,0.1)]">
                1 TỶ
              </div>
              <div className="h-4 w-0.5 border-l-2 border-red-700 my-2" />
              <div className="flex flex-col items-center">
                <img src="/trip-40tr.png" alt="Du lịch" className="w-[130px] h-auto rounded mb-2" />
                <div className="bg-green-800 text-white text-xs font-bold px-2 py-1 rounded text-center">
                  1 CHUYẾN DU LỊCH<br />DUBAI/HÀN QUỐC<br />TRỊ GIÁ 40 TRIỆU
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  