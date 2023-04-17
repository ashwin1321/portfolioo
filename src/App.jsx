import { useRef, useState } from 'react'
import "./App.css"
import Logo from "./components/Logo"
import { DesktopView, MobileView } from "./components/Menu"
import BurgerButton from "./components/Button/BurgerButton"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Projects"
import Contact from "./pages/Contacts"
import Skills from "./pages/Skills"

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const skillsRef = useRef(null)

  const props = {
    homeRef,
    aboutRef,
    projectRef,
    contactRef,
    skillsRef
  }

  const items = {
    "Home": props.homeRef,
    "About": props.aboutRef,
    "Projects": props.projectRef,
    "Skills": props.skillsRef,
    "Contact": props.contactRef
  }

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* Navbar Starts*/}
      <div className="navItems">
        <Logo />
        <div className="spacer" >
          <DesktopView  {...props} items={items} />
          <div onClick={() => setShowMenu(true)}>
            <BurgerButton />
          </div>
        </div>
      </div >
      {showMenu && <MobileView {...props} setShowMenu={setShowMenu} items={items} />}
      {/* Navbar Ends */}

      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Project projectRef={projectRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </>

  )
}

export default App
