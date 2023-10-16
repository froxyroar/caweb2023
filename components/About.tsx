import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/tenda.png';

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen relative" id='about'>
      <div className="w-1/2 p-8 items-end flex items-center justify-center">
        <p className="text-lg font-castoro leading-6  max-w-lg text-center">
          Cyber academy adalah sebuah rangkaian studi grup yang inovatif dan dinamis, menghadirkan platform belajar yang memungkinkan partisipan untuk merajut jaringan pengetahuan yang luas.
        </p>
      </div>
      <div className="w-1/2">
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
    </div>
  );
};

export default About;
