import React from "react";

const Course = () => {
  return (
    <div className="container" id="course">
      <h1
        className="flex justify-center text-2xl font-bold mb-16 md:text-3xl md:mb-20"
        style={{ color: "#231f20" }}
      >
       What You Will learn ??
      </h1>
      <div className="flex flex-wrap gap-10 justify-center md:gap-14 lg:gap-20">
        <div className="flex flex-col items-center">
          <img
            className="mask mask-squircle w-32 drop-shadow-xl md:w-40 lg:w-52"
            src="/linux.png"
            alt="linux"
          />
          <h1
            className="text-center mt-4 font-semibold text-[24px]"
            style={{ color: "#231f20" }}
          >
            Linux
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="mask mask-squircle w-32 drop-shadow-xl md:w-40 lg:w-52"
            src="/iot.png"
            alt="linux"
          />
          <h1
            className="text-center mt-4 font-semibold text-[24px]"
            style={{ color: "#231f20" }}
          >
            IOT
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="mask mask-squircle w-32 drop-shadow-xl md:w-40 lg:w-52"
            src="/webdev.png"
            alt="linux"
          />
          <h1
            className="text-center mt-4 font-semibold text-[24px]"
            style={{ color: "#231f20" }}
          >
            WebDev
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Course;
