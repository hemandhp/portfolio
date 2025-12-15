"use client"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "Responsive Dashboard",
    description:
      "Responsive dashboard application with real-time data visualization. Features interactive charts, user authentication, and customizable widgets.",
    image: "p1.png",
    github: "https://github.com/hemandhp/html_example/blob/874ded8fa6b6cb24565c73f2d529d8768cf9783b/amnimation-site/dashboard.html",
    demo: "#",
  },
  {
    id: 2,
    title: "Double C&B",
    description:
      "Recipes and cooking blog platform with user-generated content, recipe ratings, and social sharing features.",
    image: "p2.png",
    github: "https://github.com/hemandhp/java-fullstack/blob/main/Bootstrap/Bootstrap-project2.html",
    demo: "#",
  },
  {
    id: 3,
    title: "Plant UI",
    description:
      "Plant care app providing plant identification, care tips, and watering reminders. Features a user-friendly interface and a plant database.",
    image: "p3.jpeg",
    github: "https://github.com/hemandhp/java-fullstack/blob/main/HTML/plant.html",
    demo: "#",
  },
  {
    id: 4,
    title: "To-Do-List App",
    description:
      "A simple and intuitive to-do list application that allows users to create, and manage their tasks efficiently with a clean user interface.",
    image: "todolist.png",
    github: "https://github.com/hemandhp/java-fullstack/tree/main/JavaScript/Todolist-app",
    demo: "#",
  },
]

export default function RecentWork() {
  return (
    <section id="projects" className="relative py-20 px-4">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Recent </span>
            <span className="text-purple-400">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Check out some of my latest projects</p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-purple-900/30 hover:bg-purple-600 border border-purple-700/50 text-purple-300 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
