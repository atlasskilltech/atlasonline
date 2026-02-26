import Image from "next/image";
import PathToGlobalSteps from "./PathToGlobalSteps";
import PathToGlobalBox from "./PathToGlobalBox";
const Wealth = () => {
  return (
    <section
      className="
 w-full px-[24px] py-[40px] bg-white  
 small:pl-[60px] small:pr-[40px] 
 medium:py-[60px]  medium:pr-[60px] 
 base:pl-[80px] base:pr-[70px]  base:py-[70px]
 large:px-[140px]   large:py-[80px] small:relative
 "
    >
      <Image
        src="/man/man.png"
        alt="person"
        width={400}
        height={600}
        className="hidden absolute bottom-0 left-[45%] -translate-x-1/2 small:block small:w-[294px] medium:w-[336px] base:w-[421px]"
      />
      <div className="flex flex-col gap-[24px] small:gap-[39px] medium:gap-[40px] base:gap-[41px] large:gap-[21px]">
        <div>
          <p
            className="text-[24px] text-[#222222] font-semibold  small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)
    "
          >
            Your Path to Global
          </p>
          <h1
            className="text-[32px] font-bold font-denton leading-tight  bg-[radial-gradient(248.29%_125.44%_at_6.23%_19.77%,_#342B7C_0%,_#02A7B6_100%)]
  bg-clip-text
  text-transparent  small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)"
          >
            Financial Planning Excellence
          </h1>
        </div>

        <div className="flex flex-col gap-[24px] small:flex-row small:gap-[133px] medium:gap-[153px] base:gap-[201px] large:gap-[226px]">
          <PathToGlobalSteps />

          <PathToGlobalBox />
        </div>
      </div>
    </section>
  );
};
export default Wealth;
