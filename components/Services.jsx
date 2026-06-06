// components/Services.jsx
"use client";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const Services = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const services = [
    {
      title: currentLang.service1,
      desc: currentLang.service1Desc,
      icon: "🏛️",
    },
    {
      title: currentLang.service2,
      desc: currentLang.service2Desc,
      icon: "🪑",
    },
    {
      title: currentLang.service3,
      desc: currentLang.service3Desc,
      icon: "🌿",
    },
    {
      title: currentLang.service4,
      desc: currentLang.service4Desc,
      icon: "🤝",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-[var(--warm-ivory)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="ink-border mx-auto mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] font-light tracking-tight">
              {currentLang.servicesTitle}
            </h2>
          </div>
          <p className="text-lg text-[var(--charcoal)]/60 font-light">
            {currentLang.servicesDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group bg-white/40 backdrop-blur-sm p-8 rounded-sm transition-all duration-500 hover:bg-white/60 hover:shadow-[0_4px_20px_var(--shadow-soft)] ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-xl font-serif text-[var(--charcoal)] mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--charcoal)]/60 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;