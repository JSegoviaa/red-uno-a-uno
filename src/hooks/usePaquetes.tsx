import { useEffect, useState } from "react";
import { development, production } from "../credentials/credentials";
import { Paquete, PaqueteIndividual } from "../interfaces/PaquetesInterface";

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

export const usePaquetes = () => {
  const [paquetes, setPaquetes] = useState<Paquete[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerPaquetes = async () => {
    const resp = await fetch(`${development}/paquetes?desde=1`);
    const data = await resp.json();

    setPaquetes(data.paquetes);
    setCargando(false);
  };

  useEffect(() => {
    obtenerPaquetes();
  }, []);

  return { paquetes, cargando };
};
