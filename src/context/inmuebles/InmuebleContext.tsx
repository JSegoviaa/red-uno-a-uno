import { useRouter } from "next/router";
import { createContext, FC, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { fetchBorrarInmueble, fetchInmueble } from "../../helpers/fetch";
import {
  BorrarInmuebleResp,
  CrearInmuebleResp,
  Inmueble,
} from "../../interfaces/CrearInmuebleInterface";

interface ContextProps {
  crearInmueble: (
    titulo: string,
    categoria: string
  ) => Promise<CrearInmuebleResp>;
  eliminarInmueble: (id: string) => Promise<BorrarInmuebleResp>;
  inmueble: Inmueble;
}

const initialState: Inmueble = {
  _id: null,
};

export const InmuebleContext = createContext({} as ContextProps);

export const InmuebleProvider: FC = ({ children }) => {
  const [inmueble, setInmueble] = useState(initialState);
  const router = useRouter();
  const crearInmueble = async (titulo: string, categoria: string) => {
    const resp = await fetchInmueble(
      "inmuebles",
      { titulo, categoria },
      "POST"
    );

    const { inmueble } = resp;
    if (resp.ok) {
      toast.success(resp.msg);
      setInmueble({ _id: inmueble._id });
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
    <InmuebleContext.Provider
      value={{ crearInmueble, eliminarInmueble, inmueble }}
    >
      <ToastContainer />
      {children}
    </InmuebleContext.Provider>
  );
};
