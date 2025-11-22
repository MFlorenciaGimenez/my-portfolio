"use client";

import { useLanguage } from "../context/LenguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-20 md:pt-40 lg:pt-48 px-4 text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-400 font-bold mb-4 text-center">
        Florencia Gimenez
      </h1>

      <h2 className="text-xl sm:text-2xl mb-6 text-center">
        {language === "en"
          ? "Full Stack Developer — Backend Oriented"
          : "Desarrolladora Full Stack — Orientada al Backend"}
      </h2>

      <p className="text-sm sm:text-base max-w-xl text-center mb-10 px-4 text-gray-300 ">
        {language === "en"
          ? "I’m passionate about learning new technologies and continuously improving my skills. I enjoy backend development and its logical structure, but I also value frontend work because it’s essential for understanding and building a complete full-stack flow."
          : "Me apasiona aprender nuevas tecnologías y mejorar constantemente mis habilidades. Disfruto del desarrollo backend y su estructura lógica, pero también valoro el frontend porque es esencial para comprender y construir un flujo full stack completo."}
      </p>

      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors "
      >
        {language === "en" ? "My Projects" : "Mis Proyectos"}
      </a>
    </section>
  );
}
