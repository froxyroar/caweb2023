import React from 'react';

const ContentSplit: React.FC = () => {
  const customColor = '#BA2025'; // Custom color code corrected

  return (
    <div className="flex justify-center items-center p-1 mt-3 md:" id='daftar'>
      <div style={{ backgroundColor: customColor }} className="rounded-2xl p-6 w-full max-w-xl text-white bg-red-700 hover:bg-red-600 transform hover:scale-90 transition duration-300 ease-in-out hover:shadow-2xl md:w-3/4 md:h-auto">
        <div>
          <h2 className="text-lg font-bold mb-5 text-center">
            Terms and Conditions
          </h2>
          <ol className="list-decimal pl-4 ml-4 space-y-2 mx-auto text-base leading-relaxed text-[13.5px]">
            <li className="">Fear God</li>
            <li className="">Active Telkom University student</li>
            <li className="">FTE & FRI Students of 2021, 2022, 2023</li>
            <li className="">Have high motivation and interest in learning</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentSplit;
