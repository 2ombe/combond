import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-lg mb-8">
            Empowering African SMEs for a Sustainable Future
          </p>
          <Link
            to="/list"
            className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
