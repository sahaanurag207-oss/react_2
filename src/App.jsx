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
  ]

  return (
    <div className="min-h-screen bg-[#f5f8f4] text-[#183322]">

        {isMenuOpen && (
          <button
            type="button"
            aria-label="Dismiss navigation overlay"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Fixed Navbar with Contour Border and Frosted Blur */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#063b20]/75 backdrop-blur-md border-b border-white/10 text-white shadow-sm transition-all duration-300">
          <nav className="relative max-w-7xl mx-auto px-3 sm:px-5 py-2 flex flex-nowrap items-center justify-between gap-2 sm:gap-3">
            <Link to="/" className="text-sm sm:text-lg font-extrabold flex items-center gap-1 sm:gap-2">
              🌱 <span>YourBrand</span>
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-lime-300"
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
              className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-50 flex-col items-stretch gap-1 bg-[#063b20]/95 p-3 text-sm shadow-lg backdrop-blur-md lg:static lg:flex lg:flex-row lg:items-center lg:gap-3 lg:bg-transparent lg:p-0 lg:text-sm lg:shadow-none lg:backdrop-blur-none`}
            >
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded px-3 py-2 lg:px-0 lg:py-0 ${
                      isActive
                        ? 'text-lime-300 font-bold'
                        : 'text-white/85 hover:text-lime-300 transition-colors'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 bg-lime-400 text-green-950 px-4 py-2 rounded-full font-bold hover:bg-lime-300 transition shadow-sm whitespace-nowrap text-center lg:mt-0 lg:px-4 lg:py-1.5"
              >
                Get Started
              </Link>
            </div>
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