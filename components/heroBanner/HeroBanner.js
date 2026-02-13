import HeroSlider from "./HeroSlider";
const HeroBanner = () => {
  return (
 <section className="bg-black relative overflow-hidden  py-[40px] px-3 text-white small:grid small:grid-cols-2 small:gap-10 small:px-10 small:items-center large:gap-[200px] large:px-30">



    <div className="small:flex small:flex-wrap relative z-10">

      <div className="text-center  my-5 small:text-left  order-1 small:order-1 small:w-full">
        <p className="text-[24px] text-gray-300 font-semibold mb-2 small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)">
          Online MBA in
        </p>

        <h1 className="text-[32px] font-bold font-denton leading-tight bg-gradient-to-r from-white to-[#00D4EB] bg-clip-text text-transparent mb-2 small:text-[34px] medium:text-[40px] base:text-[48px] cursor-(--f-cursor-text)">
          Financial Planning and<br className="hidden small:block"/> Applied Finance
        </h1>

        <p className="text-[18px] font-semibold text-gray-300 small:text-[15px] medium:text-[16px] base:text-[20px] cursor-(--f-cursor-text)">
          with CFP® Global Certification program
        </p>
      </div>
     
     
     
     <HeroSlider className=" block small:hidden order-5 small:order-5 small:w-full"/>


      <div className="space-y-3 mb-5   order-2  small:order-4 small:flex small:flex-row-reverse small:justify-between small:w-full small:gap-3 small:space-y-0 small:px-[20px] small:w-full">
        <button className="w-full border-3 border-white py-3 font-medium small:w-75 cursor-(--f-cursor-pointer)">
          Apply Now
        </button>

        <button className="w-full bg-gray-200 text-black py-3 font-medium flex items-center justify-center gap-2 cursor-(--f-cursor-pointer)">
          Download Brochure ↓
        </button>
      </div>

      <div className="flex gap-3 mb-5  order-3 small:order-3  base:mb-10 small:w-[396px] ">
        <div className="flex items-center gap-2 bg-[#0c2b33] rounded-full flex-1">
          <img src="/logo/indiamap.png" className="w-15 h-15 rounded-full bg-white small:w-[44px] small:h-[44px]" />
          <p className="text-gray-300 text-[12px] font-semibold ">
            Accredited by <br/>NAAC++
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0c2b33] rounded-full flex-1">
          <img src="/logo/nirf.png" className="w-15 h-15 rounded-full bg-white" />
          <p className="text-gray-300 text-[12px] font-semibold ">
            Among Indias<br/> Top 100 Universities
          </p>
        </div>
      </div>

      <ul className="space-y-2 text-[14px]  text-gray-200 small:mb-5 base:text-[16px] base:mb-10 order-4 small:order-2 small:w-full ">
        <li className="flex items-center gap-2 cursor-(--f-cursor-text)">
          <img src="/icon/tick-white.png" />
          <span>MBA Degree + CFP® Global Certification</span>
        </li>
        <li className="flex items-center gap-2 cursor-(--f-cursor-text)">
          <img src="/icon/tick-white.png" />
          <span>100% aligned with international CFP® standards</span>
        </li>
        <li className="flex items-center gap-2 cursor-(--f-cursor-text)">
          <img src="/icon/tick-white.png" />
          <span>Includes 4 NSM certifications</span>
        </li>
        <li className="flex items-center gap-2 cursor-(--f-cursor-text)">
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
