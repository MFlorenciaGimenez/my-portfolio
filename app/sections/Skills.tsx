"use client";

import { useLanguage } from "../context/LenguageContext";

interface Skill {
  name: string;
  logo: string;
}

interface SkillGroups {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

const skills: SkillGroups = {
  frontend: [
    { name: "React", logo: "/skills/react.png" },
    { name: "TypeScript", logo: "/skills/typescript.png" },
    { name: "JavaScript", logo: "/skills/javascript.png" },
    { name: "HTML5", logo: "/skills/html5.png" },
    { name: "CSS3", logo: "/skills/css3.png" },
  ],
  backend: [
    { name: "NestJS", logo: "/skills/nestjs.png" },
    { name: "Node.js", logo: "/skills/node.png" },
    { name: "Express", logo: "/skills/express.png" },
    { name: "TypeORM", logo: "/skills/typeorm.png" },
    { name: "PostgreSQL", logo: "/skills/postgresql.png" },
  ],
  tools: [
    { name: "Git", logo: "/skills/git.png" },
    { name: "Docker", logo: "/skills/docker.png" },
    { name: "Postman", logo: "/skills/postman.png" },
    { name: "VS Code", logo: "/skills/vscode.png" },
    { name: "Railway", logo: "/skills/railway.png" },
    { name: "Vercel", logo: "/skills/vercel.png" },
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
      title = language === "en" ? "Tools & Others" : "Herramientas y Otros";
    }

    return (
      <div className="flex flex-col justify-center items-center **min-h-screen** snap-start p-8">
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {group.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-start p-4 shadow-lg hover:shadow-blue-900/40 transition h-full"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-14 h-14 mb-3"
              />
              <p className="text-gray-300 font-medium text-center w-full">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen snap-start p-8">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-extrabold text-blue-400 text-center mb-10">
          {language === "en" ? "Tech Skills" : "Tecnologías"}
        </h2>

        <div className="space-y-14">
          {renderSkillsGroup(skills.frontend, "Frontend")}
          {renderSkillsGroup(skills.backend, "Backend")}
          {renderSkillsGroup(skills.tools, "Tools & Others")}
        </div>
      </div>
    </section>
  );
}
