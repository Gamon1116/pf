import React, { useEffect, useState } from 'react'
import {
  FiCode,
  FiSmartphone,
  FiZap,
  FiUsers,
  FiDatabase,
  FiCloud,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi'

const skills = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'React, TypeScript, Next.js를 활용한 현대적인 웹 애플리케이션 개발',
    level: 'Expert',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description: '모든 디바이스에서 완벽하게 작동하는 반응형 웹 디자인',
    level: 'Advanced',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    description: '웹 성능 최적화 및 사용자 경험 향상',
    level: 'Advanced',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: FiUsers,
    title: 'User Experience',
    description: '사용자 중심의 직관적이고 접근성 높은 인터페이스 설계',
    level: 'Expert',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiDatabase,
    title: 'Backend Integration',
    description: 'REST API, GraphQL을 활용한 백엔드 시스템 연동',
    level: 'Intermediate',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FiCloud,
    title: 'Cloud Services',
    description: 'AWS, Vercel 등 클라우드 서비스 활용 및 배포',
    level: 'Intermediate',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: FiShield,
    title: 'Security Best Practices',
    description: '웹 보안 모범 사례 적용 및 데이터 보호',
    level: 'Advanced',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: FiTrendingUp,
    title: 'SEO & Analytics',
    description: '검색 엔진 최적화 및 사용자 행동 분석',
    level: 'Intermediate',
    color: 'from-pink-500 to-pink-600',
  },
]

const technologies = [
  {
    name: 'React',
    level: 95,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
  },
  {
    name: 'TypeScript',
    level: 90,
    color: 'bg-gradient-to-r from-blue-600 to-blue-700',
  },
  {
    name: 'Next.js',
    level: 85,
    color: 'bg-gradient-to-r from-gray-700 to-gray-800',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    color: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
  },
  {
    name: 'Node.js',
    level: 75,
    color: 'bg-gradient-to-r from-green-500 to-green-600',
  },
  {
    name: 'PostgreSQL',
    level: 70,
    color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
  },
  {
    name: 'Docker',
    level: 65,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
  },
  {
    name: 'AWS',
    level: 60,
    color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="section-padding-lg bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-100 to-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="space-y-20">
          {/* About Me Section Header */}
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              <h2 className="section-title gradient-text">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto rounded-full" />
            </div>
            <p className="section-subtitle">
              프론트엔드 개발에 대한 열정과 창의성을 바탕으로, 사용자에게 의미
              있는 디지털 경험을 제공하는 것을 목표로 합니다.
              <br />
              <span className="text-brand-600 font-semibold">
                최신 기술 트렌드를 학습하고 적용하여 혁신적인 솔루션을
                만들어갑니다.
              </span>
            </p>
          </div>

          {/* Skills Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`card p-6 lg:p-8 group cursor-pointer transition-all duration-500 ${
                  activeSkill === index
                    ? 'ring-2 ring-brand-500 ring-offset-2'
                    : ''
                }`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white text-2xl">
                    {skill.icon({ size: 32 })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Skills */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Technical Skills
              </h3>
              <p className="text-gray-600">주요 기술 스택과 숙련도</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      {tech.name}
                    </span>
                    <span className="text-sm text-gray-500">{tech.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${tech.color}`}
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div
            className={`bg-gradient-to-r from-brand-50 to-blue-50 rounded-3xl p-8 lg:p-12 text-center transition-all duration-1000 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 group">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Problem Solver
                </h4>
                <p className="text-gray-600">
                  복잡한 문제를 창의적으로 해결하고 최적의 솔루션을 제시합니다.
                </p>
              </div>
              <div className="space-y-4 group">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Fast Learner
                </h4>
                <p className="text-gray-600">
                  새로운 기술과 도구를 빠르게 습득하고 프로젝트에 적용합니다.
                </p>
              </div>
              <div className="space-y-4 group">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  🤝
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Team Player
                </h4>
                <p className="text-gray-600">
                  효과적인 커뮤니케이션과 협업을 통해 팀의 성과를 극대화합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 delay-800 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              혁신적인 아이디어를 현실로 구현하고, 사용자에게 놀라운 경험을
              제공하는 프로젝트에 참여하고 싶습니다. 함께 성장하고 성공을
              만들어가요!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
