"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)

  // Active section detection
  useEffect(() => {
    const onScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id)
        if (!el) return

        const top = el.offsetTop - 120
        const height = el.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(sec.id)
        }
      })
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT NAME */}
          <a href="#home" className="text-xl font-bold text-white">
            Hemand PP<span className="text-purple-500"></span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className={`transition ${
                    active === sec.id
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* SLIDE-IN MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black/90 backdrop-blur-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-bold text-white">
              Hemand<span className="text-purple-500">.</span>
            </h2>
            <button
              className="text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* MENU */}
          <ul className="space-y-6 text-gray-300 text-lg">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={() => setOpen(false)}
                  className={`block transition ${
                    active === sec.id
                      ? "text-purple-400"
                      : "hover:text-white"
                  }`}
                >
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
