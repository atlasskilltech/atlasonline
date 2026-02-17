"use client";

import React, { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";

/**
 * Cards Data
 */
const cards = [
  {
    title: "MBA + CFP® Global Certification in One Program",
    description:
      "Graduate with both a UGC-recognized MBA degree and the globally respected CFP® certification saving time, cost, and gaining credentials recognized across 25+ countries.",
    imgSrc: "/cards/card-1.png",
  },
  {
    title: "Aligned with FPSB’s International Framework",
    description:
      "100% curriculum alignment with CFP® Global Certification standards covering investment planning.",
    imgSrc: "/cards/card-1.png",
  },
  {
    title: "Industry Integration + NISM Certifications Included",
    description:
      "Gain hands-on experience through live projects, CXO masterclasses, and earn 4 NISM certifications.",
    imgSrc: "/cards/card-1.png",
  },
  {
    title: "Access Premium Roles Worldwide",
    description:
      "Join a global network of 2,23,700 CFP® professionals and unlock career opportunities in wealth.",
    imgSrc: "/cards/card-1.png",
  },
  {
    title: "MBA + CFP® Global Certification in One Program",
    description:
      "Graduate with both a UGC-recognized MBA degree and the globally respected CFP® certification saving time, cost.",
    imgSrc: "/cards/card-1.png",
  },
  {
    title: "Aligned with FPSB’s International Framework",
    description:
      "Join a global network and unlock career opportunities in wealth management.",
    imgSrc: "/cards/card-1.png",
  },
];

const ProgramChoose = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(cards.length);

  useEffect(() => {

    const checkScreen = () => {
      if (window.innerWidth < 1081) {
        // Mobile
        setIsMobile(true);
        setVisibleCount(3);
      } else {
        // Tablet / Desktop
        setIsMobile(false);
        setVisibleCount(cards.length);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);

  }, []);

  return (
    <section
      className="   w-full flex flex-col  px-[24px] py-[40px] bg-black    small:flex-row small:gap-[40px]    small:pl-[60px] small:pr-[40px]    medium:py-[50px]   base:gap-[73px]   base:pl-[80px] base:pr-[70px]  base:py-[70px]      large:px-[140px]   large:py-[80px]   large:gap-[110px]"
      aria-labelledby="why-program-heading"
    >
      <div className="mx-auto w-full">

        {/* Header */}
        <header className="rk-section-header mb-8 small:mb-12">
        <p className="text-[24px] text-gray-300 font-semibold  small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)
      ">    
        Why Choose
        </p>

        <h1 className="text-[32px] font-bold font-denton leading-tight bg-gradient-to-r from-white to-[#00D4EB] bg-clip-text text-transparent  small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)">
        This Program
        </h1>
        </header>

        {/* Cards Grid */}
        <div className="rk-cards-grid grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 gap-[28px]">

          {cards.slice(0, visibleCount).map((c, idx) => (
            <ProgramCard
              key={idx}
              title={c.title}
              description={c.description}
              imgSrc={c.imgSrc}
              className="shadow-lg"
            />
          ))}

        </div>

        {/* Actions */}
        <div className="rk-actions mt-8 small:mt-12 flex flex-col items-center gap-4">

          {/* Load More (Mobile Only) */}
          {isMobile && visibleCount < cards.length && (
            <button
              type="button"
              onClick={() => setVisibleCount(cards.length)}
              className="rk-load-more text-white underline font-visual text-[16px]"
            >
              Load More
            </button>
          )}

          {/* Apply Now */}
          <form
            className="rk-apply-form mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex justify-center">
              <button
                type="submit"
                className="rk-apply-btn inline-block px-[28px] py-[12px] bg-white text-black font-semibold"
              >
                Apply Now
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ProgramChoose;
