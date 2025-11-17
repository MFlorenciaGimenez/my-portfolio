"use client";

import { useLanguage } from "../context/LenguageContext";

const skills = {
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

  return (
    <section className="py-20">
      <h2 className="text-4xl font-extrabold text-blue-400 text-center mb-10">
        {language === "en" ? "Tech Skills" : "Tecnologías"}
      </h2>

      <div className="space-y-14">
        {/* FRONTEND */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            {language === "en" ? "Frontend" : "Frontend"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.frontend.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center p-4 shadow-lg hover:shadow-blue-900/40 transition"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 mb-3"
                />
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            {language === "en" ? "Backend" : "Backend"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.backend.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center p-4 shadow-lg hover:shadow-blue-900/40 transition"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 mb-3"
                />
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            {language === "en" ? "Tools & Others" : "Herramientas y Otros"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.tools.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center p-4 shadow-lg hover:shadow-blue-900/40 transition"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 mb-3"
                />
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
