// components/Contact.jsx
"use client";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const Contact = ({ currentLang }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const contactLinks = [
    { name: "instagram", url: "https://www.instagram.com/dashti4l/", label: "Instagram" },
    { name: "telegram", url: "https://telegram.org/commanderOII/", label: "Telegram" },
    { name: "gmail", url: "mailto:amir1385amol@gmail.com", label: "Gmail" },
    { name: "github", url: "https://github.com/comm4nd3rID/", label: "GitHub" },
    { name: "phone", url: "tel:+989364495580", label: "Phone" },
  ];

  if (!currentLang) return null;

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-12 bg-[var(--charcoal)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`ink-border ink-border-center mb-8 ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
          <h2 className="text-2xl md:text-3xl text-[var(--paper)] font-light tracking-tight">
            {currentLang.contactTitle}
          </h2>
        </div>

        <div className={`flex flex-wrap justify-center gap-6 md:gap-8 ${isInView ? "animate-fade" : "opacity-0"} transition-all duration-700 delay-200`}>
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--stone)]/60 hover:text-[var(--stone)] transition-colors duration-300 font-light tracking-wide"
            >
              {currentLang[link.name] || link.label}
            </a>
          ))}
        </div>

        <div className={`mt-10 pt-6 border-t border-[var(--stone)]/10 ${isInView ? "animate-fade" : "opacity-0"} transition-all duration-700 delay-300`}>
          <p className="text-xs text-[var(--stone)]/30 font-light tracking-wide">
            © {new Date().getFullYear()} Amir (comm4nd3r)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
