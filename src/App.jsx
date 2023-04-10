import { useRef } from 'react'
import "./App.css"
import Navbar from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Projects"
import Contact from "./pages/Contacts"
import Skills from "./pages/Skills"
import Button from "./components/Button"

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const skillsRef = useRef(null)

  return (
    <div className='app'>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
      />

      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Project projectRef={projectRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </div>
  )
}

export default App
