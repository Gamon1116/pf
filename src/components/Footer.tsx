import React, { useEffect, useState } from 'react'
import {
  FiHeart,
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('footer')
    if (element) {
      observer.observe(element)
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer
        id="footer"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full opacity-15 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="space-y-16">
            {/* Main Footer Content */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Brand Section */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Portfolio
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  혁신적인 웹 솔루션을 제공하는 프론트엔드 개발자입니다. 사용자
                  경험을 최우선으로 생각하며 최신 기술을 활용한 프로젝트를
                  진행합니다.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-brand-400 hover:bg-gray-700 transition-all duration-200 group"
                  >
                    {FiGithub({ size: 18 })}
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-brand-400 hover:bg-gray-700 transition-all duration-200 group"
                  >
                    {FiLinkedin({ size: 18 })}
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-brand-400 hover:bg-gray-700 transition-all duration-200 group"
                  >
                    {FiTwitter({ size: 18 })}
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-left w-full"
                    >
                      About Me
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('skills')}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-left w-full"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-left w-full"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('experience')}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-left w-full"
                    >
                      Experience
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-left w-full"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Services</h4>
                <ul className="space-y-3">
                  <li className="text-gray-300 hover:text-brand-400 transition-colors duration-200 cursor-pointer">
                    웹 애플리케이션 개발
                  </li>
                  <li className="text-gray-300 hover:text-brand-400 transition-colors duration-200 cursor-pointer">
                    반응형 웹 디자인
                  </li>
                  <li className="text-gray-300 hover:text-brand-400 transition-colors duration-200 cursor-pointer">
                    UI/UX 디자인
                  </li>
                  <li className="text-gray-300 hover:text-brand-400 transition-colors duration-200 cursor-pointer">
                    웹 성능 최적화
                  </li>
                  <li className="text-gray-300 hover:text-brand-400 transition-colors duration-200 cursor-pointer">
                    기술 컨설팅
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Contact Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-brand-400 mt-1">
                      {FiMail({ size: 20 })}
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a
                        href="mailto:contact@example.com"
                        className="text-brand-400 hover:text-brand-300 transition-colors duration-200 text-sm"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-brand-400 mt-1">
                      {FiPhone({ size: 20 })}
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a
                        href="tel:+82-10-1234-5678"
                        className="text-brand-400 hover:text-brand-300 transition-colors duration-200 text-sm"
                      >
                        +82-10-1234-5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-brand-400 mt-1">
                      {FiMapPin({ size: 20 })}
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-brand-400 text-sm">
                        서울특별시 강남구
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div
              className={`border-t border-gray-700 pt-12 transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  최신 프로젝트와 기술 트렌드에 대한 업데이트를 받아보세요.
                  새로운 아이디어와 인사이트를 공유합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-brand-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div
              className={`border-t border-gray-700 pt-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span>© 2024 Portfolio. Made with</span>
                  <div className="text-red-500 animate-pulse">
                    {FiHeart({ className: 'text-red-500' })}
                  </div>
                  <span>in South Korea</span>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <button className="text-gray-400 hover:text-brand-400 transition-colors duration-200">
                    Privacy Policy
                  </button>
                  <button className="text-gray-400 hover:text-brand-400 transition-colors duration-200">
                    Terms of Service
                  </button>
                  <button className="text-gray-400 hover:text-brand-400 transition-colors duration-200">
                    Cookie Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-brand-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform z-50 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        {FiArrowUp({ size: 20 })}
      </button>
    </>
  )
}
