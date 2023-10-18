"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: `#f4f4f4`,
    boxShadow: isScrolled ? "0 7px 9px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <nav
      className={`navbar sticky top-0 z-50${isScrolled ? "scrolled" : ""}`}
      style={navbarStyle}
    >
      <div className="container flex items-center p-4">
        <a href="/">
          <div className="btn btn-ghost -ml-7 -mt-1">
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width="45px"
              height="45px"
              viewBox="0 0 100 100"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044 c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519 c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"></path>{" "}
                  <path d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458 S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457 c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </a>
        <div className="flex w-full items-center ml-4 md:hidden">
          <a
            className="text-[25px] font-forest-road font-bold mt-1"
            style={{ color: "#ba2025" }}
            href="/"
            rel="noopener noreferrer"
          >
            FORM PENDAFTARAN
          </a>
        </div>
        <div className="flex w-full items-center justify-end md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              style={{color: "#ba2025"}}
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
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-7/8"
            >
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
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
      <div className="hidden md:block lg:hidden">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <a
              href="https://cpsrg.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./logocps.png" alt="Logo" className="h-8" />
            </a>
            <a
              className="text-xl font-bold ml-2"
              href="/"
              rel="noopener noreferrer"
            >
              Cyber Academy
            </a>
            <ul className="flex space-x-4">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
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
      <div className="hidden lg:block">
        <div className="hidden container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <a
              href="https://cpsrg.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./logocps.png" alt="Logo" className="h-8" />
            </a>
            <a
              className="text-xl font-bold ml-2"
              href="/"
              rel="noopener noreferrer"
            >
              Cyber Academy
            </a>
          </div>

          <div className="dropdown ml-auto">
            <label tabIndex={0} className="btn m-1">
              Menu
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-7/8"
            >
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
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
    </nav>
  );
};

export default Navbar;
