import { useEffect, useRef, useState } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

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
        { opacity: 0, x: -100 },
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
        { opacity: 0, x: 100 },
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, projectType, message } = formData;

    const whatsappMessage = `Hello BUILD ORA,

I would like to discuss a new project.

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Project Details:
${message}

Thank you.`;

    const whatsappUrl = `https://wa.me/201065199211?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 md:py-40 lg:px-14"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
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
            <span className="text-white/25">
              something lasting.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left Side */}
          <div ref={leftRef}>
            <p className="max-w-md text-sm leading-8 text-white/40">
              Have a project in mind? Tell us about it. Whether you are
              planning a new residence, commercial space, or complete
              construction project, we would love to hear from you.
            </p>

            <div className="mt-12 space-y-6">
              {/* Email */}
              <a
                href="mailto:eelbarbary92@gmail.com"
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
                    eelbarbary92@gmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201065199211"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <Phone size={16} strokeWidth={1.3} />
                </span>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.25em] text-white/25">
                    WhatsApp
                  </span>

                  <span className="mt-1 block text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                    01065199211
                  </span>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=ميدان+الجامعة+الروسية+بدر"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <MapPin size={16} strokeWidth={1.3} />
                </span>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                    Russian University Square, Badr City
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div ref={rightRef}>
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-white/[0.02] p-7 sm:p-10 md:p-12"
            >
              {/* Name + Email */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="group">
                  <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors duration-300 focus:border-white/70"
                  />
                </div>

                <div className="group">
                  <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors duration-300 focus:border-white/70"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="mt-10">
                <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Project Type
                </label>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white/70 outline-none transition-colors duration-300 focus:border-white/70"
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#0b0b0b]"
                  >
                    Select project type
                  </option>

                  <option
                    value="Residential"
                    className="bg-[#0b0b0b]"
                  >
                    Residential
                  </option>

                  <option
                    value="Commercial"
                    className="bg-[#0b0b0b]"
                  >
                    Commercial
                  </option>

                  <option
                    value="Architecture"
                    className="bg-[#0b0b0b]"
                  >
                    Architecture
                  </option>

                  <option
                    value="Interior & Finishing"
                    className="bg-[#0b0b0b]"
                  >
                    Interior & Finishing
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-10">
                <label className="mb-3 block text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us a little about your project..."
                  required
                  className="w-full resize-none border-b border-white/15 bg-transparent pb-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition-colors duration-300 focus:border-white/70"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-10 flex w-full items-center justify-between border border-white/20 px-6 py-5 text-[9px] uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
              >
                <span>Send via WhatsApp</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          ref={lineRef}
          className="mt-24 h-px w-full bg-white/10"
        />
      </div>
    </section>
  );
};

export default Contact;