import { useContext, useEffect, useState } from "react";
import { Bounds, MapContext } from "context/map/MapContext";
import { production } from "credentials/credentials";
import {
  InmueblesCoordenadas,
  InmueblesUsuario,
  InmuebleUsuarioRes,
  ListaInmuebles,
} from "interfaces/CrearInmuebleInterface";
import { Location } from "interfaces/MapInterfaces";

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
  const [imgs, setImgs] = useState<string[]>([]);

  const obtenerInmueble = async () => {
    const res = await fetch(`${production}/inmuebles/${id}`);
    const data: InmuebleUsuarioRes = await res.json();

    setInmueble(data.inmueble);
    setImgs(data.inmueble.imgs);
    setCargando(false);
  };

  useEffect(() => {
    obtenerInmueble();
  }, []);

  return { inmueble, cargando, imgs, setImgs };
};

export const useInmueblesCoordenadas = (
  southEast: Bounds,
  northWest: Bounds,
  southWest: google.maps.LatLngLiteral | undefined,
  northEast: google.maps.LatLngLiteral | undefined,
  coordenadas: Location,
  categoria: string,
  tipoPropiedad: string
) => {
  const [inmuebles, setInmuebles] = useState<InmueblesUsuario[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerInmueblesPorCoordenadas = async () => {
    try {
      const resp = await fetch(
        `${production}/inmuebles/inmuebles/coordenadas?lat_south_east=${southEast.lat}&lng_south_east=${southEast.lng}&lat_south_west=${southWest?.lat}&lng_south_west=${southWest?.lng}&lat_north_east=${northEast?.lat}&lng_north_east=${northEast?.lng}&lat_north_west=${northWest.lat}&lng_north_west=${northWest.lng}&categoria=${categoria}&tipoPropiedad=${tipoPropiedad}`
      );
      const data: InmueblesCoordenadas = await resp.json();
      setInmuebles(data.inmuebles);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerInmueblesPorCoordenadas();
  }, [
    southEast,
    northWest,
    southWest,
    northEast,
    coordenadas,
    tipoPropiedad,
    categoria,
  ]);

  return { inmuebles, cargando };
};

export const useListaInmuebleCoords = (
  limite: number,
  southEast: Bounds,
  northWest: Bounds,
  southWest: google.maps.LatLngLiteral | undefined,
  northEast: google.maps.LatLngLiteral | undefined,
  coordenadas: Location,
  categoria: string,
  tipoPropiedad: string
) => {
  const [listaInmuebles, setListaInmuebles] = useState<ListaInmuebles>();
  const [cargando, setCargando] = useState(true);

  const obtenerInmuebles = async () => {
    try {
      const resp = await fetch(
        `${production}/inmuebles/lista-inmuebles/coordenadas?lat_south_east=${southEast.lat}&lng_south_east=${southEast.lng}&lat_south_west=${southWest?.lat}&lng_south_west=${southWest?.lng}&lat_north_east=${northEast?.lat}&lng_north_east=${northEast?.lng}&lat_north_west=${northWest.lat}&lng_north_west=${northWest.lng}&limite=${limite}&categoria=${categoria}&tipoPropiedad=${tipoPropiedad}`
      );
      const data: ListaInmuebles = await resp.json();

      setListaInmuebles(data);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerInmuebles();
  }, [
    southEast,
    northWest,
    southWest,
    northEast,
    coordenadas,
    tipoPropiedad,
    categoria,
  ]);

  return { listaInmuebles, cargando };
};
