// app/page.js
"use client";
import { useLang } from "../components/LangProvider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const { currentLang, toggleLang } = useLang();

  if (!currentLang) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--warm-ivory)]">
        <div className="w-8 h-8 border-2 border-[var(--cedar)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Header currentLang={currentLang} toggleLang={toggleLang} />
      <main>
        <Hero currentLang={currentLang} />
        <About currentLang={currentLang} />
        <Projects currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>
    </>
  );
}