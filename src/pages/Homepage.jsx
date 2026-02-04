import Navbar from "../components/navbars/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects.jsx";
import Skills from "../components/skills/Skills";

import Contact from "../components/contacts/Contact";
import Footer from "../components/footer/Footer";
import Achievements from "../components/certificates/Achievements.jsx";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
