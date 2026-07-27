import { useEffect, useRef } from "react";

import Lenis from "lenis";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
      delete window.__lenis;
    }

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      smoothTouch: false,
      autoRaf: false,
    });

    requestAnimationFrame(() => {
      lenis.resize();
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lenisRef.current = null;
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return children;
}
