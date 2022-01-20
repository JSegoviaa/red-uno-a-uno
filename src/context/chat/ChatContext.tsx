import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface ContextProps {
  abrirChat: boolean;
  setAbrirChat: Dispatch<SetStateAction<boolean>>;
  minimizarChat: boolean;
  setMinimizarChat: Dispatch<SetStateAction<boolean>>;
}

export const ChatContext = createContext({} as ContextProps);

export const ChatProvider: FC = ({ children }) => {
  const [abrirChat, setAbrirChat] = useState(true);
  const [minimizarChat, setMinimizarChat] = useState(true);

  return (
    <ChatContext.Provider
      value={{ abrirChat, setAbrirChat, minimizarChat, setMinimizarChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};
