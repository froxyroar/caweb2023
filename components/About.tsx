import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/logocps.png';

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="w-1/2 p-8 items-end">
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
