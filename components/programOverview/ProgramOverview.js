import AdmissionCard from "./AdmissionCard";

const ProgramOverview = () => {
  return (
   <div className="w-full flex flex-col small:flex-row small:gap-[40px] px-[24px] py-[40px] bg-black small:pl-[60px] small:pr-[40px] ">
     {/* Left Column */}
     <div className="flex-1 small:flex-none small:w-[500px]">
   <div className="hidden small:block small:mb-[24px]">
   <p className="text-[24px] text-gray-300 font-semibold  small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)">
     Program
        </p>

        <h1 className="text-[32px] font-bold font-denton leading-tight bg-gradient-to-r from-white to-[#00D4EB] bg-clip-text text-transparent  small:text-[44px] base:text-[48px] cursor-(--f-cursor-text)">
        Overview
        </h1>
   </div>
      <p
        className="text-[16px] leading-[1.49] font-semibold font-visual text-[rgba(255,255,255,0.90)] small:text-[15px]"
      >

      ATLAS Online MBA in Financial Planning & Applied Finance is a 2-year UGC-recognized degree program uniquely integrated with the globally recognized CFP® (Certified Financial Planner) certification. This comprehensive program combines advanced financial planning education with industry immersion, preparing you for premium roles in wealth management, private banking, and financial advisory across 25+ countries.
      </p>

     <div className="my-[24px] w-full small:my-[40px]">
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-y-[20px]  max-w-3xl small:gap-x-[24px] small:gap-y-[32x]"
            style={{
              // Use a custom media query for 1081px if needed
              // If not, xl: kicks in around 1280px; 
              // Can add custom class if you want stricter 1081px breakpoint
            }}>
         {/* Col 1, Row 1 */}
         <div>
           <span
             className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB] small:text-[30px]'
           >
             2 Years
           </span>
           <span className="block text-[14px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1 small:text-[12px]">Online Program</span>
         </div>
         {/* Col 2, Row 1 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB] small:text-[30px]'>Live + Recorded</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1 small:text-[12px]">Industry Expert Lectures</span>
         </div>
         {/* Col 1, Row 2 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB] small:text-[30px]'>CFP<sup>&reg;</sup> Global</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1 small:text-[12px]">Certification program</span>
         </div>
         {/* Col 2, Row 2 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB] small:text-[30px]'>&lt; 50% in Grad.</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1 small:text-[12px]">Mathematics in 12th Standard (09+12)</span>
         </div>
         {/* Col 1, Row 3 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB] small:text-[30px]'>CFP<sup>&reg;</sup> Global</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1 small:text-[12px]">Certification program</span>
         </div>
         {/* Col 2, Row 3 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB] small:text-[30px]'>&lt; 50% in Grad.</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1 small:text-[12px]">Mathematics in 12th Standard (09+12)</span>
         </div>
       </div>
     </div>

     
     </div>
    {/* Right Column – Admission card with countdown */}
    <div className="flex-1   flex  small:mt-0 small:w-full">
      <AdmissionCard />
    </div>
   </div>
  )
}

export default ProgramOverview