const PathToGlobalSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description:(
        <>
        
        Complete the application by providing <br className="hidden base:block" /> the   
        <br className="hidden small:block base:hidden" />
        essential details about yourself.
        </>
      ),
    },
    {
      number: "02",
      title: "Reserve Your Seat",
      description: (
        <>
        Secure your seat by completing the
        <br className="hidden small:block" />
         program fee payment.
        
        </>
      ),
    },
    {
      number: "03",
      title: "Start Learning",
      description:(
        <>
        Begin your learning journey on the
        <br className="hidden small:block" />
        designated cohort start date.    
        </>
      ),
    },
  ];
  return (
    <div className=" small:order-2 small:flex-1">
      {steps.map((step, index) => (
        <div  key={index}>


          {index === 0 && (
            <div className="hidden small:inline-block small:text-[#000] small:rounded-[20px] small:bg-[rgba(86,226,245,0.30)] small:px-[20px] small:py-[10px] small:mb-[29px] small:font-semibold small:text-[18px] medium:text-[16px] medium:mb-[12px] base:mb-[37px] base:text-[20px] large:mb-[31px]">
              Application Process
            </div>
          )}

          <div className="inline-flex justify-center items-center gap-4 small:gap-[20px] base:gap-[27px]">
            <div
              className="flex w-[60px] h-[60px] p-[10px] 
        flex-col justify-center items-center 
        gap-[10px] shrink-0 bg-gradient-to-b 
        from-[#342B7C] to-[#02A7B6] text-[#fff] small:p-[8px] small:gap-[8px] medium:w-[69px] medium:h-[68px] base:w-[80px] base:h-[80px] base:p-[10px] base:gap-[10px]"
            >
              <p
                className="text-white 
          text-center text-[22px] 
          font-semibold 
          snall:text-[24px] medium:text-[28px] base:text-[32px]"
              >
                {step.number}
              </p>
            </div>
            <div className="flex flex-col items-start gap-[8px] flex-1 medium:gap-[6px] base:gap-[8px]">
              <p
                className="text-black text-base font-semibold leading-6
          tracking-tight text-[16px] small:text-[14px] medium:text-[16px] base:text-[20px]"
              >
                {step.title}
              </p>
              <p className="text-[14px] font-semibold text-[#000000B3] small:text-[13px] medium:text-[15px] base:text-[18px]">
                {step.description}
              </p>
            </div>
          </div>
          {/* Line Same Position Par */}
          {index !== steps.length - 1 && (
            <div className="block justify-center items-center gap-4">
              <div
                className="flex w-[60px] h-[60px] p-[10px] 
          flex-col justify-center items-center 
          gap-[10px] shrink-0 bg-white"
              >
                <img src="/shape/line.png" alt="" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default PathToGlobalSteps;
