import { useEffect, useState } from "react";

export const useInmuebles = () => {
  const [inmuebles, setInmuebles] = useState();
  const [cargando, setCargando] = useState(true);

  const obtenerInmuebles = async () => {
    const resp = await fetch("");
    const data = resp.json();
  };

  useEffect(() => {
    obtenerInmuebles();
  }, []);

  return { inmuebles, cargando };
};
