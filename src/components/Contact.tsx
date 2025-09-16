'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate-limited'>('idle')
  const [rateLimitMessage, setRateLimitMessage] = useState('')
  
  // Rate limiting refs
  const lastSubmissionTime = useRef<number>(0)
  const submissionCount = useRef<number>(0)
  const resetTime = useRef<number>(Date.now())

  // Rate limiting configuration
  const RATE_LIMIT = {
    maxSubmissions: 3, // Max 3 submissions
    timeWindow: 15 * 60 * 1000, // 15 minutes
    minInterval: 30 * 1000 // 30 seconds between submissions
  }

  const checkRateLimit = () => {
    const now = Date.now()
    
    // Reset counter if time window has passed
    if (now - resetTime.current > RATE_LIMIT.timeWindow) {
      submissionCount.current = 0
      resetTime.current = now
    }
    
    // Check if too many submissions in time window
    if (submissionCount.current >= RATE_LIMIT.maxSubmissions) {
      const remainingTime = Math.ceil((RATE_LIMIT.timeWindow - (now - resetTime.current)) / 60000)
      setRateLimitMessage(`Too many requests. Please wait ${remainingTime} minutes before trying again.`)
      return false
    }
    
    // Check minimum interval between submissions
    if (now - lastSubmissionTime.current < RATE_LIMIT.minInterval) {
      const remainingTime = Math.ceil((RATE_LIMIT.minInterval - (now - lastSubmissionTime.current)) / 1000)
      setRateLimitMessage(`Please wait ${remainingTime} seconds before submitting again.`)
      return false
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check rate limit
    if (!checkRateLimit()) {
      setSubmitStatus('rate-limited')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setRateLimitMessage('')

    try {
      // Initialize EmailJS
      emailjs.init('QRrNxMztercZCJqr_')
      
      // Get form data for debugging
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      console.log('Form data being sent:', Object.fromEntries(formData))
      
      const result = await emailjs.sendForm(
        'service_k86s1br', 
        'template_k56fdpw',
        form,
        'QRrNxMztercZCJqr_' 
      )
      
      // Update rate limiting counters
      lastSubmissionTime.current = Date.now()
      submissionCount.current += 1
      
      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      
      // More detailed error logging
      if (error instanceof Error) {
        console.error('Error message:', error.message)
        console.error('Error stack:', error.stack)
      }
      
      // Check for specific EmailJS error properties
      if (error && typeof error === 'object') {
        console.error('Error object keys:', Object.keys(error))
        if ('status' in error) console.error('Status:', (error as any).status)
        if ('text' in error) console.error('Text:', (error as any).text)
      }
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Map EmailJS field names to state keys
    const fieldMap: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email'
    }
    
    const stateKey = fieldMap[name] || name
    
    setFormData({
      ...formData,
      [stateKey]: value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-sky-700 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/15 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-center">Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}
              
              {submitStatus === 'rate-limited' && (
                <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-400 text-center">{rateLimitMessage}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'rate-limited'}
                suppressHydrationWarning
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-teal-400 text-xl">
                    <i className='fa-solid fa-envelope'></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">yok.byw@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-teal-400 text-xl">
                    <i className='fa-solid fa-location-dot'></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Thailand, Bangkok</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-teal-400 text-xl">
                     <i className='fa-solid fa-clock'></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Availability</h4>
                  <p className="text-gray-400">Open to new opportunities</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: <i className="fa-brands fa-github"></i>, url: 'https://github.com/bbbbyw' },
                  { name: 'LinkedIn', icon: <i className="fa-brands fa-linkedin"></i>, url: 'https://www.linkedin.com/in/byw-%E0%B8%A7%E0%B8%AA%E0%B8%B8%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%B8%E0%B8%88%E0%B8%B5-464998369/' },
                  { name: 'Facebook', icon: <i className="fa-brands fa-facebook"></i>, url: 'https://www.facebook.com/yokky.byw' },
                  { name: 'Instagram', icon: <i className="fa-brands fa-instagram"></i>, url: 'https://www.instagram.com/yokkk_bbb/' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 