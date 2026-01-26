'use client'

import { useEffect, useState } from 'react'

type LightboxImage = { src: string; alt: string } | null

export default function About() {
  const [lightbox, setLightbox] = useState<LightboxImage>(null)

  useEffect(() => {
    if (!lightbox) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox])

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Background image with all decorations */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-about.png')"
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-rows-2 gap-2 items-center justify-items-center max-w-5xl mx-max-content">
          <div className="space-y-6 max-w-3xl mx-auto text-center">
          <p className="text-lg text-black leading-relaxed">
          Computer Engineering student at KMUTT with expertise spanning C/C++ to modern full-stack development (JavaScript, TypeScript, Next.js, Node.js). Hands-on experience with 
          both AWS and GCP cloud platforms, building serverless applications and implementing CI/CD pipelines.
          </p>

          <p className="text-lg text-black leading-relaxed">  
          Collaborative problem-solver with proven results under pressure, demonstrated by earning runner-up at MU Gamification Hackathon. I combine analytical thinking with adaptability to quickly learn technologies and tackle diverse challenges. Eager to contribute strong communication skills and commitment to quality in Cloud/DevOps engineering roles.
          </p>
          </div>
          
          <div className="relative">
            <div className="relative mb-6">
              <h3 className="text-2xl font-bold text-black text-center">What I Do</h3>
              <div className="w-full h-0.5 rounded-full bg-yellow-400 mt-2 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-400/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-400 text-xl">💻</span>
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">Web Development</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Building responsive and dynamic web applications using modern technologies.</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-600/20 to-sky-400/20 p-6 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-teal-400 text-xl">🎨</span>
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">UI/UX Design</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Creating intuitive and beautiful user interfaces that enhance user experience.</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-400/20 to-purple-500/20 p-6 rounded-2xl border border-pink-800/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-pink-700 text-xl">🚀</span>
                </div>
                <h4 className="text-gray-600 font-semibold mb-3 text-lg">Cloud & DevOps</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Designing and deploying scalable cloud solutions on AWS and GCP platforms and implementing CI/CD pipelines.</p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12">
            <div className="relative mb-6">
              <h3 className="text-2xl font-bold text-black text-center">Awards & Certificates</h3>
              <div className="w-full h-0.5 rounded-full bg-yellow-400 mt-2 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[max-content,max-content,max-content] gap-6 justify-center ">
              <div className="w-[320px] sm:w-[360px] bg-gradient-to-br from-yellow-400/20 to-orange-400/20 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-yellow-500/30">
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: '/mu-pic.jpg', alt: 'MU Gamification Hackathon Award' })}
                    className="w-full h-full"
                    aria-label="Zoom MU Gamification Hackathon Award image"
                  >
                    <img
                      src="/mu-pic.jpg"
                      alt="MU Gamification Hackathon Award"
                      className="w-full h-full object-cover cursor-zoom-in"
                    />
                  </button>
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">2nd Place, MU Gamification Hackathon</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Awarded for excellence in UX/UI design and innovative gamification concepts in a team-based competition.</p>
              </div>
              
              <div className="w-[320px] sm:w-[360px] bg-gradient-to-br from-blue-400/20 to-indigo-500/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-blue-500/30">
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: '/activity_cer.jpg', alt: 'Outstanding Activities Award' })}
                    className="w-full h-full"
                    aria-label="Zoom Outstanding Activities Award image"
                  >
                    <img
                      src="/activity_cer.jpg"
                      alt="Outstanding Activities Award"
                      className="w-full h-full object-contain cursor-zoom-in"
                    />
                  </button>
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">Outstanding Activities Award</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Recognized by the university for exceptional extracurricular contributions that bring fame to the faculty.</p>
              </div>

              <div className="w-[320px] sm:w-[360px] bg-gradient-to-br from-emerald-400/20 to-teal-500/20 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-emerald-500/30">
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: '/Toeic.jpg', alt: 'TOEIC Official Score Report' })}
                    className="w-full h-full"
                    aria-label="Zoom TOEIC Official Score Report image"
                  >
                    <img
                      src="/Toeic.jpg"
                      alt="TOEIC Official Score Report"
                      className="w-full h-full object-cover cursor-zoom-in"
                    />
                  </button>
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">TOEIC Score 930</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Official Listening and Reading test score report.</p>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 text-white/90 hover:text-white text-sm px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              Close (Esc)
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[85vh] object-contain rounded-xl border border-white/20 bg-white/5"
            />
          </div>
        </div>
      )}
    </section>
  )
} 