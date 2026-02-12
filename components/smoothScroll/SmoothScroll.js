"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.6, // luxury float feel
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.8, // heavy scroll weight
      easing: (t) => 1 - Math.pow(1 - t, 5), // premium easing curve
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return children;
}