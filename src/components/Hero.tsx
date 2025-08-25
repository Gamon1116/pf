import React from 'react'
import { FiMail, FiChevronDown } from 'react-icons/fi'

interface HeroProps {
  onContactClick: () => void
  onProjectsClick: () => void
}

export function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-4 animate-fade-in">
              안녕하세요! 👋
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-delayed">
              프론트엔드 개발자
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in-delayed-2">
              Son Jung-Woo
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed-3">
            센서 기반 앱 개발 경험을 바탕으로 UI 시각화, 데이터 처리, 보고서
            자동화 등 다양한 기능을 통합한 데스크탑/모바일 앱을 개발해왔습니다.
            <br />
            <br />
            일렉트론 기반 구조를 활용한 무중단 운영 시스템 구현, Flutter/React
            Native 기반의 모바일 앱, 백엔드 구축까지 폭넓게 경험했습니다.
            <br />
            <br />
            특히 Figma를 활용한 기획 및 디자인, GPT 및 Cursor AI 등 AI 도구를
            개발 과정에 적극 활용하여 테스트 자동화와 문서화 등 생산성 향상에
            기여하고 있습니다.
          </p>

          {/* Contact Info */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              {FiMail({ size: 20 })}
              <span className="text-lg">blaze.mind86@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delayed-4">
            <button
              onClick={onContactClick}
              className="btn btn-primary text-lg px-8 py-4 group"
            >
              <span className="flex items-center space-x-2">
                <span>연락하기</span>
                {FiMail({ size: 20 })}
              </span>
            </button>
            <button
              onClick={onProjectsClick}
              className="btn btn-secondary text-lg px-8 py-4 group"
            >
              <span className="flex items-center space-x-2">
                <span>프로젝트 보기</span>
                {FiChevronDown({ size: 20 })}
              </span>
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-delayed-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">연차 경력</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">9+</div>
              <div className="text-gray-600">완료 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">기술 스택</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">프론트엔드</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        {FiChevronDown({ size: 24 })}
      </div>
    </section>
  )
}
