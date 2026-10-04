import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* LOGO */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-white"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.22em]">
            BUILD
          </span>

          <span className="h-4 w-px bg-white/40" />

          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-white">
            ORA
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                index === 0
                  ? "text-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden border border-white/25 px-5 py-3 text-[9px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:block"
        >
          Start a Project
        </a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={18} strokeWidth={1.5} />
          ) : (
            <Menu size={18} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-5 text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;