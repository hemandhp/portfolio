import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Edu</span>
            <span className="text-purple-400">cati</span>
            <span className="text-white">on</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </div>

      {/* Education Card */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
        <h3 className="text-xl  font-semibold text-white">
          Bachelor of Computer Science (B.Sc CS)
        </h3>

        <p className="text-purple-400 font-medium mt-1">
          Kannur University 
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Morazha Arts and Science Collage, Kannur- Kerala
        </p>

        <p className="text-sm text-gray-500 mt-1">
          2022 – 2025
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Studying core computer science subjects with a strong emphasis on programming,
          algorithms, data structures, and software development principles.
        </p>
        </div>

        <br />

      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-semibold text-white">
          Java Full-Stack
        </h3>

        <p className="text-purple-400 font-medium mt-1">
          BLearn Academy 
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Banglore,India
        </p>

        <p className="text-sm text-gray-500 mt-1">
          May,2025 – Dec,2025
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Comprehensive training in Java programming, Spring Boot, React.js,
          full-stack web development, and database management.
        </p>
      </div>
    </section>
  );
}
