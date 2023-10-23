import React from "react";
import Image from "next/image";
import bgImage from "@/public/tenda.png";

const About = () => {
  return (
    <div className="hero min-h-screen -my-24" id="about">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={bgImage}
          alt="Background Image"
          width={600}
          height={400}
          loading="eager"
          priority={true}
        />
        <div style={{ color: "#231f20" }}>
          <h1 className="flex justify-center text-[32px] font-bold  md:text-[40px]">
            CYBER ACADEMY
          </h1>
          <p className="text-center py-6 md:px-10 lg:px-0 lg:text-left lg:text-[20px]">
            Welcome to Cyber Academy, your gateway to an exciting and dynamic
            learning experience. We're not just a place to study; we're a
            vibrant community where knowledge knows no bounds. At Cyber Academy,
            you'll embark on a journey of exploration and innovation. Our
            program fosters collaboration, helping you build a diverse network
            of knowledge that goes beyond the classroom. We believe in the power
            of learning together, fostering new connections, and inspiring each
            other. Whether you're a seasoned learner or just starting your
            educational voyage, Cyber Academy is your partner in personal and
            professional growth. Join us, and together, let's embrace the
            limitless possibilities of knowledge and connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
