"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
];

  return (
    <>
      <nav
        className={`
          overflow-visible
          fixed z-[9999]
          left-1/2
          -translate-x-1/2
          transition-all
          duration-500
          ease-in-out
          backdrop-blur-xl
          bg-[#0d1224]/90
          border
          border-[#1b2c68a0]
          shadow-[0_8px_40px_rgba(22,242,179,0.08)]

          ${
            scrolled
              ? "top-4 w-[92%] max-w-5xl py-3 rounded"
              : "top-5 w-[95%] max-w-7xl py-4 "
          }
        `}
      >
        <div className="flex items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="text-[#16f2b3] text-xl md:text-2xl font-bold"
          >
            Ritesh Katwe
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                onSetActive={() => setActiveSection(item.to)}
                className={`
                  cursor-pointer
                  px-5
                  py-2
                  rounded-full
                  transition-all
                  duration-300
                  text-sm
                  font-medium
                  ${
                    activeSection === item.to
                      ? "bg-[#16f2b3] text-[#0d1224] font-semibold"
                      : "text-gray-300 hover:text-[#16f2b3]"
                  }
                `}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <button
              className="
                hidden
                md:flex
                items-center
                gap-2
                bg-gradient-to-r
                from-green-500
                to-[rgba(196,41,165,0.97)]
                text-[#0d1224]
                px-6
                py-3
                rounded-full
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
            >
             Connect
              <HiArrowRight />
            </button>
          </ScrollLink>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white"
          >
            {mobileMenu ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
{mobileMenu && (
  <div
    className="
      md:hidden
      relative
      z-[10000]
      mt-4
      border-t
      border-[#1b2c68a0]
      bg-[#0d1224]
      px-6
      pt-5
      pb-6
    "
  >
    <div className="flex flex-col gap-5">
      {navItems.map((item) => (
        <ScrollLink
          key={item.name}
          to={item.to}
          smooth={true}
          duration={500}
          offset={-100}
          spy={true}
          onClick={() => setMobileMenu(false)}
          className="
            text-gray-300
            hover:text-[#16f2b3]
            cursor-pointer
            text-base
            transition-colors
          "
        >
          {item.name}
        </ScrollLink>
      ))}

      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        offset={-100}
        onClick={() => setMobileMenu(false)}
      >
        <button
          className="
            mt-2
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-gradient-to-r
            from-pink-500
            to-[#16f2b3]
            text-[#0d1224]
            py-3
            rounded-full
            font-semibold
          "
        >
          
          <HiArrowRight />
        </button>
      </ScrollLink>
    </div>
  </div>
)}

        {/* SCROLL PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#16f2b3] transition-all duration-200"
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-8" />
    </>
  );
}