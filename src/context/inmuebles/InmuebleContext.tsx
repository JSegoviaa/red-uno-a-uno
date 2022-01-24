import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  fetchBorrarInmueble,
  fetchInmueble,
  subirFotosInmueble,
} from "../../helpers/fetch";
import {
  BorrarInmuebleResp,
  CrearInmuebleResp,
} from "../../interfaces/CrearInmuebleInterface";
import { SubirImagenesInmueble } from "../../interfaces/InmueblesInterface";

export interface InmuebleData {
  titulo: string;
  categoria: string;
  precio: number;
  direccion: string | undefined;
  lat: number;
  lng: number;
  tipoPropiedad: string;
  descripcion?: string;
  AA?: boolean;
  agua?: boolean;
  amueblado?: boolean;
  antiguedad?: string;
  baños?: number;
  camas?: boolean;
  closet?: boolean;
  cocina?: boolean;
  comedor?: boolean;
  comisiones?: number;
  discapacitados?: boolean;
  escuelas?: boolean;
  estufa?: boolean;
  gas?: boolean;
  habitaciones?: number;
  horno?: boolean;
  internet?: boolean;
  lavadora?: boolean;
  luz?: boolean;
  m2Construidos?: number;
  m2Terreno?: number;
  mantenimiento?: boolean;
  medioBaños?: number;
  microondas?: boolean;
  minihorno?: boolean;
  otros?: string;
  parking?: number;
  piscinas?: boolean;
  pisos?: number;
  refrigerador?: boolean;
  sala?: boolean;
  secadora?: boolean;
  seguridadPrivada?: boolean;
}

interface ContextProps {
  crearInmueble: (data: InmuebleData) => Promise<CrearInmuebleResp>;
  eliminarInmueble: (id: string) => Promise<BorrarInmuebleResp>;
  subirImagenesInmueble: (
    data: any,
    uid: string | null | undefined,
    pid: string | undefined
  ) => Promise<SubirImagenesInmueble>;
  mostrarImgFrom: boolean;
  setMostrarImgFrom: Dispatch<SetStateAction<boolean>>;
  orden: string;
  setOrden: Dispatch<SetStateAction<string>>;
}

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const [mostrarImgFrom, setMostrarImgFrom] = useState(false);
  const [orden, setOrden] = useState<string>("createdAt");

  const crearInmueble = async (data: InmuebleData) => {
    const resp = await fetchInmueble("inmuebles", data);

    if (resp.ok) {
      toast.success(resp.msg);
      toast.success("Ahora agrega las imágenes de tu inmueble");
    }

    if (resp.errors) {
      resp.errors.map((e) => {
        return toast.error(e.msg);
      });
    }
    return resp;
  };

  const subirImagenesInmueble = async (
    data: any,
    uid: string | null | undefined,
    pid: string | undefined
  ) => {
    const resp = await subirFotosInmueble(`subidas/${uid}/${pid}`, data);

    if (resp.ok) {
      toast.success(resp.msg);
    }

    if (!resp.ok) {
      toast.error(
        "Hubo un error al momento de subir las imágenes. Inténtelo nuevamente"
      );
    }

    return resp;
  };

  const eliminarInmueble = async (id: string) => {
    const resp = await fetchBorrarInmueble(`inmuebles/${id}`);

    toast.success(resp.msg);
    return resp;
  };

  return (
    <InmuebleContext.Provider
      value={{
        crearInmueble,
        eliminarInmueble,
        subirImagenesInmueble,
        mostrarImgFrom,
        setMostrarImgFrom,
        orden,
        setOrden,
      }}
    >
      <ToastContainer />
      {children}
    </InmuebleContext.Provider>
  );
};
