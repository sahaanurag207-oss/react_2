
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <p className="text-green-600 font-bold tracking-widest">ABOUT US</p>

      <h1 className="text-5xl font-extrabold mt-4">
        Building a Better
        <span className="block text-green-600">Tomorrow Together.</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">

        <div>
          <p className="text-gray-600 leading-relaxed">
            At YourBrand, we believe growth and sustainability go hand
            in hand. Our mission is to help businesses achieve meaningful
            progress through innovative ideas, technology, and expert support.
          </p>

          <p className="text-gray-600 leading-relaxed mt-5">
            We work closely with our clients to understand their goals
            and deliver solutions that create lasting value.
          </p>

          <Link to="/contact" className="inline-block mt-8 bg-green-700 text-white px-6 py-3 rounded-full">
            Work With Us →
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
          alt="Collaborative modern office"
          className="rounded-3xl w-full h-80 object-cover"
        />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-20">

        {[
          ['🌱', 'Our Mission', 'Create sustainable growth through innovative solutions.'],
          ['👁️', 'Our Vision', 'Build a brighter future for businesses and communities.'],
          ['🤝', 'Our Values', 'Trust, creativity, collaboration, and excellence.'],
        ].map(([icon, title, description]) => (
          <div key={title} className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-4xl">{icon}</div>
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-600 mt-3">{description}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default About
