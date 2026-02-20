import React from 'react'

const CanTakeYouStripe = () => {
       const careerData = [
  {
    title: "Wealth Manager / Private Banker",
    desc: "Advise high-net-worth clients on investments, retirement, tax, and estate planning.",
    salary: "20-30 LPA",
  },
  {
    title: "Investment Banker",
    desc: "Manage mergers, acquisitions and capital raising activities.",
    salary: "25-40 LPA",
  },
  {
    title: "Financial Analyst",
    desc: "Analyze financial data and market trends for decision-making.",
    salary: "10-18 LPA",
  },
  {
    title: "Portfolio Manager",
    desc: "Manage investment portfolios for clients and institutions.",
    salary: "18-35 LPA",
  },
  {
    title: "Risk Manager",
    desc: "Identify and manage financial risks in organizations.",
    salary: "15-28 LPA",
  },
  {
    title: "Tax Consultant",
    desc: "Advise individuals and companies on tax planning strategies.",
    salary: "12-22 LPA",
  },
];
  return (
    <div className="grid grid-cols-1 small:grid-cols-2 gap-[24px] small:gap-[30px]">
  {careerData.map((item, index) => (
    <div key={index} className="flex bg-black">
      
      {/* LEFT SIDE */}
      <div
        className="
        bg-white/15 backdrop-blur-md flex flex-col items-start p-[10px] gap-2 flex-1 
        small:p-[15px] small:gap-[6px] 
        medium:p-[16px] medium:gap-[7px] 
        base:p-[20px] base:gap-[8px]
        "
      >
        <h3 className="text-[#56E2F5] font-semibold text-[16px] small:text-[13px] medium:text-[14px] base:text-[18px]">
          {item.title}
        </h3>

        <p className="text-[#fff] text-[14px] small:text-[10px] medium:text-[12px] base:text-[14px]">
          {item.desc}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
        flex flex-col justify-center items-center p-[10px] gap-2 self-stretch bg-white 
        small:p-[15px] small:gap-[6px] 
        medium:p-[16px] 
        base:p-[20px] base:gap-[8px]"
      >
        <p className="font-denton text-[#342B7C] text-[20px] font-bold small:text-[16px] medium:text-[20px] base:text-[24px]">
          {item.salary}
        </p>

        <p className="text-[#222] text-[14px] font-normal small:text-[10px] medium:text-[12px] base:text-[14px]">
          Avg Salary
        </p>
      </div>
    </div>
  ))}
</div>
  )
}

export default CanTakeYouStripe
