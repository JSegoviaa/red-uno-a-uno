import { useContext, useEffect, useState } from "react";
import { InmuebleContext } from "../context/inmuebles/InmuebleContext";
import { InmuebleUsuario } from "../interfaces/CrearInmuebleInterface";
import { HistorialResp } from "../interfaces/Historial";
import { Usuario } from "../interfaces/UserInterface";

const devURL = "http://localhost:8080/api";
const baseURL = "https://prueba-red1a1.herokuapp.com/api";

export const useUserInfo = (uid: string | undefined | null) => {
  const [user, setUser] = useState<Usuario>();
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    setLoading(true);

    const data = await fetch(baseURL + "/usuarios/" + uid);
    const resp = await data.json();

    setLoading(false);
    setUser(resp);
  };

  useEffect(() => {
    getUserInfo();
  }, [uid]);

  return { user, loading };
};

export const useUserInmuebles = (uid: string | undefined | null) => {
  const [inmuebles, setInmuebles] = useState<InmuebleUsuario>();
  const [cargando, setCargando] = useState(true);
  const { orden } = useContext(InmuebleContext);

  const obtenerInmueblesDeUsuario = async () => {
    const data = await fetch(
      `${baseURL}/inmuebles/usuario/${uid}?orden=${orden}`
    );
    const resp = await data.json();
    setInmuebles(resp);
    setCargando(false);
  };

  useEffect(() => {
    obtenerInmueblesDeUsuario();
  }, [inmuebles?.inmueblesUsuario]);

  return { inmuebles, cargando };
};

export const useHistorial = (uid: string | undefined | null, desde: number) => {
  const [historial, setHistorial] = useState<HistorialResp>();
  const [isLoading, setIsLoading] = useState(true);

  const obtenerHistorial = async () => {
    const resp = await fetch(
      `${baseURL}/historial/usuario/${uid}?desde=${desde}&limite=15`
    );
    const data = await resp.json();

    setHistorial(data);

    setIsLoading(false);
  };

  useEffect(() => {
    obtenerHistorial();
  }, [desde, historial]);

  return { historial, isLoading };
};
