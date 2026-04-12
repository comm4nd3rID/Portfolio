// components/About.js
"use client";
import Image from "next/image";

const skills = [
    {
        "en":{"name":"Unity"},
        "fa":{"name":"Unity"}
    },
    {
        "en":{"name":"C#"},
        "fa":{"name":"C#"}
    },
    {
        "en":{"name":"Python"},
        "fa":{"name":"Python"}
    },
    {
        "en":{"name":"Django"},
        "fa":{"name":"Django"}
    },
    {
        "en":{"name":"RestAPI"},
        "fa":{"name":"RestAPI"}
    },
    {
        "en":{"name":"JavaScript"},
        "fa":{"name":"JavaScript"}
    },
    {
        "en":{"name":"React/NextJs"},
        "fa":{"name":"React/NextJs"}
    },
    {
        "en":{"name":"Git"},
        "fa":{"name":"Git"}
    },
    {
        "en":{"name":"Docker"},
        "fa":{"name":"Docker"}
    },
    {
        "en":{"name":"Linux"},
        "fa":{"name":"Linux"}
    }
]

const About = ({currentLang}) => {
    return (
        <section id="about" className="container mx-auto p-8">
            <div className={`"flex flex-col md:flex-row gap-8 ${(currentLang["lang"]=="en")?"":"persian-flex"}`}>
                <h2 className="text-3xl font-bold mb-4">{currentLang["AboutMe"]}</h2>
                <Image
                src="/Images/profile.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full"
                />
                <div>
                    <h3 className="text-xl font-semibold">{currentLang["Summary"]}</h3>
                    <p>
                        {currentLang["Description"]}
                    </p>

                    <h3 className="text-xl font-semibold mt-4">{currentLang["Skills"]}</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {skills.map((skill, index)=>(
                            <div key={index} className="skill-card p-2 rounded">
                                <span>{skill[currentLang["lang"]]["name"]}</span>
                            </div>
                        ))}
                        {/* Add more skills as needed */}
                    </div>

                    <h3 className="text-xl font-semibold mt-4">{currentLang["Education"]}</h3>
                    <p>
                        {currentLang["EducationL1"]}
                        <br/>{currentLang["EducationL2"]}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
