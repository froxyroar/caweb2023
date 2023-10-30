"use client";
import React, { useState, useEffect } from "react";

const Course = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<Module | null>(null);

  interface Module {
    title: string;
    titleModal: string;
    description: string;
    lessons: { name: string; link: string }[];
    image: string;
  }

  const openModal = (module: Module) => {
    setCurrentModule(module);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Jika modal terbuka, ubah overflow dari body menjadi hidden
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Jika modal ditutup, kembalikan overflow dari body ke auto
      document.body.style.overflow = "auto";
    }

    // Bersihkan efek samping saat komponen dilepas
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const modules = [
    {
      title: "Modul 1",
      titleModal: "Basic Linux",
      description:
        "Pada tahun 1991, Linus Torvalds, seorang mahasiswa dari Universitas Helsinki, memulai proyek untuk membuat kernel sistem operasi seperti UNIX. Kernel ini pada awalnya hanya dapat membaca hardisk dan perangkat yang terhubung pada komputer. Pada tahun yang sama, Richard Stallman, seorang penggemar free software, memulai project GNU. Torvalds kemudian menggabungkan kernelnya dengan project GNU, menghasilkan sistem operasi GNU/Linux. Setelah Linux kernel berhasil diciptakan, Torvalds mengubah lisensinya menjadi GPL (General Public License), memungkinkan siapa saja untuk menggunakan, mengubah, dan mengembangkan Linux. Pada awal penggunaannya, Linux hanya digunakan untuk aplikasi pada web server, network server, dan database server. Namun, karena pengembangannya yang sangat pesat, saat ini Linux memiliki banyak sekali distro (distribusi) untuk penggunaan pribadi atau komersil dengan fungsinya masing-masing.",
      lessons: [
        {
          name: "Beginning Ubuntu Linux, 5th Edition",
          link: "https://drive.google.com/file/d/1kuOsXzNvsEYKtlk9JjD9FqgvsfmZ4AlU/view?usp=sharing",
        },
        {
          name: "Linux Bible, 9th Edition",
          link: "/https://drive.google.com/file/d/18oVgms4xWaitaC3rYiyt0RESn83GRZyb/view?usp=sharing",
        },
        {
          name: "Linux Kernel Development, 3rd Edition",
          link: "/https://drive.google.com/file/d/1M6pjWwbWkcviiFy3Ei-mrY2yckX3cDJS/view?usp=sharing",
        },
      ],
      image: "./linux.png",
    },
    {
      title: "Modul 2",
      titleModal: "Embedded System",
      description: "testing",
      lessons: [
        { name: "Lesson 1", link: "/lesson1" },
        { name: "Lesson 2", link: "/lesson2" },
        { name: "Lesson 3", link: "/lesson3" },
      ],
      image: "./linux.png",
    },
    {
      title: "Modul 3",
      titleModal: "Web Development",
      description: "Deskripsi untuk Modul 3",
      lessons: [
        { name: "Lesson 1", link: "/lesson1" },
        { name: "Lesson 2", link: "/lesson2" },
        { name: "Lesson 3", link: "/lesson3" },
      ],
      image: "./linux.png",
    },
    {
      title: "Modul 4",
      titleModal: "Cloud IoT",
      description: "Deskripsi untuk Modul 4",
      lessons: [
        { name: "Lesson 1", link: "/lesson1" },
        { name: "Lesson 2", link: "/lesson2" },
        { name: "Lesson 3", link: "/lesson3" },
      ],
      image: "./linux.png",
    },
  ];
  const headers = [
    "Basic Linux",
    "Embedded System",
    "Web Development",
    "Cloud IoT",
  ];
  return (
    <div className="container" id="course">
      <h1
        className="flex justify-center text-2xl font-viga font-regular mb-16 md:text-3xl md:mb-20"
        style={{ color: "#231f20" }}
      >
        What You Will learn ??
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center md:gap-14 lg:gap-20 lg:mx-10 xl:mx-20">
        {modules.map((module, index) => (
          <div>
            <div
              className="flex flex-col items-center group relative"
              key={index}
            >
              <div className="flex justify-between border border-gray-300 w-80 h-52 p-4 rounded-md xl:w-96 xl:h-60">
                <div className="flex-grow self-center">
                  <img
                    src={module.image} // replace this with the actual path to your image
                    alt={module.title}
                    className="w-24 h-24 xl:w-32 xl:h-32" // add flex-grow
                  />
                </div>
                <div className="flex-grow self-center">
                  <h2
                    className="text-center mt-4 font-viga font-regular text-[24px]"
                    style={{ color: "#231f20" }}
                  >
                    {module.title}
                  </h2>
                  <h1
                    className="mb-4 text-center mt-4 font-plus-jakarta-sans font-semibold text-[18px]"
                    style={{
                      color: "#231f20",
                    }}
                  >
                    {headers[index]}
                  </h1>
                  <div className="border-t border-gray-300 mt-4 p-2">
                    <div className="text-center">
                      <button
                        className="mt-2 bg-red-500 p-2 text-white font-plus-jakarta-sans font-semibold hover:bg-gray-500 cursor-pointer p-2 rounded-full"
                        style={{ padding: "5px 25px" }}
                        onClick={() => openModal(module)}
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && currentModule && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="container mx-5 bg-white p-4 space-y-7 rounded shadow-md">
            <h2
              className="text-center underline underline-offset-4 text-[20px] font-viga font-regular mb-4"
              style={{ color: "#231f20" }}
            >
              {currentModule.titleModal}
            </h2>
            <p
              className="font-plus-jakarta-sans font-regular text-[13.1px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-justify"
              style={{ color: "#231f20" }}
            >
              {currentModule.description}
            </p>
            <div>
              <p className="mb-2" style={{ color: "#231f20" }}>
                References:{" "}
              </p>
              <ul className="space-y-3">
                {currentModule.lessons.map(
                  (lesson: { name: string; link: string }, index: number) => (
                    <li
                      key={index}
                      className="list-decimal ml-4 font-plus-jakarta-sans font-regular text-[13.5px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
                      style={{ color: "#231f20" }}
                    >
                      <a href={lesson.link} target="_blank" className="hover:bg-gray-100 hover:rounded px-1">{lesson.name}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <button
              className="bg-red-500 text-white p-2 rounded hover:bg-gray-500 cursor-pointer"
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