'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
    background: `#f4f4f4`,
    boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const handleScrollToAbout = () => {
    scroll.scrollTo(700, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -100,
      containerId: 'scroll-container', // Add a container ID where the scroll should happen
    });
  };
  const handleScrollToBenefit = () => {
    scroll.scrollTo(1400, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -100,
      containerId: 'scroll-container', // Add a container ID where the scroll should happen
    });
  };

  const handleScrollToDaftar = () => {
    scroll.scrollTo(2100, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -100,
      containerId: 'scroll-container', // Add a container ID where the scroll should happen
    });
  };

  return (
    <nav className={`navbar sticky top-0 z-50 ${isScrolled ? 'scrolled' : ''}`} style={navbarStyle}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="https://cpsrg.org" target="_blank" rel="noopener noreferrer">
          <img src="./logocps.png" alt="Logo" className="h-8"/>
        </a>

        <a className="text-xl font-bold ml-2" href="/" rel="noopener noreferrer">
          Cyber Academy
        </a>
        <ul className="flex space-x-4">
          <li>
            <ScrollLink to="about" smooth={true} offset={-100} duration={500} onClick={handleScrollToAbout}>
              <button>
                About
              </button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} offset={-100} duration={500} onClick={handleScrollToBenefit}>
              <button>
                Benefit
              </button>
            </ScrollLink>
          </li>
          <li>
          <ScrollLink to="about" smooth={true} offset={-100} duration={500} onClick={handleScrollToDaftar}>
              <button>
                Daftar
              </button>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
