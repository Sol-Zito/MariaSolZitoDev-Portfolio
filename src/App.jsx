import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"
import Experience from "./components/experience/Experiencia"
import { Skills } from "./components/skills/Skills"
import Contact from "./contacto/Contact"



export default function App() {
  return (
    <div className="bg-background grid grid-flow-row auto-rows-max gap-8">
      {/* header */}
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <Contact/>
      {/* footer */}
      <Footer/>
    </div>
  )
}