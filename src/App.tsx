import React from 'react'
import { Cursor }           from './components/layout/Cursor'
import { Navbar }           from './components/layout/Navbar'
import { Footer }           from './components/layout/Footer'
import { Hero }             from './components/sections/Hero'
import { Marquee }          from './components/sections/Marquee'
import { About }            from './components/sections/About'
import { Education }        from './components/sections/Education'
import { Skills }           from './components/sections/Skills'
import { Projects }         from './components/sections/Projects'
import { Certifications }   from './components/sections/Certifications'
import { Contact }          from './components/sections/Contact'
import { useScrollReveal }  from './hooks/useScrollReveal'

const App: React.FC = () => {
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
