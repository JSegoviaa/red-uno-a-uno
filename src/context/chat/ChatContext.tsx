import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { enviarNuevoMensaje } from '../../helpers/fetch';
import { Conversacion, MensajesResp } from '../../interfaces/ChatInterface';

interface NuevoMensaje {
  conversacion: string | undefined;
  remitente: string | undefined | null;
  mensaje: string;
}

interface ContextProps {
  minimizarChat: boolean;
  setMinimizarChat: Dispatch<SetStateAction<boolean>>;
  conversacionActual: Conversacion | null;
  setConversacionActual: any;
  enviarMensaje: (data: NuevoMensaje) => Promise<MensajesResp>;
}

export const ChatContext = createContext({} as ContextProps);

export const ChatProvider: FC = ({ children }) => {
  const [minimizarChat, setMinimizarChat] = useState(true);

  const [conversacionActual, setConversacionActual] = useState(null);

  const enviarMensaje = async (data: NuevoMensaje) => {
    const resp = await enviarNuevoMensaje('mensajes', data);
    return resp;
  };

  return (
    <ChatContext.Provider
      value={{
        minimizarChat,
        setMinimizarChat,
        conversacionActual,
        setConversacionActual,
        enviarMensaje,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
