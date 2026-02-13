import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle, FaHandshake } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:nrfunk5@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    // Show success message
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-300 mb-12">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-left">Contact Info</h3>
            
            <a
              href="mailto:nrfunk5@gmail.com"
              className="
                flex items-center gap-4
                p-4
                rounded-lg
                border border-gray-800
                bg-gray-900/50
                hover:bg-gray-900/80
                hover:border-purple-500
                transition-all
                text-left
              "
            >
              <FaEnvelope className="text-purple-400 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white hover:text-purple-400 transition">
                  nrfunk5@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://umn.joinhandshake.com/profiles/nicolas_funk"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                p-4
                rounded-lg
                border border-gray-800
                bg-gray-900/50
                hover:bg-gray-900/80
                hover:border-purple-500
                transition-all
                text-left
              "
            >
              <FaEnvelope className="text-purple-400 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Handshake</p>
                <p className="text-white hover:text-purple-400 transition text-sm">
                  umn.joinhandshake.com
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-4 text-left">Follow me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ItsArgon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-lg
                    border border-gray-800
                    bg-gray-900/50
                    hover:bg-gray-900
                    hover:border-purple-500
                    hover:text-purple-400
                    text-gray-400
                    transition-all
                  "
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://umn.joinhandshake.com/profiles/nicolas_funk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-lg
                    border border-gray-800
                    bg-gray-900/50
                    hover:bg-gray-900
                    hover:border-purple-500
                    hover:text-purple-400
                    text-gray-400
                    transition-all
                  "
                  aria-label="Handshake"
                >
                  <FaHandshake size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-left mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border border-gray-800
                    bg-gray-900/50
                    text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-purple-500
                    transition-colors
                  "
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border border-gray-800
                    bg-gray-900/50
                    text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-purple-500
                    transition-colors
                  "
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border border-gray-800
                    bg-gray-900/50
                    text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-purple-500
                    transition-colors
                    resize-none
                  "
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="
                  w-full
                  px-6 py-3
                  bg-gradient-to-r from-purple-600 to-indigo-600
                  hover:from-purple-700 hover:to-indigo-700
                  text-white
                  font-semibold
                  rounded-lg
                  transition-all
                  disabled:opacity-75
                  flex items-center justify-center gap-2
                "
              >
                {submitted ? (
                  <>
                    <FaCheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              I'll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
