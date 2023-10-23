import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="bg-gray-100 py-16" id="benefit">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Benefits You Will Get</h1>
      </div>

      <div className="flex justify-center flex-wrap">
        <div className="m-4 max-w-sm">
          <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg">
            <CardHeader className="bg-red-700 p-4 rounded-t-lg">
              <h1 className="text-white text-xl font-semibold mt-2 mb-2">RELATION</h1>
            </CardHeader>
            <div className="p-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ac mauris at justo tincidunt fermentum.
              </p>
            </div>
          </Card>
        </div>

        <div className="m-4 max-w-sm">
          <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg">
            <CardHeader className="bg-red-700 p-4 rounded-t-lg">
              <h1 className="text-white text-xl font-semibold mt-2 mb-2">E-CERTIFICATE</h1>
            </CardHeader>
            <div className="p-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ac mauris at justo tincidunt fermentum.
              </p>
            </div>
          </Card>
        </div>

        <div className="m-4 max-w-sm">
          <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg">
            <CardHeader className="bg-red-700 p-4 rounded-t-lg">
              <h1 className="text-white text-xl font-semibold mt-2 mb-2">KNOWLEDGE</h1>
            </CardHeader>
            <div className="p-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ac mauris at justo tincidunt fermentum.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
