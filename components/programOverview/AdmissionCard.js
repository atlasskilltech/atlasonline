"use client";

import { useState, useEffect } from "react";
import RequestCallForm from "@/components/requestCallForm/RequestCallForm";

const COUNTDOWN_TARGET = new Date("2026-03-15T23:59:59"); // Next admission deadline – configurable

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function AdmissionCard() {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      const total = Math.max(0, COUNTDOWN_TARGET - now);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((total % (1000 * 60)) / 1000);
      setDiff({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const segments = [
    { value: diff.days, label: "Day" },
    { value: diff.hours, label: "Hours" },
    { value: diff.minutes, label: "Minutes" },
    { value: diff.seconds, label: "Seconds" },
  ];

  return (
    <div className="w-full  rounded-[30px] overflow-hidden bg-white shadow-lg">
      {/* Top: gradient + admission status + countdown */}
      <div
        className="bg-[linear-gradient(90deg,_#0d9488_0%,_#4c1d95_100%)]  pr-[2px] pb-[2px] pl-[2px] small:pl-0 small:pr-0 small:pb-0 "

      >
        <p className="text-center text-white font-medium text-[12px] leading-tight font-visual pt-[10px]">
          Admission Closed on 02 Feb
        </p>
        <div className="flex flex-col justify-center items-center gap-[10px] self-stretch px-[2px] pt-[10px] pb-[10px]">
          
          <div className="flex w-[256px] justify-between items-center">
            {segments.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col justify-center items-center w-[50px] h-[50px] p-1 flex-shrink-0 rounded-[10px] bg-white/80"
              >
                <span className="text-[#222] text-center font-visual text-[20px] font-semibold leading-[1.4] tracking-[0.02em]  ">
                  {mounted ? pad(value) : "00"}
                </span>
                <span className="text-[#222] text-center font-visual text-[8px] not-italic font-normal leading-[1.4] tracking-[0.08px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
        
        <button
         className='flex justify-center items-center gap-[10px] self-stretch rounded-[10px] bg-white px-6 py-4 w-full text-[#222]  text-[16px] font-semibold leading-[1.4] tracking-[0.16px] not-italic  small:hidden'>
          Apply Now
        </button>
        <RequestCallForm />
      </div>
      
   
      
    </div>
  );
}
