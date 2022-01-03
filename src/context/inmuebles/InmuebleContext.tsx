import { createContext, FC } from "react";

interface ContextProps {
  crearInmueble: () => void;
}

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const crearInmueble = () => {};

  return (
    <InmuebleContext.Provider value={{ crearInmueble }}>
      {children}
    </InmuebleContext.Provider>
  );
};
