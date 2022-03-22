import React, { useContext } from "react";
import { MapContext } from "context/map/MapContext";
import Buscador from "./Buscador";
import styles from "./Buscador.module.css";

const BuscadorRes = () => {
  const { filtros, setFiltros } = useContext(MapContext);

  const mostrarFiltros = () => setFiltros(!filtros);

  return (
    <div className="px-2">
      <i className={`bi bi-chevron-left ${styles.leftArrow}`} />
      <Buscador />
      <i
        onClick={mostrarFiltros}
        className={`${
          filtros ? styles.filterIconActive : styles.filterIcon
        } bi bi-sliders pointer`}
      />
    </div>
  );
};

export default BuscadorRes;
