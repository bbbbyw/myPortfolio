'use client'

import { useEffect, useState } from 'react'

interface Skill {
  name: string
  level: number
  color: string
  icon: string
}

const skills: Skill[] = [
  { name: 'React', level: 90, color: 'from-blue-400 to-cyan-400', icon: '⚛️' },
  { name: 'Next.js', level: 85, color: 'from-purple-400 to-pink-400', icon: '▲' },
  { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-600', icon: '📘' },
  { name: 'Node.js', level: 75, color: 'from-green-400 to-green-500', icon: '🟢' },
  { name: 'Python', level: 70, color: 'from-yellow-400 to-orange-400', icon: '🐍' },
  { name: 'SQL', level: 85, color: 'from-indigo-400 to-purple-400', icon: '🗄️' },
  { name: 'AWS', level: 65, color: 'from-orange-400 to-red-400', icon: '☁️' },
  { name: 'Docker', level: 70, color: 'from-blue-500 to-blue-600', icon: '🐳' },
]

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 bg-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here are the skills I've developed over the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            {animatedSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Other Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Git & GitHub', icon: '📚' },
                { name: 'REST APIs', icon: '🔗' },
                { name: 'GraphQL', icon: '📊' },
                { name: 'Testing', icon: '🧪' },
                { name: 'CI/CD', icon: '⚡' },
                { name: 'Agile/Scrum', icon: '🔄' },
                { name: 'UI/UX Design', icon: '🎨' },
                { name: 'Performance', icon: '⚡' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-4">Always Learning</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                Currently exploring AI/ML, blockchain, and advanced cloud architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 