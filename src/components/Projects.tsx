import React, { useEffect, useState } from 'react'
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiGitBranch,
  FiCalendar,
} from 'react-icons/fi'

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'React, TypeScript, Node.js를 활용한 풀스택 이커머스 플랫폼. 결제 시스템, 관리자 대시보드, 실시간 재고 관리 기능을 포함합니다.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    stars: 128,
    forks: 45,
    updated: '2024-01-15',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      '팀 협업을 위한 태스크 관리 애플리케이션. 실시간 업데이트, 드래그 앤 드롭, 알림 시스템을 제공합니다.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Tailwind CSS',
      'Framer Motion',
    ],
    github: 'https://github.com',
    live: 'https://example.com',
    stars: 89,
    forks: 23,
    updated: '2024-01-10',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      '현대적인 디자인과 애니메이션을 적용한 포트폴리오 웹사이트. 반응형 디자인과 SEO 최적화를 포함합니다.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    stars: 67,
    forks: 18,
    updated: '2024-01-05',
  },
]

const otherProjects = [
  {
    id: 4,
    title: 'Weather Dashboard',
    description: '실시간 날씨 정보를 제공하는 대시보드 애플리케이션.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: '재료를 입력하면 레시피를 찾아주는 웹 애플리케이션.',
    tags: ['Vue.js', 'Recipe API', 'CSS Grid'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: '실시간 채팅 기능을 제공하는 웹 애플리케이션.',
    tags: ['React', 'Socket.io', 'Express.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 7,
    title: 'Blog Platform',
    description: '마크다운 지원과 관리자 기능을 포함한 블로그 플랫폼.',
    tags: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 8,
    title: 'Dashboard Template',
    description: '재사용 가능한 관리자 대시보드 템플릿.',
    tags: ['React', 'TypeScript', 'Ant Design', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 9,
    title: 'Mobile App',
    description: 'React Native를 활용한 크로스 플랫폼 모바일 애플리케이션.',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="section-padding-lg bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-brand-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="space-y-20">
          {/* Section Header */}
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              <h2 className="section-title gradient-text">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto rounded-full" />
            </div>
            <p className="section-subtitle">
              최신 기술을 활용하여 개발한 주요 프로젝트들을 소개합니다.
              <br />
              <span className="text-brand-600 font-semibold">
                각 프로젝트는 사용자 경험과 성능을 최우선으로 고려하여
                제작되었습니다.
              </span>
            </p>
          </div>

          {/* Featured Projects */}
          <div
            className={`space-y-12 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`card p-8 lg:p-12 group transition-all duration-500 ${
                  activeProject === project.id
                    ? 'ring-2 ring-brand-500 ring-offset-2'
                    : ''
                }`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-brand-100 hover:text-brand-700 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        {FiStar({ size: 16 })}
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {FiGitBranch({ size: 16 })}
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {FiCalendar({ size: 16 })}
                        <span>{project.updated}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary flex items-center justify-center space-x-2"
                      >
                        {FiGithub({ size: 18 })}
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary flex items-center justify-center space-x-2"
                      >
                        {FiExternalLink({ size: 18 })}
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Section */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                More Projects
              </h3>
              <p className="text-gray-600">
                추가적인 프로젝트와 실험적인 작업들
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="card p-6 group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                      >
                        {FiGithub({ size: 16 })}
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
                      >
                        {FiExternalLink({ size: 16 })}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기해보고 싶습니다.
              <br />
              <span className="text-brand-600 font-semibold">
                함께 멋진 것을 만들어봐요!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub에서 더 보기
              </a>
              <button className="btn btn-secondary">프로젝트 의뢰하기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
