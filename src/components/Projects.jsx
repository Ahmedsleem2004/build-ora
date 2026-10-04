import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Modern Residence",
    category: "Residential",
    location: "Cairo, Egypt",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    number: "02",
    title: "Urban Villa",
    category: "Architecture",
    location: "New Cairo, Egypt",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=85",
  },
  {
    number: "03",
    title: "Contemporary House",
    category: "Construction",
    location: "New Cairo, Egypt",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // SECTION TITLE
      // =========================

      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // =========================
      // PROJECTS
      // =========================

      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        const image = project.querySelector(".project-image");
        const imageWrapper = project.querySelector(".image-wrapper");
        const info = project.querySelector(".project-info");
        const number = project.querySelector(".project-number");

        const fromLeft = index % 2 === 0;

        // =========================
        // IMAGE SLIDE FROM SIDE
        // =========================

        gsap.fromTo(
          imageWrapper,
          {
            x: fromLeft ? -180 : 180,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // =========================
        // IMAGE PARALLAX
        // =========================

        gsap.fromTo(
          image,
          {
            yPercent: -8,
            scale: 1.12,
          },
          {
            yPercent: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // =========================
        // PROJECT INFO
        // =========================

        gsap.fromTo(
          info,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // =========================
        // PROJECT NUMBER
        // =========================

        gsap.fromTo(
          number,
          {
            opacity: 0,
            x: fromLeft ? -30 : 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white sm:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-white/50" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                Selected Work
              </span>
            </div>

            <h2
              ref={titleRef}
              className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl"
            >
              Projects
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-white/35">
            A selection of spaces designed and built with precision,
            functionality, and architectural character.
          </p>
        </div>

        {/* =========================
            PROJECT LIST
        ========================= */}

        <div className="space-y-28 md:space-y-44">
          {projects.map((project, index) => (
            <article
              key={project.number}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className={`group ${
                index % 2 !== 0 ? "md:ml-[12%]" : ""
              }`}
            >
              {/* IMAGE */}

              <div className="image-wrapper relative overflow-hidden bg-neutral-900">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      project-image
                      h-[120%]
                      w-full
                      object-cover
                      grayscale
                      transition-[filter]
                      duration-700
                      group-hover:grayscale-0
                    "
                  />
                </div>

                {/* DARK OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/25
                    transition-all
                    duration-700
                    group-hover:bg-black/5
                  "
                />

                {/* PROJECT NUMBER */}

                <span
                  className="
                    project-number
                    absolute
                    left-5
                    top-5
                    z-10
                    text-[10px]
                    tracking-[0.3em]
                    text-white/70
                    sm:left-8
                    sm:top-8
                  "
                >
                  {project.number}
                </span>

                {/* ARROW */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    border
                    border-white/30
                    bg-black/20
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-white
                    group-hover:bg-white
                    group-hover:text-black
                    sm:bottom-8
                    sm:right-8
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </div>

              {/* INFO */}

              <div
                className="
                  project-info
                  mt-6
                  flex
                  flex-col
                  justify-between
                  gap-4
                  border-t
                  border-white/10
                  pt-5
                  sm:flex-row
                  sm:items-start
                "
              >
                <div>
                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-tight
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    {project.category}
                  </p>
                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                  {project.location}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            BOTTOM LINK
        ========================= */}

        <div className="mt-28 border-t border-white/10 pt-8">
          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-4
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/60
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Start a project</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;