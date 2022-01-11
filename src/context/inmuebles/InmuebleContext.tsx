import { createContext, FC } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { fetchBorrarInmueble, fetchInmueble } from "../../helpers/fetch";
import {
  BorrarInmuebleResp,
  CrearInmuebleResp,
} from "../../interfaces/CrearInmuebleInterface";

interface ContextProps {
  crearInmueble: (
    titulo: string,
    categoria: string,
    precio: number,
    direccion: string | undefined,
    lat: number,
    lng: number,
    descripcion?: string,
    AA?: boolean,
    agua?: boolean,
    amueblado?: boolean,
    antiguedad?: string,
    baños?: number,
    camas?: boolean,
    closet?: boolean,
    cocina?: boolean,
    comedor?: boolean,
    comisiones?: number,
    discapacitados?: boolean,
    escuelas?: boolean,
    estufa?: boolean,
    gas?: boolean,
    habitaciones?: number,
    horno?: boolean,
    internet?: boolean,
    lavadora?: boolean,
    luz?: boolean,
    m2Construidos?: number,
    m2Terreno?: number,
    mantenimiento?: boolean,
    medioBaños?: number,
    microondas?: boolean,
    minihorno?: boolean,
    otros?: string,
    parking?: number,
    piscinas?: boolean,
    pisos?: number,
    propertyType?: string,
    refrigerador?: boolean,
    sala?: boolean,
    secadora?: boolean,
    seguridadPrivada?: boolean
  ) => Promise<CrearInmuebleResp>;
  eliminarInmueble: (id: string) => Promise<BorrarInmuebleResp>;
}

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const router = useRouter();

  const crearInmueble = async (
    titulo: string,
    categoria: string,
    precio: number,
    direccion: string | undefined,
    lat: number,
    lng: number,
    descripcion?: string,
    agua?: boolean,
    AA?: boolean,
    amueblado?: boolean,
    antiguedad?: string,
    baños?: number,
    camas?: boolean,
    closet?: boolean,
    cocina?: boolean,
    comedor?: boolean,
    comisiones?: number,
    discapacitados?: boolean,
    escuelas?: boolean,
    estufa?: boolean,
    gas?: boolean,
    habitaciones?: number,
    horno?: boolean,
    internet?: boolean,
    lavadora?: boolean,
    luz?: boolean,
    m2Construidos?: number,
    m2Terreno?: number,
    mantenimiento?: boolean,
    medioBaños?: number,
    microondas?: boolean,
    minihorno?: boolean,
    otros?: string,
    parking?: number,
    piscinas?: boolean,
    pisos?: number,
    propertyType?: string,
    refrigerador?: boolean,
    sala?: boolean,
    secadora?: boolean,
    seguridadPrivada?: boolean
  ) => {
    const resp = await fetchInmueble(
      "inmuebles",
      {
        titulo,
        categoria,
        precio,
        direccion,
        descripcion,
        AA,
        agua,
        amueblado,
        antiguedad,
        baños,
        camas,
        closet,
        cocina,
        comedor,
        comisiones,
        discapacitados,
        escuelas,
        estufa,
        gas,
        habitaciones,
        horno,
        internet,
        lavadora,
        luz,
        m2Construidos,
        m2Terreno,
        mantenimiento,
        medioBaños,
        microondas,
        minihorno,
        otros,
        parking,
        piscinas,
        pisos,
        propertyType,
        refrigerador,
        sala,
        secadora,
        seguridadPrivada,
        lat,
        lng,
      },
      "POST"
    );

    console.log(resp);

    if (resp.ok) {
      toast.success(resp.msg);
      router.push("/perfil/mis-propiedades")
    }

    if (resp.errors) {
      resp.errors.map((e) => {
        return toast.error(e.msg);
      });
    }
    return resp;
  };

  const eliminarInmueble = async (id: string) => {
    const resp = await fetchBorrarInmueble(`inmuebles/${id}`);
    router.push("/perfil");

    toast.success(resp.msg);
    return resp;
  };

  return (
    <InmuebleContext.Provider value={{ crearInmueble, eliminarInmueble }}>
      <ToastContainer />
      {children}
    </InmuebleContext.Provider>
  );
};
