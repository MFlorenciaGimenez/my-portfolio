"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  codeUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/30 transition-shadow duration-300">
      {/* Imagen clickeable */}
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:opacity-90 transition"
        />
      </a>

      <div className="p-5">
        {/* Título */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        {/* Descripción */}
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Chips de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs bg-blue-700/30 text-blue-300 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm text-center"
          >
            Live Demo
          </a>

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white rounded-md text-sm text-center"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
