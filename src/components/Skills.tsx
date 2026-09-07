import React from 'react'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Backend / Data',
    items: ['Node.js', 'Express', 'tRPC', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    title: 'Desktop / Mobile / 3D',
    items: ['Electron', 'React Native', 'Flutter', 'Three.js'],
  },
  {
    title: 'Design',
    items: ['Figma', 'UI/UX'],
  },
  {
    title: 'Development / Automation',
    items: ['Vite', 'n8n', 'Google Apps Script'],
  },
]

export function Skills() {return <section id="skills" className="section shell"><div className="section-heading"><div><p className="eyebrow">03 / TOOLKIT</p><h2>사용 기술</h2></div><p>React·TypeScript를 중심으로 개발하며,<br/>프로젝트에 따라 API와 데이터베이스를 다룹니다.</p></div><div className="skills-list">{skillGroups.map(group=><div key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></div>)}</div></section>}
