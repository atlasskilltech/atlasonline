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
      className="rk-why-program-section relative w-full px-[20px] small:px-[140px] py-[48px]

      bg-[radial-gradient(circle_at_0%_120%,rgba(123,78,247,0.45)_0%,rgba(123,78,247,0.15)_25%,transparent_55%),radial-gradient(circle_at_120%_0%,rgba(0,212,235,0.55)_0%,rgba(0,212,235,0.2)_30%,transparent_60%),linear-gradient(135deg,#000000_0%,#05010d_45%,#000000_100%)]

      bg-cover bg-no-repeat"
      aria-labelledby="why-program-heading"
    >
      <div className="mx-auto">

        {/* Header */}
        <header className="rk-section-header mb-8 small:mb-12">
          <p className="text-white text-[20px] small:text-[22px] font-visual">
            Why Choose
          </p>

          <h2
            id="why-program-heading"
            className="mt-1 font-denton text-[36px] small:text-[44px] base:text-[56px] text-white/95 leading-[0.95]"
          >
            This Program
          </h2>
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
