
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            logoRef.current,
            {
              opacity: 0,
              y: 80,
              clipPath: "inset(100% 0% 0% 0%)",
            },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.4,
              ease: "power4.out",
            }
          );

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#050505] px-6 pb-8 pt-20 text-white sm:px-10 md:pt-28 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end">
          <div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
              Build Ora
            </span>

            <h3 className="mt-5 max-w-lg text-2xl font-light leading-relaxed text-white/70">
              Building spaces with purpose,
              <br />
              precision, and character.
            </h3>
          </div>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-4 border border-white/20 px-6 py-4 text-[9px] uppercase tracking-[0.3em] transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
          >
            Start a Project

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Main Footer */}
        <div className="grid gap-14 py-16 md:grid-cols-3 md:gap-10">

          {/* Navigation */}
          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Navigation
            </span>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-xs text-white/45 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-5" />

                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Contact
            </span>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:info@buildora.com"
                className="block text-xs text-white/45 transition-colors duration-300 hover:text-white"
              >
                info@buildora.com
              </a>

              <a
                href="tel:+201000000000"
                className="block text-xs text-white/45 transition-colors duration-300 hover:text-white"
              >
                +20 100 000 0000
              </a>

              <span className="block text-xs text-white/45">
                Cairo, Egypt
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Follow Us
            </span>

            <div className="mt-6 flex gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-[10px] font-medium uppercase tracking-wider text-white/45 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                IG
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-[10px] font-medium uppercase tracking-wider text-white/45 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                IN
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-[10px] font-medium uppercase tracking-wider text-white/45 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                FB
              </a>

            </div>
          </div>
        </div>

        {/* Huge Logo */}
        <div className="overflow-hidden border-t border-white/10 pt-10">
          <h2
            ref={logoRef}
            className="whitespace-nowrap text-[17vw] font-light leading-[0.75] tracking-[-0.07em] text-white/[0.07] transition-colors duration-700 hover:text-white/[0.12]"
          >
            BUILD ORA
          </h2>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            © 2026 BUILD ORA. All Rights Reserved.
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            Architecture · Construction · Excellence
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

