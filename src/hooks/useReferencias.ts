import { useEffect, useState } from "react";
import {
  Referencia,
  ReferenciasUsuarioResp,
} from "interfaces/ReferenciasInterface";
import { production } from "credentials/credentials";

export const useReferenciasUsuario = (uid: string | null | undefined) => {
  const [referencias, setReferencias] = useState<Referencia[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerReferencias = async () => {
    const res = await fetch(`${production}/referencias/${uid}`);
    const data: ReferenciasUsuarioResp = await res.json();

    setReferencias(data.referencias);
    setCargando(false);
  };

  useEffect(() => {
    obtenerReferencias();
  }, []);

  return { referencias, cargando };
};
