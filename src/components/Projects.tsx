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
  automation: {
    label: '업무 자동화',
    accent: 'border-t-amber-500',
    bg: 'bg-amber-50 text-amber-700',
  },
  mobile: {
    label: '모바일 · 웹',
    accent: 'border-t-emerald-500',
    bg: 'bg-emerald-50 text-emerald-700',
  },
}

interface ProjectCardData {
  id: number
  category: keyof typeof categoryStyles
  title: string
  period: string
  role: string
  description?: string
  technologies: string[]
  highlights: string[]
  icon: string
  decisions?: { label: string; text: string }[]
}

function ProjectCard({project}:{project:ProjectCardData}) {
 return <article className="project-row"><div className="project-meta"><span className="eyebrow">{categoryStyles[project.category].label}</span><p>{project.period}</p><p>{project.role}</p></div><div><h3>{project.title}</h3><ul className="project-points">{project.highlights.map(item=><li key={item}>{item}</li>)}</ul><div className="project-decisions">{project.decisions?.map(item=><div key={item.label}><h4>{item.label}</h4><p>{item.text}</p></div>)}</div><p className="technology-line">{project.technologies.join(' / ')}</p></div></article>
}

const currentProjects: ProjectCardData[] = [
  {
    id: 1,
    category: 'internal',
    title: '업무 보고 · 프로젝트 일정 관리 시스템',
    period: '2026.06 ~ 현재',
    role: '기획 · 화면 설계 · 단독 개발',
    technologies: ['React', 'TypeScript', 'Firebase', 'n8n', 'Slack', 'Vite'],
    highlights: [
      '사내에서 사용 중인 업무 보고 시스템 기획·화면 설계·단독 개발',
      '프로젝트별·직무별 업무 입력 구조와 간트 차트 설계 — 진행률은 사용자 직접 입력',
      '슬랙 슬래시 커맨드와 반응형 웹의 두 가지 입력 방식 구현',
      'n8n 기반 슬랙 연동 및 Firebase 인증·데이터 구조 구축',
    ],
    icon: '📋',
  },
  {
    id: 2,
    category: 'internal',
    title: '사내 개발 표준화 및 DX 개선',
    period: '2025.11 ~ 현재',
    role: '개발 구조 개선 방향 수립 · Frontend 주도',
    technologies: ['React', 'TypeScript', 'React Native', 'Three.js'],
    highlights: [
      '프로젝트 공통 보일러플레이트의 개선 방향 수립과 구조 변경 주도',
      '재사용 가능한 공통 UI 컴포넌트 개발 및 유지보수',
      '3D 모델 뷰어 연동 유틸리티 프로그램 기획·개발',
      '사내 테스트용 React Native 애플리케이션 개발',
      '프로젝트별 반복 화면과 기능을 공통 컴포넌트로 정리',
    ],
    icon: '🛠️',
  },
  {
    id: 3,
    category: 'monitoring',
    title: 'S업체 폐쇄망 맞춤형 시스템',
    period: '2024.06 ~ 2025.10',
    role: 'Web 전환 제안 · Frontend / Backend',
    decisions: [
      { label: '운영 문제', text: '설치형 시스템은 업데이트를 위해 현장 방문이 필요했습니다.' },
      { label: '제안과 구현', text: 'Web 전환을 제안하고 React 화면과 Node.js·tRPC 통신 구조를 변경해 현장 방문 없이 업데이트할 수 있도록 개선했습니다.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'tRPC'],
    highlights: [
      'React·TypeScript 기반 산업용 모니터링 시스템 개발',
      '기존 Electron 설치형 시스템을 Web 환경으로 마이그레이션',
      'Node.js 및 tRPC 기반 API 연동 및 시스템 통합 개발',
      '센서 데이터 양과 조회 기간별 브라우저 처리 한계를 확인하고 안정적인 조회 기준 설정',
      '폐쇄망 환경을 고려한 배포 구조 개선 및 유지보수',
    ],
    icon: '🏭',
  },
  {
    id: 4,
    category: 'monitoring',
    title: 'P업체 3D 연동 산업용 모니터링 시스템',
    period: '2024.05 ~ 2026.03',
    role: 'Frontend',
    technologies: ['React', 'TypeScript', 'Three.js'],
    highlights: [
      'React 기반 산업용 모니터링 화면 개발',
      'Three.js 기반 3D 모델 연동 기능 개발',
      '프로젝트 V2 신규 화면 개발 및 기능 고도화',
      '요구사항 변경에 따른 UI 개선 및 기능 확장',
      '공통 컴포넌트를 활용한 반복 화면 개발 및 유지보수',
    ],
    icon: '📊',
  },
  {
    id: 5,
    category: 'monitoring',
    title: 'A업체 산업용 모니터링 시스템',
    period: '2023.12 ~ 현재',
    role: 'Frontend',
    technologies: ['React', 'TypeScript', 'React Native'],
    highlights: [
      'React·TypeScript 기반 산업용 모니터링 시스템 프론트엔드 개발',
      '신규 기능 요구사항 분석 및 화면 설계·개발',
      'React Native 기반 모바일 모니터링 애플리케이션 개발',
      '기존 기능 개선 및 리팩토링',
      '공통 컴포넌트 적용 및 프로젝트 유지보수',
    ],
    icon: '⚙️',
  },
]

const otherMonitoringItems = [
  'React·TypeScript 기반 모니터링 화면 개발',
  '센서 데이터 시각화',
  '설비 상태 및 모니터링 UI 개발',
  '고객사별 요구사항에 따른 기능 개발',
  '기존 시스템 유지보수 및 기능 개선',
  '공통 컴포넌트를 활용한 반복 화면 개발',
]

const automationProjects: ProjectCardData[] = [
  {
    id: 101,
    category: 'automation',
    title: '업무 데이터 수집·처리 자동화',
    period: '사내 DX',
    role: '기획 · 구축',
    technologies: ['n8n', 'Google Apps Script'],
    highlights: [
      '반복적인 업무 데이터 수집 및 처리 자동화',
      '사내 업무 데이터 연계',
    ],
    icon: '🔁',
  },
  {
    id: 102,
    category: 'automation',
    title: '외부 서비스 · API 연동',
    period: '사내 DX',
    role: '기획 · 구축',
    technologies: ['n8n'],
    highlights: ['외부 서비스/API 연동', '필요한 정보를 자동으로 처리·전달'],
    icon: '🔗',
  },
  {
    id: 103,
    category: 'automation',
    title: '자동 알림 및 업무 처리',
    period: '사내 DX',
    role: '기획 · 구축',
    technologies: ['n8n', 'Google Apps Script'],
    highlights: [
      '자동 알림 및 업무 처리 자동화',
      '반복 업무를 줄이기 위한 내부 도구 제작',
    ],
    icon: '🔔',
  },
]

const previousProjects: ProjectCardData[] = [
  {
    id: 6,
    category: 'monitoring',
    title: '도시 하천 감시 시스템',
    period: '2021.06 ~ 2021.12',
    role: 'Frontend',
    technologies: ['React', 'TypeScript', 'Node.js'],
    highlights: [
      'React·TypeScript 기반 산업용 모니터링 화면 개발',
      '프로젝트 초기 화면 구조 설계 및 프론트엔드 개발',
      '실시간 센서 데이터 시각화 및 차트 화면 구현',
      '공공 데이터 연동 및 UI 개선',
    ],
    icon: '🌊',
  },
  {
    id: 7,
    category: 'monitoring',
    title: '온실 통합 제어·모니터링',
    period: '2022.02 ~ 2023.03',
    role: 'Frontend',
    technologies: ['React', 'Node.js', 'MySQL'],
    highlights: [
      '센서 기반 환경 모니터링 및 제어 화면 설계·개발',
      '터치스크린 환경에 맞춘 UI 구현',
      '서버 리뉴얼 프로젝트 참여 및 API 구조 개선',
      '기존 기능 유지보수 및 화면 개선',
    ],
    icon: '🌡️',
  },
  {
    id: 8,
    category: 'mobile',
    title: '도시환경 서비스',
    period: '2022.06 ~ 2022.12',
    role: '화면 기획 · Frontend / Backend',
    technologies: ['React', 'Flutter', 'Node.js'],
    highlights: [
      '서비스에 필요한 데이터를 확인하고 화면별 정보 배치 기획',
      'Flutter 모바일 애플리케이션 및 React 관리자 웹 개발',
      'REST API 설계 및 데이터 모델링',
      '공공 API 연동 및 데이터 처리 기능 개발',
      '모바일·웹 기능 동시 개발 및 유지보수',
    ],
    icon: '🏙️',
  },
  {
    id: 9,
    category: 'mobile',
    title: '스마트팜 애플리케이션',
    period: '2023.04 ~ 2023.06',
    role: '화면 기획 · 설계 · 단독 개발',
    technologies: ['React Native', 'TypeScript', 'Figma'],
    highlights: [
      '모니터링에 필요한 데이터를 확인하고 화면 구성 기획',
      'React Native 기반 스마트팜 모바일 애플리케이션 설계·개발',
      '센서 데이터 시각화 화면 구현',
      'Figma를 활용한 UI/UX 설계 및 프로토타입 제작',
      '블루투스 기반 센서 연동 기능 구현',
    ],
    icon: '🌱',
  },
]

export function Projects() {
 const allProjects = [...currentProjects, ...previousProjects]
 const featuredIds = [3, 1, 4]
 const featured = featuredIds.map(id => allProjects.find(project => project.id === id)!)
 const groups = [
   { category: 'monitoring', title: '산업용 모니터링', description: '센서 데이터 시각화와 설비 운영 화면' },
   { category: 'mobile', title: '모바일 · 웹', description: '모바일 앱과 관리자 웹 개발' },
   { category: 'internal', title: '사내 도구 · 업무 자동화', description: '공통 개발 환경과 반복 업무 개선' },
 ]
 return (
   <section id="projects" className="section shell">
     <div className="section-heading">
       <div><p className="eyebrow">01 / SELECTED WORK</p><h2>대표 프로젝트</h2></div>
       <p>요구사항을 정리하고, 화면과 기능으로 구체화했습니다.<br/>각 프로젝트에서 맡은 역할과 판단을 소개합니다.</p>
     </div>
     <p className="confidential-note">기업 내부·납품 프로젝트의 화면과 상세 자료는 공개하지 않습니다. 고객사는 익명으로 표기했습니다.</p>
     <div>{featured.map(project => <ProjectCard key={project.id} project={project}/>)}</div>
     <div className="other-projects">
       <h3 className="other-projects-title">그 외 프로젝트</h3>
       {groups.map(group => (
         <details className="work-details" key={group.category}>
           <summary>{group.title}<span>{group.description} ↓</span></summary>
           <div>
             {allProjects.filter(project => project.category === group.category && !featuredIds.includes(project.id)).sort((a,b) => b.period.localeCompare(a.period)).map(project => <ProjectCard key={project.id} project={project}/>)}
             {group.category === 'monitoring' && <div className="additional-work"><h3>기타 모니터링 개발 업무</h3><ul className="project-points">{otherMonitoringItems.map(item => <li key={item}>{item}</li>)}</ul></div>}
             {group.category === 'internal' && <div className="additional-work"><p className="eyebrow">업무 자동화 · 기획 / 구축</p><h3>업무 데이터 연계와 반복 작업 자동화</h3><p>n8n과 Google Apps Script로 업무 데이터 수집·처리, 외부 서비스 연동, 자동 알림을 구성했습니다.</p><p className="technology-line">{Array.from(new Set(automationProjects.flatMap(project => project.technologies))).join(' / ')}</p></div>}
           </div>
         </details>
       ))}
     </div>
   </section>
 )
}
