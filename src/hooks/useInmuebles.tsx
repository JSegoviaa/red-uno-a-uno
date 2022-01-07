import { useEffect, useState } from "react";
import { production } from "../credentials/credentials";
import { InmueblesUsuario } from "../interfaces/CrearInmuebleInterface";

export const useInmuebles = () => {
  const [inmuebles, setInmuebles] = useState<InmueblesUsuario[]>();
  const [cargando, setCargando] = useState(true);

  const obtenerInmuebles = async () => {
    const resp = await fetch(production + "/inmuebles/");
    const data = await resp.json();

    setInmuebles(data.inmuebles);
    setCargando(false);
  };

  useEffect(() => {
    obtenerInmuebles();
  }, []);

  return { inmuebles, cargando };
};
