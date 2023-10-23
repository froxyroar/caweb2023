import React from 'react';

const MediaPartners = () => {
  const mediaPartners = [
    {
      name: 'Media Partner 1',
      logo: '/media_partner1.png',
    },
    {
      name: 'Media Partner 2',
      logo: '/media_partner2.png',
    },
    // Add more media partners here
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">Our Media Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaPartners.map((partner, index) => (
            <div key={index} className="bg-black text-gray-300 rounded-lg p-4 flex items-center transition-transform hover:brightness-110">
              <img src={partner.logo} alt={partner.name} className="w-12 h-12 rounded-full mr-4" />
              <h2 className="text-xl font-semibold">{partner.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPartners;
