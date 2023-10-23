import React, { CSSProperties } from "react";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Course = () => {
  const customStyle = {
    color: '#000000',
    backgroundColor: '#F4F4F4'
  };

  const cardStyle: CSSProperties = {
    height: "250px",
    width: "250px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
    backgroundRepeat: "no-repeat",
    border: "none",
    transition: "transform .2s", // Add transition for smooth transform
  };

  const cardStylesWithBackgrounds = [
    {
      ...cardStyle,
      backgroundImage: "url(/linux.png)",
      backgroundSize: "50%",
      backgroundPosition: "center"
    },
    {
      ...cardStyle,
      backgroundImage: "url(/iot.png)",
      backgroundSize: "50%",
      backgroundPosition: "center"
    },
    {
      ...cardStyle,
      backgroundImage: "url(/webdev.png)",
      backgroundSize: "50%",
      backgroundPosition: "center"
    },
  ];

  return (
    <div className="text-center mt-8">
      <h1 className='text-5xl font-bold mb-16'>
        What will you learn?
      </h1>
      <div className="flex flex-col items-center justify-center mt-8" style={customStyle} id="benefit">
        <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
          {cardStylesWithBackgrounds.map((style, index) => (
            <div key={index} className="mb-40 mx-8 transform hover:scale-105"> {/* Add hover effect */}
              <Card style={style}>
                <CardHeader>
                </CardHeader>
              </Card>
              <div className="text-center" style={{ marginTop: "16px", fontSize: "20px"}} >
                {index === 0 ? "Linux" : index === 1 ? "IoT" : "Web Development"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
