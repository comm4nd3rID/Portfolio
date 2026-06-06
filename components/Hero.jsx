// components/Hero.jsx
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = ({ currentLang }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-up");
    }
  }, []);

  if (!currentLang) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--warm-ivory)] via-[var(--warm-ivory)] to-[var(--stone)]/20" />
      
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[var(--cedar)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-[var(--sage)]/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div ref={titleRef} className="opacity-0">
          <div className="flex justify-center mb-6">
            <Image
              src="/Images/profile.jpg"
              alt="Profile"
              width={104}
              height={104}
              className="rounded-full shadow-sm opacity-90"
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight text-[var(--charcoal)] mb-3">
            {currentLang.heroName}
          </h1>
          <p className="text-lg md:text-xl text-[var(--charcoal)]/50 font-light mb-2">
            {currentLang.heroAKA}
          </p>
          <p className="text-xl md:text-2xl text-[var(--cedar)]/70 font-light mb-8">
            {currentLang.heroStack}
          </p>

          <a
            href="#projects"
            className="inline-block px-8 py-3 btn-primary rounded-sm text-sm tracking-wide font-light"
          >
            {currentLang.heroCta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
        <span className="text-xs tracking-wider text-[var(--charcoal)]/50 font-light">
          Scroll
        </span>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <path d="M1 1L10 9L19 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-[var(--charcoal)]/50"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;