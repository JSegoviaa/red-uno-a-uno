import { useEffect, useState } from "react";
import { InmueblesUsuario } from "../interfaces/CrearInmuebleInterface";
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
  const [inmuebles, setInmuebles] = useState<InmueblesUsuario>();
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
