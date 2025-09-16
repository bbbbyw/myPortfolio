'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoVideoUrl?: string
  githubUrl?: string
  category: 'game' | 'fullstack' |'design' | 'ai'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Flight Reservation Website',
    description: 'A web-based flight booking system with database integration for managing reservations and users.',
    image: '✈️',
    technologies: ['Vue.js', 'Node.js', 'SQL', 'HTML', 'CSS'],
    demoVideoUrl: 'https://youtu.be/l7jV_-d9rIs', 
    githubUrl: '#',    
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Mobile Store POS System',
    description: 'A point-of-sale system for mobile phone stores, featuring product management, transactions, and reporting.',
    image: '📱',
    technologies: ['Next.js', 'Prisma', 'MongoDB', 'Node.js', 'Express', 'Tailwind CSS'],
    demoVideoUrl: '#',
    githubUrl: '#',
    category: 'fullstack'
  },
  {
    id: 3,
    title: 'TaFightWorld (2D Game)',
    description: 'A 2D Unity game that uses AI-based pose tracking to encourage kids to exercise through interactive challenges.',
    image: '🎮',
    technologies: ['Unity', 'C#', 'MediaPipe Pose', 'AI Tracking'],
    demoVideoUrl: '#',
    githubUrl: '#',
    category: 'game'
  },
  {
    id: 4,
    title: 'Portfolio Website (This site)',
    description: 'A modern and responsive portfolio website showcasing my work, hosted on AWS S3 with Tailwind styling.',
    image: '🌐',
    technologies: ['Next.js', 'Tailwind CSS', 'AWS S3'],
    demoVideoUrl: '',
    githubUrl: '#',
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'MU Gamification Hackathon (Runner-up)',
    description: 'Designed a gamified UX/UI concept that promotes engagement and interactivity, awarded Runner-up.',
    image: '🏆',
    technologies: ['UX/UI Design', 'Figma'],
    demoVideoUrl: '#',
    githubUrl: '',
    category: 'design'
  }
]


export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'game' | 'fullstack' |'design' | 'ai'>('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div 
        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-project.png')"
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'game', label: 'Games' },
              { key: 'fullstack', label: 'Full Stack' },
              { key: 'design', label: 'UX/UI design' },
              { key: 'ai', label: 'AI' },
            ].map((filter) => (
                              <button
                  key={filter.key}
                  onClick={() => setActiveCategory(filter.key as any)}
                  suppressHydrationWarning
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === filter.key
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                      : 'bg-white/10 text-gray-500 hover:bg-black/20'
                  }`}
                >
                  {filter.label}
                </button>
            ))}
          </div>
          <div className="w-full h-0.5 rounded-full bg-orange-400/30 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-blue-600/20 to-cyan-400/20 border border-blue-500/20 hover:border-blue-400/40 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoVideoUrl && (
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black/30 text-gray-500 text-center py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300"
                    >
                      <a className='mr-2 fa-solid fa-play'></a>
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black/30 text-gray-500 text-center py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300"
                    >
                      <a className='mr-2 fa-brands fa-github'></a>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 