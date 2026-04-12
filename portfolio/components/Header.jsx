"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const langs = {
    "en":{
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
    },
    "fa":{
        "lang":"fa",
        "Title":"رزومه من",
        "Home":"خانه",
        "About":"درباره من",
        "Projects":"نمونه کار",
        "Contact":"ارتباط با من",
        "MyName":"امیر",
        "MyAKA":"(هم میگن commander بهم)",
        "MyStack":"Full-Stack برنامه نویس",
        "ViewMyWork":"کار هامو ببین",
        "AboutMe":"درباره من",
        "Summary":"خلاصه که",
        "Description":"من تو دنیای تکنولوژی مسیرمو با ساختن گیم شروع کردم و تو شاخه های مختلفی سرک کشیدم مثل مهندسی شبکه، توسعه نرم افزار و طراحی سه بعدی. مدتیه که مسیرمو تو دنیای وب پیدا کردم و تمرکزمو روی ساختن وب اپلیکشن کامل که هم کلاینت ساید جذابی داشته باشه هم اپلیکیشن امن و بهینه برای سرور داشته باشه گذاشتم.",
        "Skills":"مهارت ها",
        "Education":"تحصیلات",
        "EducationL1":"کارشناسی علوم کامپیوتر (درحال تحصیل)",
        "EducationL2":"دانشگاه علم و صنعت ایران",
        "Projects":"پروژه ها",
        "ContactMe":"تماس با من",
        "Instagram":"Instagram",
        "Telegram":"Telegram",
        "Gmail":"Gmail",
        "GitHub":"GitHub",
        "Phone":"Phone",
        "SourceCode":"Source Code",
        "LiveDemo":"Live Demo"
    },
}

const Header = ({currentLang, setCurrentLang}) => {
    const [lang, setLang] = useState("en");
    useEffect(()=>{
        setCurrentLang(langs[lang])
        console.log(currentLang)
        document.getElementsByTagName("body")[0].style.fontFamily = (lang=="en")?"var(--font-family)":"var(--persian-font-family)";
    },[lang])
    useEffect(()=>{
        setLang("en");
    },[])
  return currentLang!=null?(
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm text-gray-700">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{currentLang["Title"]}</h1>

        <ul className="flex space-x-6 ">
          <li><Link href="#hero" className="li-text hover:text-black">{currentLang["Home"]}</Link></li>
          <li><Link href="#about" className="li-text hover:text-black">{currentLang["About"]}</Link></li>
          <li><Link href="#projects" className="li-text hover:text-black">{currentLang["Projects"]}</Link></li>
          <li><Link href="#contact" className="li-text hover:text-black">{currentLang["Contact"]}</Link></li>
          <li className="li-text hover:text-black"
          onClick={()=>{
            setLang(lang=="en"?"fa":"en")
          }}>
            {lang=="en"?<>
            فا
            </>:<>
            en
            </>}
          </li>
        </ul>
      </nav>
    </header>
  ):(<></>);
};

export default Header;