"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="container" id="benefit">
      <h1
        className="flex justify-center text-2xl font-bold mb-16 lg:text-3xl"
        style={{ color: "#231f20" }}
      >
        ❯ Benefit You Will Get ❮
      </h1>
      <div className="min-w-screen md:hidden">
        <div className="flex flex-wrap">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item flex items-center relative w-full"
            >
              <a
                href="#slide5"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❮
              </a>
              <Card className="h-72 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/relation.png" alt="relation" className="w-12" />
                  <h1 className="text-white text-[16px] font-semibold mt-2 mb-2">
                    RELATION
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    Expanding your network and building relationships with new
                    people can open up exciting opportunities for personal and
                    professional growth.
                  </p>
                </div>
              </Card>
              <a
                href="#slide2"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❯
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
            </div>
            <div
              id="slide2"
              className="carousel-item flex items-center relative w-full"
            >
              <a
                href="#slide1"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❮
              </a>
              <Card className="h-72 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img
                    src="/certificate.png"
                    alt="certificate"
                    className="w-12"
                  />
                  <h1 className="text-white text-[] fon16pxt-semibold mt-2 mb-2">
                    E-CERTIFICATE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    as recognition of your dedication and commitment to
                    learning.
                  </p>
                </div>
              </Card>
              <a
                href="#slide3"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❯
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
            </div>
            <div
              id="slide3"
              className="carousel-item flex items-center relative w-full"
            >
              <a
                href="#slide2"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❮
              </a>
              <Card className="h-72 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/knowledge.png" alt="knowledge" className="w-12" />
                  <h1 className="text-white text-[]16px font-semibold mt-2 mb-2">
                    KNOWLEDGE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    your knowledge and understanding of the subject matter
                    significantly expanded.
                  </p>
                </div>
              </Card>
              <a
                href="#slide4"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❯
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
            </div>
            <div
              id="slide4"
              className="carousel-item flex items-center relative w-full"
            >
              <a
                href="#slide3"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❮
              </a>
              <Card className="h-72 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/practice.png" alt="pactice" className="w-12" />
                  <h1 className="text-white text-[16px] font-semibold mt-2 mb-2">
                    PRACTICE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">Practice makes perfect.</p>
                </div>
              </Card>
              <a
                href="#slide5"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❯
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
            </div>
            <div
              id="slide5"
              className="carousel-item flex items-center relative w-full"
            >
              <a
                href="#slide4"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❮
              </a>
              <Card className="h-72 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img
                    src="/experience.png"
                    alt="experience"
                    className="w-12"
                  />
                  <h1 className="text-white text-[] 16pxfont-semibold mt-2 mb-2">
                    EXPERIENCE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    valuable experience that enhances your understanding of the
                    subject and fosters collaborative learning.
                  </p>
                </div>
              </Card>
              <a
                href="#slide1"
                className="btn btn-ghost text-[20px] h-full"
                style={{ color: "#231f20" }}
              >
                ❯
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg text-[16px] w-48 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/relation.png" alt="relation" className="w-12" />
                  <h1 className="text-white text-[16px] font-semibold mt-2 mb-2">
                    RELATION
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    Expanding your network and building relationships with new
                    people can open up exciting opportunities for personal and
                    professional growth.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-48 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img
                    src="/certificate.png"
                    alt="certificate"
                    className="w-12"
                  />
                  <h1 className="text-white text-[13.3px] font-semibold mt-2 mb-2">
                    E-CERTIFICATE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    as recognition of your dedication and commitment to
                    learning.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-48 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/knowledge.png" alt="knowledge" className="w-12" />
                  <h1 className="text-white text-[16px] font-semibold mt-2 mb-2">
                    KNOWLEDGE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    your knowledge and understanding of the subject matter
                    significantly expanded.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex flex-row justify-center px-28">
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-48 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/practice.png" alt="pactice" className="w-12" />
                  <h1 className="text-white text-[16px] font-semibold mt-2 mb-2">
                    PRACTICE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">Practice makes perfect.</p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-48 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img
                    src="/experience.png"
                    alt="experience"
                    className="w-12"
                  />
                  <h1 className="text-white text-[] 16pxfont-semibold mt-2 mb-2">
                    EXPERIENCE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800">
                    valuable experience that enhances your understanding of the
                    subject and fosters collaborative learning.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
      <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between ">
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg  w-64 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/relation.png" alt="relation" className="w-12" />
                  <h1 className="text-white text-[22px] font-semibold mt-2 mb-2">
                    RELATION
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800 text-[19.3px]">
                    Expanding your network and building relationships with new
                    people can open up exciting opportunities for personal and
                    professional growth.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-64 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img
                    src="/certificate.png"
                    alt="certificate"
                    className="w-12"
                  />
                  <h1 className="text-white text-[22px] font-semibold mt-2 mb-2">
                    E-CERTIFICATE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800 text-[22px]">
                    as recognition of your dedication and commitment to
                    learning.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-64 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/knowledge.png" alt="knowledge" className="w-12" />
                  <h1 className="text-white text-[22px] font-semibold mt-2 mb-2">
                    KNOWLEDGE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800 text-[22px]">
                    your knowledge and understanding of the subject matter
                    significantly expanded.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex flex-row justify-center px-28 gap-10">
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-64 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img src="/practice.png" alt="pactice" className="w-12" />
                  <h1 className="text-white text-[22px] font-semibold mt-2 mb-2">
                    PRACTICE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800 text-[22px]">Practice makes perfect.</p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-64 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <img
                    src="/experience.png"
                    alt="experience"
                    className="w-12"
                  />
                  <h1 className="text-white text-[22px] 16pxfont-semibold mt-2 mb-2">
                    EXPERIENCE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="text-gray-800 text-[22px]">
                    valuable experience that enhances your understanding of the
                    subject and fosters collaborative learning.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
