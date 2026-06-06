// components/Header.jsx
"use client";
import { useEffect, useState } from "react";

const Header = ({ currentLang, toggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: currentLang?.lang === "en" ? "Home" : "خانه" },
    { href: "#about", label: currentLang?.lang === "en" ? "About" : "درباره" },
    { href: "#projects", label: currentLang?.lang === "en" ? "Projects" : "پروژه‌ها" },
    { href: "#contact", label: currentLang?.lang === "en" ? "Contact" : "تماس" },
  ];

  if (!currentLang) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--paper)]/90 backdrop-blur-md shadow-[0_1px_0_rgba(107,78,61,0.08)] py-4"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#hero"
          className="text-lg tracking-wide text-[var(--charcoal)] hover:text-[var(--cedar)] transition-colors duration-300 font-serif"
        >
          {currentLang.brand}
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[var(--charcoal)]/60 hover:text-[var(--cedar)] transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm tracking-wide text-[var(--charcoal)]/40 hover:text-[var(--cedar)] transition-colors duration-300 font-mono"
          >
            {currentLang.lang === "en" ? "فا" : "en"}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-[var(--charcoal)] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-[var(--charcoal)] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[var(--charcoal)] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`md:hidden fixed inset-x-0 top-[61px] bg-[var(--paper)]/98 backdrop-blur-lg transition-all duration-400 ease-out overflow-hidden ${mobileMenuOpen ? "max-h-80 border-t border-[var(--stone)]" : "max-h-0"}`}>
        <div className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base tracking-wide text-[var(--charcoal)]/60 hover:text-[var(--cedar)] transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLang();
              setMobileMenuOpen(false);
            }}
            className="text-base tracking-wide text-[var(--charcoal)]/40 hover:text-[var(--cedar)] transition-colors duration-300 font-mono"
          >
            {currentLang.lang === "en" ? "فا" : "en"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;