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
import { ActionType, chatReducer } from "./chatReducer";

export interface CrearChat {
  miembros: (string | null | undefined)[];
  remitente: string | null | undefined;
  para: string;
}

interface ContextProps {
  minimizarChat: boolean;
  setMinimizarChat: Dispatch<SetStateAction<boolean>>;
  chatState: { uid: string; chatActivo: null; mensajes: never[] };
  dispatch: Dispatch<ActionType>;
  mensajePara: string;
  setMensajePara: any;
  scrollToBotom: MutableRefObject<HTMLDivElement | null>;
  iniciarChat: (daya: CrearChat) => Promise<void>;
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
  const scrollToBotom = useRef<HTMLDivElement | null>(null);

  const iniciarChat = async (data: CrearChat) => {
    console.log(data);
  };

  return (
    <ChatContext.Provider
      value={{
        minimizarChat,
        setMinimizarChat,
        chatState,
        dispatch,
        mensajePara,
        setMensajePara,
        scrollToBotom,
        iniciarChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
