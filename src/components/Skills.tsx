import React from 'react'

export function Skills() {
  const skills = {
    frontend: [
      { name: 'React.js', level: 4, color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', level: 4, color: 'from-purple-500 to-purple-600' },
      { name: 'TypeScript', level: 3, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Vue.js', level: 3, color: 'from-green-500 to-green-600' },
    ],
    backend: [
      { name: 'Node.js', level: 3, color: 'from-yellow-500 to-yellow-600' },
      { name: 'MongoDB', level: 2, color: 'from-emerald-500 to-emerald-600' },
      { name: 'PostgreSQL', level: 2, color: 'from-teal-500 to-teal-600' },
    ],
    app: [
      { name: 'React Native', level: 3, color: 'from-cyan-500 to-cyan-600' },
      { name: 'Flutter', level: 2, color: 'from-pink-500 to-pink-600' },
    ],
    tools: [
      { name: 'Figma', level: 3, color: 'from-orange-500 to-orange-600' },
    ],
  }

  const renderSkillBar = (skill: {
    name: string
    level: number
    color: string
  }) => (
    <div
      key={skill.name}
      className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-700">{skill.name}</span>
          <span className="text-sm font-bold text-gray-500">
            Level {skill.level}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
            style={{ width: `${(skill.level / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">기술 스택</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 기술을 활용하여 프로젝트를 완성합니다
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Frontend
              </h3>
              <div className="space-y-4">
                {skills.frontend.map(renderSkillBar)}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Backend
              </h3>
              <div className="space-y-4">
                {skills.backend.map(renderSkillBar)}
              </div>
            </div>

            {/* App Development Skills */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                App Development
              </h3>
              <div className="space-y-4">{skills.app.map(renderSkillBar)}</div>
            </div>

            {/* Design & Tools */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                Design & Tools
              </h3>
              <div className="space-y-4">
                {skills.tools.map(renderSkillBar)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
