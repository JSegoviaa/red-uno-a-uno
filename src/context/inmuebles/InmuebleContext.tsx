import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  InmueblesResponse,
  SubirImagenesInmueble,
} from "interfaces/InmueblesInterface";
import {
  BorrarInmuebleResp,
  CrearInmuebleResp,
} from "interfaces/CrearInmuebleInterface";
import {
  fetchActualizarInmueble,
  fetchBorrarInmueble,
  fetchInmueble,
  subirFotosInmueble,
} from "helpers/fetch";
import { Estado } from "interfaces/SolicitudInteface";

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

export interface ActualizarInmueble {
  titulo?: string;
  categoria?: string;
  precio?: number;
  direccion?: string | undefined;
  lat?: number;
  lng?: number;
  tipoPropiedad?: string;
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
  publicado?: boolean;
  parking?: number;
  piscinas?: boolean;
  pisos?: number;
  refrigerador?: boolean;
  sala?: boolean;
  secadora?: boolean;
  seguridadPrivada?: boolean;
  imgs?: string[];
}

interface ContextProps {
  crearInmueble: (data: InmuebleData) => Promise<CrearInmuebleResp>;
  eliminarInmueble: (id: string) => Promise<BorrarInmuebleResp>;
  subirImagenesInmueble: (
    data: any,
    uid: string | null | undefined,
    pid: string | undefined,
    endpoint: string
  ) => Promise<SubirImagenesInmueble>;
  orden: string;
  setOrden: Dispatch<SetStateAction<string>>;
  solicitud: string;
  setSolicitud: Dispatch<SetStateAction<string>>;
  actualizarInmueble: (
    data: ActualizarInmueble,
    pid: string
  ) => Promise<InmueblesResponse>;
  editar: EditarInmueble | undefined;
  setEditar: Dispatch<SetStateAction<EditarInmueble | undefined>>;
  idInmueble: string;
  setIdInmueble: Dispatch<SetStateAction<string>>;
  inmuebleState: ActualizarInmueble;
  setInmuebleState: Dispatch<SetStateAction<ActualizarInmueble>>;
  dueño: string;
  setDueño: Dispatch<SetStateAction<string>>;
  estado: Estado | string;
  setEstado: Dispatch<SetStateAction<Estado | string>>;
  misCompUser: string;
  setMisCompUser: Dispatch<SetStateAction<string>>;
}

type EditarInmueble = "Información" | "Imágenes";

export const InmuebleContext = createContext({} as ContextProps);

const InmuebleState: ActualizarInmueble = {
  titulo: undefined,
  categoria: undefined,
  precio: undefined,
  direccion: undefined,
  lat: undefined,
  lng: undefined,
  tipoPropiedad: undefined,
  descripcion: undefined,
  AA: undefined,
  agua: undefined,
  amueblado: undefined,
  antiguedad: undefined,
  baños: undefined,
  camas: undefined,
  closet: undefined,
  cocina: undefined,
  comedor: undefined,
  comisiones: undefined,
  discapacitados: undefined,
  escuelas: undefined,
  estufa: undefined,
  gas: undefined,
  habitaciones: undefined,
  horno: undefined,
  internet: undefined,
  lavadora: undefined,
  luz: undefined,
  m2Construidos: undefined,
  m2Terreno: undefined,
  mantenimiento: undefined,
  medioBaños: undefined,
  microondas: undefined,
  minihorno: undefined,
  otros: undefined,
  publicado: undefined,
  parking: undefined,
  piscinas: undefined,
  pisos: undefined,
  refrigerador: undefined,
  sala: undefined,
  secadora: undefined,
};

export const InmuebleProvider: FC = ({ children }) => {
  const [orden, setOrden] = useState<string>("createdAt");
  const [solicitud, setSolicitud] = useState("Pendiente");
  const [editar, setEditar] = useState<EditarInmueble>();
  const [idInmueble, setIdInmueble] = useState("");
  const [inmuebleState, setInmuebleState] = useState(InmuebleState);
  const [dueño, setDueño] = useState("");
  const [estado, setEstado] = useState<Estado | string>("Aprobado");
  const [misCompUser, setMisCompUser] = useState("");

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
    pid: string | undefined,
    endpoint = ""
  ) => {
    const resp = await subirFotosInmueble(
      `subidas/${endpoint}${uid}/${pid}`,
      data
    );

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

  const actualizarInmueble = async (data: ActualizarInmueble, pid: string) => {
    const resp = await fetchActualizarInmueble(`inmuebles/${pid}`, data);
    if (resp.ok) {
      toast.success(resp.msg);
    }
    if (!resp.ok) {
      toast.error(resp.msg);
    }

    return resp;
  };

  return (
    <InmuebleContext.Provider
      value={{
        crearInmueble,
        eliminarInmueble,
        subirImagenesInmueble,
        orden,
        setOrden,
        solicitud,
        setSolicitud,
        actualizarInmueble,
        editar,
        setEditar,
        idInmueble,
        setIdInmueble,
        inmuebleState,
        setInmuebleState,
        dueño,
        setDueño,
        estado,
        setEstado,
        misCompUser,
        setMisCompUser,
      }}
    >
      <ToastContainer />
      {children}
    </InmuebleContext.Provider>
  );
};
