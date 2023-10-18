import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/tenda.png';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-26 relative md:-mt-0 md:gap-5" id='about'>
      <div className="w-4/5">
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
      <div className="w-5/6 mt-10 flex items-center justify-center">
        <p className="text-[18px] font-castoro leading-7 text-center md:text-[30px]"
        style={{color: "#231f20"}}>
          Cyber academy adalah sebuah rangkaian studi grup yang inovatif dan dinamis, menghadirkan platform belajar yang memungkinkan partisipan untuk merajut jaringan pengetahuan yang luas.
        </p>
      </div>
    </div>
  );
};

export default About;
