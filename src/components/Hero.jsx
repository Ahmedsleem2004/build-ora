import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ isReady }) => {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  const lineRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    if (!isReady) return;

    const video = videoRef.current;

    const animateHero = () => {
      video.currentTime = 0;

      const tl = gsap.timeline();

      gsap.set(video, {
        opacity: 0,
        filter: "blur(0px)",
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 35,
        letterSpacing: "0.35em",
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(captionRef.current, {
        opacity: 0,
        y: 15,
      });

      video
        .play()
        .then(() => {
          tl.to(video, {
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
          })
            .to(
              titleRef.current,
              {
                opacity: 1,
                y: 0,
                letterSpacing: "0.14em",
                duration: 1.7,
                ease: "power4.out",
              },
              "-=0.8"
            )
            .to(
              lineRef.current,
              {
                scaleX: 1,
                duration: 1,
                ease: "power3.inOut",
              },
              "-=0.8"
            )
            .to(
              captionRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.5"
            )
            .to(
              overlayRef.current,
              {
                opacity: 0.42,
                duration: 1.4,
                ease: "power2.inOut",
              },
              "-=0.5"
            )
            .to(
              video,
              {
                filter: "blur(4px)",
                duration: 2,
                ease: "power2.inOut",
              },
              "+=0.4"
            );
        })
        .catch((error) => {
          console.error("Video playback failed:", error);
        });
    };

    if (video.readyState >= 2) {
      animateHero();
    } else {
      video.addEventListener("loadeddata", animateHero);
    }

    return () => {
      video.removeEventListener("loadeddata", animateHero);
    };
  }, [isReady]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/buildora-hero.mp4"
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-[1] bg-black opacity-20"
      />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent_35%,rgba(0,0,0,0.85))]" />

      <div className="pointer-events-none absolute inset-0 z-[10] flex items-center justify-center px-5">
        <div className="flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className="
              whitespace-nowrap
              text-4xl
              font-medium
              uppercase
              leading-none
              tracking-[0.14em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[7.5rem]
            "
          >
            BUILD ORA
          </h1>

          <div
            ref={lineRef}
            className="mt-6 h-px w-20 bg-white/70 sm:w-28"
          />

          <p
            ref={captionRef}
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/70
              sm:text-[10px]
              md:text-xs
            "
          >
            Construction · Architecture · Excellence
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-0 z-[10] flex w-full justify-between px-6 sm:px-10 md:px-14">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
          EST. 2026
        </span>

        <div className="flex items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>

          <span className="h-8 w-px bg-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;