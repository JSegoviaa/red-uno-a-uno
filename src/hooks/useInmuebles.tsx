import { useContext, useEffect, useState } from "react";
import { MapContext } from "context/map/MapContext";
import { production } from "credentials/credentials";
import {
  InmueblesUsuario,
  InmuebleUsuarioRes,
  ListaInmuebles,
} from "interfaces/CrearInmuebleInterface";

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

export const useListaInmueble = (limite: number) => {
  const { dirMapa } = useContext(MapContext);
  const [listaInmuebles, setListaInmuebles] = useState<ListaInmuebles>();
  const [cargando, setCargando] = useState(true);

  const obtenerInmuebles = async () => {
    const resp = await fetch(
      `${production}/inmuebles/lista-inmuebles?direccion=${dirMapa}&limite=${limite}`
    );
    const data: ListaInmuebles = await resp.json();

    setListaInmuebles(data);
    setCargando(false);
  };

  useEffect(() => {
    obtenerInmuebles();
  }, [dirMapa, limite]);

  return { listaInmuebles, cargando };
};

export const useInmueble = (id: string) => {
  const [inmueble, setInmueble] = useState<InmueblesUsuario>();
  const [cargando, setCargando] = useState(true);

  const obtenerInmueble = async () => {
    const res = await fetch(`${production}/inmuebles/${id}`);
    const data: InmuebleUsuarioRes = await res.json();

    setInmueble(data.inmueble);
    setCargando(false);
  };

  useEffect(() => {
    obtenerInmueble();
  }, []);

  return { inmueble, cargando };
};
