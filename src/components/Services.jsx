
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Building2,
  Ruler,
  HardHat,
  Layers3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Architectural concepts shaped around identity, function, proportion, and timeless design.",
    icon: Ruler,
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "Construction",
    description:
      "From structure to finishing, every stage is executed with precision, control, and attention to detail.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "Real Estate",
    description:
      "Developing spaces with a clear understanding of location, value, functionality, and long-term potential.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    title: "Interior & Finishing",
    description:
      "Refined interiors and finishing details that transform structures into complete living experiences.",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 80,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const image = card.querySelector(".service-image");
        const imageWrap = card.querySelector(".service-image-wrap");
        const content = card.querySelector(".service-content");
        const number = card.querySelector(".service-number");

        const fromLeft = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: fromLeft ? -140 : 140,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          image,
          {
            scale: 1.15,
            xPercent: fromLeft ? -5 : 5,
          },
          {
            scale: 1,
            xPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          number,
          {
            opacity: 0,
            x: fromLeft ? -25 : 25,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: 0.35,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const moveImage = (event) => {
          const rect = card.getBoundingClientRect();

          const x = (event.clientX - rect.left - rect.width / 2) * 0.015;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.015;

          gsap.to(image, {
            x,
            y,
            duration: 0.7,
            ease: "power3.out",
          });
        };

        const resetImage = () => {
          gsap.to(image, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", moveImage);
        card.addEventListener("mouseleave", resetImage);

        card._cleanup = () => {
          card.removeEventListener("mousemove", moveImage);
          card.removeEventListener("mouseleave", resetImage);
        };
      });
    }, sectionRef);

    return () => {
      cardsRef.current.forEach((card) => {
        if (card?._cleanup) {
          card._cleanup();
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white sm:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-white/50" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                What We Do
              </span>
            </div>

            <h2
              ref={titleRef}
              className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl"
            >
              Services
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35">
            From architectural vision to final execution, we create spaces
            designed to perform, inspire, and endure.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`group relative ${
                  index % 2 !== 0 ? "md:ml-[10%]" : "md:mr-[10%]"
                }`}
              >
                <div className="grid overflow-hidden border border-white/10 bg-[#0d0d0d] md:grid-cols-[1.15fr_0.85fr]">
                  {/* Image */}
                  <div
                    className={`service-image-wrap relative min-h-[320px] overflow-hidden ${
                      index % 2 !== 0 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        service-image
                        absolute
                        inset-0
                        h-full
                        w-full
                        scale-110
                        object-cover
                        grayscale
                        transition-all
                        duration-1000
                        ease-out
                        group-hover:scale-105
                        group-hover:grayscale-0
                      "
                    />

                    <div className="absolute inset-0 bg-black/40 transition-all duration-700 group-hover:bg-black/15" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <span className="service-number absolute left-6 top-6 text-[10px] tracking-[0.3em] text-white/60 sm:left-8 sm:top-8">
                      {service.number}
                    </span>

                    <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center border border-white/30 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black sm:bottom-8 sm:left-8">
                      <Icon
                        size={18}
                        strokeWidth={1.3}
                        className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`service-content flex flex-col justify-between p-7 sm:p-10 md:p-12 ${
                      index % 2 !== 0 ? "md:order-1" : ""
                    }`}
                  >
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                        Build Ora / Service
                      </span>

                      <h3 className="mt-8 text-3xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                        Explore Service
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.4}
                          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom line */}
        <div className="mt-28 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            Built with precision
          </span>

          <a
            href="#contact"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60 transition-colors duration-300 hover:text-white"
          >
            Start a project

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;



