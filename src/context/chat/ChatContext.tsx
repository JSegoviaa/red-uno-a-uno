import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { Conversacion } from '../../interfaces/ChatInterface';

interface ContextProps {
  minimizarChat: boolean;
  setMinimizarChat: Dispatch<SetStateAction<boolean>>;
  conversacionActual: Conversacion | null;
  setConversacionActual: any;
}

export const ChatContext = createContext({} as ContextProps);

export const ChatProvider: FC = ({ children }) => {
  const [minimizarChat, setMinimizarChat] = useState(true);

  const [conversacionActual, setConversacionActual] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        minimizarChat,
        setMinimizarChat,
        conversacionActual,
        setConversacionActual,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
