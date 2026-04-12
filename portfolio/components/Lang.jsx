"use client";
import { useState } from "react";
import HomePage from "../app/page";
import Header from "./Header";
const Lang = () => {
    const [currentLang, setCurrentLang] = useState({
        "lang":"en",
        "Title":"My portfolio",
        "Home":"Home",
        "About":"About",
        "Projects":"Projects",
        "Contact":"Contact",
        "MyName":"Amir",
        "MyAKA":"(AKA comm4nd3r)",
        "MyStack":"Full-Stack Developer",
        "ViewMyWork":"View My Work",
        "AboutMe":"About Me",
        "Summary":"Summary",
        "Description":"I started my journey in the tech world with Game Development and explored several fields such as Cisco networking, Cybersecurity, Software Development, and 3D Modeling. Eventually, I found my passion in Full Stack Development and have since been focusing on building complete web applications, improving both frontend and backend skills, and mastering modern development tools.",
        "Skills":"Skills",
        "Education":"Education",
        "EducationL1":"B.Sc. in Computer Science (Ongoing)",
        "EducationL2":"Iran University of Science and Technology",
        "Projects":"Projects",
        "ContactMe":"Contact me",
        "Instagram":"Instagram",
        "Telegram":"Telegram",
        "Gmail":"Gmail",
        "GitHub":"GitHub",
        "Phone":"Phone",
        "SourceCode":"Source Code",
        "LiveDemo":"Live Demo"
    })
    return (
        <>
        <Header currentLang={currentLang} setCurrentLang={setCurrentLang}/>
        {(currentLang!=null)?<HomePage currentLang={currentLang}/>:<></>}
        </>
    );
};

export default Lang;