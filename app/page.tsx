"use client";

import dynamic from "next/dynamic";
import AnimatedSectionWrapper from "./components/AnimatedSectionWrapper";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";

const Skills = dynamic(() => import("./sections/Skills"), { ssr: false });
const Projects = dynamic(() => import("./sections/Projects"), {
  ssr: false,
});
const Certificates = dynamic(() => import("./sections/Certificates"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-scroll h-screen snap-scroll-container scroll-pt-16 mt-16 ">
      <AnimatedSectionWrapper id="hero" className="h-screen snap-start">
        <Hero />
      </AnimatedSectionWrapper>
      <AnimatedSectionWrapper
        id="projects"
        className="snap-start"
        contentClassName="max-w-7xl"
      >
        <Projects />
      </AnimatedSectionWrapper>
      <AnimatedSectionWrapper id="skills" className="snap-start">
        <Skills />
      </AnimatedSectionWrapper>
      <AnimatedSectionWrapper id="certificates" className="snap-start">
        <Certificates />
      </AnimatedSectionWrapper>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  );
}
