import React, { CSSProperties } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Benefits = () => {
  const customStyle = {
    color: '#021713',   // Text color: #021713
    backgroundColor: '#F4F4F4'  // Background color: #F4F4F4
  };

  const cardStyle: CSSProperties = {
    backgroundColor: "#BA2025",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center vertically
    alignItems: "center",
    borderRadius: "20px",
    marginTop: "-160px",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={customStyle}>
      <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
        <div className="mb-4 mx-4 sm:mx-8 p-4 sm:p-8">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle className="text-center text-white">Linux</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="mb-4 mx-4 sm:mx-8 p-4 sm:p-8">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle className="text-center text-white">IoT</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="mb-4 mx-4 sm:mx-8 p-4 sm:p-8">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle className="text-center text-white">Website Dev.</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
