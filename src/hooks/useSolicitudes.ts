import { useEffect, useState } from "react";
import { development } from "credentials/credentials";
import { ObtenerSolicitud, Solicitud } from "interfaces/SolicitudInteface";

export const useSolicitudes = (uid: string | undefined | null) => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerSolicitudes = async () => {
    if (!uid) return;

    if (uid) {
      try {
        const res = await fetch(`${development}/solicitud/${uid}`);
        const data: ObtenerSolicitud = await res.json();

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

  return { solicitudes, cargando, setSolicitudes };
};
