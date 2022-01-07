import { memo, useContext } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";
import { useInmuebles } from "../../../hooks/useInmuebles";

const containerStyle = {
  width: "100%",
  height: "87vh",
};

const MapaUbicacion = () => {
  const { coordenadas } = useContext(MapContext);
  const { inmuebles } = useInmuebles();

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: coordenadas.lat, lng: coordenadas.lng }}
      zoom={14}
    >
      {inmuebles?.map((inmueble) => (
        <Marker
          position={{ lat: inmueble.lat, lng: inmueble.lng }}
          icon="/images/icons/marcador-ubicacion.png"
        />
      ))}
    </GoogleMap>
  );
};

export default memo(MapaUbicacion);
