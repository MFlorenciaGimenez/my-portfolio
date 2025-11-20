"use client";

import { useState } from "react";
import { useLanguage } from "../context/LenguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    // Usamos 'name' del input para actualizar la clave correspondiente en formData
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center h-screen py-16 px-4"
    >
      <div className="w-full max-w-lg text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 text-center mb-4">
          {language === "en" ? "Let's Talk" : "Hablemos"}
        </h2>

        <p className="text-gray-400 text-center mb-10 max-w-sm mx-auto">
          {language === "en"
            ? "I'm available for freelance opportunities or simply to chat about tech. Send me a message."
            : "Estoy disponible para oportunidades freelance o simplemente para charlar sobre tecnología. Envíame un mensaje."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* CAMPO: Tu Nombre (Ya corregido) */}
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">
              {language === "en" ? "Your Name" : "Tu Nombre"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={
                language === "en" ? "Enter your name" : "Ingresa tu nombre"
              }
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* CAMPO: Tu Email (CORREGIDO: Añadido name, value, onChange) */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              {language === "en" ? "Your Email" : "Tu Email"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* CAMPO: Tu Mensaje (CORREGIDO: Añadido name, value, onChange) */}
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">
              {language === "en" ? "Your Message" : "Tu Mensaje"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
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
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold transition duration-300 ${
              loading
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading
              ? language === "en"
                ? "Sending..."
                : "Enviando..."
              : language === "en"
              ? "Send Message"
              : "Enviar Mensaje"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-500 font-semibold">
            {language === "en"
              ? "Message sent successfully! Thanks for reaching out."
              : "¡Mensaje enviado con éxito! Gracias por contactarme."}
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500 font-semibold">
            {language === "en"
              ? "Failed to send message. Please check your console or try again later."
              : "Fallo al enviar el mensaje. Revisa tu consola o inténtalo más tarde."}
          </p>
        )}
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
