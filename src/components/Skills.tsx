import React from 'react'

export function Skills() {
  const skills = {
    frontend: [
      { name: 'React / TypeScript', level: 4, color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', level: 4, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Electron', level: 3, color: 'from-slate-500 to-slate-600' },
      { name: 'Three.js', level: 3, color: 'from-violet-500 to-violet-600' },
    ],
    backend: [
      { name: 'Node.js', level: 3, color: 'from-amber-500 to-amber-600' },
      { name: 'REST API 설계', level: 3, color: 'from-yellow-500 to-yellow-600' },
      { name: 'PostgreSQL', level: 2, color: 'from-teal-500 to-teal-600' },
      { name: 'Firebase', level: 3, color: 'from-orange-500 to-orange-600' },
    ],
    app: [
      { name: 'React Native', level: 3, color: 'from-cyan-500 to-cyan-600' },
      { name: 'Flutter', level: 2, color: 'from-pink-500 to-pink-600' },
    ],
    tools: [
      { name: 'Figma', level: 3, color: 'from-rose-500 to-rose-600' },
      { name: 'Cursor / Claude', level: 4, color: 'from-sky-500 to-sky-600' },
    ],
  }

  const renderSkillBar = (skill: {
    name: string
    level: number
    color: string
  }) => (
    <div
      key={skill.name}
      className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-slate-100"
    >
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-slate-700">{skill.name}</span>
          <span className="text-xs font-medium text-slate-400">
            {skill.level}/5
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5">
          <div
            className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">기술 스택</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              프론트엔드 중심이며, API·DB 연동까지 프로젝트에 참여합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Frontend</h3>
              <p className="text-sm text-slate-500 mb-6">주력 영역</p>
              <div className="space-y-3">
                {skills.frontend.map(renderSkillBar)}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Backend & DB
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                전담 백엔드는 아니나 API·DB 연동 구현 가능
              </p>
              <div className="space-y-3">
                {skills.backend.map(renderSkillBar)}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile</h3>
              <p className="text-sm text-slate-500 mb-6">앱 화면 설계·개발</p>
              <div className="space-y-3">{skills.app.map(renderSkillBar)}</div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tools</h3>
              <p className="text-sm text-slate-500 mb-6">협업·개발 도구</p>
              <div className="space-y-3">
                {skills.tools.map(renderSkillBar)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
