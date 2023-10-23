import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Berkas = () => {
  return (
    <div className="py-16 md:container md:py-0 " id="berkas">
      <div className="text-center mb-8">
        <h1 className="text-[35px] font-bold text-gray-800 md:hidden">
          Documents
        </h1>
        {/* <h1 className="text-[15px] font-bold text-gray-600 md:hidden">
          Click object to see more
        </h1> */}
      </div>
      <div className="join join-vertical w-full">
        <div
          className="collapse collapse-arrow join-item border border-base-300"
          style={{ backgroundColor: "#ba2025" }}
        >
          <input type="radio" name="my-accordion-4" />
          <div
            className="collapse-title text-[17px] font-medium"
            style={{ color: "#f4f4f4" }}
          >
            Creative CV
          </div>
          <div
            className="collapse-content"
            style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
          >
            <p className="mt-5">
              Creative Curriculum Vitae (CV) reflecting your educational
              background, experience, and skills.
            </p>
          </div>
        </div>
        <div
          className="collapse collapse-arrow join-item border border-base-300"
          style={{ backgroundColor: "#ba2025" }}
        >
          <input type="radio" name="my-accordion-4" />
          <div
            className="collapse-title text-[17px] font-medium"
            style={{ color: "#f4f4f4" }}
          >
            Full Body Photo
          </div>
          <div
            className="collapse-content"
            style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
          >
            <p className="mt-5">
              If wearing a hijab, use a square scarf, and if not, tie your hair
              neatly.
            </p>
          </div>
        </div>
        <div
          className="collapse collapse-arrow join-item border border-base-300"
          style={{ backgroundColor: "#ba2025" }}
        >
          <input type="radio" name="my-accordion-4" />
          <div
            className="collapse-title text-[17px] font-medium"
            style={{ color: "#f4f4f4" }}
          >
            Self Description
          </div>
          <div
            className="collapse-content"
            style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
          >
            <p className="mt-5">
              Document containing a description of yourself, including hobbies,
              interests, or other personal aspects you'd like to share.
            </p>
          </div>
        </div>
        <div
          className="collapse collapse-arrow join-item border border-base-300"
          style={{ backgroundColor: "#ba2025" }}
        >
          <input type="radio" name="my-accordion-4" />
          <div
            className="collapse-title text-[17px] font-medium"
            style={{ color: "#f4f4f4" }}
          >
            Vision, Mission, and Motivation
          </div>
          <div
            className="collapse-content"
            style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
          >
            <p className="mt-5">
              Your vision, mission, and motivation for joining the Cyber
              Academy.
            </p>
          </div>
        </div>
        <div
          className="collapse collapse-arrow join-item border border-base-300"
          style={{ backgroundColor: "#ba2025" }}
        >
          <input type="radio" name="my-accordion-4" />
          <div
            className="collapse-title text-[17px] font-medium"
            style={{ color: "#f4f4f4" }}
          >
            Essay
          </div>
          <div
            className="collapse-content"
            style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
          >
            <p className="mt-5">Essay on one of the following topics:</p>
            <ol className="list-decimal text-gray-800 text-2 mt-2 ml-4">
              <li>Cyber Physical System</li>
              <li>Embedded System</li>
              <li>Internet of Things</li>
              <li>Web Development</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berkas;

{
  /* <div className="flex flex-wrap justify-center">
  <div className="m-4 flex-grow min-w-min max-w-xs">
    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full">
      <CardHeader className="bg-red-700 p-4 rounded-t-lg flex items-center justify-center">
        <CardTitle className="text-white text-sm font-semibold">
          Creative CV
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-2 mt-4">
          Creative Curriculum Vitae (CV) reflecting your educational
          background, experience, and skills.
        </p>
      </CardContent>
    </Card>
  </div>

  <div className="m-4 flex-grow min-w-min max-w-xs">
    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full">
      <CardHeader className="bg-red-700 p-4 rounded-t-lg flex items-center justify-center">
        <CardTitle className="text-white text-sm font-semibold">
          Full Body Photo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-gray-800 text-2 mt-4">
          <li>Men: Wear a dress shirt and long pants.</li>
          <li>Women: Wear a dress shirt and long skirt.</li>
          <li>
            If wearing a hijab, use a square scarf, and if not, tie your
            hair neatly.
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>

  <div className="m-4 flex-grow min-w-min max-w-xs">
    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full">
      <CardHeader className="bg-red-700 p-4 rounded-t-lg flex items-center justify-center">
        <CardTitle className="text-white text-sm font-semibold">
          Self Description
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-2 mt-4">
          Document containing a description of yourself, including
          hobbies, interests, or other personal aspects you'd like to
          share.
        </p>
      </CardContent>
    </Card>
  </div>

  <div className="m-4 flex-grow min-w-min max-w-xs">
    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full">
      <CardHeader className="bg-red-700 p-4 rounded-t-lg flex items-center justify-center">
        <CardTitle className="text-white text-sm font-semibold">
          Vision, Mission, and Motivation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-2 mt-4">
          Your vision, mission, and motivation for joining the Cyber
          Academy.
        </p>
      </CardContent>
    </Card>
  </div>

  <div className="m-4 flex-grow min-w-min max-w-xs">
    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full">
      <CardHeader className="bg-red-700 p-4 rounded-t-lg flex items-center justify-center">
        <CardTitle className="text-white text-sm font-semibold">
          Essay
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-2 mt-4">
          Essay on one of the following topics:
        </p>
        <ul className="text-gray-800 text-2 mt-2 ml-4">
          <li>Cyber Physical System</li>
          <li>Embedded System</li>
          <li>Internet of Things</li>
          <li>Web Development</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</div> */
}
