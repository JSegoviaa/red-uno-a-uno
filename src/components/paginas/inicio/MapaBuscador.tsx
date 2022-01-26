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
                        <img src="https://res.cloudinary.com/du6f7alxg/image/upload/v1642721019/red1a1/usuarios/61e99df40d3bd9163e4a4b31/inmuebles/61e9eeaa43da359580fc2b8d/zkkfpbxzrjdhtukfhq89.jpg" alt="..." width={"100%"} />
                      </div>
                      <div className={`${styles.title} mb-2`}>
                        Departamento en 12vo piso en el Shark Tower, Cancún
                      </div>
                      <div className="mb-2">
                        <span className={`${styles.ciudad}`}>
                          Cancún, Q.R., México
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className={`${styles.operacion}`}>
                          Venta
                        </span>
                      </div>
                      <div className={`${styles.descripcion} mb-2`}>
                        Hermoso departamento en la zona mas exclusiva de Cancún, con una increible vista al Mar, y la mejor plaza comercial del estado.
                      </div>
                      <div className={`${styles.precio} mb-3`}>
                        $14,500,000
                      </div>
                      <div className="mb-2">
                        <Button titulo="Ver detalles" />
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
