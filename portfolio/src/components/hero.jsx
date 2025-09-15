import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Anne 👋</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A passionate Web Developer building modern and responsive applications.
        </p>
        <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
