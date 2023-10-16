import React, { CSSProperties } from "react";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Benefits = () => {
  const customStyle = {
    color: '#000000',  // Set text color to black (#000000)
    backgroundColor: '#F4F4F4'
  };

  const cardStyle: CSSProperties = {
    height: "250px",
    width: "250px",
    backgroundColor: "transparent",  // Set background color to transparent
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px", // Adjust the margin between cards,
    backgroundRepeat: "no-repeat",
    border: "none"  // Remove the border around the background image
  };

  const cardStylesWithBackgrounds = [
    {
      ...cardStyle,
      backgroundImage: "url(/linux.png)",
      backgroundSize: "50%", // Adjust the image size (e.g., 80%)
      backgroundPosition: "center" // Center the background image
    },
    {
      ...cardStyle,
      backgroundImage: "url(/iot.png)",
      backgroundSize: "50%", // Adjust the image size (e.g., 80%)
      backgroundPosition: "center" // Center the background image
    },
    {
      ...cardStyle,
      backgroundImage: "url(/webdev.png)",
      backgroundSize: "50%", // Adjust the image size (e.g., 80%)
      backgroundPosition: "center" // Center the background image
    },
  ];

  return (
    <div className="text-center mt-8">
      <h1 className='text-5xl font-bold'>
        What will you learn?
      </h1>
      <div className="flex flex-col items-center justify-center mt-8" style={customStyle} id="benefit">
        <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
          {cardStylesWithBackgrounds.map((style, index) => (
            <div key={index} className="mb-40">
              <Card style={style}>
                <CardHeader>
                </CardHeader>
              </Card>
              <div className="text-center" style={{ marginTop: "10px" }}>
                {index === 0 ? "Linux" : index === 1 ? "IoT" : "Website Dev."}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
