import { useEffect, useState } from "react";
import { Categoria } from "../interfaces/InmueblesInterface";
import { TipoPropiedad } from "../interfaces/PropertyType";

const devURL = "http://localhost:8080/api";
const baseURL = "https://prueba-red1a1.herokuapp.com/api";

export const useCategories = () => {
  const [cargando, setCargando] = useState(true);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const obtenerCategorias = async () => {
    const resp = await fetch(baseURL + "/categorias/");
    const data = await resp.json();

    setCategorias(data.categorias);
    setCargando(false);
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);

  return { categorias, cargando };
};

export const useTipoPropiedad = () => {
  const [propertyTypes, setPropertyTypes] = useState<TipoPropiedad[]>([]);
  const [loading, setLoading] = useState(true);

  const obtenerTipoPropiedad = async () => {
    const res = await fetch(`${baseURL}/tipo-de-propiedad`);
    const data = await res.json();

    setPropertyTypes(data.tipoPropiedad);
    setLoading(false);
  };

  useEffect(() => {
    obtenerTipoPropiedad();
  }, []);

  return { propertyTypes, loading };
};
