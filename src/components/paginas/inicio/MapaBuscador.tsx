import { Fragment, memo, useContext, useEffect, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";
import { useInmueblesCoordenadas } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";
import InfoWindowMap from "./InfoWindowMap";
import BuscarZona from "./BuscarZona";
import { Form } from "react-bootstrap";
import { useCategories, useTipoPropiedad } from "hooks/useCategories";

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
    categoria,
    tipoPropiedad,
    setCategoria,
    setTipoPropiedad,
  } = useContext(MapContext);
  const [seleccionado, setSeleccionado] = useState("");
  const { loading, propertyTypes } = useTipoPropiedad();
  const { categorias } = useCategories();

  const mapRef = useRef<GoogleMap>(null);
  const { inmuebles, cargando } = useInmueblesCoordenadas(
    southEast,
    northWest,
    southWest,
    northEast,
    coordenadas,
    categoria,
    tipoPropiedad
  );

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

    setSouthEast(southEast);
    setNorthWest(northWest);
    setSouthWest(southWest);
    setNorthEast(northEast);
  };

  const handleClick = () => {
    onBoundsChange();
    getCenter();
  };

  const getCenter = () => {
    const center = mapRef.current?.state.map?.getCenter()?.toJSON();
    setCoordenadas(center!);
  };

  useEffect(() => {
    onBoundsChange();
  }, [coordenadas, cargando]);

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
          <div className="pointer" onClick={handleClick}>
            <BuscarZona />
            <div style={{ position: "absolute", right: 102, top: 55 }}>
              {loading ? (
                <Loading />
              ) : (
                <Form.Select
                  value={tipoPropiedad}
                  onChange={(e) => setTipoPropiedad(e.target.value)}
                >
                  {propertyTypes.map((propertyType) => (
                    <option key={propertyType._id} value={propertyType._id}>
                      {propertyType.nombre}
                    </option>
                  ))}
                </Form.Select>
              )}
            </div>
            <div style={{ position: "absolute", right: 10, top: 55 }}>
              {cargando ? (
                <Loading />
              ) : (
                <Form.Select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  {categorias.map((categoria) => (
                    <option key={categoria._id} value={categoria._id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </Form.Select>
              )}
            </div>
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
