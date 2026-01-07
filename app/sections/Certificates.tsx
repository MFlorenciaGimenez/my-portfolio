"use client";

import { useLanguage } from "../context/LanguageContext";
import { certificates } from "../certificates/data";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Certificates() {
  const { language } = useLanguage();

  return (
    <section
      id="certificates"
      // CAMBIO: Se usa min-h-screen para ocupar toda la pantalla
      // Se usa justify-start para que el título no "flote" en el medio si hay poco contenido
      className="flex flex-col justify-start items-center min-h-screen py-20 px-4"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400 text-center mb-12">
          {language === "en" ? "Certifications" : "Certificaciones"}
        </h2>

        {/* CAMBIO: Se quitó el max-h-[60vh] para que la sección crezca naturalmente, 
            o se puede mantener si quieres scroll interno dentro de la pantalla completa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {certificate.title}
              </h3>
              {certificate.organization && (
                <p className="text-gray-400 text-sm mb-2">
                  {certificate.organization}
                </p>
              )}
              {certificate.date && (
                <p className="text-gray-500 text-xs mb-4">{certificate.date}</p>
              )}
              {certificate.url && (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  {language === "en" ? "View Certificate" : "Ver Certificado"}
                  <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}