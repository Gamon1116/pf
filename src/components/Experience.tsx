import React from 'react'

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">근무 이력</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 회사에서의 개발 경험과 성과
            </p>
          </div>

          {/* Work Experience Cards */}
          <div className="space-y-8">
            {/* A사 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">A사</h4>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    재직중
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">2023년 12월 - 현재</p>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  프론트엔드 개발자
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  공정 모니터링 프로그램 개발, React Native 앱 유지보수,
                  Electron 기반 데스크탑 애플리케이션 개발 및 유지보수
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'Node.js',
                    'PostgreSQL',
                    'React Native',
                    'Electron',
                  ].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* B사 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">B사</h4>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                    퇴사
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  2021년 4월 - 2023년 8월
                </p>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  프론트엔드 개발자
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  모니터링 프로그램 개발, 모바일 어플리케이션 개발, 스마트팜
                  어플리케이션 기획 및 테스트 버전 제작
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'JavaScript',
                    'Node.js',
                    'React Native',
                    'MongoDB',
                    'Flutter',
                  ].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 상공회의소 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    상공회의소 JAVA 개발자 과정
                  </h4>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    수료
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  2020년 3월 - 2020년 7월 (5개월)
                </p>
                <p className="text-sm font-medium text-gray-700 mb-2">교육생</p>
                <p className="text-sm text-gray-600 mb-3">
                  공공 API를 활용한 전라남도 관광지 정보 프로그램 개발, 개인
                  포트폴리오 프로그램 개발
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring', 'HTML/CSS', 'OpenAPI'].map(
                    (tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
