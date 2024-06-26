import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-white text-black flex flex-col md:flex-row items-center justify-center md:justify-between font-Lato p-4 md:p-10">
      <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-10 w-full md:w-auto">
        <div className="w-full md:w-1/2 text-center md:text-left transform md:-rotate-3 ">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Welcome to Jukoro Learning</h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">Your Gateway to Unlimited Knowledge</p>
          <p className="flex flex-col mt-4 text-base sm:text-lg md:text-xl">
            Get access to over <span className="text-green-600 text-xl sm:text-2xl md:text-3xl">200+ e-books and tutorials</span>
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-green-700 transition duration-300">
            Start Learning Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/hero1.png" // Replace with your image path
            alt="Pointing to the text"
            width={500} // Set appropriate width
            height={500} // Set appropriate height
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;





