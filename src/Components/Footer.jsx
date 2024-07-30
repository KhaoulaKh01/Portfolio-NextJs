import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-200 text-white py-6">
      <footer className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Khaoula Khoudali</h2>
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/khaoula-khoudali-678132231"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/2709725KHOUDALI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:khaoula.khoudali@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Khaoula Khoudali. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
