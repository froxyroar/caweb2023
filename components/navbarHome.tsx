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
        <div className="navbar-start md:ml-2 lg:ml-5 ">
          <div className="hidden lg:flex flex-row items-center">
            <a
              className="text-[22px] font-forest-road font-bold mt-1 lg:text-[28px]"
              style={{ color: "#ba2025" }}
              href="/"
              rel="noopener noreferrer"
            >
              CYBER ACADEMY
            </a>
          </div>
          <div className="drawer lg:hidden">
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
              <ul
                className="menu p-4 w-44 min-h-full text-base-content md:w-72"
                style={{
                  background: "#f4f4f4",
                  color: "#231f20",
                  border: "1px solid",
                }}
              >
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
                    to="course"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Course</button>
                  </ScrollLink>
                </li>
                <li className="md:hidden">
                  <ScrollLink
                    to="daftar"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Requirement</button>
                  </ScrollLink>
                </li>
                <li className="hidden md:block">
                  <ScrollLink
                    to="skberkas"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Requirement</button>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="partner"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Media Partner</button>
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a
            className="text-[23px] font-forest-road font-bold mt-1 md:text-[27px] lg:hidden"
            style={{ color: "#ba2025" }}
            href="/"
            rel="noopener noreferrer"
          >
            CYBER ACADEMY
          </a>
          <div
            className="hidden lg:block items-center justify-end -mt-[1px] text-[17px] lg:text-[20px]"
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
                  to="course"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Course</button>
                </ScrollLink>
              </li>
              <li className="md:hidden">
                <ScrollLink
                  to="daftar"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Requirement</button>
                </ScrollLink>
              </li>
              <li className="hidden md:block">
                <ScrollLink
                  to="skberkas"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Requirement</button>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="partner"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Media Partner</button>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="navbar-end md:mr-0 lg:mr-5 "
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
