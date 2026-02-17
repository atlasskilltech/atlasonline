"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCard from "./TestimonialCard";

export default function HereFromThose() {

  const TOTAL = 5;
  const INTERVAL = 2500;
  const CARD_WIDTH = 240;
  const GAP = 16;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const progressBarRef = useRef(null);
  const progressThumbRef = useRef(null);

  const [maxMove, setMaxMove] = useState(0);


  /* ---------------- MEASURE BAR ---------------- */

  useEffect(() => {
    if (progressBarRef.current && progressThumbRef.current) {
      const bar = progressBarRef.current.offsetWidth;
      const thumb = progressThumbRef.current.offsetWidth;

      setMaxMove(bar - thumb);
    }
  }, []);


  /* ---------------- AUTOPLAY ---------------- */

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, INTERVAL);

    return () => clearInterval(timer);

  }, [isPaused]);


  /* ---------------- INFINITE LOOP FIX ---------------- */

  useEffect(() => {
    if (index === TOTAL) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [index]);


  /* ---------------- ARROWS ---------------- */

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => {
      if (prev === 0) return TOTAL - 1;
      return prev - 1;
    });
  };


  /* ---------------- CALC ---------------- */

  const slideX = -(index * (CARD_WIDTH + GAP));
  const visibleIndex = index % TOTAL;

  const progressX =
    (maxMove / (TOTAL - 1)) * visibleIndex;


  return (
    <section
      className="
        w-full   px-[24px] py-[40px] bg-black small:pl-[60px] small:pr-[40px]    medium:py-[50px]  base:pl-[80px] base:pr-[70px]  base:py-[70px]      large:px-[140px]   large:py-[80px]
      "
    >
      {/* Desktop Background */}
        <div className="hidden small:block absolute inset-0 -z-10">

        <div className="
          absolute left-0 top-0 w-[55%] h-full
          bg-gradient-to-br
          from-indigo-600 via-purple-600 to-transparent
          opacity-80
        " />

        <div className="
          absolute right-0 top-0 w-[45%] h-full
          bg-gradient-to-bl
          from-cyan-400 to-transparent
          opacity-70
        " />

        </div>



      <TestimonialHeader />

      <div className="mx-auto">

          {/* SLIDER */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="overflow-hidden mx-auto"
          >

            <div
              className={`flex gap-4 small:gap-6${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(${slideX}px)`,
              }}
            >

              {/* Slides */}
              {[...Array(TOTAL)].map((_, i) => (
                <TestimonialCard key={i} />
              ))}

              {/* Clone */}
              <TestimonialCard />

            </div>
          </div>


          {/* NAV */}
          <div
            className="
              flex
              items-center
              justify-between
              mt-6
              text-white
              w-full
              small:max-w-[700px]
              mx-auto
            "
          >


            {/* LEFT */}
            <button
              onClick={prev}
              className="
                w-10 h-10
                rounded-full
                border border-white/50
                flex items-center justify-center
                hover:bg-white/10
                transition
              "
            >
              ←
            </button>


            {/* PROGRESS */}
            <div
              ref={progressBarRef}
              className="
                relative
                flex-1
                mx-4
                h-[3px]
                bg-gray-600
                rounded-full
                overflow-hidden
              "
            >

              <div
                ref={progressThumbRef}
                className="
                  absolute
                  top-0
                  h-full
                  w-[20%]
                  bg-white
                  transition-transform
                  duration-700
                "
                style={{
                  transform: `translateX(${progressX}px)`,
                }}
              />

            </div>


            {/* RIGHT */}
            <button
              onClick={next}
              className="
                w-10 h-10
                rounded-full
                border border-white/50
                flex items-center justify-center
                hover:bg-white/10
                transition
              "
            >
              →
            </button>

          </div>

        </div>



      {/* APPLY */}
      <button
  className="
    w-full
    small:w-auto
    mt-6
    px-10
    py-3
    bg-white
    text-black
    font-semibold
    rounded-md
    mx-auto
    block
  "
>
  Apply Now
      </button>


    </section>
  );
}
