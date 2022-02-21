import { memo, useContext, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";
import { useInmuebles } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";
import InfoWindowMap from "./InfoWindowMap";

const containerStyle = {
  width: "100%",
  height: "87vh",
};

const options = {
  disableDefaultUI: true,
  streetViewControl: true,
  zoomControl: true,
  fullscreenControl: true,
};

const MapaUbicacion = () => {
  const {
    coordenadas,
    zoom,
    setCoordenadas,
    ubicacionUsuario,
    southEast,
    setSouthEast,
  } = useContext(MapContext);
  const { inmuebles, cargando } = useInmuebles();
  const [seleccionado, setSeleccionado] = useState("");
  const mapRef = useRef<GoogleMap>(null);

  const propiedadSeleccionada = (id: string, lat: number, lng: number) => {
    setCoordenadas({ lat, lng });
    setSeleccionado(id);
  };

  const closeInfoWindow = () => setSeleccionado("");

  const onBoundsChange = () => {
    const southWest = mapRef.current?.state.map
      ?.getBounds()
      ?.getSouthWest()
      .toJSON();

    const northEast = mapRef.current?.state.map
      ?.getBounds()
      ?.getNorthEast()
      .toJSON();

    const northWest = {
      lat: mapRef.current?.state.map?.getBounds()?.getNorthEast().lat(),
      lng: mapRef.current?.state.map?.getBounds()?.getSouthWest().lng(),
    };

    const southEast = {
      lat: mapRef.current?.state.map?.getBounds()?.getSouthWest().lat(),
      lng: mapRef.current?.state.map?.getBounds()?.getNorthEast().lng(),
    };
  };

  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={{ lat: coordenadas.lat, lng: coordenadas.lng }}
      onClick={closeInfoWindow}
      zoom={zoom}
      options={options}
      onBoundsChanged={onBoundsChange}
    >
      {cargando ? (
        <Loading />
      ) : (
        <>
          {inmuebles
            ?.filter((inmueble) => {
              return inmueble.publicado === true;
            })
            .map((inmueble) => (
              <Marker
                animation={2}
                key={inmueble._id}
                position={{ lat: inmueble.lat, lng: inmueble.lng }}
                icon={{
                  url: "/images/icons/marcador.svg",
                  scaledSize: new google.maps.Size(50, 50),
                }}
                onClick={() =>
                  propiedadSeleccionada(
                    inmueble._id,
                    inmueble.lat,
                    inmueble.lng
                  )
                }
              >
                {seleccionado === inmueble._id ? (
                  <InfoWindowMap inmueble={inmueble} />
                ) : null}
              </Marker>
            ))}
        </>
      )}
    </GoogleMap>
  );
};

export default memo(MapaUbicacion);
