
import { useRef, useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    formRef.current?.reset()
    setSubmitted(true)
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <div className="text-center mb-12">
        <p className="text-green-600 font-bold tracking-widest">CONTACT US</p>

        <h1 className="text-5xl font-extrabold mt-4">
          Let's Start a <span className="text-green-600">Conversation.</span>
        </h1>

        <p className="text-gray-600 mt-4">
          Tell us about your project. We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="lift-card bg-green-800 text-white rounded-3xl p-10">

          <h2 className="text-3xl font-bold">Get in Touch</h2>

          <p className="text-green-100 mt-4">
            Use the form to share a question or describe your project.
          </p>

        </div>

        {submitted ? (
          <div
            role="status"
            className="contact-confirmation flex flex-col items-start justify-center bg-white p-8 rounded-3xl shadow-md"
          >
            <p className="text-green-700 font-bold tracking-widest">MESSAGE RECEIVED</p>
            <h2 className="text-2xl font-bold mt-3">Thank you for reaching out.</h2>
            <p className="text-gray-600 mt-3">
              Your message has been submitted. We appreciate you getting in touch.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="action-button mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-bold transition"
            >
              Send another message
            </button>
          </div>
        ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-md space-y-5">

          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Subject</label>
            <input
              required
              type="text"
              placeholder="How can we help?"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />
          </div>

          <button className="action-button w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold transition">
            Send Message →
          </button>

        </form>
        )}

      </div>

    </section>
  )
}

export default Contact
