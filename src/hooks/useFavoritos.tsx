import { useEffect, useState } from "react";
// import { InmuebleContext } from "../context/inmuebles/InmuebleContext";
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

export const useMisFavoritos = (
  uid: string | null | undefined,
  desde?: number
) => {
  const [misFavoritos, setMisFavoritos] = useState<Favorito[]>([]);
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);

  const obtenerFavoritos = async () => {
    const resp = await fetch(
      `${production}/favoritos/usuario/${uid}?desde=${desde}&limite=20`
    );
    const data = await resp.json();

    setMisFavoritos(data.favoritosUsuario);

    setTotal(data.total);
    setCargando(false);
  };

  useEffect(() => {
    obtenerFavoritos();
  }, [uid, desde]);

  return { misFavoritos, cargando, total, setMisFavoritos };
};

// export const useFavoritosSol = (uid: string | null | undefined) => {
//   const { solicitud } = useContext(InmuebleContext);
//   const [favSol, setFavSol] = useState<Favorito[]>([]);
//   const [loading, setLoading] = useState(true);

//   const obtenerFav = async () => {
//     const resp = await fetch(
//       `${production}/favoritos/usuario-solicitud/${uid}?solicitud=${solicitud}`
//     );
//     const data = await resp.json();

//     setFavSol(data.favoritosUsuario);

//     setLoading(false);
//   };

//   useEffect(() => {
//     obtenerFav();
//   }, []);

//   return { favSol, loading };
// };
