import React, { useEffect, useState } from 'react'
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMessageCircle,
} from 'react-icons/fi'

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Show success message (you can implement a toast notification here)
    alert('메시지가 성공적으로 전송되었습니다!')
  }

  return (
    <section
      id="contact"
      className="section-padding-lg bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-100 to-blue-100 rounded-full opacity-20 blur-3xl" />
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
              <h2 className="section-title gradient-text">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto rounded-full" />
            </div>
            <p className="section-subtitle">
              새로운 프로젝트나 협업 기회에 대해 이야기해보고 싶습니다.
              <br />
              <span className="text-brand-600 font-semibold">
                언제든지 연락주세요. 빠른 시일 내에 답변드리겠습니다.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Send Message
                </h3>
                <p className="text-gray-600">
                  프로젝트 의뢰, 협업 제안, 또는 단순한 인사말까지 환영합니다.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    제목 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="프로젝트 의뢰"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    placeholder="프로젝트에 대한 자세한 내용을 작성해주세요..."
                    rows={6}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>전송 중...</span>
                    </>
                  ) : (
                    <>
                      {FiSend({ size: 20 })}
                      <span>메시지 보내기</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h3>
                <p className="text-gray-600">
                  다양한 방법으로 연락할 수 있습니다. 가장 편한 방법을
                  선택해주세요.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {FiMail({ size: 24 })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-brand-600 hover:text-brand-700 transition-colors duration-200"
                    >
                      contact@example.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      24시간 내에 답변드립니다
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {FiPhone({ size: 24 })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:+82-10-1234-5678"
                      className="text-brand-600 hover:text-brand-700 transition-colors duration-200"
                    >
                      +82-10-1234-5678
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      업무시간: 평일 9AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {FiMapPin({ size: 24 })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600">서울특별시 강남구</p>
                    <p className="text-sm text-gray-500 mt-1">
                      원격 작업 및 협업 가능
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {FiMessageCircle({ size: 24 })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Response Time
                    </h4>
                    <p className="text-gray-600">24시간 이내</p>
                    <p className="text-sm text-gray-500 mt-1">
                      긴급한 경우 더 빠른 답변 가능
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 group"
                  >
                    {FiGithub({ size: 20 })}
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 group"
                  >
                    {FiLinkedin({ size: 20 })}
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 group"
                  >
                    {FiTwitter({ size: 20 })}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              혁신적인 아이디어를 현실로 구현하고, 사용자에게 놀라운 경험을
              제공하는 프로젝트에 참여하고 싶습니다. 함께 성장하고 성공을
              만들어가요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@example.com" className="btn btn-primary">
                바로 연락하기
              </a>
              <a href="#projects" className="btn btn-secondary">
                프로젝트 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
