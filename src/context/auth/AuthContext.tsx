import { createContext, FC, useState } from "react";

interface ContextProps {
  user: string;
  loading: boolean;
  signIn: () => void;
  logOut: () => void;
  register: () => void;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
}

export const AuthContext = createContext({} as ContextProps);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const signIn = () => {
    console.log("Iniciando sesión");
  };

  const register = () => {
    console.log("Registrándose");
  };

  const logOut = () => {
    console.log("Cerrando sesión");
  };

  const signInWithGoogle = () => {
    console.log("Iniciando sesión con google");
  };

  const signInWithFacebook = () => {
    console.log("Iniciando sesión con facebook");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        logOut,
        register,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
