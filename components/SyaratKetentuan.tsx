// components/ContentSplit.tsx
import React from 'react';

const ContentSplit: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-20">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="./logocps.png"
          alt="Image description"
          className="w-full max-w-sm mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2 md:ml-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">
            Syarat dan Ketentuan
          </h2>
          <ol className="list-decimal text-center md:text-left">
            <li>Bertakwa kepada Tuhan Yang Maha Esa</li>
            <li>Mahasiswa aktif Telkom University</li>
            <li>Mahasiswa FTE & FRI 2021, 2022, 2023</li>
            <li>Memiliki motivasi dan minat belajar yang tinggi</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentSplit;
