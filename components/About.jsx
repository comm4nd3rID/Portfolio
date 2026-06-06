// components/About.jsx
"use client";
import Image from "next/image";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const skills = [
  "Unity", "C#", "Python", "Django", "RestAPI",
  "JavaScript", "React/NextJs", "Git", "Docker", "Linux"
];

const About = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  if (!currentLang) return null;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-[var(--paper)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="ink-border mb-12">
          <h2 className="text-3xl md:text-4xl text-[var(--charcoal)] font-light tracking-tight">
            {currentLang.aboutTitle}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/4">
            <div className="sticky top-28">
              <Image
                src="/Images/summary.png"
                alt="Profile illustration"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full opacity-80"
              />
            </div>
          </div>

          <div className="md:w-3/4 space-y-8">
            <div>
              <h3 className="text-xl font-serif text-[var(--cedar)] mb-3">
                {currentLang.summaryTitle}
              </h3>
              <p className="text-[var(--charcoal)]/70 font-light leading-relaxed">
                {currentLang.summaryDesc}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-[var(--cedar)] mb-4">
                {currentLang.skillsTitle}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`skill-card px-4 py-2 rounded-sm text-center transition-all duration-500 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-sm font-light">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-[var(--cedar)] mb-3">
                {currentLang.educationTitle}
              </h3>
              <p className="text-[var(--charcoal)]/70 font-light leading-relaxed">
                {currentLang.educationLine1}<br />
                <span className="text-sm text-[var(--charcoal)]/50">{currentLang.educationLine2}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;