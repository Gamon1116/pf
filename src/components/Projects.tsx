import React from 'react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E사 온도 모니터링 시스템',
      description:
        '기존 프로젝트의 전 기능(센서 시각화, 데이터 출력, 컴포넌트 구조화 등)을 통합한 데스크탑 앱 개발',
      technologies: ['React', 'TypeScript', 'Electron'],
      features: [
        '실시간 센서 데이터 시각화',
        '컴포넌트 기반 아키텍처',
        '무중단 운영 시스템',
      ],
      achievements: [
        '운영 중단 없는 안정적 동작 확보',
        '유지보수 효율화',
        '품질 개선',
        '보고서 기능 고도화',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'D사 온도 모니터링 시스템',
      description: '기존 앱 기능 유지하며 백엔드 포함한 전체 시스템 개발',
      technologies: [
        'React',
        'TypeScript',
        'Electron',
        'Node.js',
        'Axios',
        'PostgreSQL',
      ],
      features: [
        '백엔드 API 개발',
        'AWS 클라우드 인프라',
        '데이터 파이프라인 구축',
      ],
      achievements: [
        '데이터 흐름 안정화',
        '단독 개발로 전체 구조 이해 및 구현 역량 입증',
        '고객사 요구사항 정리 및 반영',
        '프론트, 백엔드 포함 전반 단독 구현',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'C사 온도 모니터링 시스템',
      description: '기존 고객사 앱 기반으로 UI/UX 강화, 다양한 시각화 도입',
      technologies: ['React', 'TypeScript', 'Electron'],
      features: [
        '다양한 차트 시각화',
        '대시보드 UI 개선',
        '실시간 데이터 처리',
      ],
      achievements: [
        '사용자 만족도 향상',
        '실시간 모니터링의 효율 개선',
        '프론트엔드 전체 담당',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 4,
      title: 'B사 온도 모니터링 시스템',
      description: '기존 시스템을 고객 요구사항에 맞춰 커스터마이징',
      technologies: ['React', 'TypeScript', 'Electron'],
      features: ['컴포넌트 구조화', '재사용 가능한 모듈', '유지보수성 강화'],
      achievements: [
        '코드 유지보수성 향상',
        '다수 고객사에 효율적으로 대응 가능',
        '프론트 전반 담당',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 5,
      title: 'A사 온도 모니터링 시스템',
      description: '다양한 시각화 방식 제공 + Excel/PDF 리포트 출력 기능 추가',
      technologies: ['React', 'TypeScript', 'Electron'],
      features: ['데이터 수집 파이프라인', '실시간 모니터링', '시각화 시스템'],
      achievements: [
        '업무 자동화',
        '시각화 정확도 향상',
        '프론트 주도, 백엔드 일부 개선',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 6,
      title: '소형 스마트팜 어플',
      description:
        '스마트팜 센서 정보를 시각화하고 제어할 수 있는 앱 프로토타입 개발',
      technologies: ['Flutter', 'Figma'],
      features: ['블루투스 센서 연동', '환경 정보 시각화', '원격 제어 시스템'],
      achievements: [
        '앱 방향성 설정',
        '기술 실험 성공',
        '기획~프로토타입 전체 주도',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 7,
      title: '대기환경 어플',
      description:
        '날씨, 게시판, 지도 기능 포함된 공공 데이터 기반 지역 앱 개발',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      features: ['공공 API 활용', '지역 정보 서비스', '모바일 최적화'],
      achievements: [
        '지역 정보 접근성 향상',
        '실사용 가능 MVP 구축',
        'AR 제외 전 기능 개발 / 기획 일부 참여',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 8,
      title: '온실 모니터링 제어프로그램',
      description: '센서 기반 환경 모니터링 + 제어 + CCTV 통합 앱 개발',
      technologies: ['React', 'Node.js', 'MySQL'],
      features: ['터치스크린 인터페이스', 'CCTV 영상 감시', '환경 제어 시스템'],
      achievements: [
        '직관적 제어 가능',
        '효율적 관리 환경 제공',
        '프론트 전체 / 백엔드 유지보수',
      ],
      image: '/api/placeholder/400/250',
    },
    {
      id: 9,
      title: '도시 하천 모니터링',
      description: '지역 날씨 정보를 실시간 제공하는 데스크탑 앱',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      features: ['키오스크 인터페이스', '공공 기상 API', '지역별 데이터 수집'],
      achievements: [
        '실사용 환경에서 안정 운영',
        '정보 접근성 향상',
        '프론트 전반 담당, 기획 일부 참여',
      ],
      image: '/api/placeholder/400/250',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              진행한 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              센서 기반 모니터링 시스템부터 모바일 앱까지 다양한 프로젝트를
              성공적으로 완료했습니다
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400">
                    📱
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Technologies */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      주요 기능:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      성과:
                    </h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-start"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
