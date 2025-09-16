'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Cloud & DevOps Enthusiast','Fast learner', 'Problem Solver', 'Creative Thinker']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BG-port.png')",
        }}
      ></div>

      <div className="relative z-10 bg-white rounded-2xl sm:border-4 border-yellow-300 max-w-4xl w-full mx-4 sm:mx-8 px-4 sm:px-6 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-6">
        <div className="text-center">
          <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gray-200 rounded-full mx-auto mb-2 mt-2 flex items-center justify-center overflow-hidden border-2 sm:border-4 border-blue-300">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            Hi, I'm <span className="text-transparent bg-clip-text gradient-text">Boonyawee</span>
          </h1>
          
          <div className="h-12 sm:h-16 flex items-center justify-center mb-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
              I'm a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 animate-pulse">
                {texts[currentText]}
              </span>
            </h2>
          </div>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            "Computer Engineering Student & Aspiring Cloud and DevOps Engineer"
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-xl mx-auto">
             Building full-stack applications and intelligent systems with modern tools. Award-winning designer and passionate problem solver.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 