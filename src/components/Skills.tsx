'use client'

import { useEffect, useState } from 'react'

interface Skill {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: 'C / C++', level: 90 },
  { name: 'Next.js', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'TypeScript / JavaScript', level: 70 },
  { name: 'Database (SQL / MongoDB / Prisma)',  level: 80 },
  { name: 'AWS Cloud', level: 65 },
  { name: 'Unity (C#)', level: 70 },
  { name: 'Python', level: 70 }
]

// Add function to get skill level text
const getSkillLevelText = (level: number): string => {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 70) return 'Intermediate'
  if (level >= 50) return 'Beginner'
  return 'Novice'
}

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 bg-sky-900 relative">
      <div 
        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-skill.png')"
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-5xl mx-auto">
          My skill set is built on a strong foundation in computer engineering principles,
          extending into modern full-stack development and intuitive design. I combine this technical versatility with strong problem-solving, creativity, 
          and a collaborative mindset to build effective and user-centric solutions.
          </p>
        </div>

        <div className="bg-white rounded-xl p-12 shadow-lg relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              {animatedSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {getSkillLevelText(skill.level)}
                      </span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 bg-yellow-500 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Problem Solving', icon: <i className="fa fa-puzzle-piece text-xl text-black" /> },
                  { name: 'Team Collaboration', icon: <i className="fa fa-users text-xl text-black" /> },
                  { name: 'Adaptability', icon: <i className="fa fa-leaf text-xl text-black" /> },
                  { name: 'Creativity & Innovation', icon: <i className="fa fa-lightbulb text-xl text-black" /> },
                  { name: 'Time Management', icon: <i className="fa fa-clock text-xl text-black" /> },
                  { name: 'Version control', icon: <i className="fa-brands fa-github text-2xl text-black" /> },
                  { name: 'Communication', icon: <i className="fa fa-comments text-xl text-black" /> },
                  { name: 'Responsibility', icon: <i className="fa fa-check-circle text-xl text-black" /> },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  Always Learning 
                  <a className="ml-2 fa-solid fa-star text-white"></a>
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                  Currently exploring in cloud architectures, DevOps practices, and new frameworks to continuously evolve and enhance my capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="YOUR_GOOGLE_DRIVE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View My CV 
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 