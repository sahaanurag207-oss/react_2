
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'
import plantImage from '../assets/plant.jpg'

const heroSlides = [
  "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85')",
  `url(${heroBg})`,
  `url(${plantImage})`,
]

const features = [
  ['sprout', 'Sustainable Growth', 'Progress that keeps long-term impact in mind.'],
  ['shield', 'Trusted Services', 'Practical guidance you can count on.'],
  ['team', 'Expert Team', 'Experienced people focused on your goals.'],
  ['support', '24/7 Support', 'Helpful support whenever you need us.'],
]

const services = [
  {
    icon: 'briefcase',
    title: 'Consulting',
    description: 'Clarify priorities and build a practical plan for your business.',
  },
  {
    icon: 'technology',
    title: 'Technology',
    description: 'Choose and use digital tools that make everyday work easier.',
  },
  {
    icon: 'growth',
    title: 'Business Growth',
    description: 'Find new opportunities and turn growth goals into clear next steps.',
  },
]

function LineIcon({ name, className = 'h-7 w-7' }) {
  const paths = {
    sprout: <><path d="M12 20v-8" /><path d="M12 12C8 12 5 9 5 5c4 0 7 3 7 7Z" /><path d="M12 15c0-4 3-7 7-7 0 4-3 7-7 7Z" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>,
    team: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1H3Z" /><path d="M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1h-3" /></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3v6H6a2 2 0 0 1-2-2v-4Zm16 0h-3v6h1a2 2 0 0 0 2-2v-4Z" /><path d="M17 19a5 5 0 0 1-5 2" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" /></>,
    technology: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
    growth: <><path d="M4 19V5m0 14h17" /><path d="m7 15 4-4 3 2 6-7m-5 0h5v5" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -24px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches) return

    const slideInterval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(slideInterval)
  }, [])

  return (
    <div>

      {/* Hero */}
      <section className="hero-section relative flex min-h-160 h-screen items-center overflow-hidden bg-[#063b20] text-white">
        {heroSlides.map((backgroundImage, index) => (
          <div
            key={backgroundImage}
            aria-hidden="true"
            className={`hero-background hero-slide absolute inset-0 bg-cover bg-center ${
              activeSlide === index ? 'hero-slide-active' : ''
            }`}
            style={{ backgroundImage }}
          />
        ))}

        <div className="absolute inset-0 bg-[#002b17]/65" />
        <div className="absolute inset-0 bg-linear-to-r from-[#002b17]/45 via-transparent to-[#002b17]/35" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 pb-24">
          <div className="max-w-2xl">
            <p className="hero-enter hero-enter-1 text-sm font-bold tracking-[0.24em] text-lime-400 sm:text-base">
              WELCOME TO YOURBRAND
            </p>
            <h1 className="hero-enter hero-enter-2 mt-5 text-4xl font-extrabold uppercase leading-[1.12] sm:text-5xl md:text-6xl">
              Innovate. Grow<span className="text-lime-400">.</span>
              <span className="block">Succeed</span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              We help businesses innovate, grow and succeed with smart strategies and modern solutions.
            </p>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="action-button inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-300"
              >
                Explore Our Services <span className="button-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div role="group" aria-label="Hero image slides" className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
              onClick={() => setActiveSlide(index)}
              className={`hero-slide-dot rounded-full ${
                activeSlide === index ? 'hero-slide-dot-active' : ''
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="mb-7 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-700">WHY YOURBRAND</p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#183322] sm:text-3xl">
            A partner for every step forward
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([icon, title, description], index) => (
            <Reveal key={title} delay={index * 100} className="feature-reveal">
              <article className="feature-card group h-full rounded-2xl border border-green-100/80 bg-white px-5 py-6 text-center shadow-[0_8px_24px_rgba(24,51,34,0.06)] sm:px-6 sm:py-7">
                <div className="feature-icon-wrap mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                  <LineIcon name={icon} className="feature-icon h-7 w-7" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#183322] sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <Reveal>
          <h2 className="text-4xl font-extrabold">
            Your Partner
            <span className="block text-green-600">in Progress</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            We help businesses set priorities, improve the way they work, and choose technology that supports their goals.
          </p>

          <Link
            to="/about"
            className="action-button inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Learn More <span className="button-arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal className="rounded-3xl overflow-hidden bg-green-100 p-3">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
            alt="Modern glass office building"
            className="about-image w-full h-72 object-cover rounded-2xl"
          />
        </Reveal>

      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">
            Our Services
          </h2>

          <p className="text-gray-600 mt-3">
            From business planning to technology and design, get practical help for your next challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <article
                className="service-card bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="bg-green-100 h-36 flex items-center justify-center text-green-800">
                  <LineIcon name={service.icon} className="service-icon h-12 w-12" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 mt-3">{service.description}</p>

                  <Link
                    to="/services"
                    className="action-link inline-block mt-5 text-green-700 font-bold"
                  >
                    Learn More <span className="button-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="action-button bg-green-700 text-white px-7 py-3 rounded-full hover:bg-green-800"
          >
            View All Services <span className="button-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white py-14 px-6">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl font-bold">Let's Grow Together</h2>
            <p className="text-green-100 mt-2">
              Get in touch and start your journey.
            </p>
          </div>

          <Link
            to="/contact"
            className="action-button bg-lime-400 text-green-950 px-7 py-3 rounded-full font-bold hover:bg-lime-300"
          >
            Contact Us <span className="button-arrow" aria-hidden="true">→</span>
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home
