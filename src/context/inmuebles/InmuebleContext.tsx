import { createContext, FC, useState } from 'react';
import { Inmueble } from '../../interfaces/InmueblesInterface';

interface ContextProps {
  inmuebles: Inmueble[];
  cargarInmuebles: () => Promise<void>;
  agregarInmueble: (categoria: string, titulo: string) => Promise<void>;
  actualizarInmueble: (
    categoria: string,
    titulo: string,
    idInmueble: string
  ) => Promise<void>;
  eliminarInmueble: (id: string) => Promise<void>;
  cargarInmueblePorId: (id: string) => Promise<Inmueble>;
  subirImagen: (data: any, id: string) => Promise<void>;
}

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const [inmuebles, setInmuebles] = useState<Inmueble[]>([]);

  const cargarInmuebles = async () => {};
  const agregarInmueble = async (categoria: string, titulo: string) => {};
  const actualizarInmueble = async (
    categoria: string,
    titulo: string,
    idInmueble: string
  ) => {};
  const eliminarInmueble = async (id: string) => {};
  const cargarInmueblePorId = async (id: string) => {
    throw new Error('');
  };
  const subirImagen = async (data: any, id: string) => {};

  return (
    <InmuebleContext.Provider
      value={{
        inmuebles,
        cargarInmuebles,
        agregarInmueble,
        actualizarInmueble,
        eliminarInmueble,
        cargarInmueblePorId,
        subirImagen,
      }}
    >
      {children}
    </InmuebleContext.Provider>
  );
};
