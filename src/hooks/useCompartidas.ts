import { useContext, useEffect, useState } from "react";
import { production } from "credentials/credentials";
import {
  Compartida,
  ObtenerInmueblesCompartidosResp,
  ObtenerSolicitud,
  Solicitud,
} from "interfaces/SolicitudInteface";
import { AuthContext } from "context/auth/AuthContext";

export const useCompartidas = (
  uid: string | undefined | null,
  estado?: string,
  desde?: number
) => {
  const { auth } = useContext(AuthContext);
  const [compartidas, setCompartidas] = useState<Compartida[] | Solicitud[]>(
    []
  );
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);

  const obtenerCopartidas = async () => {
    if (uid === auth.uid) {
      try {
        const res = await fetch(
          `${production}/solicitud/usuario/${uid}?estado=${estado}&desde=${desde}&limite=20`
        );
        const data: ObtenerInmueblesCompartidosResp = await res.json();

        setTotal(data.total);
        setCompartidas(data.compartidas);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (uid === "") {
      try {
        const res = await fetch(
          `${production}/solicitud/${auth.uid}?estado=${estado}&desde=${desde}&limite=20`
        );
        const data: ObtenerSolicitud = await res.json();

        setTotal(data.total);
        setCompartidas(data.solicitudes);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    obtenerCopartidas();
  }, [estado, desde, uid]);

  return { compartidas, cargando, total, setCompartidas };
};
