import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
// import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      {/* <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section> */}
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}
