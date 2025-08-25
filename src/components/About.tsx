import React from 'react'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              프론트엔드 개발자로서의 성장 과정과 개발 철학
            </p>
          </div>

          {/* Personal Story */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              개발자로의 여정
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                2020년 상공회의소 JAVA 개발자 과정을 시작으로 개발의 세계에 발을
                들였습니다. 처음에는 Java와 Spring을 기반으로 한 웹 개발을
                배웠고, 전라남도 관광지 정보 프로그램과 개인 포트폴리오
                프로그램을 개발하며 개발의 기본기를 다졌습니다.
              </p>
              <p>
                이후 B사에서 프론트엔드 개발자로 일하며 React와 React Native를
                활용한 모니터링 프로그램과 모바일 애플리케이션 개발 경험을
                쌓았습니다. 특히 스마트팜 애플리케이션 기획부터 테스트 버전
                제작까지 전체 개발 과정을 경험할 수 있었습니다.
              </p>
              <p>
                현재 A사에서 공정 모니터링 프로그램 개발과 React Native 앱
                유지보수를 담당하고 있으며, Electron을 활용한 데스크탑
                애플리케이션 개발에도 참여하고 있습니다.
              </p>
            </div>
          </div>

          {/* Development Philosophy */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">개발 철학</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  사용자 중심의 개발
                </h4>
                <p>
                  기술적 완성도보다는 사용자가 실제로 필요로 하는 기능과
                  사용성을 우선시합니다. 센서 기반 앱 개발 경험을 통해 복잡한
                  데이터를 직관적으로 시각화하는 것의 중요성을 배웠습니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  지속적인 학습과 혁신
                </h4>
                <p>
                  새로운 기술과 도구에 대한 호기심을 가지고 있으며, AI 도구를
                  적극적으로 활용하여 개발 생산성을 향상시키고 있습니다. GPT와
                  Cursor AI를 활용한 테스트 자동화와 문서화는 제가 추구하는 개발
                  방식의 핵심입니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  전체 개발 과정 참여
                </h4>
                <p>
                  단순한 코드 구현자가 아닌, 기획부터 설계, 구현, 테스트까지
                  모든 단계에 참여할 수 있는 개발자로 성장하고자 합니다. Figma를
                  활용한 UI/UX 설계 경험은 이러한 목표를 위한 중요한 역량입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">미래 목표</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>기술적 성장:</strong> 최신 프론트엔드 기술 트렌드를
                파악하고 적용하여 더 나은 사용자 경험을 제공하는 애플리케이션을
                개발하고 싶습니다.
              </p>
              <p>
                <strong>리더십 역량:</strong> 개발팀에서 기술적 의사결정에
                참여하고, 주니어 개발자들의 성장을 돕는 역할을 담당하고
                싶습니다.
              </p>
              <p>
                <strong>사이드 프로젝트:</strong> 개인적인 관심사와 기술적
                도전을 결합한 혁신적인 프로젝트를 진행하여 개발 커뮤니티에
                기여하고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
