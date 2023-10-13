import React from "react";
import Image from "next/image";
import bgImage from "@/public/logocps.png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative" style={{ backgroundColor: "#520000" }}>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0"></div>
        <Image
          src={bgImage}
          alt="Background Image"
          width={600} // Adjust the width as needed for better quality
          height={400} // Adjust the height as needed for better quality
          loading="eager" // Add loading attribute to eagerly load the image
          priority={true} // Add priority prop to indicate it's an important image
        />
      </div>
      <div className="relative z-20 p-8 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Cyber Academy
        </h1>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default About;
