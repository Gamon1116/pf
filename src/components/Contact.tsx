import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'

const EMAIL = 'blaze.mind86@gmail.com'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const body = [
      `이름: ${formData.name}`,
      `이메일: ${formData.email}`,
      '',
      formData.message,
    ].join('\n')

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">연락하기</h2>
            <p className="text-lg text-slate-600">
              협업 제안, 채용 문의, 프로젝트 관련 질문을 환영합니다.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8 text-center">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-xl font-semibold text-sky-600 hover:text-sky-700 transition-colors"
            >
              {FiMail({ size: 22 })}
              {EMAIL}
            </a>
            <p className="text-sm text-slate-500 mt-3">
              채용 및 협업 관련 문의는 이메일로 연락해 주세요.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              상세 포트폴리오 요청
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              납품·사내 프로젝트는 보안상 공개 범위가 제한됩니다. Figma
              시안·PDF 포트폴리오 등 상세 자료가 필요하시면 이메일로
              요청해 주세요.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">
              면접 시 실제 설계 과정과 기술적 의사결정, 문제 해결 사례를 상세히
              설명드릴 수 있습니다.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 border border-slate-200 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              이메일 작성하기
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              작성 후 기본 메일 앱이 열립니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                placeholder="채용 문의 / 협업 제안"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none text-sm"
                placeholder="문의 내용을 작성해 주세요."
              />
            </div>

            <button type="submit" className="w-full btn btn-primary py-3 text-sm">
              메일 앱에서 이어서 작성하기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
