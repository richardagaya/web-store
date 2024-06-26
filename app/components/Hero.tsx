
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center font-Lato">
      <div className="absolute z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Jukoro learning</h1>
        <p className="flex flex-col mt-4 text-lg md:text-2xl">
          Get access to over <span className="text-green-600 text-3xl">200+ e-books and tutorials</span>
        </p>
      </div>
    </section>
  );
};
export default Hero;
