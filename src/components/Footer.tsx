import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Son Jung-Woo
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                센서 기반 앱 개발부터 웹 애플리케이션까지 다양한 기술을 활용하여
                사용자 중심의 직관적 UI를 구현하는 프론트엔드 개발자입니다.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                빠른 링크
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    소개
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    프로젝트
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    연락처
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">서비스</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">웹 애플리케이션 개발</li>
                <li className="text-gray-300">모바일 앱 개발</li>
                <li className="text-gray-300">데스크탑 앱 개발</li>
                <li className="text-gray-300">UI/UX 디자인</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">
                  이메일
                </h5>
                <p className="text-gray-300">blaze.mind86@gmail.com</p>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">
                  응답 시간
                </h5>
                <p className="text-gray-300">24시간 이내</p>
              </div>
            </div>
          </div>

          {/* AI Creation Note */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                이 포트폴리오는 Cursor AI를 활용하여 AI 기반 바이브코딩으로
                제작되었습니다.
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Son Jung-Woo. All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 group"
              aria-label="맨 위로 스크롤"
            >
              {FiArrowUp({ size: 20 })}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
