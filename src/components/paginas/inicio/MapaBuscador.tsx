import { memo, useContext } from "react";
import { useRouter } from "next/router";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";
import { useInmuebles } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";

const containerStyle = {
  width: "100%",
  height: "87vh",
};

const MapaUbicacion = () => {
  const router = useRouter();
  const { coordenadas, zoom } = useContext(MapContext);
  const { inmuebles, cargando } = useInmuebles();
  const goToProperty = (id: string) => router.push("/propiedades/" + id);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: coordenadas.lat, lng: coordenadas.lng }}
      zoom={zoom}
    >
      {cargando ? (
        <Loading />
      ) : (
        <>
          {inmuebles?.map((inmueble) => (
            <Marker
              onClick={() => goToProperty(inmueble.slug)}
              key={inmueble._id}
              position={{ lat: inmueble.lat, lng: inmueble.lng }}
              icon="/images/icons/marcador-ubicacion.png"
            />
          ))}
        </>
      )}
    </GoogleMap>
  );
};

export default memo(MapaUbicacion);
