"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Packages: React.FC = () => {
  const [quantities, setQuantities] = useState({
    nutrition: 1,
    computer: 1,
    mental: 1,
  });

  const handleQuantityChange = (packageType: string, delta: number) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[packageType] + delta;
      return {
        ...prevQuantities,
        [packageType]: newQuantity > 0 ? newQuantity : 1, // Ensure quantity doesn't go below 1
      };
    });
  };

  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Premium Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/nutrition.jpg"
              alt="Health and Nutrition"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Health and Nutrition</h3>
            <p className="text-gray-700 mb-4">
              Health and Nutrition guide e-books to help boost your health impacting everything from our personal happiness to our professional productivity and immune system.
            </p>
            <div className="flex justify-center items-center mb-4">
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                onClick={() => handleQuantityChange('nutrition', -1)}
              >
                -
              </button>
              <span className="px-4">{quantities.nutrition}</span>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                onClick={() => handleQuantityChange('nutrition', 1)}
              >
                +
              </button>
            </div>
            <Link href={`/nutrition?quantity=${quantities.nutrition}`} className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center">
              Buy Package
            </Link>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/computer.jpg"
              alt="Computer Science Packages"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Computer Science Packages</h3>
            <p className="text-gray-700 mb-4">
              Get computer science courses and university-certified documentation that will help you pursue your learning career in computer science.
            </p>
            <div className="flex justify-center items-center mb-4">
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                onClick={() => handleQuantityChange('computer', -1)}
              >
                -
              </button>
              <span className="px-4">{quantities.computer}</span>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                onClick={() => handleQuantityChange('computer', 1)}
              >
                +
              </button>
            </div>
            <Link href={`/computer?quantity=${quantities.computer}`} className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center">
              Buy Package
            </Link>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/mental.jpg"
              alt="Mental Health and Wellness"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Mental Health and Wellness</h3>
            <p className="text-gray-700 mb-4">
              Mental health and wellness are crucial elements of our daily lives, impacting everything from our personal happiness to our professional productivity.
            </p>
            <div className="flex justify-center items-center mb-4">
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                onClick={() => handleQuantityChange('mental', -1)}
              >
                -
              </button>
              <span className="px-4">{quantities.mental}</span>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                onClick={() => handleQuantityChange('mental', 1)}
              >
                +
              </button>
            </div>
            <Link href={`/mental?quantity=${quantities.mental}`} className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center">
              Buy Package
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;


