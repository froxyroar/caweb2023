"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  participantsLeft: number;
  setParticipantsLeft: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  participantsLeft: 0,
  setParticipantsLeft: () => {},
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [participantsLeft, setParticipantsLeft] = useState(80);

  return <GlobalContext.Provider value={{ participantsLeft, setParticipantsLeft }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = (): ContextProps => useContext(GlobalContext);
