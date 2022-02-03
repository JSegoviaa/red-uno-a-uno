import { useEffect, useState } from "react";
import { production } from "../credentials/credentials";

export const usePaquetes = () => {
  const [paquetes, setPaquetes] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerPaquetes = async () => {
    const resp = await fetch(`${production}/paquetes`);
    const data = await resp.json();

    setPaquetes(data.paquetes);
    setCargando(false);
  };

  useEffect(() => {
    obtenerPaquetes();
  }, []);

  return { paquetes, cargando };
};
