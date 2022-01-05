import { useContext, useEffect, useRef } from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { MapContext } from "../../../context/map/MapContext";

const MapaBuscador = withScriptjs(
  withGoogleMap(() => {
    const { coordenadas } = useContext(MapContext);
    const mapRef = useRef<GoogleMap>();

    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: coordenadas.lat, lng: coordenadas.lng }}
        center={coordenadas}
      />
    );
  })
);

export default MapaBuscador;
