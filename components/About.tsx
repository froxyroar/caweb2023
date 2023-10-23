import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/tenda.png';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen -mt-26 relative md:-mt-0 md:gap-5" id='about'>
      <div className="w-1/2 md:w-4/5">
        <div className="h-full flex items-center justify-center">
          <Image
            src={bgImage}
            alt="Background Image"
            width={600}
            height={400}
            loading="eager"
            priority={true}
          />
        </div>
      </div>
      <div className=" md:w-4/5 mt-10 md:mt-0 flex items-start justify-center" style={{ maxWidth: '800px' }}>
        <div>
          <h1 className="text-4xl font-bold text-center md:text-5xl text-left w-2/3 mb-5" style={{ color: "#231f20" }}>
            Cyber Academy
          </h1>
          <p className="text-[18px] font-castoro leading-7 text-left md:text-[30px] w-4/5" style={{ color: "#231f20" }}>
            Cyber academy adalah sebuah rangkaian studi grup yang inovatif dan dinamis, menghadirkan platform belajar yang memungkinkan partisipan untuk merajut jaringan pengetahuan yang luas.
          </p>
        </div>
      </div>

      {/* For mobile screens (md:hidden), image on top, text below */}
      <div className="w-full md:hidden mt-5">
        <div className="h-full flex items-center justify-center">
          <Image
            src={bgImage}
            alt="Background Image"
            width={600}
            height={400}
            loading="eager"
            priority={true}
          />
        </div>
      </div>
      <div className="w-full md:hidden mt-5">
        <p className="text-[18px] font-castoro leading-7 text-left md:text-[30px]" style={{ color: "#231f20" }}>
          Cyber academy adalah sebuah rangkaian studi grup yang inovatif dan dinamis, menghadirkan platform belajar yang memungkinkan partisipan untuk merajut jaringan pengetahuan yang luas.
        </p>
      </div>
    </div>
  );
};

export default About;
