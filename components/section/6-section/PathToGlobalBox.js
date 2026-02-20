const PathToGlobalBox = () => {
 const eligibilityData = [
    {
      title: "Educational Qualification:",
      description: (
        <>
          Bachelors degree in any discipline from a recognized
          <br className="hidden small:block" />
           university with minimum 50% aggregate marks
        </>
      ),
    },
    {
      title: "Work Experience:",
      description: (
        <>
          Freshers and working professionals both eligible.
          <br className="hidden small:block" />
          Prior finance experience not mandatory.
        </>
      ),
    },
    {
      title: "Entrance Requirements:",
      description: (
        <>
          Valid score in CAT/XAT/CMAT/ATMA/MAT  or <br className="hidden small:block" /> ATLAS Entrance Test Personal interview and <br className="hidden small:block" />profile assessment
        </>
      ),
    },
    {
      title: "Entrance Requirements:",
      description: (
        <>
          Valid score in CAT/XAT/CMAT/ATMA/MAT  or <br className="hidden small:block" /> ATLAS Entrance Test Personal interview and <br className="hidden small:block" />profile assessment
        </>
      ),
    },
  ];

  return (
    <div className="bg-[linear-gradient(127deg,#342B7C_2.13%,#02A7B6_97.74%)] 
      p-[16px] rounded-[20px] text-white 
      flex flex-col gap-[32px] 
      small:order-1 small:flex-1 
      small:gap-[30px] small:p-[30px] small:rounded-[44px] 
      medium:p-[34px] medium:gap-[36px] base:p-[40px] base:gap-[40px]">

      {/* Heading Badge */}
      <div className="flex flex-row gap-[6px] small:gap-[5px]">
        <div className="hidden small:inline small:text-[#fff] 
          small:rounded-[30px] 
          small:bg-[rgba(86,226,245,0.30)] 
          small:px-[20px] small:py-[10px] 
          small:font-semibold text-[18px] medium:text-[16px]">
          Eligibilty Criteria
        </div>
      </div>

      {/* Loop Start */}
      {eligibilityData.map((item, index) => (
        <div key={index} className="flex flex-col gap-[6px] small:gap-[5px] medium:gap-[5px] base:gap-[6px]">
          <p className="text-[16px] font-semibold small:text-[14px] base:text-[20px]">
            {item.title}
          </p>
          <p className="text-[14px] text-[#FFFFFFB3] small:text-[13px] medium:text-[15px] base:text-[18px] ">
            {item.description}
          </p>
        </div>
      ))}
      {/* Loop End */}

    </div>
  );
};

export default PathToGlobalBox;