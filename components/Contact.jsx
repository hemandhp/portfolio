"use client"
import toast from "react-hot-toast"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa"

export default function Contact() {
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        "service_fysl21r",
        "template_uj9cddz",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "KHddLuZdJOTgqyoFv"
      )
      .then(() => {
      toast.success("Message sent successfully.✅")
      setFormData({ name: "", email: "", subject: "", message: "" })
    })
    .catch((error) => {
      console.error("EmailJS Error:", error)
      toast.error("Failed to send message.🚫")
        }
      )
  }

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Cont</span>
            <span className="text-purple-400">act</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Drop me a message</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center text-purple-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">hemandpp1605@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center text-purple-400">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">+91 8281766311</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center text-purple-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[
                { Icon: FaGithub, href: "https://github.com/hemandhp" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hemand-pp-04120425a" },
                { Icon: FaTwitter, href: "https://x.com/ultra_hp70282" },
                { Icon: FaWhatsapp, href: "https://wa.me/918281766311" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-900/30 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-purple-900/20 border border-purple-700/50 rounded-xl px-6 py-4 text-white" />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-purple-900/20 border border-purple-700/50 rounded-xl px-6 py-4 text-white" />
              <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full bg-purple-900/20 border border-purple-700/50 rounded-xl px-6 py-4 text-white" />
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Your Message" required className="w-full bg-purple-900/20 border border-purple-700/50 rounded-xl px-6 py-4 text-white resize-none" />
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full font-semibold text-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 pt-10 border-t border-purple-900/30">
        <p className="text-gray-400">© 2025 Hemand. All rights reserved.</p>
      </div>
    </section>
  )
}
