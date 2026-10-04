
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        leftRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
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
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 md:py-40 lg:px-14"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              Get In Touch
            </span>
          </div>

          <h2
            ref={titleRef}
            className="max-w-5xl text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-[8rem]"
          >
            Let’s build
            <br />
            <span className="text-white/25">something lasting.</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div ref={leftRef}>
            <p className="max-w-md text-sm leading-8 text-white/40">
              Have a project in mind? Tell us about it. Whether you are
              planning a new residence, commercial space, or complete
              construction project, we would love to hear from you.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href="mailto:info@buildora.com"
                className="group flex items-center gap-5"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <Mail size={16} strokeWidth={1.3} />
                </span>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Email
                  </span>

                  <span className="mt-1 block text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                    info@buildora.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+201000000000"
                className="group flex items-center gap-5"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <Phone size={16} strokeWidth={1.3} />
                </span>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                    +20 100 000 0000
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <span className="flex h-11 w-11 items-center justify-center border border-white/10">
                  <MapPin size={16} strokeWidth={1.3} />
                </span>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-white/70">
                    Cairo, Egypt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border border-white/10 bg-white/[0.02] p-7 sm:p-10 md:p-12"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="group">
                  <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors duration-300 focus:border-white/70"
                  />
                </div>

                <div className="group">
                  <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors duration-300 focus:border-white/70"
                  />
                </div>
              </div>

              <div className="mt-10">
                <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Project Type
                </label>

                <select
                  defaultValue=""
                  className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white/70 outline-none transition-colors duration-300 focus:border-white/70"
                >
                  <option value="" disabled className="bg-[#0b0b0b]">
                    Select project type
                  </option>

                  <option className="bg-[#0b0b0b]">
                    Residential
                  </option>

                  <option className="bg-[#0b0b0b]">
                    Commercial
                  </option>

                  <option className="bg-[#0b0b0b]">
                    Architecture
                  </option>

                  <option className="bg-[#0b0b0b]">
                    Interior & Finishing
                  </option>
                </select>
              </div>

              <div className="mt-10">
                <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Tell us about your project
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us a little about your project..."
                  className="w-full resize-none border-b border-white/15 bg-transparent pb-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition-colors duration-300 focus:border-white/70"
                />
              </div>

              <button
                type="submit"
                className="group mt-10 flex w-full items-center justify-between border border-white/20 px-6 py-5 text-[9px] uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
              >
                <span>Send Inquiry</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom line */}
        <div
          ref={lineRef}
          className="mt-24 h-px w-full bg-white/10"
        />
      </div>
    </section>
  );
};

export default Contact;

