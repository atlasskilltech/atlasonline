"use client";

const CaseStudySlider = () => {
  return (
    <div className="mt-[80px]">

      {/* Title */}
      <div className="max-w-[400px]">
        <h3 className="text-[24px] font-semibold">
          Solve actual wealth
        </h3>
        <p className="italic text-[#2c2c7a] text-[22px]">
          management challenges
        </p>

        <p className="mt-4 text-[14px] leading-[1.6] text-[#333]">
          Work through real client scenarios from building wealth plans
          to navigating tax and market volatility.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-[40px] grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 gap-[24px]">

        {[1,2,3].map((i) => (
          <div key={i} className="rounded-[14px] overflow-hidden shadow-md bg-white">

            <div className="h-[160px] overflow-hidden">
              <img src="/assets/case.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="bg-[#d6efef] p-4">
              <h5 className="font-semibold text-[15px]">
                Retirement Planning Case study
              </h5>
              <p className="text-[13px] mt-2">
                Build a 30-year retirement corpus strategy.
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Controls */}
      <div className="mt-[32px] flex items-center gap-[20px]">

        <button className="w-[44px] h-[44px] rounded-full border flex items-center justify-center">
          ◀
        </button>

        <div className="flex-1">
          <div className="w-full h-[8px] bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[25%] h-full bg-black rounded-full" />
          </div>
        </div>

        <button className="w-[44px] h-[44px] rounded-full border flex items-center justify-center">
          ▶
        </button>

      </div>

    </div>
  );
};

export default CaseStudySlider;
