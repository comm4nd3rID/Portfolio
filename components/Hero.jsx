"use client";
import Image from "next/image";

const Hero = ({currentLang}) => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center hero-bg"
    >
      <Image
        src="/Images/profile.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-4 shadow-lg"
      />

      <h2 className="text-5xl font-bold mb-2">{currentLang["MyName"]}
        <p className="text-3xl">{currentLang["MyAKA"]}</p>
        </h2>
      <p className="text-xl">{currentLang["MyStack"]}</p>

      <button className="mt-6 px-6 py-2 rounded-lg transition my-work-btn">
        {currentLang["ViewMyWork"]}
      </button>
    </section>
  );
};

export default Hero;