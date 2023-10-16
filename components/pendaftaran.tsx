'use client'
import React, { useState, useEffect } from 'react';

const Daftar = () => {
  const maxParticipants = 60;
  const [participantCount, setParticipantCount] = useState(0);
  const participantsLeft = Math.max(0, maxParticipants - participantCount);

  useEffect(() => {
    // Fetch data to get the participant count
    // Replace this with your actual fetching logic
    // For demonstration purposes, we'll set a static count of 40 participants
    const staticParticipantCount = 40;
    setParticipantCount(staticParticipantCount);
  }, []);

  const handleDaftarClick = () => {
    if (participantsLeft > 0) {
      // Allow registration if there are available slots
      window.location.href = '/pendaftaran';
    } else {
      // Show a pop-up notification if the maximum limit is reached
      alert('Registration is closed. The maximum limit of 60 participants has been reached.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 lg:mt-40">
      <p className="text-center text-lg md:text-xl lg:text-2xl">
        What are you still waiting for?
      </p>
      <p className="text-center text-lg md:text-xl lg:text-2xl">Start Your Journey!</p>
      <button
        onClick={handleDaftarClick} // This references the locally defined function
        className="btn text-lg md:text-xl lg:text-2xl text-white border border-black rounded-none mt-4"
        style={{
          backgroundColor: '#000000',
          boxShadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.2)', // Larger sharp shadow effect
        }}
      >
        {participantsLeft > 0 ? 'Daftar' : 'Registration Closed'}
      </button>

      <p className="text-center mt-4">
        {participantsLeft > 0
          ? `${participantsLeft} participants left.`
          : 'The maximum limit of 60 participants has been reached.'}
      </p>
    </div>
  );
};

export default Daftar;

