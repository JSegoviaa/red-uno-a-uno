import { useEffect, useState } from "react";
import { InmuebleUsuario } from "../interfaces/CrearInmuebleInterface";
import { HistorialUsuario } from "../interfaces/Historial";
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
  }, []);

  return { user, loading };
};

export const useUserInmuebles = (uid: string | undefined | null) => {
  const [inmuebles, setInmuebles] = useState<InmuebleUsuario>();
  const [cargando, setCargando] = useState(true);

  const obtenerInmueblesDeUsuario = async () => {
    setCargando(true);

    const data = await fetch(baseURL + "/inmuebles/usuario/" + uid);
    const resp = await data.json();
    setCargando(false);
    setInmuebles(resp);
  };

  useEffect(() => {
    obtenerInmueblesDeUsuario();
  }, []);

  return { inmuebles, cargando };
};

export const useHistorial = (uid: string | undefined | null) => {
  const [historial, setHistorial] = useState<HistorialUsuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const obtenerHistorial = async () => {
    const resp = await fetch(`${baseURL}/historial/usuario/${uid}`);
    const data = await resp.json();

    setHistorial(data.historialUsuario);

    setIsLoading(false);
  };

  useEffect(() => {
    obtenerHistorial();
  }, []);

  return { historial, isLoading };
};
