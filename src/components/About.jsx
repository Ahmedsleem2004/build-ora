import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // TOP LABEL
      // =========================

      gsap.fromTo(
        labelRef.current,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // =========================
      // LEFT SIDE
      // =========================

      gsap.fromTo(
        leftRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // =========================
      // RIGHT SIDE
      // =========================

      gsap.fromTo(
        rightRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          delay: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // =========================
      // STATS
      // =========================

      gsap.fromTo(
        statsRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white sm:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP LABEL */}
        <div
          ref={labelRef}
          className="mb-16 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-white/50" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/45">
            Who We Are
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">

          {/* LEFT */}
          <div ref={leftRef}>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              01 / About
            </p>

            <h2 className="mt-8 max-w-md text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              We build
              <br />

              <span className="text-white/35">
                what lasts.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className="max-w-2xl"
          >
            <p className="text-xl font-light leading-relaxed text-white/75 sm:text-2xl">
              BUILD ORA is a construction and architecture company focused on
              creating spaces where design, precision, and quality come
              together.
            </p>

            <p className="mt-8 text-sm leading-8 text-white/40">
              From the first architectural concept to the final detail, we
              approach every project with the same philosophy: build with
              purpose, execute with precision, and create something that
              stands the test of time.
            </p>

            {/* STATS */}
            <div className="mt-12 flex gap-8 border-t border-white/10 pt-8 sm:gap-12">

              <div ref={(el) => (statsRef.current[0] = el)}>
                <span className="block text-3xl font-light">
                  10+
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Projects
                </span>
              </div>

              <div ref={(el) => (statsRef.current[1] = el)}>
                <span className="block text-3xl font-light">
                  08+
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Years Experience
                </span>
              </div>

              <div ref={(el) => (statsRef.current[2] = el)}>
                <span className="block text-3xl font-light">
                  100%
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Commitment
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;