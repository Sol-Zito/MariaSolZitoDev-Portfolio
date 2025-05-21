import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/experience/Experiencia";
import Contact from "./contacto/Contact";
import { Skills } from "./components/skills/Skills";
import Footer from "./components/Footer";
import Projects from "./components/projects/Projects";
import { ModalPop } from "./components/modal/modal";
import { ResumeNew } from "./components/resume/Resume";

export default function App() {
  return (
    <div className="bg-background grid grid-flow-row auto-rows-max gap-6">
      <Header />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <ResumeNew />
      <Contact />
      <ModalPop />
      <Footer />
    </div>
  );
}
