import { createContext, FC } from "react";

interface ContextProps {
  crearInmueble: () => void;
  eliminarInmueble: () => void;
}

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const crearInmueble = () => {};
  const eliminarInmueble = () => {};

  return (
    <InmuebleContext.Provider value={{ crearInmueble, eliminarInmueble }}>
      {children}
    </InmuebleContext.Provider>
  );
};
