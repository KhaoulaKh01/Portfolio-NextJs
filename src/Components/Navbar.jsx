// src/Components/Navbar.jsx
'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; // Update the import path if needed
import { logout } from '../Slices/authSlice';
import Image from 'next/image';
import closeIcon from '../../public/closeIcon.png';
import menuIcon from '../../public/menuIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleTestimonialsClick = () => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      router.push('/testimonials');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a href="#about-me" className="flex items-center">
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            &gt;K&lt;
          </span>
        </a>

        <div className="relative flex items-center">
          <img
            className="h-6 cursor-pointer md:hidden"
            src={menuOpen ? closeIcon.src : menuIcon.src}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul
            className={`absolute top-full right-0 w-48 text-gray-200 rounded-md shadow-lg mt-2 transition-transform transform ${
              menuOpen ? "translate-y-0" : "translate-y-[-200%]"
            } md:static md:flex md:space-x-6 md:bg-transparent md:shadow-none md:mt-0 md:w-auto md:translate-y-0`}
            style={{
              background: 'linear-gradient(100.26deg, #C0C0C0 70%, rgba(192, 192, 192, 0) 120%)',
            }}
          >
            <li className="block px-4 py-2 cursor-pointer hover:bg-[#7042f861] md:px-0 md:py-0">
              <a href="#about-me">About me</a>
            </li>
            <li className="block px-4 py-2 cursor-pointer hover:bg-[#7042f861] md:px-0 md:py-0">
              <a href="#skills">Skills</a>
            </li>
            <li className="block px-4 py-2 cursor-pointer hover:bg-[#7042f861] md:px-0 md:py-0">
              <a href="#projects">Projects</a>
            </li>
            <li className="block px-4 py-2 cursor-pointer hover:bg-[#7042f861] md:px-0 md:py-0">
              <a href="#contact">Contact</a>
            </li>
            <li className="block px-4 py-2 cursor-pointer hover:bg-[#7042f861] md:px-0 md:py-0">
              <button onClick={handleTestimonialsClick}>Testimonials</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
