'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'fullstack'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: '🛒',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '📋',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with location-based forecasts and interactive maps.',
    image: '🌤️',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and fitness goals with progress analytics.',
    image: '💪',
    technologies: ['React Native', 'Firebase', 'Redux', 'Native Base'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'mobile'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '🎨',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web'
  },
  {
    id: 6,
    title: 'AI Chat Application',
    description: 'An AI-powered chat application with natural language processing capabilities.',
    image: '🤖',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'fullstack'
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'web', label: 'Web Apps' },
              { key: 'mobile', label: 'Mobile Apps' },
              { key: 'fullstack', label: 'Full Stack' }
            ].map((filter) => (
                              <button
                  key={filter.key}
                  onClick={() => setActiveCategory(filter.key as any)}
                  suppressHydrationWarning
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === filter.key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-white/30 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                    >
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
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
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