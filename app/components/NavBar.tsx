"use client";

import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
          Florencia.dev
        </h1>

        <div className="hidden md:flex items-center gap-6 text-gray-200/90">
          <a href="#hero" className="hover:text-white transition">
            {language === "en" ? "About" : "Sobre mí"}
          </a>
          <a href="#projects" className="hover:text-white transition">
            {language === "en" ? "Projects" : "Proyectos"}
          </a>
          <a href="#skills" className="hover:text-white transition">
            {language === "en" ? "Tech Skills" : "Tecnologías"}
          </a>
          <a href="#certificates" className="hover:text-white transition">
            {language === "en" ? "Certifications" : "Certificaciones"}
          </a>
          <a href="#contact" className="hover:text-white transition">
            {language === "en" ? "Contact" : "Contacto"}
          </a>

          <a
            href={
              language === "en" ? "/RESUME.pdf" : "/CV.pdf"
            }
            download
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
          >
            {language === "en" ? "Resume" : "CV"}
          </a>

          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="ml-2 px-2 py-1 border border-gray-500 rounded text-gray-300 hover:text-white hover:border-white transition"
            aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-900 px-6 pb-4 gap-4 text-gray-300">
          <a href="#hero" onClick={() => setIsOpen(false)}>
            {language === "en" ? "About" : "Sobre mí"}
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            {language === "en" ? "Projects" : "Proyectos"}
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            {language === "en" ? "Tech Skills" : "Tecnologías"}
          </a>
          <a href="#certificates" onClick={() => setIsOpen(false)}>
            {language === "en" ? "Certifications" : "Certificaciones"}
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            {language === "en" ? "Contact" : "Contacto"}
          </a>

          <a
            href={language === "en" ? "/RESUME.pdf" : "/CV.pdf"}
            download
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-center"
          >
            {language === "en" ? "Resume" : "CV"}
          </a>

          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="px-2 py-1 border border-gray-500 rounded text-gray-300 hover:text-white hover:border-white transition w-fit"
            aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>
      )}
    </nav>
  );
}
