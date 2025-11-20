"use client";

import { useLanguage } from "../context/LenguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado. (La lógica de email va aquí)");
    // Aquí se integrará el código para enviar el correo (Fetch API)
  };

  return (
    <section className="h-full flex flex-col justify-center items-center p-8 py-20">
      <div className="w-full max-w-lg mx-auto p-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 text-center mb-4">
          {language === "en" ? "Let's Talk" : "Hablemos"}
        </h2>

        <p className="text-gray-400 text-center mb-10 max-w-sm mx-auto">
          {language === "en"
            ? "I'm available for freelance opportunities or simply to chat about tech. Send me a message."
            : "Estoy disponible para oportunidades freelance o simplemente para charlar sobre tecnología. Envíame un mensaje."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">
              {language === "en" ? "Your Name" : "Tu Nombre"}
            </label>
            <input
              type="text"
              id="name"
              placeholder={
                language === "en" ? "Enter your name" : "Ingresa tu nombre"
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              {language === "en" ? "Your Email" : "Tu Email"}
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">
              {language === "en" ? "Your Message" : "Tu Mensaje"}
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={
                language === "en"
                  ? "Write your message here..."
                  : "Escribe tu mensaje aquí..."
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
          >
            {language === "en" ? "Send Message" : "Enviar Mensaje"}
          </button>
        </form>

        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">
            {language === "en" ? "Or find me on" : "O encuéntrame en"}
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a
              href="https://github.com/MFlorenciaGimenez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/florencia-gimenez-745737299"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
