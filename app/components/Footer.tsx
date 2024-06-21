import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="mb-6 md:mb-0 text-centerd ml-14">
                    <h4 className="text-xl font-bold mb-2">Our links</h4>
                    <ul className="text-sm flex flex-col md:flex-row md:space-x-4">
                        <li className="mb-2 md:mb-0"><a href="#about" className="hover:underline">About Us</a></li>
                        <li className="mb-2 md:mb-0"><a href="#services" className="hover:underline">Services</a></li>
                        <li className="mb-2 md:mb-0"><a href="#contact" className="hover:underline">Contact</a></li>
                        <li><a href="#faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>
                <div className="text-center mr-8">
                    <h4 className="text-xl font-bold mb-2">Follow Us</h4>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 hover:text-gray-400" />
                        </a>
                        <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 hover:text-gray-400" />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:text-gray-400" />
                        </a>
                        <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:text-gray-400" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
