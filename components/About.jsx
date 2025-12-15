"use client"

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen } from "react-icons/fa"

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ab</span>
            <span className="text-purple-400">ou</span>
            <span className="text-white">t</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-900/30 shadow-2xl">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 text-center">
            I am a Full Stack Developer specializing in building secure, scalable, and user-centric digital solutions. I combine strong frontend expertise with robust backend development to deliver high-quality web applications that support real business needs.</p>

          {/* Skills */}
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h3>
                    <div className="w-25 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 "></div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
            {["React", "JavaScript", "CSS", "HTML", "Git", "Bootstrap"].map((skill) => (
              <div
                key={skill}
                className="bg-purple-900/20 border border-purple-700/50 rounded-xl p-4 text-center text-purple-300 font-semibold hover:bg-purple-800/30 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { Icon: FaGithub, href: "https://github.com/hemandhp", label: "GitHub" },
              { Icon: FaLinkedin, href: "www.linkedin.com/in/hemand-pp-04120425a", label: "LinkedIn" },

              { Icon: FaInstagram, href: "https://www.instagram.com/_.hemand_____/?__pwa=1", label: "Instagram" },
              { Icon: FaTwitter, href: "https://x.com/ultra_hp70282?t=yZsgAqKj8XLTndH8Nmkfdg&s=09", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-14 h-14 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
