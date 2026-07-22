import React from 'react'

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">근무 이력</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 회사에서의 개발 경험과 성과
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="border-l-4 border-blue-500 pl-6 pr-6 py-4 bg-blue-50 rounded-r-lg">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    프론트엔드 개발자
                  </h4>
                  <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    재직중
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">2023.12 ~ 현재</p>
                <p className="text-sm text-gray-600 mb-3">
                  산업용 모니터링 시스템, 폐쇄망 웹 전환, 3D 모델 연동, 사내 DX
                  개선, 업무 보고 시스템 등 프론트엔드·풀스택 개발
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'Node.js',
                    'React Native',
                    'Electron',
                    'Three.js',
                    'Firebase',
                    'PostgreSQL',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="border-l-4 border-blue-500 pl-6 pr-6 py-4 bg-blue-50 rounded-r-lg">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    기업부설 연구소 · 주임연구원 · 웹개발
                  </h4>
                  <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                    퇴사
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  2021.03 ~ 2023.08 (2년 6개월)
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  모니터링 프로그램, 모바일 애플리케이션, 스마트팜 앱 기획 및
                  개발. REST API 설계·유지보수, Node.js 경량 백엔드, DB 설계
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'Flutter',
                    'React Native',
                    'Node.js',
                    'PostgreSQL',
                    'MySQL',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
