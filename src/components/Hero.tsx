import React from 'react'
import { FiMail, FiChevronDown } from 'react-icons/fi'

interface HeroProps {
  onContactClick: () => void
  onProjectsClick: () => void
}

const focusAreas = [
  '산업용 모니터링',
  '요구사항 · 화면 설계',
  '백엔드 연동',
  '모바일 · 웹',
]

export function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sky-100/80 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest text-sky-700 uppercase mb-6 animate-fade-in">
            Frontend Developer · Planning
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight animate-fade-in-delayed">
            기술과 현장을 잇는 개발자
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-8 animate-fade-in-delayed-2">
            Son Jung-Woo
          </p>

          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed-3">
            산업용 모니터링 시스템과 B2B 웹·앱을 요구사항 정리부터 개발까지 수행합니다.
            React·Node.js 중심의 프론트엔드 개발을 주력으로, API 설계와 백엔드
            연동도 직접 다룹니다.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in-delayed-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center mb-8 text-slate-500">
            <div className="flex items-center gap-2 hover:text-sky-600 transition-colors">
              {FiMail({ size: 18 })}
              <span>blaze.mind86@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-4">
            <button
              onClick={onProjectsClick}
              className="btn btn-primary text-base px-8 py-3.5"
            >
              프로젝트 보기
            </button>
            <button
              onClick={onContactClick}
              className="btn btn-secondary text-base px-8 py-3.5"
            >
              연락하기
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
        {FiChevronDown({ size: 22 })}
      </div>
    </section>
  )
}
