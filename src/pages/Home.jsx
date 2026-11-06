
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'

const features = [
  ['sprout', 'Sustainable Growth'],
  ['shield', 'Trusted Services'],
  ['team', 'Expert Team'],
  ['support', '24/7 Support'],
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

function Home() {
  return (
    <div>

      {/* Hero */}
      <section
        className="relative min-h-90 sm:min-h-105 overflow-hidden bg-[#063b20] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >

        <div className="absolute inset-0 bg-linear-to-r from-[#042e19]/75 via-[#042e19]/45 to-[#042e19]/20" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">

          <div className="max-w-xl">

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Innovate. Grow.
              <span className="block text-lime-400">Succeed.</span>
            </h1>

            <p className="text-white text-lg mt-6 max-w-md leading-relaxed">
              Practical consulting, digital tools, and growth strategies for businesses ready to move forward.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="inline-block bg-lime-400 text-green-950 px-7 py-3 rounded-full font-bold hover:bg-lime-300 transition"
              >
                Explore Services →
              </Link>
              <Link
                to="/about"
                className="inline-block border border-white/70 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Meet Your Partner
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 py-8 sm:py-10">

        <div className="bg-white shadow-lg rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-green-100">

          {features.map(([icon, title]) => (
            <div key={title} className="flex flex-col items-center text-center p-4 sm:p-6">
              <LineIcon name={icon} />
              <p className="font-semibold text-sm mt-3">{title}</p>
            </div>
          ))}

        </div>

      </section>

      {/* About preview */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-extrabold">
            Your Partner
            <span className="block text-green-600">in Progress</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            We help businesses set priorities, improve the way they work, and choose technology that supports their goals.
          </p>

          <Link
            to="/about"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Learn More →
          </Link>
        </div>

        <div className="rounded-3xl overflow-hidden bg-green-100 p-3">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
            alt="Modern glass office building"
            className="w-full h-72 object-cover rounded-2xl"
          />
        </div>

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

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition"
            >

              <div className="bg-green-100 h-36 flex items-center justify-center text-green-800">
                <LineIcon name={service.icon} className="h-12 w-12" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600 mt-3">{service.description}</p>

                <Link
                  to="/services"
                  className="inline-block mt-5 text-green-700 font-bold"
                >
                  Learn More →
                </Link>
              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="bg-green-700 text-white px-7 py-3 rounded-full hover:bg-green-800"
          >
            View All Services →
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
            className="bg-lime-400 text-green-950 px-7 py-3 rounded-full font-bold hover:bg-lime-300"
          >
            Contact Us →
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home
