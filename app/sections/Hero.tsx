"use client";

import { useLanguage } from "../context/LenguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
        Florencia Gimenez
      </h1>

      <h2 className="text-2xl mb-4">
        {language === "en"
          ? "Full Stack Developer — Backend Oriented"
          : "Desarrolladora Full Stack — Orientada al Backend"}
      </h2>

      <p className="text-xl text-gray-300 max-w-2xl">
        {language === "en"
          ? "I’m passionate about learning new technologies and continuously improving my skills. I enjoy backend development and its logical structure, but I also value frontend work because it’s essential for understanding and building a complete full-stack flow."
          : "Me apasiona aprender nuevas tecnologías y mejorar constantemente mis habilidades. Disfruto del desarrollo backend y su estructura lógica, pero también valoro el frontend porque es esencial para comprender y construir un flujo full stack completo."}
      </p>

      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition"
      >
        {language === "en" ? "My Projects" : "Mis Proyectos"}
      </a>
    </section>
  );
}
