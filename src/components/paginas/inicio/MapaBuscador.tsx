import { useContext } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";

const containerStyle = {
  width: "100%",
  height: "87vh",
};

const MapaUbicacion = () => {
  const { coordenadas } = useContext(MapContext);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: coordenadas.lat, lng: coordenadas.lng }}
      zoom={14}
    />
  );
};

export default MapaUbicacion;
