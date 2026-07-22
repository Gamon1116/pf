import React from 'react'

const categoryStyles: Record<
  string,
  { label: string; accent: string; bg: string }
> = {
  monitoring: {
    label: '산업용 모니터링',
    accent: 'border-t-sky-500',
    bg: 'bg-sky-50 text-sky-700',
  },
  internal: {
    label: '사내 도구',
    accent: 'border-t-violet-500',
    bg: 'bg-violet-50 text-violet-700',
  },
  mobile: {
    label: '모바일 · 웹',
    accent: 'border-t-emerald-500',
    bg: 'bg-emerald-50 text-emerald-700',
  },
}

export function Projects() {
  const projects = [
    {
      id: 1,
      category: 'internal' as const,
      title: '업무 보고 · 프로젝트 일정 시스템',
      period: '2026.06 ~ 현재',
      description:
        '일일 업무 기록과 프로젝트 간트 일정을 연동하는 사내 웹앱 기획·개발',
      technologies: ['React', 'TypeScript', 'Firebase', 'Vite'],
      highlights: [
        '업무 기록 제출 시 진행률이 간트 차트에 자동 반영',
        'Firebase Auth·Firestore 기반 단독 설계·구축',
      ],
      icon: '📋',
    },
    {
      id: 2,
      category: 'internal' as const,
      title: '사내 개발 표준화 및 DX 개선',
      period: '2025.11 ~ 현재',
      description:
        '팀 개발 생산성 향상을 위한 보일러플레이트, 유틸리티, 모바일 앱 개발',
      technologies: ['React', 'TypeScript', 'React Native', 'Three.js'],
      highlights: [
        '프론트엔드 보일러플레이트 구축 및 지속 유지보수',
        '3D 모델 뷰어 연동 유틸리티 프로그램 기획·개발',
      ],
      icon: '🛠️',
    },
    {
      id: 3,
      category: 'monitoring' as const,
      title: 'S업체 폐쇄망 맞춤형 시스템',
      period: '2024.06 ~ 2025.10',
      description:
        '고객사 내부망 환경에 맞춘 시스템 통합 개발 및 Electron → Web 전환',
      technologies: ['React', 'TypeScript', 'Node.js', 'tRPC'],
      highlights: [
        '폐쇄망 제약 파악 후 Electron → Web 선제적 마이그레이션',
        '대용량 데이터 차트 렌더링 최적화로 안정적 운영 확보',
      ],
      icon: '🏭',
    },
    {
      id: 4,
      category: 'monitoring' as const,
      title: 'P업체 3D 연동 산업용 모니터링',
      period: '2024.05 ~ 2026.03',
      description:
        '산업용 모니터링 시스템 프론트엔드 개발 및 3D 모델 연동, V2 고도화',
      technologies: ['React', 'TypeScript', 'Three.js'],
      highlights: [
        '3D 모델 연동 모니터링 화면 개발',
        '요구사항 변화에 맞춘 V2 화면 고도화',
      ],
      icon: '📊',
    },
    {
      id: 5,
      category: 'monitoring' as const,
      title: 'A업체 모니터링 시스템',
      period: '2023.12 ~ 현재',
      description: '모니터링 시스템 전 주기 프론트엔드 개발 및 모바일 확장',
      technologies: ['React', 'TypeScript', 'React Native'],
      highlights: [
        '신규 기능 기획부터 프론트엔드 구현까지 전 주기 참여',
        'React Native 모바일 모니터링 앱 설계·개발',
      ],
      icon: '⚙️',
    },
    {
      id: 6,
      category: 'mobile' as const,
      title: '스마트팜 애플리케이션',
      period: '2023.04 ~ 2023.06',
      description: '스마트팜용 모바일 UI/UX 설계 및 React Native 개발',
      technologies: ['React Native', 'TypeScript'],
      highlights: [
        '모바일 UI/UX 설계부터 개발까지 전체 주도',
        '센서 정보 시각화 화면 구현',
      ],
      icon: '🌱',
    },
    {
      id: 7,
      category: 'mobile' as const,
      title: '도시환경 서비스',
      period: '2022.06 ~ 2022.12',
      description:
        '모바일 앱(Flutter)과 관리자 웹(React) 동시 개발 및 API 설계',
      technologies: ['React', 'Flutter', 'Node.js'],
      highlights: [
        'Flutter 앱과 React 관리자 웹 동시 개발',
        'REST API 설계 및 데이터 모델링',
      ],
      icon: '🏙️',
    },
    {
      id: 8,
      category: 'monitoring' as const,
      title: '온실 통합 제어·모니터링',
      period: '2022.02 ~ 2023.03',
      description:
        '센서 기반 환경 모니터링·제어 시스템 화면 기획 및 프론트엔드 구현',
      technologies: ['React', 'Node.js', 'MySQL'],
      highlights: [
        '터치스크린 환경 모니터링·제어 UI 설계·구현',
        '서버 리뉴얼 기획 참여 (API 구조 개선)',
      ],
      icon: '🌡️',
    },
    {
      id: 9,
      category: 'monitoring' as const,
      title: '도시 하천 감시 시스템',
      period: '2021.06 ~ 2021.12',
      description:
        '시스템 아키텍처 설계 및 실시간 센서 데이터 시각화 프론트엔드 개발',
      technologies: ['React', 'TypeScript', 'Node.js'],
      highlights: [
        '프로젝트 초기 아키텍처 설계 주도',
        '실시간 센서 데이터 차트 구현',
      ],
      icon: '🌊',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              진행한 프로젝트
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              산업용 모니터링부터 사내 도구까지 — 핵심만 정리했습니다.
              상세 내용은 면접 시 설명드릴 수 있습니다.
            </p>
            <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto">
              납품·사내 프로젝트는 보안상 UI 스크린샷 대신 카테고리 아이콘으로
              표시합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const style = categoryStyles[project.category]
              return (
                <div
                  key={project.id}
                  className={`bg-white rounded-xl border border-slate-200 border-t-4 ${style.accent} hover:shadow-md transition-shadow`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-md ${style.bg}`}
                      >
                        {style.label}
                      </span>
                      <span className="text-2xl opacity-50" aria-hidden>
                        {project.icon}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-sky-600 mb-3">{project.period}</p>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 border-t border-slate-100 pt-4">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-sky-500 shrink-0 mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
