import CanTakeYouStripe from "./CanTakeYouStripe";
import CanTakeYouButton from "./CanTakeYouButton";
const CanTakeYou = () => {
 
  return (
    <section
      className="
   w-full px-[24px] py-[40px] bg-black  
   small:pl-[60px] small:pr-[40px] 
   medium:py-[60px]  medium:pr-[60px] 
   base:pl-[80px] base:pr-[70px]  base:py-[70px]
   large:px-[140px]   large:py-[80px]
   "
    >
      <div className="flex flex-col gap-[24px]">
        <div >
          <p
            className="text-[24px] text-gray-300 font-semibold  small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)
      "
          >
            Where This Program
          </p>
          <h1 className="text-[32px] font-bold font-denton leading-tight bg-gradient-to-r from-white to-[#00D4EB] bg-clip-text text-transparent  small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)">
            Can Take You
          </h1>
        </div>
        <p className="text-[14px] leading-[1.49]  font-visual text-[rgba(255,255,255,0.90)]  medium:text-[16px] base:text-[18px]">
          Work through real client scenarios—from building multi-generational
          wealth plans to navigating market volatility, tax law changes, and
          complex insurance needs faced by high-net-worth individuals.
        </p>
        <CanTakeYouStripe/>

        


<div className=" pt-[16px] flex flex-col gap-[16px] medium:gap-[30px] small:flex-row small:pt-[36px] ">
    <div className="flex flex-col gap-[16px] small:gap-[18px] medium:gap-[20px]">
            <h3 className="text-[24px] font-semibold text-white">Graduates build careers across <span className="text-[#02A7B6] italic font-denton">leading financial institutions</span></h3>
            <p className="text-white text-[14px]">With the CFP® Global Certification, graduates can pursue international advisory roles, work with global clients, and build cross-border careers in financial planning.</p>
        </div>


    <CanTakeYouButton/>
</div>




<div className="text-white pt-[16px] flex flex-col small:flex-row gap-[16px] small:pt-[36px] small:items-center small:gap-x-[27px] base:gap-[24px]">
    <h2 className="italic font-denton text-[24px] font-extrabold text-center small:text-left base:text-[28px]">Get Chance to  work With</h2>

    <div className="w-full">
        <div className="w-full">
            <img className="block small:hidden" src="/strip/companylogomobile.png" alt="" />
            <img className="hidden small:block w-full"src="/strip/companylogodesktop.png" alt="" />
        </div>
    </div>
</div>



  <div className="w-full flex justify-center">
      <a className="text-[#222] w-full block bg-[#fff] text-center py-[16px] px-[24px] text-[16px] font-semibold mt-[16px] small:mt-[36px] small:w-auto  small:py-[14px] small:px-[20px] medium:py-[16px] medium:px-[24px] base:mt-[56px]" href="#">Apply Now</a>
  </div>


  </div>
    </section>
  );
};
export default CanTakeYou;
