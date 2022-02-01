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
import { crearChat, obtenerMensajes } from "../../helpers/fetch";
import { ActionType, chatReducer } from "./chatReducer";

export interface CrearChat {
  remitente: string | null | undefined;
  destinatario: string;
}

interface ContextProps {
  minimizarChat: boolean;
  setMinimizarChat: Dispatch<SetStateAction<boolean>>;
  chatState: { uid: string; chatActivo: null; mensajes: never[] };
  dispatch: Dispatch<ActionType>;
  mensajePara: string;
  setMensajePara: any;
  scrollToBotom: MutableRefObject<HTMLDivElement | null>;
  iniciarChat: (data: CrearChat) => Promise<void>;
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
    await crearChat("chats", data);
    dispatch({ type: "ActivarChat", payload: data.destinatario });

    const resp = await obtenerMensajes(`mensajes/${data.destinatario}`);
    dispatch({ type: "CargarMensajes", payload: resp.mensajes });

    scrollToBotom.current?.scrollIntoView();
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
