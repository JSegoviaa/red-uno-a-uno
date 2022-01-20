import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface ContextProps {
  abrirChat: boolean;
  setAbrirChat: Dispatch<SetStateAction<boolean>>;
}

export const ChatContext = createContext({} as ContextProps);

export const ChatProvider: FC = ({ children }) => {
  const [abrirChat, setAbrirChat] = useState(true);

  return (
    <ChatContext.Provider value={{ abrirChat, setAbrirChat }}>
      {children}
    </ChatContext.Provider>
  );
};