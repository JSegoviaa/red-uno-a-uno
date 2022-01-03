import { createContext, FC, useState } from "react";
import { fetchInmueble } from "../../helpers/fetch";
import {
  CrearInmuebleResp,
  Inmueble,
} from "../../interfaces/CrearInmuebleInterface";

interface ContextProps {
  crearInmueble: (
    titulo: string,
    categoria: string
  ) => Promise<CrearInmuebleResp>;
  eliminarInmueble: () => void;
}

const initialState: Inmueble = {
  titulo: null,
  descripcion: null,
  otros: null,
  precio: 0,
  comisiones: null,
  categoria: null,
  AA: null,
  IID: null,
  agua: null,
  amueblado: null,
  antiguedad: null,
  baños: null,
  camas: null,
  closet: null,
  cocina: null,
  comedor: null,
  discapacitados: null,
  escuelas: null,
  estufa: null,
  gas: null,
  habitaciones: null,
  horno: null,
  internet: null,
  lavadora: null,
  luz: null,
  m2Construidos: null,
  m2Terreno: null,
  mantenimiento: null,
  medioBaños: null,
  microondas: null,
  minihorno: null,
  parking: null,
  piscinas: null,
  pisos: null,
  propertyType: null,
  refrigerador: null,
};

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const [inmueble, setInmueble] = useState(initialState);

  const crearInmueble = async (titulo: string, categoria: string) => {
    const resp = await fetchInmueble(
      "inmuebles",
      { titulo, categoria },
      "POST"
    );

    const { inmueble } = resp;
    if (resp.ok) {
      setInmueble({
        titulo: inmueble.titulo,
        _id: inmueble._id,
        categoria: inmueble.categoria,
      });
    }
    return resp;
  };

  const eliminarInmueble = () => {};

  return (
    <InmuebleContext.Provider value={{ crearInmueble, eliminarInmueble }}>
      {children}
    </InmuebleContext.Provider>
  );
};
