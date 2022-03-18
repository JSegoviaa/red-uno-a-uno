import { MapContext } from "context/map/MapContext";
import { useContext } from "react";
import styles from "./Inicio.module.css";

const BuscarZona = () => {
  const { filtros } = useContext(MapContext);
  return (
    <div
      className={`${
        filtros ? styles.buscarZonaWithFilter : styles.buscarZona
      } pointer text-center`}
    >
      Buscar en esta zona
    </div>
  );
};

export default BuscarZona;
