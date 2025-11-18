import AnimatedSectionWrapper from "./components/AnimatedSectionWrapper";
import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
// import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-scroll h-screen pt-16">
      <AnimatedSectionWrapper id="hero">
        <Hero />
      </AnimatedSectionWrapper>
      {/* <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section> */}
      <AnimatedSectionWrapper id="skills" className="py-16">
        <Skills />
      </AnimatedSectionWrapper>
      {/* <section id="contact">
        <Contact />
      </section> */}
    </main>
  );
}
