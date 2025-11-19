import AnimatedSectionWrapper from "./components/AnimatedSectionWrapper";
import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-scroll h-screen snap-scroll-container scroll-pt-16 mt-16 ">
      <AnimatedSectionWrapper id="hero" className="h-screen snap-start">
        <Hero />
      </AnimatedSectionWrapper>
      {/* <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section> */}
      <AnimatedSectionWrapper id="skills" className="h-screen snap-start">
        <Skills />
      </AnimatedSectionWrapper>
      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>
    </main>
  );
}
