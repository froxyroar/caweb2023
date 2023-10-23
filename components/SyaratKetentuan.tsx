import React from "react";

const ContentSplit: React.FC = () => {
  const customColor = "#BA2025"; // Custom color code

  return (
    <div className="flex flex-col justify-center items-center p-2 mt-3 md:" id="daftar">
      <h1
        className="flex justify-center text-3xl font-bold mb-16 md:text lg:text"
        style={{ color: "#231f20" }}
      >
       Requirement
      </h1>
      <div
        className="rounded-lg p-4 w-full max-w-xl text-white"
        style={{ backgroundColor: "#ba2025", border:"1px solid #231f20"}}
      >
        <div>
          <h2 className="text-lg font-bold mb-5 text-center">
            Syarat dan Ketentuan
          </h2>
          <ol className="list-decimal pl-4 ml-4 space-y-2 mx-auto text-base leading-relaxed text-[14.5px]">
            <li className="">Bertakwa kepada Tuhan Yang Maha Esa</li>
            <li className="">Mahasiswa aktif Telkom University</li>
            <li className="">Mahasiswa FTE & FRI 2021, 2022, 2023</li>
            <li className="">
              Memiliki motivasi dan minat belajar yang tinggi
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentSplit;
