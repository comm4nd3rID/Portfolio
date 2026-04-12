"use client";
import Image from "next/image";

const projects = [
  {
    "en":{
        title: "Game Project",
        description: "A small game Im developing powered by Unity."
    },
    "fa":{
        title: "پروژه شخصی بازی",
        description: "میسازم Unity بازی که درحال حاضر با"
    },
    video: "/Videos/game.webm",
    source: "https://hamgit.ir/amir1385amol/gs-stuff.git"
  },
  {
    "en":{
        title: "This website.",
        description: "My personal portfolio built with Next.js and Tailwind.",
    },
    "fa":{
        title: "همین وبسایت",
        description: "ساخته شده Next.js و Tailwind سایت رزومه شخصیم که با ",
    },
    image: "/globe.svg",
    source: "https://hamgit.ir/amir1385amol/portfolio.git",
    demo: "/"
  },
];

const Projects = ({currentLang}) => {
  return (
    <section id="projects" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">{currentLang["Projects"]}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            {project.video?
            <video className="w-full object-cover"
            autoPlay muted loop
            width={500}
            height={500}>
                <source src={project.video} type="video/mp4"/>
            </video>
            :<></>}
            {project.image?
            <Image
              src={project.image}
              alt={project[currentLang["lang"]]["title"]}
              width={200}
              height={200}
              className="w-60 h-60 project-image object-cover"
            />:<></>}

            <div className={`p-4 ${(currentLang["lang"]=="en")?"":"persian-flex"}`}>
              <h3 className="text-xl text-black font-semibold">{project[currentLang["lang"]]["title"]}</h3>
              <p className="text-gray-600 mt-2">{project[currentLang["lang"]]["description"]}</p>

              <div className="flex space-x-4 mt-4">
                <a
                  href={project.source}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {currentLang["SourceCode"]}
                </a>
                {(project.demo)?<a
                  href={project.demo}
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  {currentLang["LiveDemo"]}
                </a>:<></>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;