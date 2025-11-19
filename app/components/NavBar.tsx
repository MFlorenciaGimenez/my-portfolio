"use client";

import { useLanguage } from "../context/LenguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-6 flex justify-between items-center bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
      <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
        Florencia.dev
      </h1>

      <div className="flex items-center gap-6 text-gray-300">
        <a href="#hero" className="hover:text-white transition">
          {language === "en" ? "About" : "Sobre mí"}
        </a>
        <a href="#projects" className="hover:text-white transition">
          {language === "en" ? "Projects" : "Proyectos"}
        </a>
        <a href="#skills" className="hover:text-white transition">
          {language === "en" ? "Tech Skills" : "Tecnologías"}
        </a>
        <a href="#contact" className="hover:text-white transition">
          {language === "en" ? "Contact" : "Contacto"}
        </a>

        {/* Botón Resume */}
        <a
          href={language === "en" ? "/resume-en.pdf" : "/resume-es.pdf"}
          download
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
        >
          {language === "en" ? "Resume" : "CV"}
        </a>

        {/* Selector Idioma */}
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="ml-4 px-2 py-1 border border-gray-500 rounded text-gray-300 hover:text-white hover:border-white transition"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
    </nav>
  );
}
