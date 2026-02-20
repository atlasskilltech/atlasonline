import React from "react";

const CanTakeYouButton = () => {
  const industryList = [
    "Private & Retail Banks",
    "NBFCs",
    "Wealth Management",
    "Advisory Firms",
    "Mutual Fund",
    "Family Offices",
    "Asset Management Companies",
    "Investment Advisory Firms",
    "Fintech",
    "Portfolio Management Services (PMS)",
  ];
  return (<div className="text-white flex flex-wrap gap-[14px] justify-center small:gap-x-[12px] small:gap-y-[14px]">
      {industryList.map((item, index) => (
    <div
      key={index}
      className="py-[10px] px-[20px] rounded-[30px] bg-[#56E2F5]/20 text-[14px] font-medium self-center small:py-[8px] small:px-[15px]   medium:px-[16px] medium:text-[13px]"
    >
      {item}
    </div>
  ))}
  </div>)
};

export default CanTakeYouButton;
