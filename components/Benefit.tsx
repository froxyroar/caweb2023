import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="bg-gray-100 py-16" id="benefit">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Benefits you will get</h1>
      </div>

      <div className="flex justify-center flex-wrap">
        <div className="m-4 max-w-sm">
          <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg" style={{ height: "380px" }}>
            <CardHeader className="bg-red-700 p-4 rounded-t-lg">
              <h1 className="text-white text-xl font-semibold mt-2 mb-2">Connections & Networking</h1>
            </CardHeader>
            <div className="p-4 overflow-y-auto" style={{ maxHeight: "250px" }}>
              <p className="text-gray-800">
                Cyber Academy brings together individuals who share your passion for learning, fostering meaningful connections and networking opportunities that can benefit your personal and professional growth.
              </p>
            </div>
          </Card>
        </div>

        <div className="m-4 max-w-sm">
          <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg" style={{ height: "380px" }}>
            <CardHeader className="bg-red-700 p-4 rounded-t-lg">
              <h1 className="text-white text-xl font-semibold mt-2 mb-2">E-Certificate</h1>
            </CardHeader>
            <div className="p-4 overflow-y-auto" style={{ maxHeight: "250px" }}>
              <p className="text-gray-800">
                Upon successfully completing Cyber Academy, participants will receive an E-Certificate that can be used for TAK.
              </p>
            </div>
          </Card>
        </div>

        <div className="m-4 max-w-sm">
          <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg" style={{ height: "380px" }}>
            <CardHeader className="bg-red-700 p-4 rounded-t-lg">
              <h1 className="text-white text-xl font-semibold mt-2 mb-2">Practical Knowledge</h1>
            </CardHeader>
            <div className="p-4 overflow-y-auto" style={{ maxHeight: "250px" }}>
              <p className="text-gray-800">
                At Cyber Academy, we don't stop at theoretical learning. Our goal is to provide you with practical, applicable knowledge that will serve you well in your future endeavors.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
