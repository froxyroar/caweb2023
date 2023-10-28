"use client";
import React, { useState } from "react";

const Course = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState(null);

  const openModal = (module) => {
    setCurrentModule(module);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modules = [
    {
      title: "Modul 1",
      description: "Deskripsi untuk Modul 1",
    },
    {
      title: "Modul 2",
      description: "Deskripsi untuk Modul 2",
    },
    {
      title: "Modul 3",
      description: "Deskripsi untuk Modul 3",
    },
    {
      title: "Modul 4",
      description: "Deskripsi untuk Modul 4",
    },
  ];
  const headers = [
    "Linux",
    "Embedded System",
    "Web Development",
    "Cloud IoT",
  ];

  return (
    <div className="container" id="course">
      <h1
        className="flex justify-center text-2xl font-bold mb-16 md:text-3xl md:mb-20"
        style={{ color: "#231f20" }}
      >
        Modul
      </h1>
      <div className="flex flex-wrap gap-10 justify-center md:gap-14 lg:gap-20">
        {modules.map((module, index) => (
          <div className="flex flex-col items-center group relative" key={index}>
            <div className="border border-gray-300 p-4 rounded-md relative">
              <h2 className="text-center mt-4 font-bold text-[24px]" style={{ color: "#231f20" }}>
                {module.title}
              </h2>
              <h1 className="mb-4 ml-14 mr-14 text-center mt-4 font-semibold text-[18px]" style={{ color: "#231f20", width: headers[index] === "Linux" || headers[index] === "Cloud IoT" ? '160px' : 'auto' }}>
                {headers[index]}
              </h1>
              <div className="border-t border-gray-300 mt-4 p-2">
                <div className="text-center">
                  <button
                    className="mt-2 bg-red-500 p-2 text-white hover:underline cursor-pointer bg-white p-2 rounded-full" style={{ padding: '5px 25px' }}
                    onClick={() => openModal(module)}
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && currentModule && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{currentModule.title}</h2>
            <p className="text-gray-700">{currentModule.description}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-gray-500 cursor-pointer"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
