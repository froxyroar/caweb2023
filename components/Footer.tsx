import React from "react";
import Image from "next/image";
import cpsImage from "@/public/LogoBlack.png"
import lineImage from "@/public/line.png"
import instagramImage from "@/public/instagram.png"

const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <p className="text-[17px] md:text-[24px]">--For More Information--</p>
      <nav>
        <div className="grid grid-flow-col gap-5 md:gap-7">
          <a href="https://cpsrg.org">
          <Image className="w-9 invert contrast-200 mt-[2px] md:w-14" src={cpsImage} alt="Background Image" loading="eager" priority={true} />
          </a>
          <a href="https://linevoom.line.me/user/_dXv7UGqfCsuJ5ofjknDfofM1elh3mtCt_KZ4eQI">
          <Image className="w-9 md:w-14" src={lineImage} alt="Background Image" loading="eager" priority={true} />
          </a>
          <a href="https://www.instagram.com/cpslaboratory/">
          <Image className="w-9 md:w-14" src={instagramImage} alt="Background Image" loading="eager" priority={true} />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-[10px] md:text-[17px]">&copy; 2023 Cyber Physical System Laboratory. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;

// <div className="bg-red-600 py-4 text-white text-center">
//   <div className="container mx-auto">
//     <div className="flex justify-center">
//       <p>&copy; 2023 Cyber Physical System Laboratory. All rights reserved.</p>
//     </div>
//   </div>
// </div>
