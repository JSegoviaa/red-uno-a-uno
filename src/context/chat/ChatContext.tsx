import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useReducer,
  useState,
} from 'react';
import { chatReducer } from '../../reducers/chatReducer';

interface ContextProps {
  abrirChat: boolean;
  setAbrirChat: Dispatch<SetStateAction<boolean>>;
  minimizarChat: boolean;
  setMinimizarChat: Dispatch<SetStateAction<boolean>>;
  chatState: any;
  dispatch: Dispatch<any>;
}

export const ChatContext = createContext({} as ContextProps);

const initialState: any = {
  uid: '',
  chatActivo: null,
  usuarios: [],
  mensajes: [],
};

export const ChatProvider: FC = ({ children }) => {
  const [abrirChat, setAbrirChat] = useState(false);
  const [minimizarChat, setMinimizarChat] = useState(true);
  const [chatState, dispatch] = useReducer(
    chatReducer,
    initialState,
    undefined
  );

  return (
    <ChatContext.Provider
      value={{
        abrirChat,
        setAbrirChat,
        minimizarChat,
        setMinimizarChat,
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
