export default function About() {
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
        
        <div className="grid lg:grid-rows-2 gap-2 items-center mx-40">
          <div className="space-y-6">
            <p className="text-lg text-black leading-relaxed">
            I am a Computer Engineering student at King Mongkut's University of Technology Thonburi, 
            building a strong foundation for a career as a Cloud and DevOps Engineer.
             My technical journey spans from low-level C/C++ to modern full-stack development with JavaScript, React, Next.js, and Node.js. 
             This is complemented by a proven skill in UI/UX design, 
            evidenced by my team's 2nd place win at the MU Gamification Hackathon.
            </p>
            
            <p className="text-lg text-black leading-relaxed">  
            I am a proactive builder and problem-solver, passionate about creating impactful software. My projects reflect this diversity, ranging from practical database systems and a POS for a mobile shop to an AI-powered Unity game.
            I'm eager to contribute my skills in problem-solving, creativity, and infrastructure automation to a challenging new role.
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
                <p className="text-gray-400 text-sm leading-relaxed">Exploring AWS services and learning automation with CI/CD, Docker, and Infrastructure-as-Code.</p>
              </div>
            </div>
          </div>
          
          {/* Awards & Certificates Section */}
          <div className="relative mt-12">
            <div className="relative mb-6">
              <h3 className="text-2xl font-bold text-black text-center">Awards & Certificates</h3>
              <div className="w-full h-0.5 rounded-full bg-yellow-400 mt-2 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[max-content,max-content,max-content] gap-6 justify-center ">
              <div className="w-[320px] sm:w-[360px] bg-gradient-to-br from-yellow-400/20 to-orange-400/20 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-yellow-500/30">
                  <img
                    src="/awards/mu-gamification.jpg"
                    alt="MU Gamification Hackathon Award"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">2nd Place, MU Gamification Hackathon</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Awarded for excellence in UX/UI design and innovative gamification concepts in a team-based competition.</p>
              </div>
              
              {/* Award 2: University Certificate */}
              <div className="w-[320px] sm:w-[360px] bg-gradient-to-br from-blue-400/20 to-indigo-500/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-blue-500/30">
                  <img
                    src="/awards/outstanding-activities.jpg"
                    alt="Outstanding Activities Award"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-gray-700 font-semibold mb-3 text-lg">Outstanding Activities Award</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Recognized by the university for exceptional extracurricular contributions that bring fame to the faculty.</p>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 