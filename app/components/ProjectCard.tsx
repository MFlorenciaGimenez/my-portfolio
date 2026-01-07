"use client";

import Image from "next/image";
import type { Project } from "../projects/types";

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/30 
    transition-shadow duration-300 h-full"
    >
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <div className="relative w-full h-48 bg-gray-950 flex items-center justify-center">
            <Image
              src={image}
              alt={`${title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-contain hover:opacity-90 transition p-2"
            />
          </div>
        </a>
      ) : (
        <div className="relative w-full h-48 bg-gray-950 flex items-center justify-center">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-contain p-2"
          />
        </div>
      )}

      <div className="p-5 h-full flex flex-col justify-between">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
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
        <div className={`flex gap-3 mt-auto ${liveUrl ? "" : "justify-center"}`}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm text-center"
              aria-label={`View live demo of ${title}`}
            >
              Live Demo
            </a>
          )}

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white rounded-md text-sm text-center ${
              liveUrl ? "flex-1" : "w-full"
            }`}
            aria-label={`View source code of ${title}`}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
