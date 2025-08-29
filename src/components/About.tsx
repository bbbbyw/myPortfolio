export default function About() {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
              With several years of experience in web development, I specialize in building scalable, 
              user-friendly applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep passion for 
              clean code, beautiful design, and exceptional user experiences. I believe in the power 
              of technology to transform ideas into impactful solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xl">💻</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Web Development</h4>
                    <p className="text-gray-400">Building responsive and dynamic web applications using modern technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 text-xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">UI/UX Design</h4>
                    <p className="text-gray-400">Creating intuitive and beautiful user interfaces that enhance user experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Performance Optimization</h4>
                    <p className="text-gray-400">Optimizing applications for speed, scalability, and better user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 