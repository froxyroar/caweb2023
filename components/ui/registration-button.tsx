import React from "react";
import { useGlobalContext } from "@/app/context/pendaftar";

const RegistrationButton = () => {
  const { participantsLeft } = useGlobalContext();
  const slot = 1
  const handleDaftarClick = () => {
    if (participantsLeft >= slot) {
      // Allow registration if there are available slots
      window.location.href = "/pendaftaran";
    } else {
      // Show a pop-up notification if the maximum limit is reached
      alert("Registration is closed. The maximum limit of 80 participants has been reached.");
    }
  };

  return (
    <button
      onClick={handleDaftarClick}
      className="btn text-white border border-black rounded-none"
      style={{
        backgroundColor: "#000000",
        boxShadow: "5px 5px 0px 0px rgba(0, 0, 0, 0.2)", // Larger sharp shadow effect
      }}
    >
      {participantsLeft >= slot ? "Daftar" : "Registration Closed"}
    </button>
  );
};

export default RegistrationButton;
