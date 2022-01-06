import { useContext, useRef } from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import { MapContext } from "../../../context/map/MapContext";
import styles from "./Buscador.module.css";

const SeleccionarLugar = () => {
  const geosuggestEl = useRef<Geosuggest>(null);

  const { setUbicacion, ubicacion } = useContext(MapContext);

  const onSuggestSelect = (suggest: Suggest) => {
    console.log(suggest);
    !suggest
      ? setUbicacion({ lat: 19.4326077, lng: -99.133208 })
      : setUbicacion({
          lat: suggest.location.lat,
          lng: suggest.location.lng,
        });
  };

  console.log(ubicacion);

  return (
    <>
      <Geosuggest
        ref={geosuggestEl}
        queryDelay={530}
        country="mx"
        placeholder="Ubicación"
        onSuggestSelect={onSuggestSelect}
        autoComplete="off"
      />
    </>
  );
};

export default SeleccionarLugar;
