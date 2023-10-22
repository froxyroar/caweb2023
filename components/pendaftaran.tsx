import React, { useState, useEffect } from "react";
import RegistrationButton from "./ui/registration-button";
import { useGlobalContext } from "@/app/context/pendaftar";

const Pendaftaran = () => {
  const [participantCount, setParticipantCount] = useState("-");
  const { participantsLeft, setParticipantsLeft } = useGlobalContext();

  const maxParticipants = 80;

  useEffect(() => {
    const participantInterval = setInterval(() => {
      var staticParticipantCount = 20;
      var participants = Math.max(0, maxParticipants - staticParticipantCount);
      setParticipantsLeft(participants);
    }, 1000);

    return () => {
      clearInterval(participantInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 lg:mt-40">
      <p className="text-center text-lg md:text-xl lg:text-2xl">What are you still waiting for?</p>
      <p className="text-center text-lg md:text-xl lg:text-2xl">Start Your Journey!</p>
      <RegistrationButton />
      <p className="text-center mt-6 mb-20">{participantsLeft > 0 ? `${participantsLeft} participants left.` : "The maximum limit of 80 participants has been reached."}</p>
    </div>
  );
};

export default Pendaftaran;
