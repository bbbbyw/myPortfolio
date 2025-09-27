'use client'


import { useState, type ReactNode } from 'react'

interface Project {
  id: number
  title: string
  description: ReactNode
  image: string
  technologies: string[]
  demoVideoUrl?: string
  githubUrl?: string
  categories: Category[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Feelink — Emotion analysis chatbot website',
    description: 'Website that detects emotion from short text and suggests uplifting activities and encourage messages. Next.js frontend, serverless AWS backend, cost‑aware and scalable.',
    image: '🗨️',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript','AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'CloudWatch', 'SNS', 'SAM', 'IAM', 'GitHub Actions'],
    demoVideoUrl: 'https://youtu.be/23GhbIo-kBs',
    githubUrl: 'https://github.com/bbbbyw/Feelink',
    categories: ['fullstack', 'cloud/devops']
  },
  {
    id: 2,
    title: 'Mobile Store POS System',
    description: (<>
      A point-of-sale system for mobile phone stores, featuring product management, transactions, and reporting.{' '}
      <strong>For demo Username: testuser Password: test1234</strong>
    </>),
    image: '📱',
    technologies: ['Next.js', 'Prisma', 'MongoDB', 'Node.js', 'Express', 'Tailwind CSS'],
    demoVideoUrl: 'https://mobile-store-frontend-two.vercel.app/',
    githubUrl: 'https://github.com/bbbbyw/MobileStore',
    categories: ['fullstack']
  },
  {
    id: 3,
    title: 'TaFightWorld (2D Game)',
    description: 'A 2D Unity game that uses AI-based pose tracking to encourage kids to exercise through interactive challenges.',
    image: '🎮',
    technologies: ['Unity', 'C#', 'MediaPipe Pose', 'AI Tracking'],
    demoVideoUrl: 'https://youtu.be/h4XdQg9gG04',
    githubUrl: 'https://github.com/bbbbyw/TaFightWorld_NewHealthNearMe',
    categories: ['game']
  },
  {
    id: 4,
    title: 'Portfolio Website (This site)',
    description: 'A modern and responsive portfolio website showcasing my work, hosted on AWS S3 + CloudFront with Tailwind styling and CI/CD pipeline by AWS IAM and GitHub action.',
    image: '🌐',
    technologies: ['Next.js', 'Tailwind CSS', 'AWS S3', 'AWS CloudFront', 'AWS IAM', 'GitHub Actions'],
    demoVideoUrl: '',
    githubUrl: 'https://github.com/bbbbyw/myPortfolio',
    categories: ['fullstack', 'cloud/devops']
  },
  {
    id: 5,
    title: 'MU Gamification Hackathon (Runner-up)',
    description: 'Designed a gamified UX/UI concept that promotes engagement and interactivity, awarded Runner-up.',
    image: '🏆',
    technologies: ['UX/UI Design', 'Figma'],
    demoVideoUrl: 'https://www.figma.com/proto/UFGH14Bjb5hnivjkIcwjJX/The-new-MUx-mock-up?page-id=0%3A1&node-id=238-6390&p=f&viewport=598%2C315%2C0.03&t=kxtK1v1ipwfVMJ5Y-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=238%3A6390&show-proto-sidebar=1',
    githubUrl: '',
    categories: ['design']
  },
  {
    id: 6,
    title: 'Flight Reservation Website',
    description: 'A web-based flight booking system with database integration for managing reservations and users.',
    image: '✈️',
    technologies: ['Vue.js', 'Node.js', 'SQL', 'HTML', 'CSS'],
    demoVideoUrl: 'https://youtu.be/l7jV_-d9rIs', 
    githubUrl: 'https://github.com/monqboi/flight-web-app',    
    categories: ['fullstack']
  },
  {
    id: 7,
    title: 'Security Log Monitoring System (GCP)',
    description: 'Cloud-native security monitoring system that ingests logs, detects brute-force attacks, and sends real-time alerts via email. Built with fully managed GCP services for zero infrastructure management.',
    image: '🔒',
    technologies: ['Google Cloud Run', 'Pub/Sub', 'Cloud Functions', 'BigQuery', 'Cloud Scheduler', 'Node.js', 'Express', 'Python', 'Gmail SMTP'],
    githubUrl: 'https://github.com/bbbbyw/SecurityLogMonitoringSystem',
    categories: ['cloud/devops']
  }
]


export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | Category>('all')
  const [expandedTech, setExpandedTech] = useState<Set<number>>(new Set())

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory))

  const toggleTechExpansion = (projectId: number) => {
    const newExpanded = new Set(expandedTech)
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId)
    } else {
      newExpanded.add(projectId)
    }
    setExpandedTech(newExpanded)
  }

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div 
        className="absolute inset-0 opacity-15 bg-contain bg-center bg-no-repeat -z-7"
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
              { key: 'cloud/devops', label: 'Cloud/DevOps' },
            ].map((filter) => (
                              <button
                  key={filter.key}
                  onClick={() => setActiveCategory(filter.key as 'all' | Category)}
                  suppressHydrationWarning
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
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
              className="group bg-gradient-to-br from-blue-600/30 to-cyan-400/30 border border-blue-500/20 hover:border-blue-400/40 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-200 will-change-transform"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {(expandedTech.has(project.id) 
                      ? project.technologies 
                      : project.technologies.slice(0, 4)
                    ).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <button
                        onClick={() => toggleTechExpansion(project.id)}
                        className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-full transition-colors duration-200"
                      >
                        {expandedTech.has(project.id) ? 'Show Less' : `+${project.technologies.length - 4} More`}
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {project.demoVideoUrl && (
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black/30 text-gray-500 text-center py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors duration-200"
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
                      className="flex-1 border border-black/30 text-gray-500 text-center py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors duration-200"
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
            href="https://github.com/bbbbyw"
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg transition-colors duration-200 hover:bg-yellow-600"
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

type Category = 'game' | 'fullstack' | 'design' | 'cloud/devops' 