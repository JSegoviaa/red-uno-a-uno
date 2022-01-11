import { useContext } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../../context/map/MapContext";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const MapaUbicacion = () => {
  const { ubicacion, setUbicacion } = useContext(MapContext);

  const onDragEnd = (e: google.maps.MapMouseEvent) => {
    setUbicacion({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: ubicacion.lat, lng: ubicacion.lng }}
      zoom={14}
    >
      <Marker
        draggable
        position={{ lat: ubicacion.lat, lng: ubicacion.lng }}
        onDragEnd={onDragEnd}
        icon={{
          url: "/images/icons/marcador.svg",
          scaledSize: new google.maps.Size(50, 50),
        }}
      />
    </GoogleMap>
  );
};

export default MapaUbicacion;
