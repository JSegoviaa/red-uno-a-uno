import { createContext, FC, useCallback, useState } from "react";
import { fetchSinToken } from "../../helpers/fetch";
import { Auth, Resp } from "../../interfaces/AuthInterface";

interface ContextProps {
  auth: Auth;
  login: (correo: string, password: string) => Promise<Resp>;
  logOut: () => void;
  register: (nombre: string, correo: string, password: string) => void;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  verificaToken: () => void;
}

export const AuthContext = createContext({} as ContextProps);

const initialState: Auth = {
  uid: null,
  checking: true,
  logged: false,
  nombre: null,
  apellido: null,
  correo: null,
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (correo: string, password: string) => {
    const resp = await fetchSinToken(
      "auth/login",
      { correo, password },
      "POST"
    );
    if (resp.token) {
      localStorage.setItem("token", resp.token);
      const { usuario } = resp;
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
      });
    }
    return resp;
  };

  const register = async (nombre: string, correo: string, password: string) => {
    console.log("Registrándose");
  };

  const verificaToken = useCallback(() => {}, []);

  const logOut = async () => {
    console.log("Cerrando sesión");
  };

  const signInWithGoogle = async () => {
    console.log("Iniciando sesión con google");
  };

  const signInWithFacebook = async () => {
    console.log("Iniciando sesión con facebook");
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
