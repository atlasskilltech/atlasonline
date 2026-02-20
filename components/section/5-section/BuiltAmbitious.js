"use client";

import { useState } from "react";

/**
 * Built for Ambitious - Figma 0-610 | 0-1478 | 0-2360
 * Breakpoints: small 1081 | medium 1231 | base 1431 | large 1751
 * 0-610 (small): 1080×707, 60px padding, accordion 475px, image 460×353, gap 25px
 * 0-1478 (medium): 1230×801, 60px padding, accordion 550px, image 500×384, gap 60px
 * 0-2360 (base): 1430×894, 80px padding, accordion 620px, image 590×452, gap 60px
 */
const accordionItems = [
  {
    id: "fresh",
    title: "Fresh Finance Graduates",
    image: "/accordian/rectangle-img.png",
    description:
      "Launch your wealth management career with dual credentials—skip years of generic banking roles and enter premium advisory positions directly.",
  },
  {
    id: "banking",
    title: "Banking & Finance Professionals",
    image: "/accordian/rectangle-img.png",
    description:
      "Advance beyond transactional roles into strategic advisory. Add CFP® credentials to your banking expertise and unlock senior wealth management opportunities.",
  },
  {
    id: "switchers",
    title: "Career Switchers to Finance",
    image: "/accordian/rectangle-img.png",
    description:
      "Pivot into finance with a structured path. Combine MBA fundamentals with CFP® certification for a credible, recognized entry into wealth management.",
  },
  {
    id: "advisors",
    title: "Aspiring Wealth Advisors & Entrepreneurs",
    image: "/accordian/rectangle-img.png",
    description:
      "Build your own practice or join top firms. The dual credential differentiates you and opens doors to high-net-worth client relationships.",
  },
  {
    id: "global",
    title: "Global Career Aspirants",
    image: "/accordian/rectangle-img.png",
    description:
      "CFP® certification is recognized in 25+ countries. Scale your career internationally with credentials that travel with you.",
  },
];

