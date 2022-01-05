import { useRef, useState } from "react";
import Geosuggest, { Suggest } from "react-geosuggest";

interface Location {
  lng: number;
  lat: number;
}

const Buscador = () => {
  const geosuggestEl = useRef<Geosuggest>(null);
  const [coordenadas, setCoordenadas] = useState<Location>({
    lat: 0,
    lng: 0,
  });

  const onSuggestSelect = (suggest: Suggest) => {
    console.log(suggest);

    !suggest
      ? setCoordenadas({ lat: 0, lng: 0 })
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
