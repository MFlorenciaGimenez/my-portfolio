"use client";

import { useLanguage } from "../context/LenguageContext";
import ProjectCard from "../components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import { projects } from "../projects/data";

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center h-screen py-16 sm:py-24 px-4 h-full"
    >
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400 text-center mb-10 max-w-4xl mx-auto">
          {language === "en" ? "My Projects" : "Mis Proyectos"}
        </h2>

        <p className="text-gray-400 text-center text-lg mb-10 max-w-2xl mx-auto">
          {language === "en"
            ? "A showcase of my recent Full Stack and Backend-focused applications."
            : "Una muestra de mis aplicaciones recientes con enfoque Full Stack y Backend."}
        </p>

        <div className="flex overflow-x-scroll space-x-8 pb-4 pr-4 w-full mx-auto custom-scrollbar">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-80 md:w-96 snap-center"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/MFlorenciaGimenez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-700 bg-gray-900 hover:bg-gray-800
             text-white rounded-md font-semibold transition duration-300"
          >
            <FaGithub className="w-5 h-5 mr-3" />
            {language === "en"
              ? "Explore More on GitHub"
              : "Explora Más en GitHub"}
          </a>
        </div>
      </div>
    </section>
  );
}