const BuiltAmbitious = () => {
  const [expandedId, setExpandedId] = useState("fresh");

  return (
    <section className="w-full   px-[24px] py-[40px]  
   small:pl-[60px] small:pr-[40px] 
   medium:py-[50px]
   
   base:pl-[80px] base:pr-[70px]  base:py-[70px]

   large:px-[140px]   large:py-[80px] overflow-hidden relative bg-black">
      {/* Figma: blur ellipses (0-610, 0-1478) */}
      <div
        className="absolute -top-[87px] -left-[109px] w-[461px] h-[461px] rounded-full opacity-80 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-[541px] right-[-50px] w-[461px] h-[461px] rounded-full opacity-80 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
      />
      {/* 0-610: 60px 40pt | 0-1478: 60px | 0-2360: 80px */}
      <div className="relative">
        <div className="mx-auto w-full max-w-[1080px] small:max-w-[1080px] medium:max-w-full base:max-w-[1430px] large:max-w-[1430px] flex flex-col">
          {/* Heading + paragraph stacked */}
          <div>
            <p
              className="font-visual font-semibold text-[24px] text-white/80 leading-[1.21] mb-[2px] small:text-[28px] medium:text-[30px] base:text-[30px]"
              style={{ letterSpacing: "0.01em" }}
            >
              Built for Ambitious
            </p>
            <h1
              className="font-denton font-bold text-[32px] leading-[1.2] mb-5 small:mb-6 small:text-[44px] medium:text-[54px] base:text-[64px] bg-clip-text text-transparent cursor-(--f-cursor-text)"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 6% 20%, rgba(255,255,255,1) 0%, rgba(2,167,182,1) 100%)",
                letterSpacing: "0.03em",
              }}
            >
              Finance Professionals
            </h1>
            <p
              className="font-visual font-semibold text-[14px] text-white/70 leading-[1.49] mb-6 small:mb-8 small:text-[12px] small:max-w-[620px] medium:text-[14px] medium:max-w-[720px] base:text-[16px] base:max-w-[823px] max-w-full"
              style={{ letterSpacing: "0.01em" }}
            >
              Whether you're starting your finance career, pivoting from another
              domain, or seeking global credentials—this program is designed
              to accelerate your journey in wealth management and financial
              planning.
            </p>
          </div>

          {/* 0-610: accordion 475px gap 25 | 0-1478: 550px gap 60 | 0-2360: 620px gap 60 */}
          <div className="flex flex-col small:flex-row small:items-start small:gap-[25px] medium:gap-[60px] base:gap-[60px] large:gap-[60px]">
            <div className="small:w-[475px] medium:w-[550px] base:w-[620px] large:w-[620px] small:shrink-0 w-full">
              <div className="flex flex-col gap-4 small:gap-[12px] medium:gap-[14px] base:gap-[15px]">
                {accordionItems.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        setExpandedId((p) => (p === item.id ? p : item.id))
                      }
                      className="flex flex-col gap-4 small:gap-[4px] p-[10px] small:p-[15px] medium:p-4 medium:gap-[6px] base:p-5 base:gap-[6px] cursor-(--f-cursor-pointer) transition-colors"
                      style={{
                        backgroundColor: isExpanded
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                        borderTop: isExpanded ? "1px solid #FFFFFF" : "none",
                        borderBottom: isExpanded ? "none" : "2px solid #FFFFFF",
                      }}
                    >
                      {/* Title row: on mobile show arrow when collapsed */}
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="font-visual font-semibold text-[18px] leading-[1.49] small:text-[15px] medium:text-[16px] base:text-[20px]"
                          style={{
                            color: isExpanded ? "#4CECFA" : "#FFFFFF",
                          }}
                        >
                          {item.title}
                        </span>
                        {/* Arrow-down for collapsed - mobile/tablet only */}
                        {!isExpanded && (
                          <span className="shrink-0 small:hidden" aria-hidden>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-white"
                            >
                              <path
                                d="M6 9L12 15L18 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                      {isExpanded && (
                        <>
                          <p className="font-visual font-semibold text-[14px] small:text-[12px] medium:text-[12px] base:text-[14px] text-white leading-[1.49]">
                            {item.description}
                          </p>
                          {/* Image inside accordion - mobile/tablet only (below small breakpoint) */}
                          <div
                            className="w-full h-[256px] overflow-hidden rounded-lg small:hidden"
                            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 0-610: 460×353 | 0-1478: 500×384 flex-1 fills right | 0-2360: 590×452 - hidden on mobile */}
            <div
              className="hidden small:block mt-8 w-full aspect-[590/452] max-h-[320px] small:mt-0 small:w-[460px] small:h-[353px] medium:flex-1 medium:min-w-[500px] medium:w-auto medium:h-[384px] base:flex-none base:w-[590px] base:h-[452px] large:flex-none large:w-[590px] large:h-[452px] small:max-h-none small:shrink-0 overflow-hidden small:rounded-xl small:border small:border-white/10 small:mr-0 medium:mr-0 base:mr-4 large:mr-4 small:mb-2 relative"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
            >
              <img
                src="/accordian/rectangle-img.png"
                alt="Fresh Finance Graduates"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${expandedId === "fresh" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
              <img
                src="/accordian/rectangle-img.png"
                alt="Banking & Finance Professionals"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${expandedId === "banking" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
              <img
                src="/accordian/rectangle-img.png"
                alt="Career Switchers to Finance"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${expandedId === "switchers" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
              <img
                src="/accordian/rectangle-img.png"
                alt="Aspiring Wealth Advisors & Entrepreneurs"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${expandedId === "advisors" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
              <img
                src="/accordian/rectangle-img.png"
                alt="Global Career Aspirants"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${expandedId === "global" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
            </div>
          </div>

          {/* Apply Now - Figma 0-4656: mobile/tab full width, 16px 24px padding | desktop: centered */}
          <div className="mt-6 small:mt-8 medium:mt-11 base:mt-12 large:mt-12 flex justify-center">
            <button
              type="button"
              className="w-full small:w-auto font-visual font-semibold text-[16px] text-[#222222] bg-white py-4 px-6 small:py-3.5 small:px-5 base:py-4 base:px-6 cursor-(--f-cursor-pointer) hover:opacity-90 transition-opacity"
              style={{ letterSpacing: "0.01em", lineHeight: 1.4 }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltAmbitious;
