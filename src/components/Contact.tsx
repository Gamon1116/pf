import React, { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create email content for clipboard
    const emailContent = `제목: ${formData.subject}\n\n이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}\n\n수신자: blaze.mind86@gmail.com`

    try {
      // Copy email content to clipboard first
      await navigator.clipboard.writeText(emailContent)
      console.log('✅ 클립보드 복사 성공')

      // Show success message with email service options
      alert(
        '✅ 이메일 내용이 클립보드에 복사되었습니다!\n\n📧 이메일 전송 방법:\n\n' +
          '1. Gmail로 바로 열기: 다음 페이지에서 Gmail 링크 클릭\n' +
          '2. Outlook으로 열기: 다음 페이지에서 Outlook 링크 클릭\n' +
          '3. 수동 전송: 클립보드 내용을 사용해서 원하는 이메일 앱에서 전송\n\n' +
          '💡 Gmail과 Outlook 링크를 클릭하면 새 탭에서 이메일 작성 페이지가 열립니다!'
      )

      // Open both email services in new tabs
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=blaze.mind86@gmail.com&su=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`
      )}`

      const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=blaze.mind86@gmail.com&subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`
      )}`

      // Open Gmail first
      window.open(gmailUrl, '_blank')

      // Open Outlook after a short delay
      setTimeout(() => {
        window.open(outlookUrl, '_blank')
      }, 500)

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (clipboardError) {
      console.log('❌ 클립보드 복사 실패:', clipboardError)
      // Fallback: show email content directly
      alert(
        `📧 이메일 전송 안내\n\n받는 사람: blaze.mind86@gmail.com\n\n아래 내용을 복사해서 이메일을 보내주세요:\n\n${emailContent}`
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">연락하기</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              프로젝트 의뢰, 협업 제안, 또는 궁금한 점이 있으시면 언제든
              연락해주세요!
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📧</span>
                </div>
                <span className="text-blue-800 font-medium">
                  직접 연락:{' '}
                  <a
                    href="mailto:blaze.mind86@gmail.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    blaze.mind86@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Portfolio Request Info */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg lg:col-span-2 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  포트폴리오 요청
                </h3>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                  더 자세한 포트폴리오가 필요하시다면 아래 메시지 폼을 통해
                  연락해주세요!
                  <br />
                  <strong>Figma View 버전</strong>과{' '}
                  <strong>PDF 포트폴리오</strong>를 이메일로 보내드리겠습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 text-lg">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Figma View
                    </h4>
                    <p className="text-sm text-gray-600">
                      인터랙티브한 포트폴리오
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 text-lg">📄</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      PDF 포트폴리오
                    </h4>
                    <p className="text-sm text-gray-600">인쇄 및 공유용 문서</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                메시지 보내기
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">ℹ️</span>
                  </div>
                  <p className="text-sm text-blue-800">
                    폼 작성 후 Gmail과 Outlook으로 바로 열리거나 클립보드에
                    복사됩니다
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    제목 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="제목을 입력하세요"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="프로젝트 의뢰, 협업 제안, 또는 궁금한 점을 자유롭게 작성해주세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  📧 이메일 서비스로 열기
                </button>
              </form>
            </div>
          </div>

          {/* Direct Contact Fallback */}
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📧 직접 연락하기
              </h3>
              <p className="text-gray-600 mb-4">
                위의 폼이 작동하지 않거나 이메일 서비스를 사용할 수 없는 경우
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📧</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">이메일 주소</p>
                  <a
                    href="mailto:blaze.mind86@gmail.com"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline"
                  >
                    blaze.mind86@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                위 이메일로 직접 연락하시면 빠르게 답변드리겠습니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
