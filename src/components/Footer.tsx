'use client'



export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Boonyawee Wasupornrujee</h3>
            <p className="text-gray-400 mb-6 max-w-md">
            A motivated learner aiming to become a Cloud and DevOps Engineer
            , constantly exploring new technologies to turn ideas into reliable solutions.
            </p>
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
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>yok.byw@gmail.com</p>
              <p>Searching for new opportunities and experience</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BYW. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
} 