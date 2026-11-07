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
  const location = useLocation()

  useEffect(() => {
    if (!isMenuOpen) return

    const closeMenuOnScroll = () => setIsMenuOpen(false)
    window.addEventListener('scroll', closeMenuOnScroll, { passive: true })

    return () => window.removeEventListener('scroll', closeMenuOnScroll)
  }, [isMenuOpen])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

        <header className="fixed top-0 left-0 w-full z-50 bg-[#003b20] text-white shadow-sm">
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