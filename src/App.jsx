import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  )
}

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeMenuOnScroll = () => setIsMenuOpen(false)
    window.addEventListener('scroll', closeMenuOnScroll, { passive: true })

    return () => window.removeEventListener('scroll', closeMenuOnScroll)
  }, [isMenuOpen])

  useEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previousScrollBehavior
  }, [location.pathname])

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="min-h-screen bg-[#f5f8f4] text-[#183322]">

        {isMenuOpen && (
          <button
            type="button"
            aria-label="Dismiss navigation overlay"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}

        <header className={`fixed top-0 left-0 w-full z-50 text-white transition-colors duration-300 ${
          location.pathname === '/' && !isScrolled
            ? 'bg-transparent shadow-none'
            : 'bg-[#003b20]/95 shadow-sm backdrop-blur-md'
        }`}>
          <nav className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:px-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 justify-self-start text-base font-extrabold sm:text-lg"
            >
              <svg aria-hidden="true" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24">
                <path d="M20.5 3.5C11.5 3.5 5 7.5 5 14a6.5 6.5 0 0 0 6.5 6.5C18 20.5 20.5 12 20.5 3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M3 21c3-5 7-8 12-11" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
              <span>YourBrand</span>
            </Link>

            <button
              type="button"
              className="col-start-3 inline-flex h-10 w-10 flex-col items-center justify-center justify-self-end gap-1.5 rounded-md hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-lime-300 md:hidden"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className={`h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>

            <div
              id="primary-navigation"
              className={`${isMenuOpen ? 'flex mobile-menu-open' : 'hidden'} absolute left-0 right-0 top-full z-50 flex-col items-stretch gap-1 border-t border-white/10 bg-[#003b20] p-3 text-sm shadow-lg md:static md:col-start-2 md:col-end-3 md:flex md:flex-row md:items-center md:justify-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:text-sm md:shadow-none`}
            >
              {links.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ '--menu-delay': `${index * 70}ms` }}
                  className={({ isActive }) =>
                    `mobile-menu-item rounded px-3 py-2 font-semibold transition-colors md:px-0 md:py-1 ${
                      isActive
                        ? 'text-lime-400'
                        : 'text-white/90 hover:text-lime-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="action-button mobile-menu-item mt-1 rounded-full bg-lime-400 px-4 py-2 text-center font-bold text-green-950 shadow-sm transition hover:bg-lime-300 md:hidden"
              >
                Get Started
              </Link>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="action-button hidden justify-self-end rounded-full bg-lime-400 px-5 py-2 font-bold text-green-950 shadow-sm transition hover:bg-lime-300 md:block"
            >
              Get Started
            </Link>
          </nav>
        </header>

        <main>
          <div key={location.pathname} className="page-transition">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <Footer />

    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-[#042e19] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-xl font-bold text-lime-400">
              🌱 YourBrand
            </Link>
            <p className="text-sm text-green-100 mt-3 max-w-xs">
            Practical consulting, technology, and growth support for your business.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-green-100">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <div className="flex flex-col gap-2 text-sm text-green-100">
              <Link to="/resources">Our Resources</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-green-100">
              <Link to="/contact">Get in touch</Link>
            </div>
            <div className="mt-5 flex items-center gap-3" aria-label="Social media">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link social-facebook">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-7h2.35l.35-2.7h-2.7V9.58c0-.78.22-1.31 1.35-1.31h1.44V5.85c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v1.95H8.3V14h2.39v7h2.8Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link social-instagram">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.7" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link social-linkedin">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1-.02-2.28-1.4-2.28-1.4 0-1.62 1.1-1.62 2.2V19H10v-9Z" />
                </svg>
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X" className="social-link social-x">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 3H22l-6.78 7.75L23.2 21h-6.25l-4.9-6.4L6.45 21H3.3l7.25-8.28L2.8 3h6.4l4.43 5.86L18.9 3Zm-1.1 16h1.73L8.28 4.9H6.42L17.8 19Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-5 text-xs text-green-200 flex flex-wrap justify-between gap-3">
          <p>© 2026 YourBrand. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default App