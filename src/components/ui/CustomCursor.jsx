import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCustomCursor } from "../hooks/useCustomCursor";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ballRef = useRef(null);

  useCustomCursor(dotRef, ballRef);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed opacity-0 top-0 left-0 z-[999] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-2 h-2 xl:w-3 xl:h-3  rounded-full bg-[#4CAF4F]" />
      </div>

      <div
        ref={ballRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className="w-9 h-9 3xl:w-10 3xl:h-10 rounded-full border border-[#4CAF4F] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(76,175,79,0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
}
