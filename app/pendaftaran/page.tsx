"use client";
import Form from '@/components/formulir';
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const page = () => {
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
    <main>
      <div className='sticky top-0 z-50'>
        <nav
          className={`navbar ${isScrolled ? "scrolled" : ""}`}
          style={navbarStyle}
        >
          <div className="container flex items-center p-4">
            <a href="/">
              <div className="btn btn-ghost -ml-7 -mt-1 md:-ml-5 lg:mt-0">
                <svg
                  className='w-10 md:w-16 lg:w-20'
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
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
            <div className="flex w-full items-center ml-5 mt-[4px] md:justify-center md:-ml-16 md:mt-[1px] lg:mt-[20px] lg:-ml-20">
              <label
                className="text-[25px] font-forest-road font-bold md:text-[38px] lg:text-[50px]"
                style={{ color: "#ba2025" }}
              >
                FORM PENDAFTARAN
              </label>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Form />
      </div>
    </main>
  )
}

export default page