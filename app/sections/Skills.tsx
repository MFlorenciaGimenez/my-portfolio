"use client";

import { useLanguage } from "../context/LenguageContext";
import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiTypeorm,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPostman,
  SiRailway,
  SiVercel,
  SiMongodb,
  SiNextdotjs,
  SiCloudinary,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillGroups {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

const skills: SkillGroups = {
  frontend: [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
  ],
  backend: [
    { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "text-white" },
    { name: "TypeORM", icon: SiTypeorm, color: "text-[#FE0C05]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "VS Code", icon: VscCode, color: "text-[#007ACC]" },
    { name: "Railway", icon: SiRailway, color: "text-white" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
    { name: "Cloudinary", icon: SiCloudinary, color: "text-[#3448C5]" },
  ],
};

export default function Skills() {
  const { language } = useLanguage();

  const renderSkillsGroup = (
    group: Skill[],
    titleKey: "Frontend" | "Backend" | "Tools & Others"
  ) => {
    let title: string;

    if (titleKey === "Frontend") {
      title = language === "en" ? "Frontend" : "Frontend";
    } else if (titleKey === "Backend") {
      title = language === "en" ? "Backend" : "Backend";
    } else {
      title = language === "en" ? "Tools & Others" : "Herramientas";
    }

    return (
      <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-900 rounded-lg shadow-xl border border-gray-800 h-full">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-4 mx-auto w-full">
          {group.map((skill) => (
            <div
              key={skill.name}
              className="group bg-gray-800 border border-gray-800 rounded-xl flex flex-col items-center justify-center p-4 
              shadow-lg hover:shadow-blue-900/40 hover:border-blue-500/30 transition-all duration-300 h-28 w-full "
            >
              <skill.icon
                className={`w-8 h-8 sm:w-10 sm:h-10 mb-2 transition-colors duration-300 ${skill.color} filter grayscale 
                group-hover:grayscale-0`}
              />
              <p className="text-gray-300 font-medium text-center w-full text-xs sm:text-sm leading-snug wrap-break-word">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center h-full py-10 sm:py-20 px-4">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400 text-center mb-12">
          {language === "en" ? "Tech Skills" : "Tecnologías"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
          {renderSkillsGroup(skills.frontend, "Frontend")}
          {renderSkillsGroup(skills.backend, "Backend")}
          {renderSkillsGroup(skills.tools, "Tools & Others")}
        </div>
      </div>
    </section>
  );
}
