import React, { useContext } from "react";
import { MapContext } from "context/map/MapContext";
import Buscador from "./Buscador";
import styles from "./Buscador.module.css";

const BuscadorRes = () => {
  const { filtros, setFiltros, ocultarBottomNav, setOcultarBottomNav } =
    useContext(MapContext);

  const mostrarFiltros = () => setFiltros(!filtros);

  const ocultarNav = () => setOcultarBottomNav(!ocultarBottomNav);

  return (
    <div className="ps-5 pe-2 py-2">
      <i
        onClick={ocultarNav}
        className={`bi bi-chevron-left pointer ${styles.leftArrow}`}
      />
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
