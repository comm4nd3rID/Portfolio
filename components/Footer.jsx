// components/Footer.jsx
"use client";

const Footer = ({ currentLang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-[var(--stone)] text-sm tracking-wide font-serif">
              {currentLang.brand}
            </span>
            <p className="text-[var(--stone)]/50 text-xs font-light mt-2">
              {currentLang.footerTagline}
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="#philosophy"
              className="text-[var(--stone)]/50 hover:text-[var(--stone)] text-xs tracking-wide transition-colors duration-300 font-light"
            >
              {currentLang.lang === "en" ? "Philosophy" : "哲学"}
            </a>
            <a
              href="#services"
              className="text-[var(--stone)]/50 hover:text-[var(--stone)] text-xs tracking-wide transition-colors duration-300 font-light"
            >
              {currentLang.lang === "en" ? "Services" : "サービス"}
            </a>
            <a
              href="#contact"
              className="text-[var(--stone)]/50 hover:text-[var(--stone)] text-xs tracking-wide transition-colors duration-300 font-light"
            >
              {currentLang.lang === "en" ? "Contact" : "連絡先"}
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[var(--stone)]/40 text-xs font-light">
              © {currentYear} {currentLang.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;