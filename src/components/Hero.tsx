import React, { useEffect, useState } from 'react'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from 'react-icons/fi'

interface HeroProps {
  onContactClick: () => void
  onProjectsClick: () => void
}

export function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-brand-200 to-blue-200 rounded-full opacity-20 blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-15 blur-2xl animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Main Title */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">안녕하세요! 👋</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              프론트엔드 개발자
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto rounded-full animate-pulse-slow" />
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              React, TypeScript, Next.js를 활용하여 사용자 경험을 향상시키는
              <span className="text-brand-600 font-semibold">
                {' '}
                현대적인 웹 애플리케이션
              </span>
              을 개발합니다.
              <br className="hidden sm:block" />
              <span className="text-gray-500 text-base sm:text-lg md:text-xl">
                창의적인 아이디어와 기술적 전문성을 바탕으로 디지털 혁신을
                이끌어갑니다.
              </span>
            </p>
          </div>

          {/* Statistics */}
          <div
            className={`grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-600 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-600 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-600 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                Happy Clients
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={onProjectsClick}
              className="group btn btn-primary text-lg px-8 py-4"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>프로젝트 보기</span>
                <div className="w-5 h-5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300" />
              </span>
            </button>
            <button
              onClick={onContactClick}
              className="btn btn-secondary text-lg px-8 py-4"
            >
              연락하기
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-4 sm:space-x-6 transition-all duration-1000 delay-800 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-600 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
            >
              {FiGithub({ size: 20 })}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-600 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
            >
              {FiLinkedin({ size: 20 })}
            </a>
            <a
              href="mailto:contact@example.com"
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-600 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
            >
              {FiMail({ size: 20 })}
            </a>
            <button className="group w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center text-white hover:shadow-xl hover:scale-110 transition-all duration-300 transform">
              {FiDownload({ size: 20 })}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`pt-8 transition-all duration-1000 delay-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center space-y-2 text-gray-500 hover:text-brand-600 transition-colors duration-300"
            >
              <span className="text-sm font-medium">더 알아보기</span>
              <div className="w-6 h-6 animate-bounce-gentle">
                {FiArrowDown({ size: 24 })}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
