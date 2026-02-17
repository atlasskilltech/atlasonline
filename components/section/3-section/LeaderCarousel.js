"use client";

import { useState, useEffect, useRef } from "react";

const slides = [
  { id: 1, name: "Deepak Parekh", role: "Former Chairman, ZERODHA", img: "/slider/slider-1.png", logo: "/logo/logo-1.png" },
  { id: 2, name: "Leader Two", role: "CEO, Finance Group", img: "/slider/slider-1.png", logo: "/logo/logo-1.png" },
  { id: 3, name: "Leader Three", role: "Investment Head", img: "/slider/slider-1.png", logo: "/logo/logo-1.png" },
];

const AUTO_DELAY = 3000;

const LeaderCarousel = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % slides.length);
    }, AUTO_DELAY);
    return () => clearTimeout(timerRef.current);
  }, [active]);

  const getIndex = (i) => (i + slides.length) % slides.length;

  return (
    <div className="relative w-full flex justify-center items-start overflow-visible">
      <div className="relative w-[280px] small:w-[360px] h-[420px]">
        {[-1, 0, 1].map((pos) => {
          const index = getIndex(active + pos);
          const slide = slides[index];

          const translateCls =
            pos === -1
              ? "-translate-x-[60px] small:-translate-x-[120px]"
              : pos === 1
              ? "translate-x-[60px] small:translate-x-[120px]"
              : "";

          // **lower z-index values** so header (which likely uses a higher z) stays on top
          const visualCls =
            pos === 0 ? "z-20 scale-100 opacity-100" : "z-10 scale-[0.92] opacity-60 blur-[2px]";

          const shadowCls =
            pos === 0
              ? "shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
              : "shadow-[0_25px_50px_rgba(0,0,0,0.25)]";

          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0 flex justify-center items-center
                transition-all duration-700 ease-in-out
                ${visualCls} ${translateCls}
              `}
              aria-hidden={pos !== 0}
            >
              <div
                className={`
                  relative
                  w-[260px] small:w-[300px]
                  h-[380px] small:h-[420px]
                  rounded-[20px] small:rounded-[24px]
                  overflow-hidden
                  ${shadowCls}
                `}
              >
                {/* image (no bg-black here) */}
                <img
                  src={slide.img}
                  alt={slide.name}
                  className="w-full h-full object-cover block"
                  draggable={false}
                />

                {/* overlay: light glass so image still visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black/30 backdrop-blur-sm">
                  <h3 className="text-[16px] small:text-[18px] font-semibold">{slide.name}</h3>

                  <div className="w-[36px] h-[4px] bg-white/60 mx-auto my-2 rounded-full" />

                  <p className="text-[12px] opacity-80">{slide.role}</p>

                  {slide.logo && (
                    <img src={slide.logo} alt={`${slide.name} logo`} className="mx-auto mt-3 h-[22px] object-contain" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderCarousel;
