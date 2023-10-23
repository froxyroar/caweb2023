"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useGlobalContext } from "@/app/context/pendaftar";
import RegistrationButton from "./ui/registration-button";

const NavHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { participantsLeft, setParticipantsLeft } = useGlobalContext();

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
    <>
      <div className="navbar md:h-20" style={navbarStyle}>
        <div className="navbar-start lg:ml-40 md:ml-8">
          <div className="hidden md:flex flex-row items-center">
            <a
              className="text-[19.4px] font-forest-road font-bold mt-1 ml-2 lg:text-[32px]"
              style={{ color: "#ba2025" }}
              href="/"
              rel="noopener noreferrer"
            >
              CYBER ACADEMY
            </a>
          </div>
          <div className="drawer md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
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
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-44 min-h-full text-base-content" style={{background:"#f4f4f4", color:"#231f20", border:"1px solid"}}>
                {/* Sidebar content here */}
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
                    <button>Requirement</button>
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost" onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" style={{ color: "#ba2025" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
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
                  <ScrollLink to="about" smooth={true} offset={-100} duration={500}>
                    <button onClick={toggleDropdown}>About</button>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="benefit" smooth={true} offset={-100} duration={500}>
                    <button onClick={toggleDropdown}>Benefit</button>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="daftar" smooth={true} offset={-100} duration={500}>
                    <button onClick={toggleDropdown}>Daftar</button>
                  </ScrollLink>
                </li>
              </ul>
            )}
          </div> */}

          {/* <div className="flex items-center -ml-1 md:hidden">
            <a
              className="text-[19.4px] font-forest-road font-bold mt-1 "
              style={{ color: "#ba2025" }}
              href="/"
              rel="noopener noreferrer"
            >
              CYBER ACADEMY
            </a>
          </div> */}
        </div>
        <div className="navbar-center">
          <a
            className="text-[19.4px] font-forest-road font-bold mt-1 md:hidden"
            style={{ color: "#ba2025" }}
            href="/"
            rel="noopener noreferrer"
          >
            CYBER ACADEMY
          </a>
          <div
            className="hidden md:block items-center justify-end -mt-[1px] text-[18px] lg:text-[22px]"
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
                  to="skberkas"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Requirement</button>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="navbar-end md:mr-8 lg:mr-40 "
          style={{ color: "#231f20" }}
        >
          <div className="scale-75 md:scale-80 lg:scale-100">
            <RegistrationButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHome;
