// components/Navbar.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Jukoro</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white">contact</Link>
          <Link href="#about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="#packages" className="text-gray-300 hover:text-white">Premium services</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-white">About Us</Link>
            <Link href="#packages" className="text-gray-300 hover:text-white">Packages</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
