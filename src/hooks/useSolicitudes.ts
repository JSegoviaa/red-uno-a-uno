import { useEffect, useState } from "react";
import { production } from "credentials/credentials";
import { ObtenerSolicitud, Solicitud } from "interfaces/SolicitudInteface";

export const useSolicitudes = (uid: string | undefined | null) => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(true);

  const obtenerSolicitudes = async () => {
    if (!uid) return;

    if (uid) {
      try {
        const res = await fetch(`${production}/solicitud/${uid}`);
        const data: ObtenerSolicitud = await res.json();

        setTotal(data.total);
        setSolicitudes(data.solicitudes);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    obtenerSolicitudes();
  }, [uid]);

  return { solicitudes, cargando, setSolicitudes, total };
};
