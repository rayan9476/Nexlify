import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/nexlify-logo-transparent-bg.png";
import { useLocation } from "react-router-dom";

export default function PageLoader({ play, onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const overlaysRef = useRef([]);
  const location = useLocation();

  useLayoutEffect(() => {
    if (play) return;
    const loader = loaderRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    const progressBar = progressBarRef.current;

    // prevent scroll while loading
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.killTweensOf([logo, text, progressBar, progress]);

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete?.();
        },
      });

      tl.to(logo, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          text,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .to(
          progressBar,
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power2.inOut",
          },
          "-=0.1",
        )

        //  count up 0 to 100
        .to(
          progress,
          {
            innerText: 100,
            duration: 1.2,
            ease: "power2.inOut",
            snap: { innerText: 1 },
            onUpdate() {
              progress.innerText = Math.round(progress.innerText) + "%";
            },
          },
          "<",
        )

        //  fade out logo + text + bar
        .to(
          [logo, text, progressBar.parentElement, progress],
          { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" },
          "+=0.1",
        )

        //  slide panels up to reveal page
        .to(
          overlaysRef.current,
          {
            yPercent: -100,
            duration: 0.6,
            ease: "power4.inOut",
            stagger: 0.07,
          },
          "-=0.1",
        )

        .to(
          loaderRef.current,
          {
            opacity: 0,

            pointerEvents: "none",
          },
          "-=0.1",
        );
    }, loader);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [play, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      {/* Overlay panels — staggered slide up */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (overlaysRef.current[i] = el)}
          className="absolute inset-0 bg-[#0b0b0b]"
          style={{ zIndex: 9999 - i }}
        />
      ))}

      {/* Content — sits above panels */}
      <div className="relative z-[10000] flex items-center justify-center flex-col text-center gap-8">
        {/* Logo */}
        <img
          ref={logoRef}
          src={logo}
          alt="Boodmoard"
          style={{
            opacity: 0,
            transform: "translateY(80px)",
          }}
          className="h-10 lg:h-16 2xl:h-20  3xl:h-24 w-auto opacity-0 "
        />

        {/* Tagline */}
        <p
          ref={textRef}
          style={{
            opacity: 0,
            transform: "translateY(10px)",
          }}
          className="text-zinc-500 text-xs lg:text-[14px] xl:text-base 2xl:text-lg 3xl:text-xl uppercase  opacity-0"
        >
          Creative Digital Studio
        </p>

        {/* Progress */}
        <div className="flex flex-col items-center gap-3 w-48">
          {/* Bar */}
          <div className="w-full h-px lg:h-[2px] 2xl:h-[3px] 3xl:h-[4px] bg-white/10 overflow-hidden">
            <div
              style={{
                transform: "scaleX(0)",
                transformOrigin: "left center",
              }}
              ref={progressBarRef}
              className="h-full bg-[#4CAF4F] origin-left"
            />
          </div>

          {/* Number */}
          <p
            ref={progressRef}
            className="text-[#4CAF4F] text-xs lg:text-base 2xl:text-lg 3xl:text-xl tabular-nums"
          >
            0%
          </p>
        </div>
      </div>
    </div>
  );
}
