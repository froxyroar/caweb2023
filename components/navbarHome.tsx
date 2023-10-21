"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navbarStyle = {
    background: `#f4f4f4`,
    boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="navbar-start">
        <div className="hidden md:flex flex-row items-center">
          <a href="https://cpsrg.org" target="_blank" rel="noopener noreferrer">
            <img src="./logocps.png" alt="Logo" className="h-8" />
          </a>
          <a
            className="text-[19.4px] font-forest-road font-bold mt-1 ml-2"
            style={{ color: "#ba2025" }}
            href="/"
            rel="noopener noreferrer"
          >
            CYBER ACADEMY
          </a>
        </div>

        <div className="dropdown md:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              style={{ color: "#ba2025" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-32" // Adjust 'right' here
              style={{
                backgroundColor: "#f4f4f4",
                color: "#000000",
                border: "1px solid #ba2025",
              }}
            >
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button onClick={toggleDropdown}>About</button>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="benefit"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button onClick={toggleDropdown}>Benefit</button>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="daftar"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button onClick={toggleDropdown}>Daftar</button>
                </ScrollLink>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex items-center -ml-1 md:hidden">
          <a href="https://cpsrg.org" target="_blank" rel="noopener noreferrer">
            <img src="./logocps.png" alt="Logo" className="h-8" />
          </a>
          <a
            className="text-[19.4px] font-forest-road font-bold mt-1 ml-2"
            style={{ color: "#ba2025" }}
            href="/"
            rel="noopener noreferrer"
          >
            CYBER ACADEMY
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <div
          className="hidden md:block flex items-center justify-end -mt-2 text-[18px]"
          style={{ color: "#231f20" }}
        >
          <ul className="flex space-x-6">
            <li>
              <ScrollLink to="about" smooth={true} offset={-100} duration={500}>
                <button>About</button>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="benefit"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button>Benefit</button>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="daftar"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button>Daftar</button>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavHome;
