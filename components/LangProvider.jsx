// components/LangProvider.jsx
"use client";
import { useState, createContext, useContext, useEffect } from "react";

const translations = {
  en: {
    lang: "en",
    // Header
    brand: "comm4nd3r",
    // Hero
    heroName: "Amir",
    heroAKA: "(AKA comm4nd3r)",
    heroStack: "Full-Stack Developer",
    heroCta: "View My Work",
    // About
    aboutTitle: "About Me",
    summaryTitle: "Summary",
    summaryDesc: "I started my journey in the tech world with Game Development and explored several fields such as Cisco networking, Cybersecurity, Software Development, and 3D Modeling. Eventually, I found my passion in Full Stack Development and have since been focusing on building complete web applications, improving both frontend and backend skills, and mastering modern development tools.",
    skillsTitle: "Skills",
    educationTitle: "Education",
    educationLine1: "B.Sc. in Computer Science (Ongoing)",
    educationLine2: "Iran University of Science and Technology",
    // Projects
    projectsTitle: "Projects",
    project1Title: "Game Project",
    project1Desc: "A small game I'm developing powered by Unity.",
    project2Title: "This Website",
    project2Desc: "My personal portfolio built with Next.js and Tailwind.",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    // Contact
    contactTitle: "Contact Me",
    instagram: "Instagram",
    telegram: "Telegram",
    gmail: "Gmail",
    github: "GitHub",
    phone: "Phone",
  },
  fa: {
    lang: "fa",
    brand: "کامندر",
    heroName: "امیر",
    heroAKA: "(هم میگن comm4nd3r بهم)",
    heroStack: "توسعه‌دهنده فول استک",
    heroCta: "مشاهده کارها",
    aboutTitle: "درباره من",
    summaryTitle: "خلاصه",
    summaryDesc: "من تو دنیای تکنولوژی مسیرمو با ساختن گیم شروع کردم و تو شاخه‌های مختلفی سرک کشیدم مثل مهندسی شبکه، امنیت سایبری، توسعه نرم‌افزار و طراحی سه بعدی. مدتیه که مسیرمو تو دنیای وب پیدا کردم و تمرکزمو روی ساختن وب اپلیکیشن کامل که هم کلاینت ساید جذابی داشته باشه هم اپلیکیشن امن و بهینه برای سرور داشته باشه گذاشتم.",
    skillsTitle: "مهارت‌ها",
    educationTitle: "تحصیلات",
    educationLine1: "کارشناسی علوم کامپیوتر (درحال تحصیل)",
    educationLine2: "دانشگاه علم و صنعت ایران",
    projectsTitle: "پروژه‌ها",
    project1Title: "پروژه بازی",
    project1Desc: "بازی کوچکی که با یونیتی می‌سازم",
    project2Title: "همین وبسایت",
    project2Desc: "سایت رزومه شخصی ساخته شده با Next.js و Tailwind",
    sourceCode: "سورس کد",
    liveDemo: "نسخه زنده",
    contactTitle: "تماس با من",
    instagram: "اینستاگرام",
    telegram: "تلگرام",
    gmail: "جیمیل",
    github: "گیت‌هاب",
    phone: "تلفن",
  },
};

const LangContext = createContext();

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export default function LangProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleLang = () => {
    setCurrentLang(prev => prev?.lang === "en" ? translations.fa : translations.en);
  };

  useEffect(() => {
    setCurrentLang(translations.en);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (currentLang) {
      document.documentElement.lang = currentLang.lang;
      document.documentElement.dir = "ltr";
      document.body.style.fontFamily = currentLang.lang === "en" 
        ? "var(--en-font)" 
        : "var(--fa-font)";
    }
  }, [currentLang]);

  if (isLoading || !currentLang) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--warm-ivory)]">
        <div className="w-8 h-8 border-2 border-[var(--cedar)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <LangContext.Provider value={{ currentLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}