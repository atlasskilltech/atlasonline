"use client";

import { useState } from "react";
import PricingTabs from "./PricingTabs";
import PricingCard from "./PricingCard";

export default function InvestmentFuture() {
  const [activeTab, setActiveTab] = useState("lumpsum");

  return (
    <section
      className="
           w-full   px-[24px] py-[40px] bg-white small:pl-[60px] small:pr-[40px]    medium:py-[50px]  base:pl-[80px] base:pr-[70px]  base:py-[70px]      large:px-[140px]   large:py-[80px]   
      "
    >

      {/* Main Grid */}
      <div
        className="
          w-full
          mx-auto
          grid
          grid-cols-1
          gap-8
          small:grid-cols-2
          items-start
        "
      >

        {/* LEFT SIDE */}
        <div>

          {/* Heading */}
          <div className="mb-6">
            <p className="text-[24px] text-[#666] font-semibold  small:text-[28px] medium:text-[30px] base:text-[40px] cursor-(--f-cursor-text)
      ">
              Investment in
            </p>

            <h1 className="text-[32px] font-bold font-denton leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-[#2c2c7a] to-[#14b8a6] small:text-[44px] medium:text-[54px] base:text-[64px] cursor-(--f-cursor-text)">
              Your Future
            </h1>
          </div>

          {/* Tabs */}
          <PricingTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Pricing Card */}
          <PricingCard activeTab={activeTab} />

        </div>


        {/* RIGHT SIDE */}
        <div>

          {/* What You Get */}
          <div className="mb-8">

            <h3 className="text-[22px] font-semibold italic mb-4">
              What You Get:
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">

              {[
                "UGC-Recognized MBA Degree",
                "CFP® Global Certification (recognized in 25+ countries)",
                "4 NISM Industry Certifications",
                "3 FPSB Specialist Certifications",
                "Complete course materials and exam fees",
                "Industry masterclasses and live projects",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-black-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>


      {/* Bottom Benefits */}
      <div
        className="
          mx-auto
          w-full
          mt-10
          grid
          grid-cols-1
          gap-6
          small:grid-cols-3
          items-start
        "
      >

        {/* EMI */}
        <div className="flex gap-4 items-start">
          <img
            src="/icon/discount-shape.png"
            alt="EMI"
            className="w-8 h-8"
          />

          <div>
            <h4 className="font-semibold text-sm">
              No-Cost EMI Options Available
            </h4>
            <p className="text-xs text-gray-600">
              Flexible payment plans through our finance partners
            </p>
          </div>
        </div>

        {/* Scholarship */}
        <div className="flex gap-4 items-start">
          <img
            src="/icon/teacher.png"
            alt="Scholarship"
            className="w-8 h-8"
          />

          <div>
            <h4 className="font-semibold text-sm">
              Scholarship Opportunities
            </h4>
            <p className="text-xs text-gray-600">
              Merit-based scholarships for eligible candidates
            </p>
          </div>
        </div>

        {/* Early Bird */}
        <div className="flex gap-4 items-start">
          <img
            src="/icon/medal-star.png"
            alt="Early Bird"
            className="w-8 h-8"
          />

          <div>
            <h4 className="font-semibold text-sm">
              Early Bird Benefits
            </h4>
            <p className="text-xs text-gray-600">
              Apply early for fee waivers and additional perks
            </p>
          </div>
        </div>

      </div>


      {/* Apply Button */}
      <div className="flex justify-center mt-10">
        <button
          className="
            px-10
            py-3
            bg-gradient-to-r
            from-indigo-700
            to-teal-600
            text-white
            font-semibold
            text-base
          "
        >
          Apply Now
        </button>
      </div>

    </section>
  );
}
