import React from 'react';

const ContentSplit: React.FC = () => {
  const customColor = '#BA2025'; // Custom color code

  return (
    <div className="flex justify-center items-center p-1 mt-4 mb-40" id='daftar'>
      <div style={{ backgroundColor: customColor}} className="rounded-2xl p-10 w-full max-w-xl text-white bg-red-700 hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl md:w-3/4 md:h-auto">
        <div >
          <h2 className="text-xl font-bold mb-8 text-center">
            Syarat dan Ketentuan
          </h2>
          <ol className="list-decimal pl-4 mx-auto max-w-full text-base leading-relaxed">
            <li className="ml-6">Bertakwa kepada Tuhan Yang Maha Esa</li>
            <li className="ml-6">Mahasiswa aktif Telkom University</li>
            <li className="ml-6">Mahasiswa FTE & FRI 2021, 2022, 2023</li>
            <li className="ml-6">Memiliki motivasi dan minat belajar yang tinggi</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentSplit;
