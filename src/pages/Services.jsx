
import { Link } from 'react-router-dom'

const services = [
  ['💼', 'Business Consulting', 'Expert guidance to improve business performance and strategy.'],
  ['💻', 'Technology Solutions', 'Modern digital tools and technology for your business.'],
  ['📈', 'Business Growth', 'Strategies to expand your reach and achieve growth.'],
  ['🎨', 'Creative Design', 'Engaging designs that communicate your brand identity.'],
  ['🌱', 'Sustainability', 'Environmentally responsible business solutions.'],
  ['🤝', 'Customer Support', 'Reliable assistance whenever you need it.'],
]

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">
        <p className="text-green-600 font-bold tracking-widest">OUR SERVICES</p>
        <h1 className="text-5xl font-extrabold mt-4">What We Do</h1>
        <p className="text-gray-600 mt-4">
          Tailored solutions designed to help your business succeed.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {services.map(([icon, title, description]) => (
          <div key={title} className="lift-card bg-white rounded-2xl shadow-md p-8">

            <div className="text-5xl">{icon}</div>

            <h2 className="text-xl font-bold mt-5">{title}</h2>

            <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>

            <Link to="/contact" className="interactive-link inline-block mt-6 text-green-700 font-bold">
              Get Started <span className="button-arrow" aria-hidden="true">→</span>
            </Link>

          </div>
        ))}

      </div>

      <div className="text-center mt-16 bg-green-800 text-white p-10 rounded-3xl">
        <h2 className="text-3xl font-bold">Need a custom solution?</h2>
        <p className="mt-3 text-green-100">Let's discuss your business goals.</p>
        <Link to="/contact" className="action-button inline-block mt-6 bg-lime-400 text-green-950 px-6 py-3 rounded-full font-bold">
          Contact Us
        </Link>
      </div>

    </section>
  )
}

export default Services
