import { useEffect, useState } from "react";
import { production } from "../credentials/credentials";
import { PaqueteIndividual } from "../interfaces/PaquetesInterface";

export const usePaqueteInd = () => {
  const [paquete, setPaquete] = useState<PaqueteIndividual>();
  const [cargando, setCargando] = useState(true);

  const obtenerPaquetes = async () => {
    const resp = await fetch(`${production}/paquetes/61fbfe7173bf782d6e2e0d85`);
    const data = await resp.json();

    setPaquete(data.paquete);
    setCargando(false);
  };

  useEffect(() => {
    obtenerPaquetes();
  }, []);

  return { paquete, cargando };
};
