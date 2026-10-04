
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

    if (!video) return;

    let started = false;

    const startVideo = async () => {
      if (started) return;

      try {
        started = true;

        video.currentTime = 0;

        await video.play();

        gsap.to(video, {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });

        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          letterSpacing: "0.14em",
          duration: 1.5,
          ease: "power4.out",
        });

        gsap.to(lineRef.current, {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
        });

        gsap.to(captionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
        });

        gsap.to(overlayRef.current, {
          opacity: 0.42,
          duration: 1.2,
          ease: "power2.inOut",
        });
      } catch (error) {
        console.error("Video playback failed:", error);

        started = false;

        // محاولة تشغيل الفيديو مرة ثانية
        setTimeout(() => {
          video
            .play()
            .then(() => {
              gsap.to(video, {
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
              });
            })
            .catch((retryError) => {
              console.error("Video retry failed:", retryError);
            });
        }, 500);
      }
    };

    gsap.set(video, {
      opacity: 0,
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

    gsap.set(overlayRef.current, {
      opacity: 0.2,
    });

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    if (video.readyState >= 2) {
      startVideo();
    } else {
      video.addEventListener("loadeddata", startVideo);
      video.addEventListener("canplay", startVideo);
    }

    return () => {
      video.removeEventListener("loadeddata", startVideo);
      video.removeEventListener("canplay", startVideo);
    };
  }, [isReady]);

  return (
    <section
      className="
        relative
        h-screen
        min-h-[650px]
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* Video */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
  ref={videoRef}
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
  "
  src="/videos/buildora-hero-mobile.mp4"
  muted
  autoPlay
  loop
  playsInline
  preload="auto"
  controls={false}
  disablePictureInPicture
  disableRemotePlayback
/>
      </div>

      {/* Main Overlay */}
      <div
        ref={overlayRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-black
        "
      />

      {/* Cinematic Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent_35%,rgba(0,0,0,0.85))]
        "
      />

      {/* Center Content */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[10]
          flex
          items-center
          justify-center
          px-5
        "
      >
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
            className="
              mt-6
              h-px
              w-20
              bg-white/70
              sm:w-28
            "
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

      {/* Bottom Info */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          left-0
          z-[10]
          flex
          w-full
          justify-between
          px-6
          sm:px-10
          md:px-14
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/50
          "
        >
          EST. 2026
        </span>

        <div className="flex items-center gap-3">
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >
            Scroll
          </span>

          <span className="h-8 w-px bg-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

