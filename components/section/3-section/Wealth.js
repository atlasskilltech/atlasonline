"use client";

// import LeaderCarousel from "./LeaderCarousel";
// import CaseStudySlider from "./CaseStudySlider"; // optional

const Wealth = () => {
  return (
    <section className="
   w-full   px-[24px] py-[40px] bg-white  
   small:pl-[60px] small:pr-[40px] 
   medium:py-[50px]
   
   base:pl-[80px] base:pr-[70px]  base:py-[70px]

   large:px-[140px]   large:py-[80px]
   ">
      <div className="mx-auto">
        {/* Heading */}
        <header>
          <p className="text-[24px] text-[#666] font-semibold  small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)
      ">    
        Learning From Where
        </p>

        <h1 className="text-[32px] font-bold font-denton leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-[#2c2c7a] to-[#14b8a6] small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)">
        Wealth Is Actually Managed
        </h1>
        </header>

      

        {/* optional <CaseStudySlider /> */}
      </div>
    </section>
  );
};

export default Wealth;
