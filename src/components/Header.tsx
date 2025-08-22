import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

interface HeaderProps {
  onContactClick: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg'
            : 'bg-white/80 backdrop-blur-lg border-b border-gray-100'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="nav-link text-base font-medium hover:text-brand-600 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => scrollToSection('skills')}
                className="nav-link text-base font-medium hover:text-brand-600 transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => scrollToSection('projects')}
                className="nav-link text-base font-medium hover:text-brand-600 transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => scrollToSection('experience')}
                className="nav-link text-base font-medium hover:text-brand-600 transition-colors duration-200"
              >
                Experience
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                >
                  {FiGithub({ size: 18 })}
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                >
                  {FiLinkedin({ size: 18 })}
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                >
                  {FiMail({ size: 18 })}
                </a>
              </div>

              {/* Contact Button */}
              <button onClick={onContactClick} className="btn btn-primary">
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
            >
              {isMenuOpen ? FiX({ size: 20 }) : FiMenu({ size: 20 })}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h2 className="text-xl font-bold gradient-text">Menu</h2>
              </div>
              <button
                onClick={closeMenu}
                className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
              >
                {FiX({ size: 20 })}
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-8">
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => scrollToSection('skills')}
                className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => scrollToSection('projects')}
                className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all duration-200"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => scrollToSection('experience')}
                className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all duration-200"
              >
                Experience
              </a>
            </nav>

            {/* Mobile Social Links */}
            <div className="space-y-4 mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                >
                  {FiGithub({ size: 20 })}
                  <span className="ml-2 font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                >
                  {FiLinkedin({ size: 20 })}
                  <span className="ml-2 font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Mobile Contact Button */}
            <button onClick={onContactClick} className="w-full btn btn-primary">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}
