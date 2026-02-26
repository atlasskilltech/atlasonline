import VisionariesCard from "./VisionariesCard";
const Visionaries = () => {
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
       Led by Visionaries,
          </p>
          <h1 className="text-[32px] font-bold font-denton leading-tight bg-gradient-to-r from-white to-[#00D4EB] bg-clip-text text-transparent  small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)">
            Built for You
          </h1>
        </div>


       <div className="text-white">
        <VisionariesCard/>
       </div>
       

        










  <div className="w-full flex justify-center">
      <a className="text-[#222] w-full block bg-[#fff] text-center py-[16px] px-[24px] text-[16px] font-semibold small:mt-[36px] small:w-auto  small:py-[14px] small:px-[20px] medium:py-[16px] medium:px-[24px] base:mt-[56px]" href="#">Apply Now</a>
  </div>


  </div>
    </section>
  );
};

export default Visionaries;
