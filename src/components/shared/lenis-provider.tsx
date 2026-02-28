"use client";

import { type PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.2,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = window.requestAnimationFrame(loop);
    };

    raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return children;
}
