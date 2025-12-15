"use client"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                Hi, I'm <span className="text-purple-400 font-semibold">Hemand </span>
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                FullStack Developer
              </h1>
            </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              I design engaging interfaces and engineer reliable backend systems, delivering full-stack solutions that are both visually striking and technically strong.
            </p>
            <a href="#about" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            About me
            </a> 
            {/* Download Resume Button */}
      <a
        href="/HEMAND PP.pdf"
        download
        target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 m-6 rounded-full font-semibold text-lg transition-all duration-300  hover:shadow-lg hover:shadow-purple-500/50">
        Download Resume
      </a>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50">
                <img
                  src="7777.jpg"
                  alt="Hemand PP - FullStack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
