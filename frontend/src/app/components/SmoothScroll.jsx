"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // 👉 Setup Lenis + RAF loop
  useEffect(() => {
    if (!lenisRef.current?.lenis) return;

    const lenis = lenisRef.current.lenis;
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.resize();
  }, []);

  // 👉 Route change fix
  useEffect(() => {
    if (!lenisRef.current?.lenis) return;

    const lenis = lenisRef.current.lenis;

    lenis.scrollTo(0, { immediate: true });

    setTimeout(() => {
      lenis.resize();
    }, 100);
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}