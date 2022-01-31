import { createContext, FC, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useSocket } from '../../hooks/useSocket';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../chat/ChatContext';

interface ContextProps {
  socket: Socket | undefined;
  online: boolean | undefined;
}

export const SocketContext = createContext({} as ContextProps);

export const SocketProvider: FC = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    'https://prueba-red1a1.herokuapp.com'
    //http://localhost:8080'
  );

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);

  useEffect(() => {
    socket?.on('mensaje-personal', (mensaje) => {
      dispatch({ type: 'NuevoMensaje', payload: mensaje });
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
