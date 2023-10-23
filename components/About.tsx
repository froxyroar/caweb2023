import React from "react";
import Image from "next/image";
import bgImage from "@/public/tenda.png";

const About = () => {
  return (
    <div className="hero min-h-screen -my-24" id='about'>
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={bgImage}
          alt="Background Image"
          width={600}
          height={400}
          loading="eager"
          priority={true}
        />
        <div style={{color: "#231f20"}}>
          <h1 className="flex justify-center text-[32px] font-bold  md:text-[40px]">CYBER ACADEMY</h1>
          <p className="text-center py-6 md:px-10 lg:px-0 lg:text-left lg:text-[20px]">
            Cyber Academy adalah sebuah rangkaian studi grup yang inovatif dan
            dinamis, menghadirkan platform belajar yang memungkinkan partisipan
            untuk merajut jaringan pengetahuan yang luas.
          </p>
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center justify-center h-screen -mt-26 relative md:-mt-0 md:gap-5" id='about'>
    //   <div className="w-4/5">
    //     <div className="h-full flex items-center justify-center">
    //       <Image
    //         src={bgImage}
    //         alt="Background Image"
    //         width={600}
    //         height={400}
    //         loading="eager"
    //         priority={true}
    //       />
    //     </div>
    //   </div>
    //   <div className="w-5/6 mt-10 flex items-center justify-center">
    //     <p className="text-[18px] font-castoro leading-7 text-center md:text-[30px]"
    //     style={{color: "#231f20"}}>
    //       Cyber academy adalah sebuah rangkaian studi grup yang inovatif dan dinamis, menghadirkan platform belajar yang memungkinkan partisipan untuk merajut jaringan pengetahuan yang luas.
    //     </p>
    //   </div>
    // </div>
  );
};

export default About;
