import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const percentRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = loaderRef.current;

    const counter = {
      value: 0,
    };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loader, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.2,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    gsap.set(logoRef.current, {
      opacity: 0,
      y: 30,
      letterSpacing: "0.45em",
    });

    gsap.set(lineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(percentRef.current, {
      opacity: 0,
    });

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      letterSpacing: "0.18em",
      duration: 1.3,
      ease: "power4.out",
    })
      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 1.8,
          ease: "power3.inOut",
        },
        "-=0.6"
      )
      .to(
        percentRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=1"
      )
      .to(
        counter,
        {
          value: 100,
          duration: 2.8,
          ease: "power2.inOut",
          onUpdate: () => {
            setProgress(Math.floor(counter.value));
          },
        },
        "-=1.2"
      )
      .to({}, { duration: 0.4 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center overflow-hidden bg-[#050505] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_45%)]" />

      <div className="relative flex w-full max-w-xl flex-col items-center px-8">
        <div
          ref={logoRef}
          className="text-center text-4xl font-light uppercase leading-none sm:text-5xl md:text-6xl"
        >
          BUILD ORA
        </div>

        <div className="mt-8 w-full max-w-xs sm:max-w-md">
          <div className="relative h-px w-full bg-white/10">
            <div
              ref={lineRef}
              className="absolute inset-y-0 left-0 w-full bg-white"
            />
          </div>
        </div>

        <div
          ref={percentRef}
          className="mt-5 flex w-full max-w-xs items-center justify-between sm:max-w-md"
        >
          <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
            Architecture
          </span>

          <span className="text-[9px] tabular-nums tracking-[0.2em] text-white/60">
            {String(progress).padStart(2, "0")}%
          </span>

          <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
            Construction
          </span>
        </div>
      </div>

      <span className="absolute bottom-7 left-7 text-[8px] uppercase tracking-[0.3em] text-white/20 sm:left-10">
        EST. 2026
      </span>

      <span className="absolute bottom-7 right-7 text-[8px] uppercase tracking-[0.3em] text-white/20 sm:right-10">
        Cairo · Egypt
      </span>
    </div>
  );
};

export default Loader;