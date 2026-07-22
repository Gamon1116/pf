import React from 'react'

const experiences = [
  {
    title: '1. 데이터 렌더링 최적화',
    description:
      '수집되는 데이터를 차트에 그릴 때 방대한 데이터 처리 문제로 프론트엔드 프리징이 발생했습니다. 데이터 양 축소나 다운샘플링을 제안했으나 불가하다는 답변을 받았고, 배포가 불가능하다고 판단해 직접 한계점을 테스트했습니다. 안정적으로 조회 가능한 기간을 확인한 뒤 다시 제안하여 시스템을 안정적으로 작동시킨 경험이 있습니다.',
  },
  {
    title: '2. 유지보수를 고려한 배포 방향 개선',
    description:
      '고객사 폐쇄망 환경에서 Electron 데스크톱 앱의 배포 문제를 해결하기 위해 Web-App 전환을 제안하고 수행했습니다. 설치형 배포는 버전 업데이트마다 고객사 방문이 필수였지만, Web-App으로 전환하고 Electron의 tRPC 통신 구조를 웹으로 마이그레이션하여 백엔드 연동을 완료하고 프로그램의 확장성을 높였습니다.',
  },
  {
    title: '3. 보일러플레이트 구축과 AI의 활용',
    description:
      '고객사마다 가변적인 요구사항으로 기존 배포 프로젝트를 매번 수정하는 방식이 비효율적이라고 판단, 보일러플레이트 제작을 제안하여 설계 및 개발했습니다. Cursor와 Claude 등 AI Agent를 활용해 리팩토링과 컴포넌트 재사용 효율을 높였으며, 코드 누락 및 원치 않는 방향성 오류를 방지하기 위해 설계와 철저한 검증 과정을 거쳐 서비스 안정성을 확보했습니다.',
  },
  {
    title: '4. 요구사항 정리와 화면 설계',
    description:
      '개발 착수 전 요구사항을 정리하고 Figma로 화면 흐름을 잡습니다. 모니터링 UI 레이아웃(Variables·Swap 라이브러리 활용), 사내 홍보용 프로토타입 제작 등을 해왔습니다. 납품·사내 프로젝트 특성상 공개 산출물은 제한적이나, 이전 직무 경험을 바탕으로 요구사항을 개발 단위로 풀어내는 데 익숙합니다.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기술과 현장을 잇는 개발자
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              기술과 현장을 잇는 개발자
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                React와 Node.js를 기반으로 산업용 모니터링 시스템과 반응형 웹
                애플리케이션을 개발하며, 단순한 기능 구현이 아닌 새로운 기능에
                대한 고민과 재활용성을 높이는 개발을 지향해 왔습니다. 개발자
                이전의 다양한 실무 경험을 통해 개발 중심의 사고에 치우치지
                않고 현장 활용도와 사용자 편의성을 고려한 서비스를 만들기 위해
                노력하고 있습니다.
              </p>
              <p>
                메인 스택은 React, React Native, Node.js를 주로 사용하고 있으며
                기본적인 DB 및 백엔드, REST API 구현도 가능합니다.
              </p>
              <p>
                Cursor·Claude 등 AI Agent를 개발 파트너로 활용하는 바이브 코딩
                방식을 선호합니다. 설계와 검증은 직접 수행하고, 반복
                구현·리팩토링은 AI와 협업해 생산성을 높입니다. 코드 누락이나
                방향 이탈을 막기 위해 구조를 먼저 잡고 결과물을 꼼꼼히 검토하는
                것을 원칙으로 합니다.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 경험</h3>
            <div className="space-y-4">
              {experiences.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
