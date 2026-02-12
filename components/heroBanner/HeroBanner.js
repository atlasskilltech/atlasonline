import HeroSlider from "./HeroSlider";
const HeroBanner = () => {
  return (
 <section className="bg-[#071c22]  py-[30px] p-3 text-white small:grid small:grid-cols-2 small:gap-10 small:p-[40px] small:items-center">

 

    <div className="small:flex small:flex-wrap">

      <div className="text-center  my-5 small:text-left">
        <p className="text-[24px] text-gray-300 font-semibold mb-2 small:text-[28px] medium:text-[30px] base:text-[40px]">
          Online MBA in
        </p>

        <h1 className="text-[32px] font-bold font-denton leading-tight bg-gradient-to-r from-white to-[#00D4EB] bg-clip-text text-transparent mb-2 small:text-[34px] medium:text-[40px] base:text-[48px]">
          Financial Planning and<br className="hidden small:block"/> Applied Finance
        </h1>

        <p className="text-[18px] font-semibold text-gray-300 small:text-[15px] medium:text-[16px] base:text-[20px]">
          with CFP® Global Certification program
        </p>
      </div>
     <HeroSlider className=" block small:hidden"/>
      <div className="space-y-3 mb-5  order-3 small:order-5 small:flex small:flex-row-reverse small:justify-between small:w-full small:gap-3 small:space-y-0 small:px-[20px]">
        <button className="w-full border-3 border-white py-3 font-medium small:w-75">
          Apply Now
        </button>

        <button className="w-full bg-gray-200 text-black py-3 font-medium flex items-center justify-center gap-2">
          Download Brochure ↓
        </button>
      </div>

      <div className="flex gap-3 mb-5 order-4 small:order-4 base:mb-10">
        <div className="flex items-center gap-2 bg-[#0c2b33] rounded-full flex-1">
          <img src="/logo/indiamap.png" className="w-15 h-15 rounded-full bg-white" />
          <p className="text-gray-300 text-[12px] font-semibold ">
            Accredited by NAAC++
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0c2b33] rounded-full flex-1">
          <img src="/logo/nirf.png" className="w-15 h-15 rounded-full bg-white" />
          <p className="text-gray-300 text-[12px] font-semibold">
            Among Indias Top 100 Universities
          </p>
        </div>
      </div>

      <ul className="space-y-2 text-[14px] text-gray-200 small:mb-5 base:text-[16px] base:mb-10">
        <li className="flex items-center gap-2">
          <img src="/icon/tick-white.png" />
          <span>MBA Degree + CFP® Global Certification</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icon/tick-white.png" />
          <span>100% aligned with international CFP® standards</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icon/tick-white.png" />
          <span>Includes 4 NSM certifications</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icon/tick-white.png" />
          <span>Recognized across 25+ countries</span>
        </li>
      </ul>

    </div>

    <div>

      <HeroSlider className=" hidden small:block"/>



    </div>

 

</section>
  );
};

export default HeroBanner;
