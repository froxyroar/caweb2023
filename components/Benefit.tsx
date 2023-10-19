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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    margin: "12px", // Adjust the margin between cards
    marginTop: "16px"
  };

  return (    
    <div className="flex flex-col items-center justify-center min-h-screen" >
    <h1 className="text-5xl font-bold text-center mb-20" style={customStyle} id="benefit">
          Benefit you will get
            </h1>
      <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
        <div className="mr-4">
          <Card style={cardStyle} className="bg-red-700 hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-center text-white"style={{ fontSize: "24px" }}>TAK</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="mr-4">
          
          <Card style={cardStyle} className="bg-red-700 hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-center text-white"style={{ fontSize: "24px" }}>E-CERTIFICATE</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="mb-8 mr-4">
          <Card style={cardStyle} className="bg-red-700 hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-center text-white" style={{ fontSize: "24px" }}>KNOWLEDGE</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
