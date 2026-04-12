// pages/index.js
"use client";
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
const HomePage = ({currentLang}) => {
    return (
        <main>
            <Hero currentLang={currentLang}/>
            <About currentLang={currentLang}/>
            <Projects currentLang={currentLang}/>
            <Contact currentLang={currentLang}/>
        </main>
    );
};

export default HomePage;
