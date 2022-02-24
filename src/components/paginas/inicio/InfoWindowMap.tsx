import { useContext } from "react";
import { useRouter } from "next/router";
import { InfoWindow } from "@react-google-maps/api";
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { formatPrice } from "../../../helpers/formatPrice";
import styles from "./MapCards.module.css";
import { AuthContext } from "../../../context/auth/AuthContext";
import { agregarHist } from "../../../helpers/fetch";
import { InmueblesUsuario } from "interfaces/CrearInmuebleInterface";

SwiperCore.use([EffectCube, Pagination, Autoplay]);

interface Props {
  inmueble: InmueblesUsuario;
}

const InfoWindowMap = ({ inmueble }: Props) => {
  const router = useRouter();
  const { auth } = useContext(AuthContext);

  const handleProperty = async (id: string, slug: string) => {
    const data = { usuario: auth.uid, inmueble: id };

    router.push(`/propiedades/${slug}`);
    await agregarHist("historial", data);
  };

  return (
    <InfoWindow position={{ lat: inmueble.lat, lng: inmueble.lng }}>
      <div className={styles.contenedorCard}>
        <div className="row">
          <div className="col text-center">
            <div className={styles.containerimg}>
              {inmueble.imgs.length === 1 ? (
                <Swiper>
                  <img className={styles.imgCard} src={inmueble.imgs[0]} />
                </Swiper>
              ) : (
                <Swiper
                  effect={"cube"}
                  grabCursor
                  loop
                  autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  className="mySwiper"
                >
                  {inmueble.imgs.map((img) => {
                    const sepracion = img.split(".");

                    const extension = sepracion[sepracion.length - 1];
                    const extensionesValidas = ["mp4"];
                    return (
                      <SwiperSlide key={img}>
                        {extensionesValidas.includes(extension) ? (
                          <video
                            src={img}
                            controls
                            controlsList="nodownload"
                            style={{
                              height: 200,
                              width: "100%",
                              overflow: "hidden",
                            }}
                          />
                        ) : (
                          <img className={styles.imgCard} src={img} />
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
            <div className={`${styles.title} mb-2`}>{inmueble.titulo}</div>
            <div className="mb-2">
              <span className={`${styles.operacion}`}>
                {inmueble.categoria.nombre}
              </span>
            </div>
            <div className={`${styles.descripcion} mb-2`}>
              {inmueble.descripcion ? inmueble.descripcion : "Sin descripción"}
            </div>
            <div className={`${styles.precio} mb-3`}>
              {formatPrice(inmueble.precio)}
            </div>
            <div className="mb-2">
              <button
                className={styles.btnDetalle}
                onClick={() => handleProperty(inmueble._id, inmueble.slug)}
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default InfoWindowMap;
