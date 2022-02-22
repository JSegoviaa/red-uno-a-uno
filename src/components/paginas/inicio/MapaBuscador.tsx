import { Fragment, memo, useContext, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";
import { useInmuebles } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";
import InfoWindowMap from "./InfoWindowMap";
import BuscarZona from "./BuscarZona";

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
    southEast,
    setSouthEast,
    northWest,
    setNorthWest,
    southWest,
    setSouthWest,
    northEast,
    setNorthEast,
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

    const center = mapRef.current?.state.map?.getCenter()?.toJSON();
    setCoordenadas(center!);
    setSouthEast(southEast);
    setNorthWest(northWest);
    setSouthWest(southWest);
    setNorthEast(northEast);
  };

  console.log(coordenadas, "coordenadas");
  console.log(southEast, "southEast");
  console.log(northWest, "nortwest");
  console.log(southWest, "southWest");
  console.log(northEast, "northEast");
  console.log("===================================");

  // if (coordenadas.lat > southEast?.lat && coordenadas.lat > southWest?.lat) {
  //   console.log(true);
  // }

  // if (coordenadas.lat < northEast?.lat && coordenadas.lat < northWest.lat) {
  //   console.log(true);
  // }
  // coordenadas.lat > southEast?.lat && southWest?.lat;
  // coordenadas.lat < northEast?.lat && northWest.lat;

  // if (coordenadas.lng > northWest.lng && coordenadas.lng > southWest?.lng) {
  //   console.log(true);
  // }
  // if (coordenadas.lng < southEast.lng && coordenadas.lng < northEast?.lng) {
  //   console.log(true);
  // }
  // coordenadas.lng > northWest.lng && southWest?.lng;
  // coordenadas.lng < southEast.lng && northEast?.lng;

  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={{
        lat: coordenadas.lat,
        lng: coordenadas.lng,
      }}
      onClick={closeInfoWindow}
      zoom={zoom}
      options={options}
    >
      {cargando ? (
        <Loading />
      ) : (
        <>
          <div className="pointer" onClick={onBoundsChange}>
            <BuscarZona />
          </div>

          {inmuebles
            ?.filter((inmueble) => {
              return inmueble.publicado === true;
            })
            .map((inmueble) => (
              <Fragment key={inmueble._id}>
                <Marker
                  animation={2}
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
              </Fragment>
            ))}
        </>
      )}
    </GoogleMap>
  );
};

export default memo(MapaUbicacion);
