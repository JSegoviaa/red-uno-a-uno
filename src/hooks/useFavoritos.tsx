import { useEffect, useState } from "react";
import { production } from "../credentials/credentials";
import { Favorito } from "../interfaces/Favoritos";

export const useFavoritos = (uid: string | null | undefined) => {
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerFavoritos = async () => {
    const resp = await fetch(`${production}/favoritos/usuario/${uid}`);
    const data = await resp.json();

    setFavoritos(data.favoritosUsuario);

    setCargando(false);
  };

  useEffect(() => {
    obtenerFavoritos();
  }, [favoritos]);

  return { favoritos, cargando };
};
