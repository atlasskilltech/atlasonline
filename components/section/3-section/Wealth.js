"use client";

import LeaderCarousel from "./LeaderCarousel";
// import CaseStudySlider from "./CaseStudySlider"; // optional

const Wealth = () => {
  return (
    <section className="w-full px-[20px] small:px-[140px] py-[64px] pt-[120px] bg-white overflow-hidden">
      <div className="mx-auto">
        {/* Heading */}
        <header>
          <p className="text-[16px] text-[#666] font-visual">Learning From Where</p>

          <h2 className="font-denton text-[40px] small:text-[56px] leading-[0.95]">
            Wealth Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c2c7a] to-[#14b8a6]">Actually Managed</span>
          </h2>
        </header>

        {/* Main Row */}
        <div className="mt-[50px] grid grid-cols-1 small:grid-cols-2 items-center">
          {/* Carousel */}
          <div className="order-1 small:order-2 small:-ml-[60px] flex justify-center">
            <LeaderCarousel />
          </div>

          {/* Blue Box */}
          <div className="order-2 small:order-1 flex justify-start">
            <div
              className="
                relative
                w-full
                rounded-[26px] small:rounded-l-[26px] small:rounded-r-none
                px-[32px] small:px-[44px]
                py-[32px] small:py-[40px]
                min-h-[200px]
                bg-gradient-to-r from-[#6e49f0] via-[#4f7cf5] to-[#00c2c7]
                text-white
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              "
            >
              <h3 className="text-[18px] small:text-[20px] font-semibold mb-2">Learn from leaders managing</h3>

              <p className="italic text-[22px] small:text-[26px] font-semibold leading-[1.1] mb-4">billions in client wealth</p>

              <p className="text-[14px] small:text-[15px] leading-[1.6]">
                Direct access to CFOs, fund managers, wealth advisors, and financial planners from HDFC, Kotak Mutual Fund, and leading wealth
                management firms sharing real strategies and market insights.
              </p>
            </div>
          </div>
        </div>

        {/* optional <CaseStudySlider /> */}
      </div>
    </section>
  );
};

export default Wealth;
