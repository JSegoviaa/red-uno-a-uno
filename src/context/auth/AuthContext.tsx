import { createContext, FC, useCallback, useState } from 'react';

interface ContextProps {
  auth: Auth;
  login: (correo: string, password: string) => void;
  logOut: () => void;
  register: (nombre: string, correo: string, password: string) => void;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  verificaToken: () => void;
}

interface Auth {
  uid: string | null;
  checking: boolean;
  logged: boolean;
  nombre: string | null;
  correo: string | null;
}

export const AuthContext = createContext({} as ContextProps);

const initialState: Auth = {
  uid: null,
  checking: true,
  logged: false,
  nombre: null,
  correo: null,
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (correo: string, password: string) => {
    console.log('Iniciando sesión');
  };

  const register = async (nombre: string, correo: string, password: string) => {
    console.log('Registrándose');
  };

  const verificaToken = useCallback(() => {}, []);

  const logOut = async () => {
    console.log('Cerrando sesión');
  };

  const signInWithGoogle = async () => {
    console.log('Iniciando sesión con google');
  };

  const signInWithFacebook = async () => {
    console.log('Iniciando sesión con facebook');
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logOut,
        register,
        signInWithGoogle,
        signInWithFacebook,
        verificaToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
