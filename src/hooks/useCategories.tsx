import { useEffect, useState } from 'react';
import { Categoria } from '../interfaces/InmueblesInterface';

const useCategories = () => {
  const [cargando, setCargando] = useState(true);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const obtenerCategorias = async () => {
    const resp = await fetch('https://prueba-red1a1.herokuapp.com/api/categorias/');
    const data = await resp.json();

    setCategorias(data.categorias);
    setCargando(false);
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);

  return { categorias, cargando };
};

export default useCategories;
