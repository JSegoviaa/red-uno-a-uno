import { useContext, useRef } from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import { MapContext } from "../../../context/map/MapContext";
import styles from "./Buscador.module.css";

const SeleccionarLugar = () => {
  const geosuggestEl = useRef<Geosuggest>(null);

  const { setUbicacion, setDireccion } = useContext(MapContext);

  const onSuggestSelect = (suggest: Suggest) => {
    if (!suggest) return;

    setDireccion(suggest.label);

    !suggest
      ? setUbicacion({ lat: 19.4326077, lng: -99.133208 })
      : setUbicacion({
          lat: suggest.location.lat,
          lng: suggest.location.lng,
        });
  };

  return (
    <>
      <Geosuggest
        ref={geosuggestEl}
        queryDelay={530}
        country="mx"
        placeholder="Busca tu colonia aquí..."
        onSuggestSelect={onSuggestSelect}
        autoComplete="off"
        inputClassName={styles.buscador2}
        suggestsClassName={styles.respuesta2}
        suggestItemClassName={styles.item2}
      />
    </>
  );
};

export default SeleccionarLugar;
