"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // 2.6 bahut heavy tha
      smoothWheel: true,
      smoothTouch: false, // touch pe lag hota hai
      wheelMultiplier: 1, 
      touchMultiplier: 1.2,
      lerp: 0.08, // REAL smoothness control (important)
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}