// components/Testimonials.jsx
"use client";
import { useInView } from "../hooks/useInView";
import { useRef, useState } from "react";

const Testimonials = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { text: currentLang.testimonial1, author: currentLang.testimonial1Author },
    { text: currentLang.testimonial2, author: currentLang.testimonial2Author },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-[var(--warm-ivory)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="ink-border mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl text-[var(--charcoal)] font-light tracking-tight">
            {currentLang.testimonialsTitle}
          </h2>
        </div>

        <div className="relative min-h-[280px] md:min-h-[240px]">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 absolute inset-0 ${
                activeIndex === idx
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-6xl text-[var(--cedar)]/20 font-serif mb-6">
                  "
                </div>
                <p className="text-xl md:text-2xl text-[var(--charcoal)]/80 font-light leading-relaxed mb-8">
                  {testimonial.text}
                </p>
                <p className="text-sm text-[var(--cedar)]/60 tracking-wide">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                activeIndex === idx
                  ? "w-8 h-1 bg-[var(--cedar)]"
                  : "w-4 h-1 bg-[var(--stone)] hover:bg-[var(--cedar)]/50"
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;