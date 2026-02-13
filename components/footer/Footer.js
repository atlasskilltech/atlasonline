import FooterFaq from "../faq/FooterFaq";
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black text-white py-[40px] px-[24px] small:flex small:gap-[41px] small:p-[60px] base:px-[80px] large:px-[140px] large:py-[80px] ">
        <div className="mb-[24px] small:mb-0">
            <h2 className="text-[24px] font-semibold text-[#D2D2D2] leading-none mb-[8px] whitespace-nowrap small:text-[28px] medium:text-[30px] cursor-(--f-cursor-text)">Questions? We-ve Got </h2>
            <p className="text-[40px] font-bold bg-[radial-gradient(circle,_#ffffff_0%,_#02A7B6_100%)] bg-clip-text text-transparent font-denton leading-none small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)">Answers</p>
        </div>
       
            <FooterFaq/>
       
      </div>

      <div className="bg-gradient-to-r from-[#342B7C] to-[#00D4EB] py-[12px] px-[60px]">
     <p className="font-semibold text-[12px] text-[#fff] small:text-center small:text-[14px] base:text-[16px] cursor-(--f-cursor-text)">Copyright 2026 of ATLAS SkillTech University | All Rights Reserved Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
