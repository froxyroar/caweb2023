"use client";
import React, { useState, useEffect } from "react";

const NavForm = () => {
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
    <div className="navbar" style={navbarStyle}>
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost normal-case text-[17px] md:text-[25px] lg:ml-2 lg:text-[28px]" style={{color:"#231f20"}}>
            ❮❮
          </a>
        </div>
        <div className="navbar-center">
          <label
            className="text-[25px] font-forest-road font-bold mt-[7px] md:text-[38px] md:mt-[10px] lg:text-[43px] lg:mt-[12px]"
            style={{ color: "#ba2025" }}
          >
            FORM PENDAFTARAN
          </label>
        </div>
        <div className="navbar-end">
        </div>
      </div>
  );
};

export default NavForm;
