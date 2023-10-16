import React, { CSSProperties } from "react";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Benefits = () => {
  const customStyle = {
    color: '#021713',
    backgroundColor: '#F4F4F4'
  };

  const cardStyle: CSSProperties = {
    backgroundColor: "#BA2025",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    margin: "0 10px", // Adjust the margin between cards
  };

  return (
    <div>
                <h1 className='text-5xl font-bold text-center'>
          Benefit you will get
            </h1>
    <div className="flex flex-col items-center justify-center min-h-screen" style={customStyle} id="benefit">
      <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
        <div className="mr-4">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle className="text-center text-white">TAK</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="mr-4">
          
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle className="text-center text-white">E-CERTIFICATE</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="mb-20 mr-4">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle className="text-center text-white">KNOWLEDGE</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Benefits;
