"use client";
import VideoPlayer from "@/components/Videoplayer";
import About from "@/components/About";
import Course from "@/components/Course";
import Benefit from "@/components/Benefit";
import SdanK from "@/components/SyaratKetentuan";
import Berkas from "@/components/Berkas";
import Daftar from "@/components/Daftar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
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
    <main>
      <div className="sticky top-0 z-50">
        <nav
          className={`navbar  ${isScrolled ? "scrolled" : ""}`}
          style={navbarStyle}
        >
          <div className="container flex items-center p-4 md:hidden">
            <div className="flex w-full items-center -ml-1 ">
              <a
                href="https://cpsrg.org"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="flex items-center justify-end">
              <div className="dropdown">
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
                    className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-32 right-0"
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
          </div>
          <div className="hidden md:block container flex items-center p-6 ml-2 mr-1 lg:hidden">
            <div className="flex w-full items-center -ml-1 ">
              <a
                href="https://cpsrg.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./logocps.png" alt="Logo" className="h-10" />
              </a>
              <a
                className="text-[28px] font-forest-road font-bold mt-1 ml-3 mt-[5px]"
                style={{ color: "#ba2025" }}
                href="/"
                rel="noopener noreferrer"
              >
                CYBER ACADEMY
              </a>
            </div>
            <div
              className="flex items-center justify-end -mt-9 text-[18px]"
              style={{ color: "#231f20" }}
            >
              <ul className="flex space-x-6">
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
          <div className="hidden lg:block container flex items-center justify-between p-6 ml-10 mr-10 mb-3">
            <div className="flex items-center -ml-1 ">
              <a
                href="https://cpsrg.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./logocps.png" alt="Logo" className="h-16" />
              </a>
              <a
                className="text-[42px] font-forest-road font-bold mt-1 ml-3 mt-[12px]"
                style={{ color: "#ba2025" }}
                href="/"
                rel="noopener noreferrer"
              >
                CYBER ACADEMY
              </a>
            </div>
            <div
              className="flex items-center justify-end -mt-14 text-[25px] "
              style={{ color: "#231f20" }}
            >
              <ul className="flex space-x-6">
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
        </nav>
      </div>
      <div>
        <VideoPlayer />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Benefit />
      </div>
      <div>
        <Course />
      </div>
      <div>
        <SdanK />
      </div>
      <div>
        <Berkas />
      </div>
      <div>
        <Daftar />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
