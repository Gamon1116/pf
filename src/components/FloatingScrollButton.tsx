import React, { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export function FloatingScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  // 스크롤 위치에 따라 버튼 표시/숨김
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group hover:-translate-y-1"
      aria-label="맨 위로 스크롤"
    >
      {FiArrowUp({
        size: 20,
        className:
          'transition-transform duration-300 group-hover:-translate-y-0.5',
      })}
    </button>
  )
}
