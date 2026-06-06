// components/Process.jsx
"use client";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const Process = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const steps = [
    { title: currentLang.step1, desc: currentLang.step1Desc },
    { title: currentLang.step2, desc: currentLang.step2Desc },
    { title: currentLang.step3, desc: currentLang.step3Desc },
    { title: currentLang.step4, desc: currentLang.step4Desc },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-[var(--paper)] relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--stone)]/30 hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="ink-border mx-auto mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] font-light tracking-tight">
              {currentLang.processTitle}
            </h2>
          </div>
          <p className="text-lg text-[var(--charcoal)]/50 font-light tracking-wide">
            {currentLang.processSubtitle}
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-all duration-700 ${
                isInView ? "translate-x-0 opacity-100" : idx % 2 === 0 ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl font-serif text-[var(--cedar)] tracking-wide">
                  {step.title}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-[var(--charcoal)]/70 font-light leading-relaxed">
                  {step.desc}
                </p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-[var(--stone)]/40 mt-8" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;