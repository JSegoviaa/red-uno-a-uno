import { memo, useContext } from "react";
import { useRouter } from "next/router";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { MapContext } from "../../../context/map/MapContext";
import { useInmuebles } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";
import { AuthContext } from "../../../context/auth/AuthContext";
import { agregarHist } from "../../../helpers/fetch";
import Button from "../../ui/button/Button";
import styles from "./MapCards.module.css";
import { formatPrice } from "../../../helpers/formatPrice";

const containerStyle = {
  width: "100%",
  height: "87vh",
};

const MapaUbicacion = () => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { coordenadas, zoom } = useContext(MapContext);
  const { inmuebles, cargando } = useInmuebles();

  const handleProperty = async (id: string, slug: string) => {
    const data = { usuario: auth.uid, inmueble: id };

    router.push(`/propiedades/${slug}`);
    await agregarHist("historial", data);
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: coordenadas.lat, lng: coordenadas.lng }}
      zoom={zoom}
      options={{
        disableDefaultUI: true,
        streetViewControl: true,
        zoomControl: true,
        fullscreenControl: true,
      }}
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
              // <Marker
              //   onClick={() => handleProperty(inmueble._id, inmueble.slug)}
              //   key={inmueble._id}
              //   position={{ lat: inmueble.lat, lng: inmueble.lng }}
              //   icon={{
              //     url: "/images/icons/marcador.svg",
              //     scaledSize: new google.maps.Size(50, 50),
              //   }}
              // />

              <InfoWindow
                key={inmueble._id}
                position={{ lat: inmueble.lat, lng: inmueble.lng }}
              >
                <div className={styles.contenedorCard}>
                  <div className="row">
                    <div className="col text-center">
                      <div className={styles.containerimg}>
                        <img src={inmueble.imgs[0]} alt="..." width={"100%"} />
                      </div>
                      <div className={`${styles.title} mb-2`}>
                        {inmueble.titulo}
                      </div>
                      <div className="mb-2">
                        <span className={`${styles.ciudad}`}>
                          {inmueble.direccion}
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className={`${styles.operacion}`}>
                          {inmueble.categoria.nombre}
                        </span>
                      </div>
                      <div className={`${styles.descripcion} mb-2`}>
                        {inmueble.descripcion}
                      </div>
                      <div className={`${styles.precio} mb-3`}>
                        {formatPrice(inmueble.precio)}
                      </div>
                      <div className="mb-2">
                        <Button
                          titulo="Ver detalles"
                          onClick={() =>
                            handleProperty(inmueble._id, inmueble.slug)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            ))}
        </>
      )}
    </GoogleMap>
  );
};

export default memo(MapaUbicacion);
