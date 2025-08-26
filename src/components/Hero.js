import React from 'react';

const Hero = () => {
  return (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-blue-600 relative overflow-hidden px-4 md:px-8">
  {/* Blurred gradient circles background */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-80 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute top-1/2 left-40 w-72 h-72 bg-white opacity-40 rounded-full blur-2xl pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-65 rounded-full blur-3xl pointer-events-none"></div>
  <div className="text-center text-white max-w-2xl w-full mx-auto px-4 sm:px-8 py-12 md:py-20 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-yellow-300">Marc Justin Alberto</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-blue-100">
          Student Software Developer
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-100 max-w-2xl mx-auto">
          I create beautiful, functional, and user-friendly web applications that 
          solve real-world problems and deliver exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;