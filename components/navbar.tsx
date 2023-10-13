'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: `linear-gradient(to bottom, #BE9F9F, #D9C6C6, #BD9E9E)`, // Adjust gradient colors
    boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  };

  return (
    <nav className={`navbar sticky top-0 z-50 ${isScrolled ? 'scrolled' : ''}`} style={navbarStyle}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="text-xl font-bold text-white" href="#">
          Cyber Academy
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white">Home</a>
          </li>
          <li>
            <a href="#" className="text-white">About</a>
          </li>
          <li>
            <a href="#" className="text-white">Daftar</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
