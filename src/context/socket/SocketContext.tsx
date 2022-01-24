import { createContext, FC, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useSocket } from '../../hooks/useSocket';
import { AuthContext } from '../auth/AuthContext';

interface ContextProps {
  socket: Socket | undefined;
  online: boolean | undefined;
}

export const SocketContext = createContext({} as ContextProps);

export const SocketProvider: FC = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    'https://prueba-red1a1.herokuapp.com'
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

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
