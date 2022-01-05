import { useContext, useRef } from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import { MapContext } from "../../../context/map/MapContext";

const Buscador = () => {
  const geosuggestEl = useRef<Geosuggest>(null);

  const { coordenadas, setCoordenadas } = useContext(MapContext);

  const onSuggestSelect = (suggest: Suggest) => {
    console.log(suggest);
    !suggest
      ? setCoordenadas({ lat: 19.4326077, lng: -99.133208 })
      : setCoordenadas({
          lat: suggest.location.lat,
          lng: suggest.location.lng,
        });
  };

  console.log(coordenadas, "coordenadas");

  return (
    <Geosuggest
      ref={geosuggestEl}
      queryDelay={730}
      country="mx"
      placeholder="Busca aquí"
      onSuggestSelect={onSuggestSelect}
      autoComplete="off"
    />
  );
};

export default Buscador;
