import { useEffect, useState } from "react";
import { development } from "credentials/credentials";
import {
  Compartida,
  ObtenerInmueblesCompartidosResp,
} from "interfaces/SolicitudInteface";

export const useCompartidas = (
  uid: string | undefined | null,
  estado: string,
  totall: number
) => {
  const [compartidas, setCompartidas] = useState<Compartida[]>([]);
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);

  const obtenerCopartidas = async () => {
    const res = await fetch(
      `${development}/solicitud/usuario/${uid}?estado=${estado}`
    );
    const data: ObtenerInmueblesCompartidosResp = await res.json();

    setTotal(data.total);
    setCompartidas(data.compartidas);
    setCargando(false);
  };

  useEffect(() => {
    obtenerCopartidas();
  }, [estado, totall]);

  return { compartidas, cargando, total };
};
