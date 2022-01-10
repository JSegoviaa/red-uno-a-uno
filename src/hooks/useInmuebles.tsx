import { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/map/MapContext";
import { production } from "../credentials/credentials";
import { InmueblesUsuario } from "../interfaces/CrearInmuebleInterface";

export const useInmuebles = () => {
  const { dirMapa } = useContext(MapContext);
  const [inmuebles, setInmuebles] = useState<InmueblesUsuario[]>();
  const [cargando, setCargando] = useState(true);

  const obtenerInmuebles = async () => {
    const resp = await fetch(
      `${production}/inmuebles/direccion?direccion=${dirMapa}`
    );
    const data = await resp.json();

    setInmuebles(data.inmuebles);
    setCargando(false);
  };

  useEffect(() => {
    obtenerInmuebles();
  }, [dirMapa]);

  return { inmuebles, cargando };
};
