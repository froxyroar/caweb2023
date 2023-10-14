import React, { CSSProperties } from "react";
import {
  Card,
  CardFooter,
  CardTitle
} from "@/components/ui/card";

const Course = () => {
  const cardStyle: CSSProperties = {
    backgroundImage: 'url("./logocps.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: "20px",
  };

  return (
    <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
      <div className="mb-4">
        <Card style={cardStyle}>
          <CardFooter>
            <CardTitle className="flex-end">Linux</CardTitle>
          </CardFooter>
        </Card>
      </div>
      <div className="mb-4">
        <Card style={cardStyle}>
          <CardFooter>
            <CardTitle className="flex-end">IoT</CardTitle>
          </CardFooter>
        </Card>
      </div>
      <div className="mb-4">
        <Card style={cardStyle}>
          <CardFooter>
            <CardTitle className="flex-end">Website Dev.</CardTitle>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Course;
