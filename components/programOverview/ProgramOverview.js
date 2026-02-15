import AdmissionCard from "./AdmissionCard";

const ProgramOverview = () => {
  return (
   <div className="w-full flex flex-col xl:flex-row xl:gap-16 px-[24px] py-[40px] bg-black">
     {/* Left Column */}
     <div className="flex-1">
      <p
        className="text-[16px] leading-[1.49] font-semibold font-visual text-[rgba(255,255,255,0.90)]"
      >

      ATLAS Online MBA in Financial Planning & Applied Finance is a 2-year UGC-recognized degree program uniquely integrated with the globally recognized CFP® (Certified Financial Planner) certification. This comprehensive program combines advanced financial planning education with industry immersion, preparing you for premium roles in wealth management, private banking, and financial advisory across 25+ countries.
      </p>

     <div className="my-[24px] w-full">
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-y-[20px]  max-w-3xl"
            style={{
              // Use a custom media query for 1081px if needed
              // If not, xl: kicks in around 1280px; 
              // Can add custom class if you want stricter 1081px breakpoint
            }}>
         {/* Col 1, Row 1 */}
         <div>
           <span
             className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB]'
           >
             2 Years
           </span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1">Online Program</span>
         </div>
         {/* Col 2, Row 1 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB]'>Live + Recorded</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1">Industry Expert Lectures</span>
         </div>
         {/* Col 1, Row 2 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB]'>CFP<sup>&reg;</sup> Global</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1">Certification program</span>
         </div>
         {/* Col 2, Row 2 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB]'>&lt; 50% in Grad.</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1">Mathematics in 12th Standard (09+12)</span>
         </div>
         {/* Col 1, Row 3 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB]'>CFP<sup>&reg;</sup> Global</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1">Certification program</span>
         </div>
         {/* Col 2, Row 3 */}
         <div>
           <span className='block font-["Denton_Test"] text-[24px] font-bold leading-[36px] tracking-[0.72px] text-[#00D4EB]'>&lt; 50% in Grad.</span>
           <span className="block text-[15px] leading-tight font-normal text-[rgba(255,255,255,0.85)] mt-1">Mathematics in 12th Standard (09+12)</span>
         </div>
       </div>
     </div>

     
     </div>
    {/* Right Column – Admission card with countdown */}
    <div className="flex-1 mt-8  flex  small:mt-0 small:w-full">
      <AdmissionCard />
    </div>
   </div>
  )
}

export default ProgramOverview