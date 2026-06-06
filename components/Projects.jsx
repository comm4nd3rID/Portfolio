// components/Projects.jsx
"use client";
import Image from "next/image";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const projects = [
  {
    title: { en: "Game Project", fa: "پروژه بازی" },
    description: { en: "A small game I'm developing powered by Unity.", fa: "بازی کوچکی که با یونیتی می‌سازم" },
    video: "/Videos/game.webm",
    source: "https://hamgit.ir/amir1385amol/gs-stuff.git",
    hasVideo: true,
  },
  {
    title: { en: "This Website", fa: "همین وبسایت" },
    description: { en: "My personal portfolio built with Next.js and Tailwind.", fa: "سایت رزومه شخصی ساخته شده با Next.js و Tailwind" },
    image: "/globe.svg",
    source: "https://hamgit.ir/amir1385amol/portfolio.git",
    demo: "/",
    hasVideo: false,
  },
];

const Projects = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  if (!currentLang) return null;

  const langCode = currentLang.lang;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-[var(--warm-ivory)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="ink-border ink-border-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[var(--charcoal)] font-light tracking-tight">
            {currentLang.projectsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card rounded-sm overflow-hidden transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {project.hasVideo ? (
                <video
                  className="w-full aspect-video object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full aspect-video bg-[var(--stone)]/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title[langCode]}
                    width={120}
                    height={120}
                    className="w-24 h-24 opacity-40"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-serif text-[var(--charcoal)] mb-2">
                  {project.title[langCode]}
                </h3>
                <p className="text-sm text-[var(--charcoal)]/60 font-light mb-4 leading-relaxed">
                  {project.description[langCode]}
                </p>

                <div className="flex gap-5">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wide text-[var(--cedar)]/70 hover:text-[var(--cedar)] transition-colors duration-300 font-light"
                  >
                    {currentLang.sourceCode}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-wide text-[var(--sage)] hover:text-[var(--cedar)] transition-colors duration-300 font-light"
                    >
                      {currentLang.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;