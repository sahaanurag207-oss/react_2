
import { Link } from 'react-router-dom'

const resources = [
  ['📘', 'Getting Started Guide', 'Learn how to get started with our services.'],
  ['📊', 'Business Insights', 'Explore ideas and insights for business growth.'],
  ['🌿', 'Sustainability Guide', 'Discover sustainable business practices.'],
  ['💡', 'Innovation Toolkit', 'Find tools and ideas to improve your business.'],
]

function Resources() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <p className="text-green-600 font-bold tracking-widest">OUR RESOURCES</p>

      <h1 className="text-5xl font-extrabold mt-4">
        Explore & <span className="text-green-600">Learn.</span>
      </h1>

      <p className="text-gray-600 mt-5 max-w-2xl">
        Discover helpful resources, insights, and guides to support
        your journey toward business success.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {resources.map(([icon, title, description]) => (
          <div key={title} className="bg-white rounded-2xl shadow-md p-8">

            <div className="text-5xl">{icon}</div>

            <h2 className="text-2xl font-bold mt-5">{title}</h2>

            <p className="text-gray-600 mt-3">{description}</p>

            <Link to="/contact" className="inline-block mt-6 text-green-700 font-bold">
              Learn More →
            </Link>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Resources
