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
      window.location.href = "/fullform";
      
    }
  };

  return (
    <button
      onClick={handleDaftarClick}
      className="btn font-bold rounded-xl border border-black"
      style={{
        color:"#231f20",
        fontSmooth:"1px solid",
        backgroundColor: "#f4f4f4",
        boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.7)", // Larger sharp shadow effect
      }}
    >
      {participantsLeft >= slot ? "Register" : "Registration Closed"}
    </button>
  );
};

export default RegistrationButton;
