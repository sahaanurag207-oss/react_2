
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'

const features = [
  ['🌱', 'Sustainable Growth'],
  ['🛡️', 'Trusted Services'],
  ['👥', 'Expert Team'],
  ['🎧', '24/7 Support'],
]

const stats = [
  ['10K+', 'Happy Clients'],
  ['500+', 'Projects Delivered'],
  ['98%', 'Success Rate'],
]

const services = [
  {
    icon: '💼',
    title: 'Consulting',
    description: 'Expert advice for greater impact.',
  },
  {
    icon: '💻',
    title: 'Technology',
    description: 'Build smarter with modern technology.',
  },
  {
    icon: '📈',
    title: 'Business Growth',
    description: 'Strategic solutions for long-term success.',
  },
]

function Home() {
  return (
    <div>

      {/* Hero */}
      <section
        className="relative min-h-90 sm:min-h-105 overflow-hidden bg-[#063b20] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >

        <div className="absolute inset-0 bg-linear-to-r from-[#063b20]/95 via-[#063b20]/65 to-[#063b20]/20" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 sm:py-20 md:py-24">

          <div className="max-w-xl">

            <p className="text-lime-400 font-semibold tracking-widest uppercase">
              Innovate. Grow.
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-3">
              Innovate. Grow.
              <span className="block text-lime-400">Succeed.</span>
            </h1>

            <p className="text-green-100 text-lg mt-6 max-w-md">
              Smart solutions for a brighter and more successful future.
            </p>

            <Link
              to="/about"
              className="inline-block mt-8 bg-lime-400 text-green-950 px-7 py-3 rounded-full font-bold hover:bg-lime-300 transition"
            >
              Explore More →
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 -mt-8 relative z-10">

        <div className="bg-white shadow-lg rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-green-100">

          {features.map(([icon, title]) => (
            <div key={title} className="text-center p-6">
              <div className="text-3xl">{icon}</div>
              <p className="font-semibold text-sm mt-3">{title}</p>
            </div>
          ))}

        </div>

      </section>

      {/* About preview */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-green-600 text-sm font-bold tracking-widest">
            ABOUT US
          </p>

          <h2 className="text-4xl font-extrabold mt-3">
            Your Partner
            <span className="block text-green-600">in Progress</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            We're committed to helping you achieve your goals with
            innovative solutions and dedicated support.
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

      {/* Statistics */}
      <section className="bg-[#e6f4dc] py-10">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          {stats.map(([number, label]) => (
            <div key={label}>
              <h3 className="text-3xl font-extrabold text-green-700">
                {number}
              </h3>
              <p className="text-gray-600 mt-2">{label}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-green-600 font-bold tracking-widest text-sm">
            WHAT WE OFFER
          </p>

          <h2 className="text-4xl font-extrabold mt-3">
            Our Services
          </h2>

          <p className="text-gray-600 mt-3">
            Tailored solutions to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition"
            >

              <div className="bg-green-100 h-36 flex items-center justify-center text-6xl">
                {service.icon}
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
