// components/Philosophy.jsx
"use client";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const Philosophy = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const cards = [
    { title: currentLang.philosophyCard1, desc: currentLang.philosophyCard1Desc, delay: 0 },
    { title: currentLang.philosophyCard2, desc: currentLang.philosophyCard2Desc, delay: 0.1 },
    { title: currentLang.philosophyCard3, desc: currentLang.philosophyCard3Desc, delay: 0.2 },
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-[var(--paper)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="ink-border mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] font-light tracking-tight">
              {currentLang.philosophyTitle}
            </h2>
          </div>
          <p className="text-lg text-[var(--charcoal)]/60 font-light leading-relaxed">
            {currentLang.philosophyDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-700 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${card.delay}s` }}
            >
              <div className="bg-[var(--warm-ivory)] p-8 rounded-sm hover:shadow-[0_8px_30px_var(--shadow-soft)] transition-all duration-500">
                <span className="text-5xl text-[var(--cedar)]/20 font-serif mb-4 block">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl font-serif text-[var(--charcoal)] mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--charcoal)]/60 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;