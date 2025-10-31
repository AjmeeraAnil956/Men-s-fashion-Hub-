
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Redefine Your <span className="text-indigo-400">Style</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 drop-shadow-md">
          Look Sharp, Feel Confident. Discover the latest trends and timeless classics in men's fashion.
        </p>
        <a
          href="#categories"
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Styles
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
