import { memo, useContext, useState } from "react";
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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination, Autoplay, 
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination,Autoplay]);



const containerStyle = {
  width: "100%",
  height: "87vh",
};

const MapaUbicacion = () => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { coordenadas, zoom } = useContext(MapContext);
  const { inmuebles, cargando } = useInmuebles();
  const [seleccionado, setSeleccionado] = useState("");

  const handleProperty = async (id: string, slug: string) => {
    const data = { usuario: auth.uid, inmueble: id };

    router.push(`/propiedades/${slug}`);
    await agregarHist("historial", data);
  };

  const propiedadSeleccionada = (id: string) => setSeleccionado(id);

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
              <Marker
                key={inmueble._id}
                position={{ lat: inmueble.lat, lng: inmueble.lng }}
                icon={{
                  url: "/images/icons/marcador.svg",
                  scaledSize: new google.maps.Size(50, 50),
                }}
                onClick={() => propiedadSeleccionada(inmueble._id)}
              >
                {seleccionado === inmueble._id ? (
                  <InfoWindow
                    position={{ lat: inmueble.lat, lng: inmueble.lng }}
                  >
                    <div className={styles.contenedorCard}>
                      <div className="row">
                        <div className="col text-center">
                          <div className={styles.containerimg}>
                            {/* <img
                              className={styles.imgCard}
                              src={inmueble.imgs[0]}
                              alt={inmueble.titulo}
                            /> */}


                            <Swiper effect={'cube'} grabCursor={true} loop autoplay={{delay:2800}} cubeEffect={{
                              "shadow": true,
                              "slideShadows": true,
                              "shadowOffset": 20,
                              "shadowScale": 0.94,
                            }} pagination={false} className="mySwiper">
                              {inmueble.imgs.map(
                                img=>(
                                  <SwiperSlide><img className={styles.imgCard} src={img} /></SwiperSlide>
                                )
                              )}
                            </Swiper>

                          </div>
                          <div className={`${styles.title} mb-2`}>
                            {inmueble.titulo}
                          </div>
                          {/* <div className="mb-2">
                            <span className={`${styles.ciudad}`}>
                              {inmueble.direccion}
                            </span>
                          </div> */}
                          <div className="mb-2">
                            <span className={`${styles.operacion}`}>
                              {inmueble.categoria.nombre}
                            </span>
                          </div>
                          <div className={`${styles.descripcion} mb-2`}>
                            {inmueble.descripcion
                              ? inmueble.descripcion
                              : "Sin descripción"}
                          </div>
                          <div className={`${styles.precio} mb-3`}>
                            {formatPrice(inmueble.precio)}
                          </div>
                          <div className="mb-2">
                            <button className={styles.btnDetalle}
                              onClick={() =>
                                handleProperty(inmueble._id, inmueble.slug)
                              }>Ver detalles</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
        </>
      )}
    </GoogleMap>
  );
};

export default memo(MapaUbicacion);
