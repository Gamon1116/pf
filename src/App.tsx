import React, { useCallback } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingScrollButton } from './components/FloatingScrollButton'

function App() {
  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleProjectsClick = useCallback(() => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onContactClick={handleContactClick} />
      <Hero
        onContactClick={handleContactClick}
        onProjectsClick={handleProjectsClick}
      />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <FloatingScrollButton />
    </div>
  )
}

export default App
