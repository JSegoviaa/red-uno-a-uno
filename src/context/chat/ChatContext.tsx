import {
  createContext,
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useReducer,
  useRef,
  useState,
} from "react";
import { enviarNuevoMensaje } from "../../helpers/fetch";
import { Conversacion, MensajesResp } from "../../interfaces/ChatInterface";
import { ActionType, chatReducer } from "./chatReducer";

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
  chatState: { uid: string; chatActivo: null; mensajes: never[] };
  dispatch: Dispatch<ActionType>;
  mensajePara: string;
  setMensajePara: any;
  scrollToBotom: MutableRefObject<HTMLDivElement | null>;
}

export const initialState: any = {
  uid: "",
  chatActivo: null,
  mensajes: [],
};

export const ChatContext = createContext({} as ContextProps);

export const ChatProvider: FC = ({ children }) => {
  const [chatState, dispatch] = useReducer(
    chatReducer,
    initialState,
    undefined
  );
  const [mensajePara, setMensajePara] = useState("");
  const [minimizarChat, setMinimizarChat] = useState(true);
  const [conversacionActual, setConversacionActual] = useState(null);
  const scrollToBotom = useRef<HTMLDivElement | null>(null);

  const enviarMensaje = async (data: NuevoMensaje) => {
    const resp = await enviarNuevoMensaje("mensajes", data);
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
        chatState,
        dispatch,
        mensajePara,
        setMensajePara,
        scrollToBotom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
